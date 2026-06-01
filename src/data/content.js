export const site = {
  name: "Aliasgher Nooruddin",
  shortName: "Aliasgher",
  title: "Software Engineer & Product Builder",
  headline:
    "Building AI-powered products, SaaS platforms, and automation solutions that help businesses grow.",
  subheadline:
    "Senior software engineer with ~7 years of experience across the full product lifecycle — from architecture and development to deployment and growth.",
  email: "aliasghernooruddin@gmail.com",
  phone: "+923032614853",
  links: {
    github: "https://github.com/aliasghernooruddin",
    linkedin: "https://www.linkedin.com/in/aliasgher-nooruddin/",
    twitter: "https://twitter.com/aliasghernoor",
    stackoverflow:
      "https://stackoverflow.com/users/10066638/aliasgher-nooruddin",
    email: "mailto:aliasghernooruddin@gmail.com",
    phone: "tel:+923032614853",
  },
};

export const about = [
  "I'm a software engineer and product builder who develops scalable web applications, SaaS platforms, AI-powered solutions, and business automation systems.",
  "My expertise spans the full product lifecycle — from idea validation and architecture design to development, deployment, and growth. I enjoy building products that solve real business problems and scale efficiently.",
  "I think from both engineering and founder perspectives, focusing on practical, revenue-generating products rather than hype.",
];

export const expertise = [
  {
    title: "AI-Powered Applications",
    description:
      "Building AI-driven products, integrations, and automation workflows that improve business operations, customer engagement, and productivity.",
    tags: ["LLM integrations", "Workflow automation", "Practical AI"],
  },
  {
    title: "SaaS Development",
    description:
      "Designing and shipping multi-tenant platforms with auth, subscriptions, APIs, and cloud-native backends built to scale.",
    tags: ["Multi-tenant", "Billing", "REST APIs"],
  },
  {
    title: "Backend Engineering",
    description:
      "Architecting performant server-side systems with strong database design, third-party integrations, and operational reliability.",
    tags: ["Node.js", "Express", "System design"],
  },
  {
    title: "Business Automation",
    description:
      "WhatsApp Business Platform, Meta APIs, customer communication, marketing automation, and end-to-end workflow automation.",
    tags: ["WhatsApp Cloud API", "Meta Business", "Messaging"],
  },
];

export const approach = [
  "Build practical, revenue-generating products",
  "Focus on execution over hype",
  "Solve technical and business problems together",
  "Engineer for scale and operational efficiency",
];

export const products = [
  {
    name: "QuotelyPro",
    url: "https://quotelypro.com",
    tagline: "Quotation & invoicing for modern businesses",
    role: "Founder · Product Builder · Full-stack",
    description:
      "A modern quotation and invoicing platform for freelancers, agencies, and small businesses. Generate professional quotes and invoices, manage clients, track payments, and share documents instantly via WhatsApp, email, or PDF.",
    highlights: [
      "Quotation & invoice generation",
      "Client & payment tracking",
      "WhatsApp document delivery",
      "PDF sharing",
    ],
    year: "2025",
    links: [
      { label: "quotelypro.com", href: "https://quotelypro.com" },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.quotation.maker",
      },
    ],
    accent: "text-accent",
    iconBg: "bg-accent-soft text-accent",
  },
  {
    name: "Invitease",
    url: "https://invitease.co",
    tagline: "Event invitations & business messaging",
    role: "Backend · WhatsApp · Cloud infrastructure",
    description:
      "Event invitation and business messaging product with WhatsApp integration, Cloud API implementation, and scalable backend infrastructure for high-volume messaging workflows.",
    highlights: [
      "WhatsApp Cloud API",
      "Business messaging workflows",
      "Backend infrastructure",
      "Cloud deployment",
    ],
    year: "2026",
    links: [{ label: "invitease.co", href: "https://invitease.co" }],
    accent: "text-clay",
    iconBg: "bg-clay-soft text-clay",
  },
];

