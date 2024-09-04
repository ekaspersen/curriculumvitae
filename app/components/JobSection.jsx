"use client";

const JobExperience = ({ job }) => (
    <div className="min-w-96 p-4">
        <h3 className="text-xl italic">{job.company}</h3>
        <h4 className="font-semibold">{job.title}</h4>
        <div className="flex flex-col text-xs font-bold">
            <p className="text-green-700">{formatDate(job.startDate)}</p>
            <p className="text-red-700">{formatDate(job.endDate)}</p>
        </div>
        {job.about && <p className="mt-2">{job.about}</p>}
    </div>
);

const formatDate = (date) => {
    if (date === "Nåværende") return date;
    const [month, year] = date.split(" ");
    return `${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`;
};
const JobSection = ({ jobExperienceList }) => (
    <section className="flex flex-col gap-8 py-8">
        <h2 className="text-4xl px-4 pt-4 font-semibold">Arbeidslivet</h2>
        <div className="flex px-4 flex-col gap-4 max-w-xl">
            <p className="italic font-bold mb-[-8px]">
                Helse, Tech, Salg, Service og Undervisning
            </p>
            <p>
                Jeg har bred erfaring innen kundeservice og salg, fra
                detaljhandel til undervisning. Gjennom årene har jeg utviklet en
                god forståelse for kundebehov og effektiv kommunikasjon.
            </p>
            <p className="italic font-bold mb-[-8px]">
                Webutvikling og UX-design
            </p>
            <p>
                Nylig har jeg fordypet meg i webutvikling, hvor jeg har designet
                og bygget flere nettsider fra bunnen av. Dette arbeidet har
                styrket mine tekniske ferdigheter og gitt meg erfaring med hele
                utviklingsprosessen.
            </p>
            <p className="mb-[-8px]">
                Min styrke ligger i å kombinere teknisk kunnskap med
                mellommenneskelige ferdigheter. Jeg trives med å skape løsninger
                som er både funksjonelle og brukervennlige, og ser frem til nye
                utfordringer hvor jeg kan bruke hele mitt kompetansespekter.
            </p>
        </div>
        <div className="flex gap-4 overflow-x-scroll py-4 bg-rose-950 bg-opacity-80">
            {jobExperienceList.map((job, index) => (
                <JobExperience key={index} job={job} />
            ))}
        </div>
    </section>
);

export default JobSection;
