import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";
import project4 from "../../assets/project4.jpg";
import project5 from "../../assets/project5.jpg";
import project6 from "../../assets/project6.jpg";

// DUMMY DATA - replace titles, text and images with your real projects.
// image        -> cover image on the card in LatestProjects
// images       -> horizontal scroll images (about 5)
// description  -> each string is one paragraph
// presentation -> auto-moving slider images
const projects = [
    {
        id: 1,
        title: "Skyline Residency - 12 Storey Apartment Tower",
        image: project1,
        images: [project1, project2, project3, project4, project5],
        description: [
            "Skyline Residency is a 12 storey residential tower with 96 apartments, built on a 1.2 acre plot in the heart of the city. The project was delivered for a private developer within 22 months.",
            "The structure uses an RCC framed system with a raft foundation. Our team handled structural design, site supervision and quality control, including regular concrete cube testing at every slab level.",
            "The biggest challenge was a narrow access road, which we solved with a phased material delivery schedule and an on-site batching plan.",
        ],
        presentation: [project1, project2, project3, project4],
    },
    {
        id: 2,
        title: "Greenfield Industrial Warehouse",
        image: project2,
        images: [project2, project3, project4, project5, project6],
        description: [
            "A 60,000 sq ft pre-engineered steel warehouse for a logistics company, with loading docks, a mezzanine office and an internal truck circulation yard.",
            "The design focused on wide clear spans and heavy floor loading. The floor slab is a jointless industrial slab with a hardened surface finish.",
            "The project was completed in 9 months, 3 weeks ahead of the original schedule.",
        ],
        presentation: [project2, project3, project4, project5],
    },
    {
        id: 3,
        title: "Lakeview Bridge Rehabilitation",
        image: project3,
        images: [project3, project4, project5, project6, project1],
        description: [
            "Strengthening and rehabilitation of a 140 metre road bridge that had been in service for over 30 years, carried out without fully closing the road.",
            "Works included bearing replacement, deck resurfacing, expansion joint renewal and corrosion repair on the piers.",
            "Traffic was managed in two phases, keeping one lane open at all times and limiting night closures to short windows.",
        ],
        presentation: [project3, project4, project5, project6],
    },
    {
        id: 4,
        title: "Sunrise International School Campus",
        image: project4,
        images: [project4, project5, project6, project1, project2],
        description: [
            "A new school campus with three academic blocks, a library, a sports hall and a central courtyard, designed for 1,800 students.",
            "Natural light, cross ventilation and rainwater harvesting were built into the design to reduce running costs.",
            "The campus was built in two phases so the first block could open for admissions while the rest was still under construction.",
        ],
        presentation: [project4, project5, project6, project1],
    },
    {
        id: 5,
        title: "Riverside Water Treatment Plant",
        image: project5,
        images: [project5, project6, project1, project2, project3],
        description: [
            "A 10 MLD water treatment plant with intake works, clarifiers, filter beds and a clear water reservoir for a municipal authority.",
            "All water-retaining structures were built in watertight concrete and tested by filling before commissioning.",
            "The plant now supplies drinking water to around 80,000 residents.",
        ],
        presentation: [project5, project6, project1, project2],
    },
    {
        id: 6,
        title: "Heritage Plaza Commercial Complex",
        image: project6,
        images: [project6, project1, project2, project3, project4],
        description: [
            "A mixed-use commercial complex with retail floors, offices and two levels of basement parking, located on a busy city junction.",
            "Deep basement excavation next to existing buildings required shoring and continuous monitoring to protect the neighbouring structures.",
            "The project finished on budget and the retail floors were fully leased within six months of opening.",
        ],
        presentation: [project6, project1, project2, project3],
    },
];

export default projects;
