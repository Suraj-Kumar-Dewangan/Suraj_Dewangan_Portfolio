import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  java,
  cpp,
  kafka,
  kotlin,
  spring,
  postgresql,
  firebase,
  gcp,
  gradle,
  sqlite,
  mysql,
  git,
  linkedIn,
  github,
} from "../assets";

// Navigation
const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  { id: navigationPaths.about, title: "About" },
  { id: navigationPaths.work, title: "Work" },
  { id: navigationPaths.contact, title: "Contact" },
];

// Services
const services = [
  { title: "Backend Engineer", icon: backend },
  { title: "Microservices Developer", icon: backend },
  { title: "Java Spring Boot Developer", icon: java },
  { title: "Competitive Programmer", icon: cpp },
  { title: "C++ & Kotlin Developer", icon: mobile },
  { title: "Spring & Hibernate Specialist", icon: java },
  { title: "Event-Driven Architectures", icon: redux },
  { title: "Kafka Messaging Expert", icon: kafka },
  { title: "RESTful & gRPC API Developer", icon: web },
  { title: "SQL & NoSQL Databases", icon: mongodb },
  { title: "Cloud & DevOps Tools", icon: git },
  { title: "Testing & QA Automation", icon: creator },
];

// Technologies
const technologies = [
  { name: "Java (8/11/17)", icon: java },
  { name: "C++", icon: cpp },
  { name: "Kotlin", icon: kotlin },
  { name: "Spring Boot", icon: spring },
  { name: "Apache Kafka", icon: kafka },
  { name: "PostgreSQL", icon: postgresql },
  { name: "MySQL", icon: mysql },
  { name: "SQLite", icon: sqlite },
  { name: "Firebase Cloud Messaging", icon: firebase },
  { name: "GCP", icon: gcp },
  { name: "Git", icon: git },
  { name: "Gradle", icon: gradle },
];

// Experience
const experiences = [
  {
    title: "Associate Software Engineer",
    company_name: "Air Arabia",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Designed and maintained 5+ Spring Boot microservices for aviation workflows like Bay Conflict Detection, Pushback Alerts, Delay Engine, and IROPS.",
      "Built Apache Kafka-based event-driven architecture for distributed systems synchronization.",
      "Developed 20+ REST and gRPC APIs with validation, audit logging, and config-driven business rules.",
      "Implemented Firebase Cloud Messaging (FCM) reducing backend polling load by 40–70%.",
      "Developed Technical Delay Report module with PDF generation, audit tracking, and email workflows.",
      "Handled P0/P1 production issues and contributed to multiple CI/CD deployments.",
    ],
  },
  {
    title: "Frontend Development Intern",
    company_name: "IBM SkillsBuild",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Jul 2023",
    points: [
      "Built responsive web interfaces using HTML, CSS, and JavaScript, improving page load time by ~15%.",
      "Applied strong problem-solving skills to create visually appealing and user-friendly UI components.",
      "Reduced repetitive styling effort by ~20% through reusable CSS patterns and component structuring.",
      "Stayed up-to-date with the latest frontend technologies and best practices throughout the internship.",
    ],
  },
  {
    title: "Android Developer Intern",
    company_name: "Google",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Sep 2022",
    points: [
      "Built Grocery List Android app using Kotlin and MVVM architecture.",
      "Implemented SQLite-based persistence improving data retrieval performance by ~30%.",
      "Optimized memory usage and reduced UI lag by 25%.",
      "Applied clean architecture for better scalability and maintainability.",
    ],
  },
  {
    title: "Java Developer Intern",
    company_name: "Suven Consultant and Technology Pvt. Ltd.",
    icon: java,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Feb 2022",
    points: [
      "Successfully built Consumer Loan Assistant and Home Inventory Manager projects using Java.",
      "Reduced data processing time by ~20% through optimized algorithms and efficient data structures.",
      "Utilized Java and various technologies to build efficient, production-ready solutions.",
      "Gained valuable experience in Java development and software engineering best practices.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Elite Techno Groups",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Oct 2021",
    points: [
      "Completed intensive internship focused on Machine Learning and Data Science fundamentals.",
      "Implemented mini-projects using NumPy, Pandas, and Scikit-learn, achieving ~85% model accuracy.",
      "Applied supervised learning and deep learning basics to real-world data preprocessing and evaluation.",
      "Improved model performance by ~0.3x iteration through systematic hyperparameter tuning.",
    ],
  },
  {
    title: "AI/ML Intern",
    company_name: "Elite Techno Groups",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Sep 2021",
    points: [
      "Led development of an Inventory Management system utilizing AI/ML technologies.",
      "Used Anaconda Navigator for data analysis, model development, testing, and quality assurance.",
      "Improved inventory prediction accuracy by ~30% through ML model optimization.",
      "Gained hands-on experience in AI/ML concepts and their practical applications.",
    ],
  },
  {
    title: "Design Thinking Trainee",
    company_name: "Cognitel (IBM-Supported Program)",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Oct 2021",
    points: [
      "Completed structured training on Design Thinking: Empathy Mapping, Ideation, Prototyping, and Problem Framing.",
      "Applied design thinking principles to solve user-centric problems, improving solution relevance by ~35%.",
      "Collaborated in group activities to develop innovative and practical solutions.",
      "Improved creative problem-solving efficiency by ~0.4x through human-centered design frameworks.",
    ],
  },
  {
    title: "Design Thinking Learner",
    company_name: "Samsung via FutureLearn",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "2021",
    points: [
      "Completed course on Design Thinking for sustainable and future-ready solutions.",
      "Explored sustainability, inclusive design, and technology-driven innovation principles.",
      "Applied empathy-driven design and collaborative ideation to global real-world case studies.",
      "Gained insights into how technology enables inclusive, scalable solutions — reduced ideation cycles by ~0.2x.",
    ],
  },
];

