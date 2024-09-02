"use client";
import { motion } from "framer-motion";

export default function Stack() {
    return (
        <motion.div className="flex gap-8 px-2 flex-wrap max-w-[602px] mx-auto items-center justify-center">
            <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex flex-col gap-1 items-center"
            >
                <div className="h-8 w-8">
                    <img
                        className="w-full h-full object-cover"
                        src="/stack/html-logo.svg"
                        alt="html"
                        title="HTML"
                    />
                </div>
                <span className="text-xs font-montserrat italic opacity-50">
                    HTML
                </span>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex flex-col gap-1 items-center"
            >
                <div className="h-8 w-8">
                    <img
                        className="w-full  h-full object-cover"
                        src="/stack/seoLogo.png"
                        alt="SEO"
                        title="SEO (Search Engine Optimization)"
                    />
                </div>
                <span className="text-xs font-montserrat italic opacity-50">
                    SEO
                </span>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex flex-col gap-1 items-center"
            >
                <div className="h-8 w-8">
                    <img
                        className="w-full h-full object-cover"
                        src="/stack/css-logo.svg"
                        alt="css"
                        title="CSS"
                    />
                </div>
                <span className="text-xs font-montserrat italic opacity-50">
                    CSS
                </span>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex flex-col gap-1 items-center"
            >
                <div className="h-8 w-8">
                    <img
                        className="w-full h-full object-cover"
                        src="/stack/tailwindCSS-logo.svg"
                        alt="TailwindCSS"
                        title="TailwindCSS"
                    />
                </div>
                <span className="text-xs font-montserrat italic opacity-50">
                    Tailwind
                </span>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex flex-col gap-1 items-center"
            >
                <div className="h-8 w-8">
                    <img
                        className="w-full  h-full object-cover"
                        src="/stack/sassLogo.png"
                        alt="sass"
                        title="SASS/SCSS"
                    />
                </div>
                <span className="text-xs font-montserrat italic opacity-50">
                    SASS
                </span>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex flex-col gap-1 items-center"
            >
                <div className="h-8 w-8">
                    <img
                        className="w-full  h-full object-contain"
                        src="/stack/framer-motion.svg"
                        alt="framermotion"
                        title="Framer Motion"
                    />
                </div>
                <span className="text-xs font-montserrat italic opacity-50">
                    Motion
                </span>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex flex-col gap-1 items-center"
            >
                <div className="h-8 w-8">
                    <img
                        className="w-full  h-full object-contain"
                        src="/stack/figma.png"
                        alt="figma"
                        title="Figma"
                    />
                </div>
                <span className="text-xs font-montserrat italic opacity-50">
                    Figma
                </span>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex flex-col gap-1 items-center"
            >
                <div className="h-8 w-8">
                    <img
                        className="w-full h-full object-cover"
                        src="/stack/javascript-logo.svg"
                        alt="javascript"
                        title="JavaScript"
                    />
                </div>
                <span className="text-xs font-montserrat italic opacity-50">
                    JS
                </span>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex flex-col gap-1 items-center"
            >
                <div className="h-8 w-8">
                    <img
                        className="w-full h-full object-cover"
                        src="/stack/typescriptlogo.png"
                        alt="typescript"
                        title="TypeScript"
                    />
                </div>
                <span className="text-xs font-montserrat italic opacity-50">
                    TS
                </span>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex flex-col gap-1 items-center"
            >
                <div className="h-8 w-8">
                    <img
                        className="w-full  h-full object-cover"
                        src="/stack/vite-logo.svg"
                        alt="vite"
                        title="ViteJs vanilla | Vite/ReactJS"
                    />
                </div>
                <span className="text-xs font-montserrat italic opacity-50">
                    Vite
                </span>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex flex-col gap-1 items-center"
            >
                <div className="h-8 w-8">
                    <img
                        className="w-full h-full object-contain"
                        src="/stack/react-logo.svg"
                        alt="reactjs"
                        title="ReactJS"
                    />
                </div>
                <span className="text-xs font-montserrat italic opacity-50">
                    ReactJS
                </span>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex flex-col gap-1 items-center"
            >
                <div className="h-8 w-8">
                    <img
                        className="w-full h-full object-cover"
                        src="/stack/nextLogowhite.svg"
                        alt="nextjs"
                        title="NextJS"
                    />
                </div>
                <span className="text-xs font-montserrat italic opacity-50">
                    NextJS
                </span>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex flex-col gap-1 items-center"
            >
                <div className="h-8 w-8">
                    <img
                        className="w-full  h-full object-contain"
                        src="/stack/nodejsLogo.png"
                        alt="nodejs"
                        title="NodeJS"
                    />
                </div>
                <span className="text-xs font-montserrat italic opacity-50">
                    NodeJs
                </span>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex flex-col gap-1 items-center"
            >
                <div className="h-8 w-8">
                    <img
                        className="w-full h-full object-cover"
                        src="/stack/supabase-logo.png"
                        alt="supabase"
                        title="Supabase"
                    />
                </div>
                <span className="text-xs font-montserrat italic opacity-50">
                    Supabase
                </span>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex flex-col gap-1 items-center"
            >
                <div className="h-8 w-8">
                    <img
                        className="w-full h-full object-cover"
                        src="/stack/firebase-logo.svg"
                        alt="firebase"
                        title="Firebase Auth/Storage"
                    />
                </div>
                <span className="text-xs font-montserrat italic opacity-50">
                    Firebase
                </span>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex flex-col gap-1 items-center"
            >
                <div className="h-8 w-8">
                    <img
                        className="w-full  h-full object-cover"
                        src="/stack/wordpressLogo.svg"
                        alt="wordpress"
                        title="Headless CMS | Basic Wordpress knowledge"
                    />
                </div>
                <span className="text-xs font-montserrat italic opacity-50">
                    Wordpress
                </span>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex flex-col gap-1 items-center"
            >
                <div className="h-8 w-8">
                    <img
                        className="w-full  h-full object-cover"
                        src="/stack/RestApi.png"
                        alt="sql"
                        title="SQL | CRUD | API fetch"
                    />
                </div>
                <span className="text-xs font-montserrat italic opacity-50">
                    Sql/Api
                </span>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex flex-col gap-1 items-center"
            >
                <div className="h-8 w-8">
                    <img
                        className="w-full  h-full object-cover"
                        src="/stack/databaseLogo.png"
                        alt="database"
                        title="DB modelling | phpMySQL | SQL"
                    />
                </div>
                <span className="text-xs font-montserrat italic opacity-50">
                    DB
                </span>
            </motion.div>

            <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex flex-col gap-1 items-center"
            >
                <div className="h-8 w-8">
                    <img
                        className="w-full  h-full object-cover"
                        src="/stack/npm.png"
                        alt="npm"
                        title="npm"
                    />
                </div>
                <span className="text-xs font-montserrat italic opacity-50">
                    NPM
                </span>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex flex-col gap-1 items-center"
            >
                <div className="h-8 w-8">
                    <img
                        className="w-full  h-full object-cover"
                        src="/stack/gitLogo.png"
                        alt="git"
                        title="Git | branch/pr-management"
                    />
                </div>
                <span className="text-xs font-montserrat italic opacity-50">
                    GIT
                </span>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex flex-col gap-1 items-center"
            >
                <div className="h-8 w-8">
                    <img
                        className="w-full bg-white rounded-full h-full object-cover"
                        src="/stack/githubLogo.webp"
                        alt="github"
                        title="Github"
                    />
                </div>
                <span className="text-xs font-montserrat italic opacity-50">
                    Github
                </span>
            </motion.div>
        </motion.div>
    );
}
