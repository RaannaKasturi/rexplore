"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { DropdownMenuContent, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon, ChevronUpIcon, MenuIcon, MoonStarIcon, SunIcon } from "lucide-react";
import Image from "next/image";

export default function Header() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDark(savedTheme === 'dark');
        } else {
            setIsDark(false);
        }
    }, []);

    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);
    return (
        <div className="select-none flex flex-row justify-between items-center bg-secondary py-3 md:px-5 px-3 mb-3" >
            <a href="http://">< Image src="/rexplore-logo.png" alt="ReXplore Logo" width={150} height={100} /></a>
            <ul className="md:flex flex-row justify-between items-center space-x-5 hidden">
                <li className="text-lg hover:underline hover:text-secondary-foreground/75">Home</li>
                <li className="text-lg hover:underline hover:text-secondary-foreground/75">About</li>
                <li className="text-lg hover:underline hover:text-secondary-foreground/75">Recources</li>
                <li className="text-lg hover:underline hover:text-secondary-foreground/75">How it works?</li>
                <li className="text-lg hover:underline hover:text-secondary-foreground/75">Contact</li>
            </ul>
            <div className="md:flex hidden flex-row items-center space-x-5">
                {isDark ? (
                    <div
                        className="bg-transparent p-2 rounded-lg border border-secondary-foreground"
                        onClick={() => setIsDark(false)}
                        aria-label="Switch to Light Mode"
                    >
                        <SunIcon className="h-6 w-6" />
                    </div>
                ) : (
                    <div
                        className="bg-transparent p-2 rounded-lg border border-secondary-foreground"
                        onClick={() => setIsDark(true)}
                        aria-label="Switch to Dark Mode"
                    >
                        <MoonStarIcon className="h-6 w-6" />
                    </div>
                )}
                < DropdownMenu>
                    <DropdownMenuTrigger asChild >
                        <div className="flex flex-row items-center space-x-2 border-2 p-1.5 bg-transparent/25 rounded-xl">
                            <Image src="https://github.com/shadcn.png" alt="Avatar" width={35} height={35} className="rounded-full" />
                            <ChevronDownIcon />
                        </div>
                    </DropdownMenuTrigger>
                    < DropdownMenuContent align="end" className=" z-10 text-secondary-foreground">
                        < DropdownMenuItem className="px-2" disabled>John Doe <br /><span className="text-sm text-secondary-foreground/50">johndoe@example.com</span></DropdownMenuItem>
                        <DropdownMenuSeparator />
                        < DropdownMenuItem className="px-2 hover:bg-secondary-foreground hover:text-secondary">Account</DropdownMenuItem>
                        < DropdownMenuItem className="px-2 hover:bg-secondary-foreground hover:text-secondary">Request Paper</DropdownMenuItem>
                        < DropdownMenuItem className="px-2 hover:bg-secondary-foreground hover:text-secondary">Report Problem</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        < DropdownMenuItem className="px-2 hover:bg-secondary-foreground text-red-600">LogOut</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="md:hidden flex">
                <Sheet>
                    <SheetTrigger asChild>
                        < Button variant={"outline"} size={"icon"} className="border border-secondary-foreground bg-transparent"><MenuIcon /></Button>
                    </SheetTrigger>
                    <SheetContent side={"right"} className="w-fit mx-3 flex flex-col justify-between">
                        <div className="flex flex-col">
                            <SheetHeader className="flex flex-col items-start space-y-3 pb-3">
                                <SheetTitle><a href="http://">< Image src="/rexplore-logo.png" alt="ReXplore Logo" width={150} height={100} /></a></SheetTitle>
                                <SheetDescription><span className="self-start">Science Simplified, Knowledge Amplified</span></SheetDescription>
                            </SheetHeader>
                            <hr />
                            <ul className="flex flex-col space-y-2 pt-3">
                                <li className="text-lg hover:underline hover:text-secondary-foreground/75">Home</li>
                                <li className="text-lg hover:underline hover:text-secondary-foreground/75">About</li>
                                <li className="text-lg hover:underline hover:text-secondary-foreground/75">Recources</li>
                                <li className="text-lg hover:underline hover:text-secondary-foreground/75">How it works?</li>
                                <li className="text-lg hover:underline hover:text-secondary-foreground/75">Contact</li>
                            </ul>
                        </div>
                        < SheetFooter >
                            <div className="flex flex-row items-center justify-around space-x-5">
                                < DropdownMenu>
                                    <DropdownMenuTrigger asChild >
                                        <div className="flex flex-row items-center space-x-2 border-2 p-1.5 bg-transparent/15 rounded-xl">
                                            <Image src="https://github.com/shadcn.png" alt="Avatar" width={35} height={35} className="rounded-full" />
                                            <ChevronUpIcon />
                                        </div>
                                    </DropdownMenuTrigger>
                                    < DropdownMenuContent align="start" className="text-secondary-foreground bg-secondary/75">
                                        < DropdownMenuItem className="px-2" disabled>John Doe <br /><span className="text-sm text-secondary-foreground/75">johndoe@example.com</span></DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        < DropdownMenuItem className="px-2 hover:bg-secondary-foreground hover:text-secondary">Account</DropdownMenuItem>
                                        < DropdownMenuItem className="px-2 hover:bg-secondary-foreground hover:text-secondary">Request Paper</DropdownMenuItem>
                                        < DropdownMenuItem className="px-2 hover:bg-secondary-foreground hover:text-secondary">Report Problem</DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        < DropdownMenuItem className="px-2 hover:bg-secondary-foreground text-red-600 hover:text-red-400">LogOut</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                {isDark ? (
                                    <div
                                        className="bg-transparent p-2 rounded-lg border border-secondary-foreground"
                                        onClick={() => setIsDark(false)}
                                        aria-label="Switch to Light Mode"
                                    >
                                        <SunIcon className="h-6 w-6" />
                                    </div>
                                ) : (
                                    <div
                                        className="bg-transparent p-2 rounded-lg border border-secondary-foreground"
                                        onClick={() => setIsDark(true)}
                                        aria-label="Switch to Dark Mode"
                                    >
                                        <MoonStarIcon className="h-6 w-6" />
                                    </div>
                                )}
                            </div>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </div >
    );
}