// Projects
const projects = [
  {
    name: "Movix",
    description:
      "Movie discovery platform with trending filters, advanced search, and dynamic content using TMDB API.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "redux", color: "green-text-gradient" },
      { name: "api", color: "pink-text-gradient" },
    ],
    image: reactjs,
    hosted_link: "https://movix-web-application.netlify.app/",
  },
  {
    name: "Crypto Hunter",
    description:
      "Real-time cryptocurrency tracking platform with charts, live price data, and responsive UI.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "chartjs", color: "green-text-gradient" },
      { name: "api", color: "pink-text-gradient" },
    ],
    image: redux,
    hosted_link: "https://crypto-hunter.netlify.app/",
  },
];

// Personal Info
const personalInfo = {
  name: "Suraj",
  fullName: "Suraj Kumar Dewangan",
  email: "surajkumardewangan18@gmail.com",
  mobile: "+91-9546795289",
  role: "Backend Engineer | Java | Spring Boot | Kafka | DSA",
  about: `Results-driven Backend Engineer with 2+ years of experience specializing in Java (8/11/17), Spring Boot, microservices, and distributed systems. Proven track record in architecting and delivering scalable, high-performance backend solutions.

Currently at Air Arabia, engineering robust aviation systems using microservices and event-driven architectures.

Accomplished competitive programmer with 3000+ problems solved and a LeetCode rating of 1756 (Top 10% globally). Strong expertise in data structures, algorithms, and complex problem-solving.

Passionate about building efficient, reliable backend systems and tackling challenging technical problems.`,
  
  projectsIntro: `These projects demonstrate my expertise in building scalable applications, integrating APIs, and designing high-performance systems with clean architecture and optimized performance.`,
};

// Public URLs
const publicUrls = {
  resume: "https://drive.google.com/file/d/1yP4PNpvgRcXzWKV7aSYr9QYi8uV_lWd9/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "ADD_YOUR_LINKEDIN_LINK",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/Suraj-Kumar-Dewangan",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};