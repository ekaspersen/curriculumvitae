"use client";
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectsDisplay() {
    return (
        <motion.div
            className="flex flex-col gap-8 px-4 max-w-screen-xl mx-auto w-full"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
        >
            <div className="flex flex-col gap-6">
                <h2 className="text-4xl font-bold">Some of my work</h2>
                <span className="font-bold text-xs opacity-50 mt-[-16px]">
                    Click on project image to view live site
                </span>
            </div>

            <div className="grid grid-flow-row grid-rows-3 sm:grid-flow-col sm:grid-cols-3 sm:grid-rows-1 gap-4">
                <a href="https://www.maksimalcoaching.no/" target="_blank">
                    <motion.div
                        whileHover="hover"
                        initial="initial"
                        className="flex flex-col items-center gap-2"
                        variants={{
                            initial: {
                                scale: 1,
                                boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
                            },
                            hover: {
                                scale: 1.05,
                                boxShadow: "0px -25px 50px rgba(0, 0, 0, 0.3)",
                            },
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            src="/websites/maksimalCoachingHero.jpg"
                            alt="Maksimal Coaching"
                            width={1444}
                            height={907}
                            className="rounded aspect-video"
                        />
                        <motion.div
                            className="flex flex-col items-center gap-2"
                            variants={{
                                initial: { opacity: 0, y: -10 },
                                hover: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.h3
                                className="font-semibold opacity-80"
                                variants={{
                                    initial: { opacity: 0, y: -10 },
                                    hover: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                Maksimal Coaching
                            </motion.h3>
                            <span className="font-bold text-xs opacity-50 mt-[-8px]">
                                Certified PT online coaching
                            </span>
                        </motion.div>
                    </motion.div>
                </a>
                <a
                    href="https://tetrad-marketing-react.vercel.app/"
                    target="_blank"
                >
                    <motion.div
                        whileHover="hover"
                        initial="initial"
                        className="flex flex-col items-center gap-2"
                        variants={{
                            initial: {
                                scale: 1,
                                boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
                            },
                            hover: {
                                scale: 1.05,
                                boxShadow: "0px -25px 50px rgba(0, 0, 0, 0.3)",
                            },
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            className="rounded aspect-video"
                            src="/websites/TetradMarketingHero.jpg"
                            alt="Tetrad Marketing"
                            width={1444}
                            height={907}
                        />
                        <motion.div
                            className="flex flex-col items-center gap-2"
                            variants={{
                                initial: { opacity: 0, y: -10 },
                                hover: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="font-semibold opacity-80">
                                Tetrad Marketing
                            </h3>
                            <span className="font-bold text-xs opacity-50 mt-[-8px] text-center">
                                Discontinued student marketing agency <br />
                                Kept a live demo for you
                            </span>
                        </motion.div>
                    </motion.div>
                </a>
                <a href="https://www.catchthefox.no/" target="_blank">
                    <motion.div
                        whileHover="hover"
                        initial="initial"
                        className="flex flex-col items-center gap-2"
                        variants={{
                            initial: {
                                scale: 1,
                                boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
                            },
                            hover: {
                                scale: 1.05,
                                boxShadow: "0px -25px 50px rgba(0, 0, 0, 0.3)",
                            },
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            className="rounded aspect-video"
                            src="/websites/CatchTheFoxHero.jpg"
                            alt="Catch The Fox"
                            width={1444}
                            height={907}
                        />
                        <motion.div
                            className="flex flex-col items-center gap-2"
                            variants={{
                                initial: { opacity: 0, y: -10 },
                                hover: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="font-semibold opacity-80">
                                Catch The Fox
                            </h3>
                            <span className="font-bold text-xs opacity-50 mt-[-8px]">
                                ff Norwegian rock band
                            </span>
                        </motion.div>
                    </motion.div>
                </a>
            </div>
        </motion.div>
    );
}
