import deeplearning from "../../public/assets/logos/deeplearning.jpg";
import ibm from "../../public/assets/logos/ibm.png";
import wso2 from "../../public/assets/logos/wso2.png";

// Profile basics (used by multiple sections)
export const profile = {
  name: "Dineth Basura",
  role: "IT Undergraduate & Full Stack Developer",
  bio: "I am an Information Technology Undergraduate at SLIIT with a passion for building scalable web applications and exploring AI/ML technologies. I have hands-on experience in Full Stack Development, Microservices, and Cloud integrations.",
};

// Overview cards
export const services = [
  { title: "Web Developer", icon: "web" },
  { title: "Backend Developer", icon: "backend" },
  { title: "AI/ML Enthusiast", icon: "creator" },
];

// Skills (kept as simple objects so it’s easy for UI components to render later)
export const technologies = [
  { name: "JavaScript" },
  { name: "React JS" },
  { name: "Node JS" },
  { name: "MongoDB" },
  { name: "Java" },
  { name: "Spring Boot" },
  { name: "Python" },
  { name: "Docker" },
  { name: "SQL (MySQL)" },
  { name: "Git" },
];

export const myProjects = [
  {
    id: 1,
    title: "Dina AI Assistant",
    description:
      "A Python + Flask based personal virtual assistant with local training and LLM API fallback. Features a modern UI and NLP capabilities.",
    subDescription: [
      "Built using Python and Flask with a modern UI.",
      "Supports local training with an LLM API fallback strategy.",
      "Includes NLP-driven intent handling and assistant workflows.",
    ],
    href: "https://github.com/Dineth-Basura/Dina-ai-chatbot.git",
    logo: "",
    // Using existing project thumbnails in /public/assets/projects to avoid broken images.
    image: "/assets/projects/auth-system.jpg",
    tags: [
      { id: 1, name: "Python", path: "/assets/frameworksLogo/python.jpg" },
      { id: 2, name: "Flask", path: "/assets/frameworksLogo/flask.svg" },
      // No dedicated logo for NLP – will render as text chip in details
      { id: 3, name: "NLP" },
    ],
  },
  {
    id: 2,
    title: "RescuePulse",
    description:
      "A Microservices platform built for the WSO2 Hackathon using Ballerina and Docker. Includes authentication and dashboard analytics.",
    subDescription: [
      "Microservices-based architecture built for a hackathon environment.",
      "Containerized with Docker for consistent deployments.",
      "Includes authentication and analytics dashboard features.",
    ],
    href: "https://github.com/Dineth-Basura/RescuePulse.git",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      { id: 1, name: "Ballerina", path: "/assets/frameworksLogo/ballerina.jpg" },
      { id: 2, name: "Docker", path: "/assets/frameworksLogo/docker.png" },
      // No specific logo – will render as text chip
      { id: 3, name: "Microservices" },
    ],
  },
  {
    id: 3,
    title: "RailLink System",
    description:
      "A Railway Booking System built with Spring Boot. Features seat management, optimized booking algorithms, and database integration.",
    subDescription: [
      "Built with Spring Boot as a backend-first system.",
      "Implements seat management and optimized booking logic.",
      "Integrated relational database for persistence and reporting.",
    ],
    href: "https://github.com/Dineth-Basura/RailLink-Web-based-Train-Scheduling-Booking-System.git",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      { id: 1, name: "Java", path: "/assets/frameworksLogo/java.png" },
      { id: 2, name: "Spring Boot", path: "/assets/frameworksLogo/springboot.png" },
      // Use generic SQL icon for MySQL
      { id: 3, name: "MySQL", path: "/assets/frameworksLogo/sql.png" },
    ],
  },
  {
    id: 4,
    title: "PlateX - ALPR System",
    description:
      "AI-driven license plate detection system using YOLOv12 and PaddleOCR. Features real-time recognition, Sri Lankan plate formatting, and a Flask web interface.",
    subDescription: [
      "Built an AI-driven ALPR pipeline using YOLOv12 for detection and PaddleOCR for recognition.",
      "Supports real-time recognition with Sri Lankan plate formatting rules.",
      "Includes a Flask-based web interface for testing and visualization.",
    ],
    href: "https://github.com/Dineth-Basura/PlateX-AI-License-Plate-Detection-Recognition-System.git",
    logo: "",
    image: "/assets/projects/platex.jpg",
    tags: [
      { id: 1, name: "YOLOv12", path: "/assets/frameworksLogo/yolo.png" },
      { id: 2, name: "PaddleOCR", path: "/assets/frameworksLogo/paddle ocr.jpg" },
      { id: 3, name: "Flask", path: "/assets/frameworksLogo/flask.svg" },
    ],
  },
  {
    id: 5,
    title: "Thermo-Glow IoT System",
    description:
      "An IoT-based home automation system featuring intelligent temperature control, smart lighting, and real-time monitoring via a web dashboard using ESP32 and DHT11 sensors.",
    subDescription: [
      "ESP32 microcontroller with DHT11 temperature sensor integration.",
      "Smart lighting and temperature control with real-time web dashboard.",
      "Modular IoT design focused on reliability and low-power usage.",
    ],
    href: "https://github.com/Dineth-Basura/Thermo_Glow.git",
    logo: "",
    image: "/assets/projects/thermoglow.jpg",
    tags: [
      { id: 1, name: "ESP32", path: "/assets/frameworksLogo/esp32.jpg" },
      { id: 2, name: "IoT" },
      { id: 3, name: "C++" },
    ],
  },
];

export const mySocials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/dineth-basura-00711035a/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/Dineth-Basura",
    icon: "/assets/logos/github.svg",
  },
];

export const experiences = [
  {
    title: "BSc (Hons) in Information Technology",
    job: "SLIIT",
    date: "Jan 2024 - Present",
    contents: [
      "Specializing in Information Technology with a focus on Full Stack Development and AI.",
      "Completed coursework on Machine Learning Specialization (Deeplearning.ai).",
      "Built scalable solutions using Java, Spring Boot, and Microservices architecture.",
      "Lead Developer for multiple academic projects involving Agile methodologies.",
    ],
  },
];

// Certifications & Achievements (re-using the existing "reviews" export consumed by the section)
export const reviews = [
  {
    testimonial: "Mastered predictive models and core ML algorithms.",
    name: "DeepLearning.AI",
    designation: "Certification",
    company: "Stanford/Coursera",
    image: deeplearning,
  },
  {
    testimonial: "Gained expertise in Neural Networks and Decision Trees.",
    name: "DeepLearning.AI",
    designation: "Certification",
    company: "Stanford/Coursera",
    image: deeplearning,
  },
  {
    testimonial: "Explored AI decision-making and recommender systems.",
    name: "DeepLearning.AI",
    designation: "Certification",
    company: "Stanford/Coursera",
    image: deeplearning,
  },
  {
    testimonial: "Applied Machine Learning concepts using Python libraries.",
    name: "IBM",
    designation: "Professional Cert",
    company: "Coursera",
    image: ibm,
  },
  {
    testimonial: "Mastered database management and SQL for data analysis.",
    name: "IBM",
    designation: "Professional Cert",
    company: "Coursera",
    image: ibm,
  },
  {
    testimonial:
      "Built 'RescuePulse', a microservices-based disaster management platform.",
    name: "WSO2",
    designation: "Hackathon",
    company: "Innovate 2025",
    image: wso2,
  },
];
