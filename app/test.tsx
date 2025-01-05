"use client";

import { useEffect, useState } from 'react';

interface PostData {
    title: string;
    image: string;
    category: string;
    link: string;
}

const url = "https://rexplore-backend.blogspot.com/feeds/posts/default?alt=json";

const Test = () => {
    const [posts, setPosts] = useState<PostData[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        function getPosts() {
            const response = fetch(url);
            console.log(response.then((res) => res.status));
        }

        getPosts();
    }, []);

    return (
        <div>
            <h1>Blog Posts</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div>
                {posts.map((post, index) => (
                    <div key={index} className="post">
                        <h2>{post.title}</h2>
                        <img src={post.image} alt={post.title} />
                        <p>{post.category}</p>
                        <a href={post.link} target="_blank" rel="noopener noreferrer">Read More</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Test;
