"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const formatDate = (date) => {
    if (date === "Nåværende") return date;
    const [month, year] = date.split(" ");
    return `${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`;
};

const DateRange = ({ start, end }) => (
    <div className="flex flex-col text-xs font-bold">
        <p className="text-green-700">{formatDate(start)}</p>
        <p className="text-red-700">{formatDate(end)}</p>
    </div>
);

const JobExperience = ({ job }) => (
    <div className="min-w-96 p-4">
        <h3 className="text-xl italic">{job.company}</h3>
        <h4 className="font-semibold">{job.title}</h4>
        <DateRange start={job.startDate} end={job.endDate} />
        {job.about && <p className="mt-2">{job.about}</p>}
    </div>
);

const Education = ({ education }) => (
    <div className="min-w-96 p-4">
        <h3 className="text-xl italic">{education.institution}</h3>
        <h4 className="font-semibold">{education.degree}</h4>
        <DateRange start={education.startDate} end={education.endDate} />
        {education.about && <p className="mt-2">{education.about}</p>}
    </div>
);

const Portfolio = () => {
    const personalInfo = {
        name: "Eskil Kaspersen Hagen",
        birthDate: "2. Januar 2001",
        phone: "+47 918 51 011",
        email: "eskilkasp@gmail.com",
        address: "Sigurd syrs gate 3, Oslo",
    };

    const educationList = [
        {
            degree: "Påbygg VG3",
            institution: "Bodø VGS",
            startDate: "august 2020",
            endDate: "juni 2021",
            about: "Fullførte allmenn studiekompetanse med IT-1 som programfag. IT-faget inkluderte grunnleggende programmering og webutvikling som tillot meg å utdype mine ferdigheter som utvikler og førte til en lett 6er i etterkant av IKT-servicefag.",
        },
        {
            degree: "IKT - Drift og Utvikling VG2",
            institution: "Bodin VGS",
            startDate: "august 2019",
            endDate: "juni 2020",
            about: "Studier innen informasjons- og kommunikasjonsteknologi, med fokus på drift og utvikling av IT-systemer.",
        },
        {
            degree: "Barne- og ungdomsarbeider VG2",
            institution: "Bodø VGS",
            startDate: "august 2018",
            endDate: "januar 2019",
            about: "Startet studier innen barne- og ungdomsarbeid før omvalg til IKT.",
        },
        {
            degree: "Helse og Oppvekstfag VG1",
            institution: "Bodø VGS",
            startDate: "august 2017",
            endDate: "juni 2018",
            about: "Grunnleggende studier innen helse- og oppvekstfag, med fokus på omsorg og pedagogikk.",
        },
    ];

    const jobExperienceList = [
        {
            title: "Salg og servicemedarbeider med utvidet ansvar (MOD)",
            company: "Sats Vinderen",
            startDate: "januar 2024",
            endDate: "Nåværende",
            about: "Ansvar for kundeservice, salg av medlemskap, rengjøring, og veiledning i treningsstudio. Utviklet sterke kommunikasjons- og salgsferdigheter.",
        },
        {
            title: "Vikar lærer",
            company: "Sagene skole",
            startDate: "november 2022",
            endDate: "april 2024",
            about: "Underviste som tilkallingslærer i ulike fag på grunnskolenivå. Forbedret evner innen klasseledelse og tilpasset opplæring.",
        },
        {
            title: "Butikkansatt/kasserer",
            company: "Kiwi",
            startDate: "mai 2022",
            endDate: "mars 2024",
            about: "10% deltidsstilling pluss tilkalling som tilsvarte mellom 40 - 110% fra uke til uke. Ansvar for kundeservice, varepåfylling og kassaarbeid. Utviklet effektivitet og kundeserviceferdigheter.",
        },
        {
            title: "Salgskonsulent",
            company: "Novus Systems",
            startDate: "januar 2022",
            endDate: "april 2022",
            about: "Jobbet som alarm-dørselger. Utviklet salgsteknikker og lærte om sikkerhetssystemer for hjemmet.",
        },
        {
            title: "Sommervikar",
            company: "Bopro Skjerstad",
            startDate: "juni 2021",
            endDate: "august 2021",
            about: "Arbeidet i vaskeri. Lærte om industrielle vaskeprosesser og kvalitetskontroll.",
        },
        {
            title: "Butikkmedarbeider",
            company: "Dressmann XL, City Nord",
            startDate: "februar 2020",
            endDate: "februar 2021",
            about: "Kundeservice, salg og vareeksponering i klesbutikk. Utviklet kunnskap om herremote og salgsteknikker.",
        },
        {
            title: "Sommervikar",
            company: "Bopro Skjerstad",
            startDate: "juni 2020",
            endDate: "august 2020",
            about: "Ytterligere erfaring i vaskeri, med fokus på effektivitet og kvalitet i arbeidet.",
        },
        {
            title: "Julehjelp",
            company: "Tiger of Copenhagen, City Nord",
            startDate: "november 2019",
            endDate: "januar 2020",
            about: "Sesongarbeid i detaljhandel. Håndterte høyt tempo i julesesesongen og lærte om butikkdrift.",
        },
        {
            title: "Resepsjonist og instruktør",
            company: "NFA (Newton Flight Academy)",
            startDate: "juni 2019",
            endDate: "september 2019",
            about: "Jobbet som resepsjonist og instruktør. Ga opplæring i flysimulator og lærte om kundeservice i utdanningssektoren.",
        },
        {
            title: "Sommervikar",
            company: "Bopro Skjerstad",
            startDate: "juni 2019",
            endDate: "september 2019",
            about: "Tredje periode som sommervikar i vaskeri. Tok på meg mer ansvar og forbedret effektiviteten i arbeidet.",
        },
        {
            title: "Praksisplass",
            company: "AAO Bodø VGS",
            startDate: "september 2018",
            endDate: "desember 2018",
            about: "Praksis ved Avdeling for Alternativ Opplæring. Ga støtte til elever med spesielle behov og lærte om tilpasset opplæring.",
        },
        {
            title: "Praksisplass",
            company: "Stadiontunet sykehjem",
            startDate: "januar 2018",
            endDate: "juni 2018",
            about: "Praksis i eldreomsorgen. Lærte om grunnleggende pleie og omsorg for eldre pasienter.",
        },
        {
            title: "Deltidsansatt",
            company: "Pizzabakeren",
            startDate: "august 2015",
            endDate: "mars 2017",
            about: "Første formelle arbeidserfaring. Lærte om matlaging, kundeservice og teamarbeid i en travel restaurant.",
        },
    ];
    const NoroffEducation = () => {
        const [isExpanded, setIsExpanded] = useState(false);

        const toggleExpand = () => {
            setIsExpanded(!isExpanded);
        };

        return (
            <div className="flex flex-col gap-8">
                <div>
                    <h2 className="text-3xl text-red-700 font-bold">
                        Frontend Development
                    </h2>
                    <h3 className="text-xl">Noroff, Oslo Campus - Fagskole</h3>
                    <p className="text-lg">August 2021 - Juni 2023</p>
                </div>
                <p className="max-w-xl">
                    Etter å ha fullført videregående skole med studiekompetanse,
                    valgte jeg å fordype meg i webutvikling og UX-design ved
                    Noroff. Dette toårige studiet har gitt meg en solid
                    forståelse for moderne webteknologi og designprinsipper, og
                    lagt et godt fundament for min karriere som
                    frontend-utvikler.
                </p>
                <button
                    className="w-fit px-8 py-2 font-semibold bg-gradient-to-r from-red-700 to-red-950 hover:to-red-600 rounded-full hover:scale-105 transition-all"
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
                                <h4 className="mb-2 text-2xl font-bold text-red-700">
                                    Nøkkelkompetanser:
                                </h4>
                                <ul className="max-w-xl pl-5 list-disc font-semibold flex flex-col gap-1">
                                    <li>
                                        Fullstendig web-utviklingsprosess fra
                                        konsept til implementering og
                                        publisering
                                    </li>
                                    <li>UI/UX-design med Figma</li>
                                    <li>Avansert HTML, CSS og JavaScript</li>
                                    <li>
                                        Moderne rammeverk: ReactJS og
                                        TailwindCSS
                                    </li>
                                    <li>API-integrasjon og CMS-håndtering</li>
                                    <li>Versjonskontroll med Git og GitHub</li>
                                    <li>Agile prosjektmetodologi</li>
                                </ul>
                            </div>
                            <div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <h5 className="font-bold mb-2 text-xl">
                                            Første år:
                                        </h5>
                                        <ul className="list-inside text-red-700 font-bold">
                                            <li>UI-Design (Figma og UI/UX)</li>
                                            <li>
                                                Web og kommunikasjonsteknologi
                                            </li>
                                            <li>HTML og CSS</li>
                                            <li>Prosjektmetodikk</li>
                                            <li>Programmeringsgrunnlag</li>
                                            <li>JavaScript 1</li>
                                            <li>Interaksjonsdesign</li>
                                            <li>CMS og API-integrering</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="font-bold mb-2 text-xl">
                                            Andre år:
                                        </h5>
                                        <ul className="list-inside text-red-700 font-bold">
                                            <li>CSS Rammeverk (TailwindCSS)</li>
                                            <li>JavaScript 2</li>
                                            <li>Arbeidsflyt</li>
                                            <li>Bransjekunnskap</li>
                                            <li>Utviklingsplattformer</li>
                                            <li>
                                                JavaScript rammeverk (ReactJS)
                                            </li>
                                            <li>Porteføljeutvikling</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <p className="italic max-w-xl">
                                <span className=" text-red-700">{'{ " '}</span>
                                Som Noroff-graduate har jeg opparbeidet en
                                grundig forståelse for hele
                                web-utviklingsprosessen, fra kundekommunikasjon
                                og brief-forståelse til UI-design, utvikling og
                                utrulling. Jeg er nå komfortabel med både de
                                kreative og tekniske aspektene av prosessen, og
                                kan gjennomføre prosjekter fra A til Å.
                                <span className=" text-red-700">{' " }'}</span>
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    };

    return (
        <div className="max-w-7xl mx-auto flex flex-col gap-16 py-16">
            <section className="flex flex-col gap-16 px-4">
                <h2 className="text-4xl sm:text-5xl font-semibold">
                    Høyere utdanning
                </h2>
                <div className="flex flex-col gap-16">
                    <NoroffEducation />
                </div>
            </section>
            <section className="flex flex-col gap-4 bg-slate-900 text-white py-8">
                <h2 className="text-4xl px-4 pt-4 font-semibold">
                    Videregående skole
                </h2>
                <div className="flex px-4 flex-col gap-4 max-w-xl">
                    Under veiledning av en erfaren lærer, lærte jeg HTML, CSS,
                    grunnleggende JavaScript, PHP og MySQL. Jeg utviklet
                    praktiske prosjekter som et biblioteksystem med admin-panel
                    og brukergrensesnitt. Dette ga meg solid erfaring innen
                    fullstackutvikling. Denne allsidige bakgrunnen har gitt meg
                    en unik tilnærming til teknologi, hvor jeg kombinerer
                    teknisk kunnskap med forståelse for brukernes behov. Det har
                    lagt grunnlaget for min karriere innen webutvikling og
                    UX-design.
                    <p>
                        Min reise gjennom videregående skole ga meg et unikt
                        perspektiv på teknologi og menneskelig interaksjon.
                        Grunnlaget i helse og oppvekst ga meg innsikt i
                        menneskers behov i alle livsfaser, noe som senere viste
                        seg verdifullt innen kundeservice og UX-design. Vi
                        utforsket også teknologiens rolle i eldreomsorgen, som
                        ga meg tidlig forståelse for teknologiens potensiale i
                        hverdagslivet.
                    </p>
                    <p>
                        Vendepunktet kom med IKT - Drift og Utvikling ved Bodin
                        VGS. Under veiledning av en tidligere militær offiser
                        med bred erfaring innen IKT, fikk jeg en grundig
                        innføring i webutvikling og nettverksteknologi. Vi
                        dykket ned i webarkitektur, nettverksprotokoller og
                        serverdrift. Jeg fikk hands-on erfaring med HTML, CSS og
                        grunnleggende JavaScript, og utviklet enkle prosjekter
                        som ga meg solid forståelse for programmeringskonsepter.
                    </p>
                    <p>
                        Backend-utvikling med PHP og MySQL var også sentralt. Vi
                        lærte å sette opp og administrere databaser og
                        LAN-nettverk, noe som ga meg praktisk erfaring med
                        fullstackutvikling. Et høydepunkt var utviklingen av et
                        biblioteksystem med admin-panel og brukergrensesnitt,
                        hvor jeg integrerte frontend med PHP/MySQL backend.
                    </p>
                    <p>
                        Denne allsidige bakgrunnen har gitt meg en unik
                        tilnærming til teknologi, hvor jeg kombinerer teknisk
                        kunnskap med forståelse for brukernes behov. Det har
                        lagt grunnlaget for min karriere innen webutvikling og
                        UX-design, og gitt meg verktøyene til å skape løsninger
                        som er både teknisk solide og brukervennlige.
                    </p>
                </div>
                <div className="grid gap-4 grid-flow-row sm:grid-cols-2 py-4 bg-slate-700">
                    {educationList.map((edu, index) => (
                        <Education key={index} education={edu} />
                    ))}
                </div>
            </section>
            <section className="flex flex-col gap-8 bg-slate-900  py-8">
                <h2 className="text-4xl px-4 pt-4 font-semibold">
                    Arbeidslivet
                </h2>
                <div className="flex px-4 flex-col gap-4 max-w-xl">
                    <p className="italic font-bold mb-[-8px]">
                        Helse, Tech , Salg, Service og Undervisning
                    </p>
                    <p>
                        Jeg har bred erfaring innen kundeservice og salg, fra
                        detaljhandel til undervisning. Gjennom årene har jeg
                        utviklet en god forståelse for kundebehov og effektiv
                        kommunikasjon.
                    </p>
                    <p className="italic font-bold mb-[-8px]">
                        Webutvikling og UX-design
                    </p>
                    <p>
                        Nylig har jeg fordypet meg i webutvikling, hvor jeg har
                        designet og bygget flere nettsider fra bunnen av. Dette
                        arbeidet har styrket mine tekniske ferdigheter og gitt
                        meg erfaring med hele utviklingsprosessen.
                    </p>
                    <p className="mb-[-8px]">
                        Min styrke ligger i å kombinere teknisk kunnskap med
                        mellommenneskelige ferdigheter. Jeg trives med å skape
                        løsninger som er både funksjonelle og brukervennlige, og
                        ser frem til nye utfordringer hvor jeg kan bruke hele
                        mitt kompetansespekter.
                    </p>
                </div>

                <div className="flex gap-4 overflow-x-scroll py-4 bg-slate-700">
                    {jobExperienceList.map((job, index) => (
                        <JobExperience key={index} job={job} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
