"use client";
import Footer from "./components/Footer";
import Herobanner from "./components/sections/Herobanner";
import ProjectsDisplay from "./components/sections/ProjectsDisplay";
import Stack from "./components/Stack";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <motion.div
            className="flex flex-col min-h-screen justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <Herobanner />
            <ProjectsDisplay />
            <motion.div
                className="mt-8 bg-rose-950 bg-opacity-80 py-8 flex flex-col gap-8 items-center text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-xl lg:text-3xl opacity-80 font-bold mb-[-24px]">
                    MY STACK
                </h2>
                <span className="font-bold text-sm max-w-96 opacity-50">
                    Technologies I have used and learned since my introduction
                    to the IT world in 2019
                </span>
                <Stack />
            </motion.div>
            <Footer />
        </motion.div>
    );
}
