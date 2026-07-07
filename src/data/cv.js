const sharedSkills = [
    "Python (FastAPI, Pandas)", "Go (Fiber)", "Node.js (Express, NestJS)",
    "PostgreSQL", "Cassandra", "MongoDB", "Redis",
    "Docker", "AWS", "Google Cloud", "Nginx",
    "React", "Astro", "TailwindCSS", "Git", "Linux"
];

const sharedContact = {
    email: "rh@example.com",
    github: "",
    linkedin: ""
};

export const cvData = {
    en: {
        about: "A Software Engineer highly interested in Machine Learning and Agentic Automation. Capable of building scalable ETL solutions, dynamic APIs, and integrating intelligence into everyday processes. Previously led key integrations at Bluerock Telcom.",
        skills: sharedSkills,
        experience: [
            {
                role: "Middle Full-Stack Developer",
                company: "Bluerock Telcom",
                period: "Oct 2024 - Present",
                description: "Developed and maintained Python/Go backends. Automated customer service using ChatGPT/Claude integrations. Built robust ETL processes mapping over 1M daily records."
            },
            {
                role: "Junior Back-End Developer",
                company: "Bluerock Telcom",
                period: "Aug 2023 - Sep 2024",
                description: "Managed internal API. Optimized Cassandra/PostgreSQL databases."
            },
            {
                role: "Freelance Full-Stack Developer",
                company: "Wotbi",
                period: "2021 - 2023",
                description: "Built e-commerce solutions, dashboards, and automated deployment pipelines."
            }
        ],
        contact: sharedContact
    },
    es: {
        about: "Ingeniero de Software altamente interesado en Machine Learning y Automatización Agéntica. Capaz de construir soluciones ETL escalables, APIs dinámicas e integrar inteligencia en procesos cotidianos. Anteriormente lideré integraciones clave en Bluerock Telcom.",
        skills: sharedSkills,
        experience: [
            {
                role: "Desarrollador Full-Stack Semi-Senior",
                company: "Bluerock Telcom",
                period: "Oct 2024 - Presente",
                description: "Desarrollé y mantuve backends en Python/Go. Automaticé el servicio al cliente usando integraciones con ChatGPT/Claude. Construí procesos ETL robustos mapeando más de 1M de registros diarios."
            },
            {
                role: "Desarrollador Back-End Junior",
                company: "Bluerock Telcom",
                period: "Ago 2023 - Sep 2024",
                description: "Administré la API interna. Optimicé bases de datos Cassandra/PostgreSQL."
            },
            {
                role: "Desarrollador Full-Stack Freelance",
                company: "Wotbi",
                period: "2021 - 2023",
                description: "Construí soluciones de comercio electrónico, paneles de control y pipelines de despliegue automatizados."
            }
        ],
        contact: sharedContact
    }
};
