"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Herobanner() {
    return (
        <motion.div
            className="flex relative flex-col gap-20 px-4 py-32 overflow-hidden max-w-screen-xl mx-auto w-full"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex flex-col gap-4 sm:gap-8">
                <h1 className="italic text-4xl sm:text-6xl font-black text-rose-600">
                    Eskil K. Hagen
                </h1>

                <span className="text-lg sm:text-xl lg:text-2xl opacity-80 max-w-[600px] lg:max-w-4xl italic drop-shadow-2xl shadow-black">
                    Web developer and user interface designer. I specialize in
                    creating good looking, accessible, and user-friendly web
                    applications.
                </span>
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex gap-4 lg:text-lg font-semibold flex-wrap"
                >
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
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-0 right-0 top-78 min-[375px]:top-64 min-[524px]:top-20 lg:top-16 z-[-1] opacity-60 w-1/2"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <Image
                    src="/eskilKontor.png"
                    alt="Hero banner"
                    width={1444}
                    height={907}
                    className="object-cover"
                />
            </motion.div>
        </motion.div>
    );
}
