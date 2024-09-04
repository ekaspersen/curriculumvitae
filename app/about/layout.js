"use client";
import Footer from "../components/Footer";
import Herobanner from "../components/sections/Herobanner";
import { motion } from "framer-motion";

export default function Layout({ children }) {
    return (
        <motion.div
            className="flex flex-col min-h-screen justify-between overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <Herobanner />
            <motion.div
                className="flex-grow"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                {children}
            </motion.div>
            <Footer />
        </motion.div>
    );
}
