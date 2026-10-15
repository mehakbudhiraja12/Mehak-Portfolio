export const projectsData = [
  {
    id: "ai-interview-prep",
    title: "AI Interview Preparation Platform",
    tagline: "Intelligent Technical Interview Simulation & Evaluation",
    status: "Currently Developing",
    isDeveloping: true,
    description: "An AI-powered interview preparation platform designed to help users practice technical interview questions and improve their interview readiness.",
    technologies: ["React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Technical interview question practice across programming domains",
      "Topic and difficulty selection tailored to user skill levels",
      "AI-assisted question generation simulating realistic technical interviews",
      "Structured interview session management and progress tracking",
      "Answer evaluation with objective, actionable feedback",
      "Interview history, review archives, and performance metrics"
    ],
    problemAddressed: "Job seekers and computer science students often lack structured, interactive environments to practice technical interviews, evaluate their domain readiness, and receive constructive real-time feedback without booking expensive coaching sessions.",
    projectObjective: "Build an intuitive, responsive web application that leverages AI to generate relevant technical interview prompts, simulate mock technical assessments, and provide clear evaluation guidelines to build candidate confidence.",
    mehakContribution: "Architecting the responsive client interface using React.js and Vite, developing backend Express.js routes for interview sessions, modeling MongoDB collections for tracking question attempts, and integrating AI prompt workflows for question and response evaluation.",
    developmentChallenges: "Designing prompt structures that produce concise yet comprehensive technical assessments while ensuring low latency and handling edge cases in candidate responses gracefully.",
    githubUrl: "https://github.com/mehakbudhiraja12",
    demoUrl: "",
    accentGradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    badgeColor: "text-amber-300 bg-amber-400/10 border-amber-400/20",
    previewType: "ai-prep"
  },
  {
    id: "faculty-management",
    title: "Faculty Management System",
    tagline: "Academic Administration & Workload Allocation Portal",
    status: "Completed Full-Stack Application",
    isDeveloping: false,
    description: "A full-stack faculty management application designed to support faculty information management and academic administration.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    features: [
      "Comprehensive faculty profile management and credentials cataloging",
      "Role-based access control separating administrative and faculty privileges",
      "Faculty attendance tracking with structured periodic reporting",
      "Teaching workload allocation and course assignment workflows",
      "Centralized administrative dashboard for departmental oversight",
      "Secure RESTful APIs built with Node.js and Express with optimized MongoDB queries"
    ],
    problemAddressed: "Departmental coordinators frequently face overhead and record inaccuracies when tracking faculty schedules, workload distribution, and attendance using disconnected spreadsheets.",
    projectObjective: "Deliver a centralized, secure MERN web system that streamlines administrative tasks, protects faculty data through authentication, and provides clear visibility into academic operations.",
    mehakContribution: "Engineered reusable React components for the frontend interface, implemented JWT-based role authentication on backend REST endpoints, and optimized database queries for rapid faculty record retrieval and workload updates.",
    developmentChallenges: "Enforcing strict authorization rules across diverse endpoints to safeguard administrative operations while keeping the faculty user experience straightforward and responsive.",
    githubUrl: "https://github.com/mehakbudhiraja12",
    demoUrl: "",
    accentGradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
    badgeColor: "text-emerald-300 bg-emerald-400/10 border-emerald-400/20",
    previewType: "faculty-mgmt"
  },
  {
    id: "blood-bank-management",
    title: "Blood Bank Management System",
    tagline: "Streamlined Donor Intake & Inventory Allocation",
    status: "Completed Full-Stack Application",
    isDeveloping: false,
    description: "A MERN-stack application designed to simplify donor registration, blood inventory management, and blood request processing.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "REST APIs"],
    features: [
      "Intuitive donor registration and eligibility tracking",
      "Real-time blood inventory tracking categorised by blood group and availability",
      "Hospital and urgent patient blood request processing pipeline",
      "Role-based access control governing donor, hospital, and administrator actions",
      "JWT-based authentication and secure RESTful endpoints ensuring protected data management"
    ],
    problemAddressed: "In critical healthcare scenarios, delays in identifying blood availability or locating eligible donors can have severe consequences. A reliable digital registry is essential to minimize search times.",
    projectObjective: "Create a fast, responsive, and secure MERN application to manage blood stock levels in real time, record verified donors, and expedite the processing of emergency blood requests.",
    mehakContribution: "Developed the full-stack architecture including responsive donor submission forms, real-time stock dashboards, JWT-protected REST APIs, and MongoDB schemas designed for transactional updates.",
    developmentChallenges: "Managing stock integrity when multiple blood requests are processed concurrently, ensuring accurate deduction from available inventory.",
    githubUrl: "https://github.com/mehakbudhiraja12",
    demoUrl: "",
    accentGradient: "from-rose-500/20 via-orange-500/10 to-transparent",
    badgeColor: "text-emerald-300 bg-emerald-400/10 border-emerald-400/20",
    previewType: "blood-bank"
  }
];
