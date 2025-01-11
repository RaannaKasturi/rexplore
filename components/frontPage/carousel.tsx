"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { Skeleton } from "../ui/skeleton";

interface PostData {
    title: string;
    image: string;
    category: string;
    link: string;
}

async function fetchImage(content: string) {
    const parser = new DOMParser();
    const page = parser.parseFromString(content, "text/html");
    const imgElement = page.getElementById("paper_image") as HTMLImageElement | null;
    console.log(imgElement);
    const imgSrc = imgElement?.src;
    return imgSrc;
}

export default function FrontPageCarousel() {
    const [posts, setPosts] = React.useState<PostData[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        fetch(
            "https://raannakasturi-rexplore-cors-proxy.hf.space/fetch-feed?url=https://rexplore-backend.blogspot.com/feeds/posts/default/-/ZZZZZZZZZ?alt=json"
        )
            .then((response) => response.json())
            .then(async (data) => {
                if (data.status === "ok") {
                    const entries = JSON.parse(data.data).feed.entry;
                    if (Array.isArray(entries)) {
                        const fetchedPosts = await Promise.all(entries.map(async (entry: any) => ({
                            title: entry.title?.$t || "No Title",
                            image: (await fetchImage(entry.content.$t)) || "https://i.ibb.co/TBJqggw/Image-Not-Found.jpg",
                            category: entry.category?.[0]?.term || "Uncategorized",
                            link:
                                entry.link?.find((lnk: any) => lnk.rel === "alternate")
                                    ?.href || "#",
                        })));

                        const uniqueCategoryPosts = Array.from(
                            new Map(fetchedPosts.map((post) => [post.category, post])).values()
                        );

                        setPosts(uniqueCategoryPosts);
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
    }, []);

    if (loading) {
        return (
            <section id="latest-carousel">
                <Skeleton className="mx-4 md:mx-6 h-[350px] rounded-md cursor-wait" />
            </section>
        );
    }

    if (error) {
        return (
            <section id="latest-carousel">
                <Carousel
                    className="mx-4 md:mx-6"
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                >
                    <CarouselContent>
                        <CarouselItem>
                            <Card
                                style={{
                                    backgroundImage: `url("https://i.ibb.co/TBJqggw/Image-Not-Found.jpg")`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    height: "350px", // Set the height here
                                }}
                            >
                                <div className="bg-gradient-to-t from-black to-transparent w-full h-full rounded-lg flex flex-col justify-end">
                                    <CardHeader>
                                        <CardTitle className="bg-secondary w-fit p-2 rounded"></CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <br />
                                        <br />
                                        <br />
                                        <br className="hidden md:flex" />
                                        <br className="hidden md:flex" />
                                        <br className="hidden md:flex" />
                                        <br className="hidden md:flex" />
                                    </CardContent>
                                    <CardFooter className="text-white">{error}</CardFooter>
                                </div>
                            </Card>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-7 md:left-10 bg-primary text-white" />
                    <CarouselNext className="absolute right-7 md:right-10 bg-primary text-white" />
                </Carousel>
            </section>
        );
    }

    return (
        <section id="latest-carousel">
            <Carousel
                className="mx-4 md:mx-6"
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
            >
                <CarouselContent>
                    {posts.map((post, index) => (
                        <CarouselItem key={index}>
                            <Card
                                style={{
                                    backgroundImage: `url(${post.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    height: "350px",
                                }}
                            >
                                <div className="bg-gradient-to-t from-black to-transparent w-full h-full rounded-lg flex flex-col">
                                    <CardHeader className="pt-4">
                                        <CardTitle className="bg-secondary w-fit p-2 rounded md:text-xl text-lg">
                                            {post.category}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardFooter className="text-white md:text-xl text-lg mt-auto">
                                        {post.title}
                                    </CardFooter>
                                </div>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-7 md:left-10 bg-primary text-white" />
                <CarouselNext className="absolute right-7 md:right-10 bg-primary text-white" />
            </Carousel>
        </section>
    );
}
