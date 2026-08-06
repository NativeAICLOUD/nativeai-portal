export type TechItem = {
  name: string;
  logo: string;
};

export const techStack: Record<string, TechItem[]> = {
  "generative AI": [
    { name: "Semantic Kernel",           logo: "/img/partners/skernel.svg" },
    { name: "Azure OpenAI",              logo: "/img/partners/azure.svg" },
    { name: "ChatGPT",                   logo: "/img/partners/chatgpt.svg" },
    { name: "Mistral AI",                logo: "/img/tech/mistral.svg" },
    { name: "Copilot",                   logo: "/img/tech/copilot.svg" },
    { name: "Microsoft Agent Framework", logo: "" },
    { name: "Gemini",                    logo: "" },
    { name: "LangChain",                 logo: "" },
    { name: "Ollama",                    logo: "" },
  ],
  "frontend": [
    { name: "Next.js",      logo: "" },
    { name: "React",        logo: "/img/partners/react.svg" },
    { name: "TypeScript",   logo: "" },
    { name: "Tailwind CSS", logo: "" },
    { name: "Angular",      logo: "" },
    { name: "shadcn/ui",    logo: "" },
  ],
  "mobile": [
    { name: "React Native", logo: "/img/partners/react.svg" },
    { name: "Flutter",      logo: "" },
    { name: "Swift",        logo: "" },
    { name: "Kotlin",       logo: "" },
  ],
  "devOps": [
    { name: "Microsoft Azure", logo: "/img/partners/azure.svg" },
    { name: "Docker",         logo: "/img/partners/docker.svg" },
    { name: "Kubernetes",     logo: "/img/partners/kubernetes.svg" },
    { name: "Terraform",      logo: "" },
    { name: "GitHub Actions", logo: "" },
    { name: "Azure DevOps",   logo: "" },
    { name: "Helm",           logo: "" },
  ],
  "API & integrations": [
    { name: "Microsoft Graph", logo: "" },
    { name: "REST APIs",       logo: "" },
    { name: "GraphQL",         logo: "" },
    { name: "Stripe",          logo: "" },
    { name: "Dynamics 365",    logo: "" },
    { name: "SharePoint",             logo: "" },
    { name: "Model Context Protocol", logo: "" },
  ],
  "webflow": [
    { name: "Webflow",          logo: "" },
    { name: "Webflow CMS",      logo: "" },
    { name: "Localization",     logo: "" },
    { name: "Figma to Webflow", logo: "" },
    { name: "Custom Code",      logo: "" },
  ],
  "design": [
    { name: "Figma",          logo: "" },
    { name: "Product Design", logo: "" },
    { name: "UX Research",    logo: "" },
    { name: "Design Systems", logo: "" },
    { name: "Prototyping",    logo: "" },
  ],
};