export const experience = [
  {
    role: "Senior Software Engineer II",
    team: "Backend · Node.js",
    company: "SWVL",
    location: "Remote",
    period: "2023 — Present",
    context:
      "SaaS-based mobility and transport platform operating across global markets.",
    points: [
      "Designed a secure, role-based authentication framework with Express.js, JWT, and Redis — enabling distributed session management and consistent access control across services.",
      "Built event-driven microservices on AWS SNS/SQS and REST APIs, reducing inter-service latency by 30%.",
      "Implemented SSO and standardized JWT validation between Node.js and Python services, improving cross-stack security.",
      "Optimized PostgreSQL schema design and automated ORM migrations for data consistency in production.",
      "Streamlined CI/CD with GitHub Actions, cutting deployment time by 40% with zero downtime.",
      "Mentored junior developers and drove code reviews, design discussions, and architecture planning.",
    ],
    stack: [
      "TypeScript",
      "Express.js",
      "Node.js",
      "AWS Lambda",
      "SNS / SQS",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
    ],
  },
  {
    role: "Software Engineer",
    team: "Python · Full-Stack",
    company: "5cube",
    location: "Karachi, PK",
    period: "2021 — 2023",
    context:
      "Software firm delivering full-stack SaaS solutions for diverse global clients.",
    points: [
      "Led full-stack development across client projects with Django, Flask, FastAPI, and JavaScript (React, Vue, Angular).",
      "Architected and deployed microservice SaaS platforms on AWS — PostgreSQL, Redis, S3, CloudFront, API Gateway — for multi-tenant, high-availability deployments.",
      "Implemented real-time features (chat, notifications, auctions) with Socket.io and WebSockets.",
      "Collaborated on legacy .NET integrations to improve interoperability with Python services.",
    ],
    stack: [
      "Python",
      "Django",
      "Flask",
      "FastAPI",
      "React",
      "Vue",
      "AWS",
      "Terraform",
      "GCP",
    ],
  },
  {
    role: "Junior Full-Stack Developer",
    team: "Full-Stack",
    company: "5cube",
    location: "Karachi, PK",
    period: "2018 — 2021",
    context: "Built core backend services and full-stack features across products.",
    points: [
      "Built and maintained core backend services in Node.js and Express.js — authentication, payments, and third-party API integrations.",
      "Developed RESTful APIs and optimized MongoDB and SQL queries through indexing and query tuning.",
      "Wrote unit and integration tests (Jest) to prevent regressions and ensure stable deployments.",
      "Supported full-stack delivery with React, Angular, and Vue.js.",
    ],
    stack: ["Node.js", "Express.js", "React", "Angular", "Vue", "EC2", "MongoDB"],
  },
];

export const education = {
  degree: "BSc, Computer Science",
  school: "Hamdard University, Karachi",
  year: "2019",
};

export const achievements = [
  {
    title: "Rising Star Award",
    year: "2021",
    description:
      "Recognized for outstanding performance and rapid contribution to backend development within the first year.",
  },
  {
    title: "Excellence in Project Delivery",
    year: "2023",
    description:
      "Awarded for leading the on-time completion of a mission-critical Node.js microservices project.",
  },
];

export const stack = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "C#"],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "Express.js", "Django", "Flask", "FastAPI", "Socket.io"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "DynamoDB", "Firestore"],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS (Lambda, S3, SNS, SQS)",
      "API Gateway · CloudFront",
      "GCP",
      "Docker · Kubernetes",
      "Terraform",
      "GitHub Actions · CI/CD",
    ],
  },
  {
    title: "Tools",
    items: ["Git", "Firebase", "Postman", "Linux", "VS Code"],
  },
];

export const interests = [
  "Artificial Intelligence",
  "SaaS Products",
  "Startup Technology",
  "Business Automation",
  "WhatsApp Solutions",
  "Marketing Technology",
  "Cloud Infrastructure",
  "Product Engineering",
];

export const focus = [
  "Growing freelance & consulting practice",
  "Senior engineering & founding engineer roles",
  "AI-focused products and services",
  "Business technology & automation consulting",
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#products", label: "Work" },
  { href: "#contact", label: "Contact" },
];
