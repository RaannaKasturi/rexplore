"use client";

import * as React from "react";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface Item {
    image: string;
    title: string;
    link: string;
}

const items: Item[] = [
    {
        image: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
        title: "Art Piece 1",
        link: "#",
    },
    {
        image: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
        title: "Art Piece 2",
        link: "#",
    },
    {
        image: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        title: "Art Piece 3",
        link: "#",
    },
    {
        image: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
        title: "Art Piece 4",
        link: "#",
    },
    {
        image: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
        title: "Art Piece 5",
        link: "#",
    },
    {
        image: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        title: "Art Piece 6",
        link: "#",
    },
    {
        image: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
        title: "Art Piece 7",
        link: "#",
    },
    {
        image: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
        title: "Art Piece 8",
        link: "#",
    },
    {
        image: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        title: "Art Piece 9",
        link: "#",
    },
];

export default function ScrollableList({ category }: { category: string }) {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">{category}</h2>

            <ScrollArea className="w-full h-96 rounded-md border">
                <div className="grid grid-cols-3 gap-4 p-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center cursor-pointer"
                            onClick={() => window.location.href = item.link}
                        >
                            <div className="overflow-hidden rounded-md mb-2">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    className="aspect-[3/4] w-full h-full object-cover"
                                    width={300}
                                    height={400}
                                />
                            </div>
                            <span className="text-center text-sm font-semibold text-foreground">
                                {item.title}
                            </span>
                        </div>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    );
}
