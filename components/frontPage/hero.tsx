"use client";

import { cn } from "@/lib/utils";
import { Boxes } from "../ui/background-boxes";
import Image from "next/image";
import { Button } from "../ui/button";
import { scrolltoElementID } from "@/lib/functions/scrolltoelement";

export default function FrontPageHero() {
    return (
        <div className="h-dvh relative -mt-3 w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes />
            < Image src="/rexplore-logo.png" width={300} height={100} alt="ReXplore Logo" className=" relative z-20" />
            <h3 className={cn("md:text-4xl mt-5 text-2xl text-white text-center relative z-20")}>
                Science <strong>Simplified</strong>, <br className="md:hidden flex" /> Knowledge <strong>Amplified</strong>...
            </h3>
            <p className="text-center mt-5 text-neutral-300 relative z-20">
                A platform for discovering the scientific knowledge.
            </p>
            <div className=" flex flex-row justify-center items-center relative z-20 space-x-3 mt-5">
                <Button variant={'default'} className="mt-4 relative z-20" onClick={() => scrolltoElementID('latest-carousel')}>Read Latest Papers</Button>
                <Button variant={'outline'} className="mt-4 relative z-20">Summarize Paper</Button>
            </div>
        </div>
    )
}
