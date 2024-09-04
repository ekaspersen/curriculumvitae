"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NoroffEducation = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="flex flex-col gap-8 px-4">
            <div>
                <h2 className="text-4xl text-rose-700 font-bold mb-2">
                    Frontend Development
                </h2>
                <h3 className="text-xl italic">
                    Noroff, Oslo Campus - Fagskole
                </h3>
                <p className="text-lg italic">August 2021 - Juni 2023</p>
            </div>
            <p className="max-w-xl">
                Etter å ha fullført videregående skole med studiekompetanse,
                valgte jeg å fordype meg i webutvikling og UX-design ved Noroff.
                Dette toårige studiet har gitt meg en solid forståelse for
                moderne webteknologi og designprinsipper, og lagt et godt
                fundament for min karriere som frontend-utvikler.
            </p>
            <button
                className="hover:scale-110 focus:scale-110 bg-rose-700 px-6 py-2 rounded-md text-white font-bold bg-opacity-80  hover:opacity-100 w-fit"
                onClick={toggleExpand}
            >
                {isExpanded ? "Les mindre" : "Les mer om studiet"}
            </button>
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        id="JegSkalEndresAvDeg"
                        className="flex flex-col gap-8"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div>
                            <h4 className="mb-3 text-3xl font-bold text-rose-700 italic">
                                Nøkkelkompetanser
                            </h4>
                            <ul className="max-w-xl pl-5 list-disc font-semibold flex flex-col gap-1">
                                <li>
                                    Fullstendig web-utviklingsprosess fra
                                    konsept til implementering og publisering
                                </li>
                                <li>UI/UX-design med Figma</li>
                                <li>Avansert HTML, CSS og JavaScript</li>
                                <li>
                                    Moderne rammeverk: ReactJS og TailwindCSS
                                </li>
                                <li>API-integrasjon og CMS-håndtering</li>
                                <li>Versjonskontroll med Git og GitHub</li>
                                <li>Agile prosjektmetodologi</li>
                            </ul>
                        </div>
                        <hr />
                        <div>
                            <h4 className="mb-3 text-3xl font-bold italic">
                                Moduler
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <h5 className="font-bold text-rose-700 mb-2 text-xl italic">
                                        Første år
                                    </h5>
                                    <ul className="list-inside font-bold">
                                        <li>UI-Design (Figma og UI/UX)</li>
                                        <li>Web og kommunikasjonsteknologi</li>
                                        <li>HTML og CSS</li>
                                        <li>Prosjektmetodikk</li>
                                        <li>Programmeringsgrunnlag</li>
                                        <li>JavaScript 1</li>
                                        <li>Interaksjonsdesign</li>
                                        <li>CMS og API-integrering</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-bold text-rose-700 mb-2 text-xl italic">
                                        Andre år
                                    </h5>
                                    <ul className="list-inside font-bold">
                                        <li>CSS Rammeverk (TailwindCSS)</li>
                                        <li>JavaScript 2</li>
                                        <li>Arbeidsflyt</li>
                                        <li>Bransjekunnskap</li>
                                        <li>Utviklingsplattformer</li>
                                        <li>JavaScript rammeverk (ReactJS)</li>
                                        <li>Porteføljeutvikling</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <p className="italic max-w-xl">
                            <span className=" text-rose-700">{'{ " '}</span>
                            Som Noroff-graduate har jeg opparbeidet en grundig
                            forståelse for hele web-utviklingsprosessen, fra
                            kundekommunikasjon og brief-forståelse til
                            UI-design, utvikling og utrulling. Jeg er nå
                            komfortabel med både de kreative og tekniske
                            aspektene av prosessen, og kan gjennomføre
                            prosjekter fra A til Å.
                            <span className=" text-rose-700">{' " }'}</span>
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NoroffEducation;
