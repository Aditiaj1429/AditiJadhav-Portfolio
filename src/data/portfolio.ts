export const profile = {
  name: "Aditi Anand Jadhav",
  role: "Associate Software Development Engineer",
  title: "Full Stack Developer — CI/CD — Cloud Engineer (AWS/GCP)",
  location: "Gurgaon, India",
  email: "aditiaj100@gmail.com",
  linkedin: "https://www.linkedin.com/in/aditi-jadhav-6025b6158/",
  //photoPath: "/images/IMG_0508.jpeg",
  photoPath: import.meta.env.BASE_URL + "images/IMG_0508.jpeg",

  initials: "AAJ",
  heroSummary:
    "Associate Software Development Engineer at Publicis Sapient with 1.7 years of experience in full‑stack development. Skilled in CI/CD, containerization, cloud platforms (AWS, GCP), Kubernetes, and AI/ML projects. Open to work and actively seeking new opportunities in cloud engineering (DevOps) and AI, while continuously learning and exploring emerging technologies.",
  summary:
    "Associate Software Development Engineer at Publicis Sapient with 1.7 years of experience in full‑stack development using ReactJS, Spring Boot, Jenkins, and Docker. Skilled in CI/CD pipelines, containerization, and scalable web applications. Hands‑on experience with cloud platforms including GCP and AWS, Kubernetes orchestration, and production‑ready deployments. Contributed to backend API development, frontend engineering, and cloud deployment, while also leading AI‑driven projects in malware detection, computer vision, and machine learning. Currently open to work and ready for new opportunities — eager to apply expertise in full‑stack engineering, cloud technologies, DevOps, and AI to impactful projects.",
  resumePath: import.meta.env.BASE_URL + "resume/AditiJadhav-Resume.pdf",
  resumeFileName: "AditiJadhav-Resume.pdf",
};

export const skillGroups = [
  {
    category: "Frontend",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Lighthouse Audits"],
  },
  {
    category: "Backend",
    skills: [
      "Spring Boot",
      "REST APIs",
      "FastAPI",
      "GraphQL",
      "Java",
      "Python",
      "SQL",
      "Microservices Architecture",
      "JWT Authentication",
      "RBAC",
      "PostgreSQL",
      "Database Schema Design",
      "ER Modeling",
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      "Docker",
      "Jenkins",
      "GCP",
      "Google Cloud Run",
      "Artifact Registry",
      "AWS",
      "CI/CD",
      "GitHub Actions",
      "SonarQube",
      "Prometheus",
      "Grafana",
      "Microservices Deployment",
    ],
  },
  {
    category: "Testing",
    skills: [
      "Unit Testing",
      "BDD",
      "TDD",
      "Cucumber",
      "Mockito",
      "JUnit",
      "JMeter",
      "Playwright",
    ],
  },
  {
    category: "AI / ML",
    skills: [
      "Agentic AI",
      "Prompt Engineering",
      "LLMs",
      "OpenAI APIs",
      "CLIP Models",
      "Computer Vision",
      "Image Processing",
    ],
  },
];

