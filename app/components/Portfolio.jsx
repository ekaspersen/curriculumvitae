"use client";
import React from "react";
import JobSection from "./JobSection";
import EducationSection from "./EducationSection";
import NoroffEducation from "./NoroffEducation";

const Portfolio = () => {
    // Dummy data arrays for job and education experiences
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

    return (
        <div className="max-w-7xl mx-auto flex flex-col gap-16 py-16">
            <NoroffEducation />
            <EducationSection educationList={educationList} />
            <JobSection jobExperienceList={jobExperienceList} />
        </div>
    );
};

export default Portfolio;
