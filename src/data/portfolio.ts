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
  summary:
    "Associate Software Development Engineer at Publicis Sapient with 1.7 years of experience in full-stack development using ReactJS, Spring Boot, Jenkins, and Docker. Experienced in CI/CD pipelines, containerization, and scalable web applications. Contributed to backend API development, frontend engineering, and cloud deployment. Led an AI-driven malware detection project, strengthening expertise in cybersecurity, machine learning, and data analytics. Thrive in dynamic environments with strong problem-solving, adaptability, and collaboration skills. Experienced in building scalable microservices, secure authentication systems, monitoring solutions, and production-ready deployments on AWS and GCP.",
  resumePath: "/resume/AditiJadhav_Resume.pdf",
  resumeFileName: "AditiJadhav_Resume.pdf",
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
      "Designed an end-to-end AI-powered Photo Intelligence System for batch image analysis, semantic search, and automated photo organization.",
      "Built a full-stack system using React + TypeScript frontend and FastAPI backend with async background processing pipelines.",
      "Developed computer vision pipelines for blur detection, quality scoring, duplicate detection, face grouping, and event clustering using EXIF data.",
      "Integrated OpenCV, CLIP Transformers, imagehash, SSIM, and optional DeepFace for multimodal image understanding.",
      "Implemented semantic image search using CLIP embeddings and cosine similarity for natural language photo retrieval.",
      "Containerized using Docker and deployed on Google Cloud Run with autoscaling and CI/CD pipelines.",
    ],
    tags: [
      "FastAPI",
      "React",
      "TypeScript",
      "OpenCV",
      "CLIP",
      "Docker",
      "Google Cloud Run",
      "Semantic Search",
      "Computer Vision",
    ],
  },
  {
    company: "Publicis Sapient",
    role: "Associate Software Development Engineer 1",
    project: "Fraud Detection Service (Natwest Bank)",
    period: "Feb 2026",
    highlights: [
      "Designed and developed a full-stack Fraud Detection Service for reporting suspicious transactions and analyst triage with automated risk scoring.",
      "Implemented JWT-based authentication and RBAC (User / Analyst) using Spring Security.",
      "Built RESTful APIs for case creation, status updates, audit logging, and risk scoring with Swagger documentation.",
      "Developed rule-based Risk Scoring Engine categorizing cases into Low, Medium, and High risk buckets.",
      "Containerized services using Docker and deployed on Kubernetes (AWS EKS) with Application Load Balancer integration.",
      "Configured CI/CD pipeline using GitHub and AWS services for automated build, push, and deployment.",
    ],
    tags: [
      "Spring Boot",
      "JWT",
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
    period: "Apr 2025 – Jul 2025",
    highlights: [
      "Automated end-to-end testing using Playwright with BDD (Cucumber, Gherkin).",
      "Built reusable automation framework with XPath locators and CI/CD integration.",
      "Enhanced test coverage, early defect detection, and overall system reliability.",
    ],
    tags: ["Playwright", "BDD", "Cucumber", "Gherkin", "CI/CD", "Test Automation"],
  },
  {
    company: "Publicis Sapient",
    role: "Associate Software Development Engineer 1",
    project: "Banking Analytics Platform (Lloyds Bank)",
    period: "Dec 2024 – Feb 2025",
    highlights: [
      "Developed microservices-based analytics platform using Java, Spring Boot, and React with Figma-based UI/UX design.",
      "Implemented secure authentication, ETL pipelines, and transaction aggregation logic.",
      "Improved performance with API pagination and ensured quality via unit and UI testing.",
    ],
    tags: [
      "Microservices",
      "Spring Boot",
      "React",
      "ETL",
      "GCP",
      "Figma",
      "System Design",
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
