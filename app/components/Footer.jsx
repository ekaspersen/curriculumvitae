import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <motion.footer
            className="py-8"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center space-y-4 text-center md:flex-row md:justify-between md:text-left">
                <div>
                    <h3 className="text-xl font-semibold">
                        Eskil Kaspersen Hagen
                    </h3>
                    <p>Fullstack Developer & UX Designer</p>
                </div>
                <div className="flex space-x-6 text-2xl">
                    <a
                        href="https://github.com/ekaspersen"
                        aria-label="GitHub"
                        className="hover:text-gray-400 transition"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/eskil-k-hagen-43b7011a0/"
                        aria-label="LinkedIn"
                        className="hover:text-gray-400 transition"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://www.instagram.com/eskilkaspersen/"
                        aria-label="Instagram"
                        className="hover:text-gray-400 transition"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="mailto:eskilkasp@gmail.com"
                        aria-label="Email"
                        className="hover:text-gray-400 transition"
                    >
                        <FaEnvelope />
                    </a>
                </div>
            </div>
            <div className="mt-8 text-sm text-gray-400 text-center">
                © {new Date().getFullYear()} Eskil Kaspersen. All rights
                reserved.
            </div>
        </motion.footer>
    );
}
