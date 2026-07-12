export interface LinkItem {
    name: string;
    url: string;
}

export interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    links?: LinkItem[];
    description: string[];
}

export interface CourseItem {
    name: string;
    date: string;
    url: string;
}

export interface SkillCategory {
    label: string;
    items: string[];
}

export interface ContactInfo {
    github: string;
    linkedin: string;
}

export interface CVProfile {
    about: string;
    skills: SkillCategory[];
    courses: CourseItem[];
    experience: ExperienceItem[];
    contact: ContactInfo;
}



const sharedContact: ContactInfo = {
    github: "",
    linkedin: import.meta.env.PUBLIC_LINKEDIN || "https://linkedin.com/in/placeholder"
};

const sharedCourses: CourseItem[] = [
    { name: "Google Cloud Computing Foundations", date: "2024", url: "https://www.credly.com/badges/0400bc26-96f1-490d-b216-677b1b9672a5/public_url" },
    { name: "AWS Academy Cloud Architecting", date: "2024", url: "https://www.credly.com/badges/6ba145fa-fb53-487f-b353-2ed20db92277" },
    { name: "AWS Academy Cloud Foundations", date: "2024", url: "https://www.credly.com/badges/6c8cbcca-f735-45f3-87d5-7bf8d1a11197" },
    { name: "AWS Academy Cloud Developing", date: "2024", url: "https://www.credly.com/badges/82ea66f6-6267-4f86-9ff9-76ed31aa011f/public_url" },
    { name: "CCNA: Introduction to Networks", date: "2023", url: "https://www.credly.com/badges/3cfa6c50-c305-4d94-83eb-bffca3ad9baf" },
    { name: "CCNA: Switching, Routing, and Wireless Essentials", date: "2023", url: "https://www.credly.com/badges/6380a380-ad42-43c0-97ac-ff3855b21583" }
];

export const cvData: Record<'en' | 'es', CVProfile> = {
    en: {
        about: "A Computer Engineering graduate and Backend Developer highly interested in Machine Learning and Agentic Automation. Capable of building scalable ETL solutions, autonomous workflows, and intelligent assistants. Passionate about integrating AI into backend architectures.",
        skills: [
            {
                label: "Languages",
                items: ["Java 21", "Python 3.11+", "Node.js 24"]
            },
            {
                label: "Backend",
                items: ["Spring Boot 3", "Django 5.2", "FastAPI"]
            },
            {
                label: "Frontend",
                items: ["Next.js 16", "Astro 5"]
            },
            {
                label: "DevOps & Tools",
                items: ["MariaDB 11", "Docker", "Git", "Linux"]
            }
        ],
        courses: sharedCourses,
        experience: [
            {
                role: "Backend Developer",
                company: "Wotbi",
                period: "June 2025 - June 2026",
                links: [
                    { name: "Wotbi", url: "https://wotbi.com" },
                    { name: "Bluerock", url: "http://72.251.13.129:4321/" }
                ],
                description: [
                    "Orchestration of bots using MCP servers to enable autonomous (agentic) workflows.",
                    "Design of ETL processes with FastAPI, Pandas and PyArrow for efficient migration to Parquet.",
                    "Automation and scraping with Playwright for account management.",
                    "Development of intelligent support assistants and messaging systems using Java 21 and the SMPP protocol."
                ]
            },
            {
                role: "Developer Intern",
                company: "Zacsoft",
                period: "May 2024 - August 2024",
                description: [
                    "Implementation of assistants with LangChain and LLMs for operational guidance of the XControl system.",
                    "Creation of an industrial chatbot for real-time report generation.",
                    "Data capture automation via API connected to industrial scales (IoT).",
                    "Optimization of relational databases for high availability and low latency."
                ]
            }
        ],
        contact: sharedContact
    },
    es: {
        about: "Ingeniero en Computación y Desarrollador Backend altamente interesado en Machine Learning y Automatización Agéntica. Capaz de construir soluciones ETL escalables, flujos de trabajo autónomos y asistentes inteligentes. Apasionado por integrar IA en arquitecturas backend.",
        skills: [
            {
                label: "Lenguajes",
                items: ["Java 21", "Python 3.11+", "Node.js 24"]
            },
            {
                label: "Backend",
                items: ["Spring Boot 3", "Django 5.2", "FastAPI"]
            },
            {
                label: "Frontend",
                items: ["Next.js 16", "Astro 5"]
            },
            {
                label: "DevOps y Herramientas",
                items: ["MariaDB 11", "Docker", "Git", "Linux"]
            }
        ],
        courses: sharedCourses,
        experience: [
            {
                role: "Backend Developer",
                company: "Wotbi",
                period: "Junio 2025 - Junio 2026",
                links: [
                    { name: "Wotbi", url: "https://wotbi.com" },
                    { name: "Bluerock", url: "http://72.251.13.129:4321/" }
                ],
                description: [
                    "Orchestration de bots usando servidores MCP para habilitar flujos de trabajo autónomos (agénticos).",
                    "Diseño de procesos ETL con FastAPI, Pandas y PyArrow para migración eficiente a Parquet.",
                    "Automatización y scraping con Playwright.",
                    "Desarrollo de asistentes de soporte inteligentes y sistemas de mensajería usando Java 21 y protocolo SMPP."
                ]
            },
            {
                role: "Developer Intern",
                company: "Zacsoft",
                period: "Mayo 2024 - Agosto 2024",
                description: [
                    "Implementación de asistentes con LangChain y LLMs para guía operativa del sistema XControl.",
                    "Creación de un chatbot industrial para reportes en tiempo real.",
                    "Automatización de captura de datos vía API conectada a básculas industriales (IoT).",
                    "Modificación y optimización de bases de datos relacionales para alta disponibilidad."
                ]
            }
        ],
        contact: sharedContact
    }
};
