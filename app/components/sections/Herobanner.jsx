"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Herobanner() {
    return (
        <motion.div
            className="flex flex-col gap-20 px-4 py-32 overflow-hidden max-w-screen-xl mx-auto w-full"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex flex-col gap-4 sm:gap-8">
                <h1 className="italic text-4xl sm:text-6xl font-black text-rose-600">
                    Eskil K. Hagen
                </h1>

                <span className="text-lg sm:text-xl lg:text-2xl opacity-80 max-w-[600px] lg:max-w-4xl italic font-montserrat">
                    Web developer and user interface designer. I specialize in
                    creating good looking, accessible, and user-friendly web
                    applications.
                </span>
                <div className="flex gap-4 lg:text-lg font-semibold flex-wrap">
                    <Link
                        className="hover:scale-110 focus:scale-110 bg-rose-900 px-4 py-1 rounded-md text-white opacity-80  hover:opacity-100"
                        href="/"
                    >
                        Surf my projects
                    </Link>
                    <Link
                        className="hover:scale-110 focus:scale-110 bg-sky-900 px-4 py-1 rounded-md text-white opacity-80  hover:opacity-100"
                        href="/about"
                    >
                        Get to know me
                    </Link>
                    <Link
                        className="hover:scale-110 focus:scale-110 bg-sky-900 px-4 py-1 rounded-md text-white opacity-80  hover:opacity-100"
                        href="/contact"
                    >
                        Contact me
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
