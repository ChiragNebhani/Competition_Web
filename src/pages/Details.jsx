"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";

export function HeroHighlightDemo() {
    return (
        (<HeroHighlight>
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold  dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto  flex flex-col gap-10">
                <span>
                    Date: {""}
                    <Highlight className="text-black dark:text-white">
                        11,12 January 2025
                    </Highlight>
                </span>
                <span>
                    Time: {""}
                    <Highlight className="text-black dark:text-white">
                        09:00 AM
                    </Highlight>
                </span>
                <span>
                    Venue: {""}
                    <Highlight className="text-black dark:text-white">
                    MLV Textile & Engineering College Bhilwara
                    </Highlight>
                </span>
            </motion.h1>
        </HeroHighlight>)
    );
}