export type ExperienceItem = {
  company: string;
  role: string;
  project: string;
  period: string;
  location?: string;
  highlights: string[];
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Publicis Sapient",
    role: "Associate Software Development Engineer 1",
    project: "Photo Intelligence System — AI-Powered Image Analysis Platform",
    period: "Present",
    location: "On-Site",
    highlights: [
      "Built a multimodal photo intelligence system to filter valid photos, remove near-duplicates, detect blur and quality issues, and organize images based on people, events, and contextual information.",
      "Designed an end-to-end workflow where users upload ZIP files containing photo collections through a web interface for automated processing and analysis.",
      "Developed a preprocessing pipeline to extract images, validate files, convert image data for downstream processing, and upload assets to Google Cloud Storage (GCS).",
      "Created and integrated a custom MCP (Model Context Protocol) tool into the workflow to enable AI driven image analysis, classification, clustering, and report generation.",
      "Built backend services using FastAPI and deployed containerized applications on Google Cloud Run fo scalable and serverless execution.",
      "Implemented image quality assessment, duplicate detection, face grouping, and event-based clustering to improve photo organization and searchability.",
      "Orchestrated workflow execution through UI nodes, HTTP APIs, cloud services, and AI processing components to support batch image analysis.",
      "Generated structured JSON and PDF reports summarizing image quality metrics, duplicate findings, grouping results, and overall photo insights.",
      "Containerized services using Docker and leveraged CI/CD pipelines for automated deployment and release management.",
      
    ],
    tags: [
      "FastAPI",
      "React",
      "TypeScript",
      "OpenCV",
      "CLIP",
      "Docker",
      "Google Cloud Run",
      "AI Agents",
      "Computer Vision",
      "Python",
      "MCP",
      " PDF Report Generation",
      "System Design",
      "FastAPI",
      "Google Cloud Storage (GCS)",
      "Google Cloud Platform (GCP),",
      "CI/CD"

    ],
  },
  {
    company: "Publicis Sapient",
    role: "Associate Software Development Engineer 1",
    project: "Fraud Detection Service (Natwest Bank)",
    period: "Oct 2025 - Feb 2026",
    highlights: [
      "Designed and developed a full-stack Fraud Detection Service for reporting suspicious transactions and analyst triage with automated risk scoring.",
      "Implemented JWT-based authentication and RBAC (User / Analyst) using Spring Security.",
      "Built RESTful APIs for case creation, status updates, audit logging, and risk scoring with Swagger documentation.",
      "Designed relational database schema for cases, notes, users, and audit logs using PostgreSQL with proper migration management.",
      "Developed rule-based Risk Scoring Engine categorizing cases into Low, Medium, and High risk buckets.",
      "Containerized services using Docker and deployed on Kubernetes (AWS EKS) with Application Load Balancer integration.",
      "Configured CI/CD pipeline using GitHub and AWS services for automated build, push, and deployment.",
      " Integrated logging and monitoring to track authentication events, case updates, and system errors for production readiness.",
    ],
    tags: [
      "Spring Boot",
      "JWT",
      "Spring Security",
      "RESTful",
      "APIs", 
      "Swagger", 
      "PostgreSQL",
      "Database Design & Migrations",
      "Logging & Monitoring",
      "RBAC",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "AWS EKS",
      "GitHub Actions",
    ],
  },
  {
    company: "Publicis Sapient",
    role: "Associate Software Development Engineer 1",
    project: "Economic Crime Prevention Platform (Lloyds Bank)",
    period: "Apr 2025 – Sep 2025",
    highlights: [
      "Contributed to the development and quality assurance of a cloud-based Economic Crime Prevention platform using Playwright, TypeScript, and BDD practices.",
      "Implemented and maintained Jenkins CI/CD pipelines to automate build, test, and deployment workflows, improving release efficiency and consistency.",
      "Worked with Google Cloud Platform (GCP) services, including Cloud Run, to support deployment and execution of containerized applications",
      "Created and managed Google Cloud Storage (GCS) buckets for application artifacts, logs, and data storage requirements.",
      "Supported application deployment activities, environment configuration, and troubleshooting of pipeline and deployment issues across environments.",
      "Collaborated with developers and platform teams to ensure smooth releases, system reliability, and operational stability.",
    ],
    tags: ["Jenkins", "CI/CD", "GCP", "Cloud Run", "Google Cloud Storage (GCS)", "Playwright", "TypeScript", "Cucumber", "BDD", "Deployment Automation", "DevOps Practices"],
  },
  {
    company: "Publicis Sapient",
    role: "Associate Software Development Engineer 1",
    project: "Banking Analytics Platform (Lloyds Bank)",
    period: "Dec 2024 – Feb 2025",
    highlights: [
      "Developed and maintained ETL/ELT data pipelines for banking analytics, ensuring reliable data ingestion and transformation across multiple data sources.",
      "Utilized Prometheus and Grafana to monitor pipeline health, job execution metrics, and system performance, enabling proactive issue detection and resolution.",
      "Investigated and resolved data processing failures, workflow bottlenecks, and data quality issues to maintain seamless data availability.",
      "Performed operational support activities, including rerunning failed workflows and validating data loads to ensure adherence to business SLAs.",
      "Worked with Looker dashboards and reports to validate data accuracy, analyze business metrics, and support stakeholder reporting requirements.",
      "Collaborated with cross-functional teams to optimize data workflows and improve overall platform reliability and performance.",
      "Supported deployment and execution of data processing workloads on Google Cloud Platform (GCP), leveraging cloud-native services for scalable analytics solutions.",
      "Applied data warehousing principles and best practices for data modeling, integration, and reporting across analytical systems."
    ],
    tags: [
      "Microservices",
      "Spring Boot",
      "React",
      "ETL",
      "GCP",
      "Figma",
      "System Design",
      "Java",
      "Prometheus",
      "Grafana"
    ],
  },
];

export type ProjectItem = {
  title: string;
  year: string;
  highlights: string[];
  tags: string[];
};

export const projects: ProjectItem[] = [
  {
    title: "Android Botnet Detection Using AI",
    year: "2023",
    highlights: [
      "Built ML-based Android malware detection system achieving 92% accuracy.",
      "Reduced false positives by 30% using network traffic analysis techniques.",
      "Applied machine learning algorithms for botnet behavior detection.",
    ],
    tags: ["Machine Learning", "Cybersecurity", "Network Traffic Analysis"],
  },
  {
    title: "Token System for Bank Operations",
    year: "2021",
    highlights: [
      "Developed queue-based token management system to streamline banking operations.",
      "Improved customer service efficiency by 25%.",
    ],
    tags: ["Queue Management", "Banking Operations", "System Design"],
  },
];

export const education = [
  {
    degree: "BTech — Information Technology",
    institution: "MKSSS's Cummins College of Engineering for Women, Pune",
    period: "2020 – 2024",
    featured: true,
  },
  {
    degree: "HSC",
    institution: "Indira Gandhi Junior College",
    period: "2019 – 2020",
    featured: false,
  },
  {
    degree: "SSC",
    institution: "Kusumtai High School, Nanded",
    period: "2017 – 2018",
    featured: false,
  },
];

export const certifications = [
  { name: "Google Cloud Digital Leader", issuer: "Google Cloud", date: "July 2025" },
  { name: "AWS Partner Accreditation (Technical)", issuer: "AWS", date: "Feb 2025" },
  { name: "Cloud Computing Program", issuer: "IIT Bhubaneswar", date: "May 2022" },
  { name: "Web Development Program", issuer: "IIT Bombay", date: "Feb 2022" },
  { name: "Certificate of Completion — Figma Workshop", issuer: "Figma", date: "2025" },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
