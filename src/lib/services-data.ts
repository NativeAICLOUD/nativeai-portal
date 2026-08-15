export type ServiceFeature = {
  title: string;
  body: string;
  decoration?: "top-left" | "bottom-right";
};

export type ProcessStep = {
  step: string;
  heading: string;
  body: string;
  /** optional lucide icon name, resolved in ProcessTimeline */
  icon?: string;
};

export type ServiceData = {
  slug: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  heroHeadline?: string;
  heroBody?: string;
  heroTagline?: string;
  heroCTALabel?: string;
  includedLabel: string;
  includedIntro: string;
  ctaPrimary: { label: string; href: string };
  features: ServiceFeature[];
  howWeWorkLabel: string;
  howWeWorkTitle: string;
  ctaSecondary: { label: string; href: string };
  processSteps?: ProcessStep[];
};

export const services: Record<string, ServiceData> = {
  "custom-development": {
    slug: "custom-development",
    heroTitle: "Custom Development",
    heroSubtitle: "When templates can't keep up, we build.",
    heroImage: "/img/img-customdevelopment.avif",
    heroHeadline: "We build products that don't break when things get real.",
    heroBody: "From MVPs to full-scale platforms, we develop reliable software that grows with your business. Fast to launch, easy to scale, and built to last.",
    heroTagline: "Real code. Real deadlines. Real results.",
    heroCTALabel: "Book a 15-min call",
    includedLabel: "HERE'S WHAT'S INCLUDED",
    includedIntro:
      "We don't just write code — we engineer solutions that move your business forward. Our development process focuses on performance, scalability, and clear communication between tech and product teams.",
    ctaPrimary: { label: "Schedule a quick intro", href: "/contact" },
    features: [
      {
        title: "Web & App Development",
        body: "We build web and mobile applications that perform smoothly, scale easily, and work perfectly across devices — from MVP to enterprise level.",
        decoration: "top-left",
      },
      {
        title: "API Development & Integration",
        body: "We connect systems, automate data exchange, and make your tools talk to each other securely and efficiently.",
      },
      {
        title: "AI-Powered Features",
        body: "We integrate AI components — copilots, chatbots, recommendation engines, and data processing — directly into your product architecture.",
      },
      {
        title: "Backend Engineering",
        body: "Reliable backends built for speed, data integrity, and stability. We use proven frameworks to support both complex workflows and fast iteration.",
      },
      {
        title: "Frontend Development",
        body: "Modern, responsive, and pixel-perfect interfaces that match the design vision — built with React, Vue, Angular, or Blazor.",
      },
      {
        title: "Maintenance & DevOps",
        body: "We handle monitoring, updates, and optimization to keep your product running smoothly — 24/7.",
        decoration: "bottom-right",
      },
    ],
    howWeWorkLabel: "HOW WE WORK",
    howWeWorkTitle:
      "We move fast but stay precise — every build phase keeps product logic and user experience in sync",
    ctaSecondary: { label: "Grow with us", href: "/contact" },
    processSteps: [
      {
        step: "01",
        heading: "Discovery & Scoping",
        body: "We start by understanding your business inside out — mapping requirements, constraints, and goals before writing a single line of code. This means stakeholder interviews, workflow audits, and a clear project charter that both teams sign off on.",
      },
      {
        step: "02",
        heading: "Architecture & Design",
        body: "System design with your team — cloud-native by default, scalable by intent. We choose the right stack for your use case, document the architecture, and get buy-in before the build starts. No surprises halfway through.",
      },
      {
        step: "03",
        heading: "Iterative Build",
        body: "Agile delivery in two-week sprints with weekly demos. You see working software every step of the way, not a big reveal at the end. Scope can shift — and it will — we're built to absorb it without derailing the project.",
      },
      {
        step: "04",
        heading: "Testing & QA",
        body: "Every feature is tested before it ships: automated unit and integration tests, manual QA, and performance benchmarks baked into the pipeline. We treat testing as part of development, not an afterthought added at the end.",
      },
      {
        step: "05",
        heading: "Deployment",
        body: "Production deployment on Azure or AWS with zero-downtime releases, automated rollbacks, and monitoring from day one. We configure alerting, logging, and dashboards so your team has full visibility from the moment it goes live.",
      },
      {
        step: "06",
        heading: "Support & Growth",
        body: "We don't disappear after launch. Continuous support, performance optimisation, and feature development as your product evolves. Most clients stay with us long past the initial build — because shipping is just the beginning.",
      },
    ],
  },

  design: {
    slug: "design",
    heroTitle: "Design",
    heroSubtitle: "Interfaces that convert, delight, and scale.",
    heroImage: "/cards/card-2.jpg",
    includedLabel: "HERE'S WHAT'S INCLUDED",
    includedIntro:
      "Great design is not decoration — it is how your product communicates its value. We create intuitive, on-brand digital experiences that reduce friction and drive measurable outcomes.",
    ctaPrimary: { label: "Start your design project", href: "/contact" },
    features: [
      {
        title: "UX Research & Strategy",
        body: "User interviews, usability testing, and journey mapping to uncover what your users actually need — not what you assume.",
        decoration: "top-left",
      },
      {
        title: "UI Design",
        body: "Pixel-perfect, responsive interfaces built in Figma — with full interaction states, accessibility baked in, and developer-ready specs.",
      },
      {
        title: "Design Systems",
        body: "Scalable component libraries and design tokens that keep your product consistent and fast to iterate as it grows.",
      },
      {
        title: "Brand Identity",
        body: "Logo, colour system, typography, and brand guidelines — everything needed to show up consistently across every touchpoint.",
      },
      {
        title: "Prototyping & Validation",
        body: "Clickable prototypes to validate flows before a single line of code is written — saving time, budget, and rework.",
      },
      {
        title: "Design-to-Code Handoff",
        body: "We bridge the gap between design and engineering with clear documentation, annotated specs, and implementation support.",
        decoration: "bottom-right",
      },
    ],
    howWeWorkLabel: "HOW WE WORK",
    howWeWorkTitle:
      "We design in close partnership with your team — every decision traced back to a user need or business goal",
    ctaSecondary: { label: "Grow with us", href: "/contact" },
  },

  "ai-agents-rag": {
    slug: "ai-agents-rag",
    heroTitle: "AI Agents & RAG",
    heroSubtitle: "AI that works inside your business — not just around it.",
    heroImage: "/cards/card-3.jpg",
    includedLabel: "HERE'S WHAT'S INCLUDED",
    includedIntro:
      "We deploy autonomous AI agents and RAG systems that plug directly into your operations — automating decisions, answering from your own data, and eliminating the manual work holding your team back.",
    ctaPrimary: { label: "Book an AI consultation", href: "/contact" },
    features: [
      {
        title: "Custom AI Agents",
        body: "Autonomous agents that monitor, decide, and act — integrated with your tools via Semantic Kernel or LangChain, running on Azure AI Foundry or AWS Bedrock.",
        decoration: "top-left",
      },
      {
        title: "Retrieval-Augmented Generation",
        body: "RAG pipelines over your documents, SharePoint, Confluence, or any data source — accurate, cited answers with hallucination dramatically reduced.",
      },
      {
        title: "LLM Integration & Fine-Tuning",
        body: "Azure OpenAI, GPT-4o, or Mistral — we select, fine-tune, and integrate the right model for your use case and compliance requirements.",
      },
      {
        title: "AI Workflow Automation",
        body: "End-to-end automation pipelines that trigger on events, process data with AI, and push results where your team already works.",
      },
      {
        title: "Knowledge Base AI",
        body: "Turn your internal documentation, support tickets, and tribal knowledge into a searchable, AI-powered source of truth for every team member.",
      },
      {
        title: "Evaluation & Observability",
        body: "Every deployment includes accuracy benchmarks, latency monitoring, and feedback loops to keep your AI performing in production.",
        decoration: "bottom-right",
      },
    ],
    howWeWorkLabel: "HOW WE WORK",
    howWeWorkTitle:
      "We start with your highest-value AI use case and ship it to production — then expand from there",
    ctaSecondary: { label: "Grow with us", href: "/contact" },
  },
};
