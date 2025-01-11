'use client';

import * as React from "react";
import NextImage from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface PostData {
    title: string;
    image: string;
    category: string;
    link: string;
}

async function fetchImage(content: string): Promise<string> {
    const FALLBACK_IMAGE = "https://i.ibb.co/TBJqggw/Image-Not-Found.jpg";
    const TIMEOUT_MS = 10000; // 10 seconds

    try {
        const imgRegex = /<img[^>]+id="paper_image"[^>]+src="([^"]+)"/;
        const match = content.match(imgRegex);
        if (!match) return FALLBACK_IMAGE;

        const imageUrl = match[1];

        // Create a timeout promise
        const timeoutPromise = new Promise<string>((_, reject) => {
            setTimeout(() => reject(new Error('Image fetch timeout')), TIMEOUT_MS);
        });

        // Create an image load promise
        const imageLoadPromise = new Promise<string>((resolve, reject) => {
            const img = new window.Image();
            img.onload = () => resolve(imageUrl);
            img.onerror = () => reject(new Error('Image load failed'));
            img.src = imageUrl;
        });

        // Race between image load and timeout
        return await Promise.race([imageLoadPromise, timeoutPromise])
            .catch(() => FALLBACK_IMAGE);
    } catch (error) {
        console.error('Error fetching image:', error);
        return FALLBACK_IMAGE;
    }
}

function PostCard({ post }: { post: PostData }) {
    return (
        <div className="flex flex-row space-x-3 w-full shrink-0 cursor-pointer hover:bg-secondary p-1.5 rounded-lg hover:scale-105 transition-transform duration-300"
            onClick={() => console.log("Post clicked")}>
            <div className="flex-shrink-0 relative aspect-square h-28 w-28 bg-gray-200 rounded-lg overflow-hidden">
                <NextImage
                    src={post.image}
                    alt={post.title}
                    fill={true}
                    className="object-cover hover:scale-110 transition-transform duration-300"
                />
            </div>
            <div className="flex flex-col justify-between flex-grow min-w-0">
                <h4 className="text-sm font-medium leading-tight line-clamp-3">{post.title}</h4>
                <p className="text-xs text-gray-500">{post.category}</p>
                <Button variant="outline" size="sm" className="w-fit mt-2 hover:bg-secondary-foreground hover:text-secondary" onClick={(e) => {
                    e.stopPropagation();
                    window.open(post.link, '_blank');
                }}>
                    Read More
                </Button>
            </div>
        </div>
    );
}

function PostList({ category }: { category: string }) {
    const [posts, setPosts] = React.useState<PostData[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        fetch(
            `https://raannakasturi-rexplore-cors-proxy.hf.space/fetch-feed?url=https://rexplore-backend.blogspot.com/feeds/posts/default/-/${category}?alt=json`
        )
            .then((response) => response.json())
            .then(async (data) => {
                if (data.status === "ok") {
                    const entries = JSON.parse(data.data).feed.entry;
                    if (Array.isArray(entries)) {
                        const fetchedPosts = await Promise.all(entries.slice(0, 6).map(async (entry: any) => ({
                            title: entry.title?.$t || "No Title",
                            image: await fetchImage(entry.content.$t),
                            category: entry.category?.[0]?.term || "Uncategorized",
                            link:
                                entry.link?.find((lnk: any) => lnk.rel === "alternate")
                                    ?.href || "#",
                        })));

                        setPosts(fetchedPosts);
                    } else {
                        setError("No valid entries found.");
                    }
                } else {
                    setError("Failed to fetch posts.");
                }
            })
            .catch((err) => {
                setError("Error fetching data.");
                console.error(err);
            })
            .finally(() => setLoading(false));
    }, [category]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="grid grid-cols-[80vw_80vw] md:grid-cols-[42.5vw_42.5vw_42.5vw] gap-4 p-4">
            {posts.map((post, index) => (
                <PostCard key={index} post={post} />
            ))}
        </div>
    );
}

export default function ScrollableList({ category }: { category: string }) {
    return (
        <section id={category}>
            <div className="flex flex-row justify-between mx-5 items-center">
                <h1 className="underline-offset-2 text-2xl underline decoration-wavy mb-3 uppercase">{`${category.toUpperCase()}\u00A0\u00A0\u00A0\u00A0`}</h1>
                <Button variant={'outline'}>View All</Button>
            </div>
            <ScrollArea className="w-full">
                <PostList category={category} />
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </section>
    );
}

