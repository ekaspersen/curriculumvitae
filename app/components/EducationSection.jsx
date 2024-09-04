"use client";
const EducationExperience = ({ education }) => (
    <div className="min-w-96 p-4">
        <h3 className="text-xl italic">{education.institution}</h3>
        <h4 className="font-semibold">{education.degree}</h4>
        <div className="flex flex-col text-xs font-bold">
            <p className="text-green-700">{formatDate(education.startDate)}</p>
            <p className="text-red-700">{formatDate(education.endDate)}</p>
        </div>
        {education.about && <p className="mt-2">{education.about}</p>}
    </div>
);

const formatDate = (date) => {
    if (date === "Nåværende") return date;
    const [month, year] = date.split(" ");
    return `${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`;
};

const EducationSection = ({ educationList }) => (
    <section className="flex flex-col gap-8 py-8">
        <h2 className="text-4xl px-4 pt-4 font-semibold">High school</h2>
        <div className="flex px-4 flex-col gap-4 max-w-xl">
            <p className="italic font-bold mb-[-8px]">
                IT, Design, helsetjenester og Pedagogikk
            </p>
            <p>
                Min utdanning spenner over flere felt. Jeg har studert hvordan
                teknologi kan brukes for å forbedre læring og utvikling, samt
                hvordan designprinsipper kan anvendes for å lage brukervennlige
                og estetisk tiltalende løsninger.
            </p>
            <p className="italic font-bold mb-[-8px]">
                Akademisk og Praktisk Erfaring
            </p>
            <p>
                Jeg har oppnådd en balanse mellom akademisk kunnskap og praktisk
                erfaring, som gjør meg i stand til å forstå og løse komplekse
                problemer. Utdanningen min har gitt meg et sterkt fundament i
                både teori og praksis, noe som gjør meg rustet for en rekke
                utfordringer.
            </p>
        </div>
        <div className="flex gap-4 overflow-x-scroll py-4 bg-rose-950 bg-opacity-80">
            {educationList.map((education, index) => (
                <EducationExperience key={index} education={education} />
            ))}
        </div>
    </section>
);

export default EducationSection;
