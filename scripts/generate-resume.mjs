import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import PDFDocument from "pdfkit";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, "../public/resume");
const outputFile = path.join(outputDir, "Aditi-Anand-Jadhav-Resume.pdf");

const resume = {
  name: "Aditi Anand Jadhav",
  role: "Associate Software Development Engineer",
  title: "Full Stack Developer — CI/CD — Cloud Engineer (AWS/GCP)",
  contact: [
    "+91 9322459002",
    "aditiaj100@gmail.com",
    "Gurgaon, India",
    "linkedin.com/in/aditi-jadhav-6025b6158",
  ],
  summary:
    "Associate Software Development Engineer at Publicis Sapient with 1.6 years of experience in full-stack development using ReactJS, Spring Boot, Jenkins, and Docker. Experienced in CI/CD pipelines, containerization, and scalable web applications. Contributed to backend API development, frontend engineering, and cloud deployment. Led an AI-driven malware detection project, strengthening expertise in cybersecurity, machine learning, and data analytics.",
  experience: [
    {
      heading: "Photo Intelligence System — AI-Powered Image Analysis Platform | Publicis Sapient | Present",
      bullets: [
        "Designed an end-to-end AI-powered Photo Intelligence System for batch image analysis, semantic search, and automated photo organization.",
        "Built React + TypeScript frontend and FastAPI backend with async background processing pipelines.",
        "Integrated OpenCV, CLIP Transformers, semantic search, duplicate detection, and Docker deployment on Google Cloud Run.",
      ],
    },
    {
      heading: "Fraud Detection Service (Natwest Bank) | Publicis Sapient | Feb 2026",
      bullets: [
        "Developed full-stack fraud detection with JWT authentication, RBAC, PostgreSQL, and risk scoring engine.",
        "Deployed containerized services on AWS EKS with CI/CD using GitHub Actions and AWS services.",
      ],
    },
    {
      heading: "Economic Crime Prevention Platform (Lloyds Bank) | Apr 2025 – Jul 2025",
      bullets: [
        "Automated end-to-end testing using Playwright with BDD (Cucumber, Gherkin) and CI/CD integration.",
      ],
    },
    {
      heading: "Banking Analytics Platform (Lloyds Bank) | Dec 2024 – Feb 2025",
      bullets: [
        "Built microservices analytics platform with Java, Spring Boot, React, ETL pipelines, and GCP deployment.",
      ],
    },
  ],
  projects: [
    "Android Botnet Detection Using AI (2023): ML malware detection with 92% accuracy and 30% fewer false positives.",
    "Token System for Bank Operations (2021): Queue-based token system improving customer service efficiency by 25%.",
  ],
  skills:
    "Frontend: React.js, JavaScript, HTML5, CSS3 | Backend: Spring Boot, FastAPI, Java, Python, PostgreSQL, Microservices, JWT, RBAC | DevOps: Docker, Jenkins, AWS, GCP, CI/CD, GitHub Actions | Testing: JUnit, Cucumber, Playwright | AI/ML: LLMs, CLIP, Computer Vision",
  education: [
    "BTech Information Technology — MKSSS's Cummins College of Engineering for Women, Pune (2020–2024)",
    "HSC — Indira Gandhi Junior College (2019–2020)",
    "SSC — Kusumtai High School, Nanded (2017–2018)",
  ],
  certifications: [
    "Google Cloud Digital Leader — July 2025",
    "AWS Partner Accreditation (Technical) — Feb 2025",
    "Cloud Computing Program — IIT Bhubaneswar — May 2022",
    "Web Development Program — IIT Bombay — Feb 2022",
  ],
};

function sectionTitle(doc, title) {
  doc.moveDown(0.6).font("Helvetica-Bold").fontSize(11).fillColor("#0f172a").text(title);
  doc
    .moveTo(doc.page.margins.left, doc.y + 2)
    .lineTo(doc.page.width - doc.page.margins.right, doc.y + 2)
    .strokeColor("#38bdf8")
    .lineWidth(1)
    .stroke();
  doc.moveDown(0.35);
}

function bulletList(doc, items) {
  doc.font("Helvetica").fontSize(9.5).fillColor("#334155");
  items.forEach((item) => {
    doc.text(`• ${item}`, { indent: 10, align: "left", lineGap: 2 });
  });
}

fs.mkdirSync(outputDir, { recursive: true });

const doc = new PDFDocument({ margin: 48, size: "A4" });
const stream = fs.createWriteStream(outputFile);
doc.pipe(stream);

doc.font("Helvetica-Bold").fontSize(20).fillColor("#0f172a").text(resume.name);
doc.font("Helvetica").fontSize(11).fillColor("#0369a1").text(resume.role);
doc.moveDown(0.15).fontSize(10).fillColor("#475569").text(resume.title);
doc.moveDown(0.2).fontSize(9).fillColor("#64748b").text(resume.contact.join("  |  "));

sectionTitle(doc, "SUMMARY");
doc.font("Helvetica").fontSize(9.5).fillColor("#334155").text(resume.summary, { lineGap: 2 });

sectionTitle(doc, "EXPERIENCE");
resume.experience.forEach((item) => {
  doc.font("Helvetica-Bold").fontSize(9.5).fillColor("#1e293b").text(item.heading);
  doc.moveDown(0.15);
  bulletList(doc, item.bullets);
  doc.moveDown(0.25);
});

sectionTitle(doc, "PROJECTS");
bulletList(doc, resume.projects);

sectionTitle(doc, "TECHNICAL SKILLS");
doc.font("Helvetica").fontSize(9.5).fillColor("#334155").text(resume.skills, { lineGap: 2 });

sectionTitle(doc, "EDUCATION");
bulletList(doc, resume.education);

sectionTitle(doc, "CERTIFICATIONS");
bulletList(doc, resume.certifications);

doc.end();

stream.on("finish", () => {
  const size = fs.statSync(outputFile).size;
  console.log(`Generated ${outputFile} (${size} bytes)`);
});
