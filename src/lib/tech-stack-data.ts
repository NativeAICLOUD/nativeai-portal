export type TechItem = {
  name: string;
  logo: string;
};

export const techStack: Record<string, TechItem[]> = {
  "generative AI": [
    { name: "Semantic Kernel", logo: "/img/partners/skernel.svg" },
    { name: "Azure OpenAI",    logo: "/img/partners/azure.svg" },
    { name: "ChatGPT",         logo: "/img/partners/chatgpt.svg" },
    { name: "Mistral AI",      logo: "" },
    { name: "Copilot",         logo: "" },
    { name: "MS Agent Framework", logo: "" },
    { name: "Gemini",          logo: "" },
  ],
  "backend": [
    { name: ".NET",        logo: "/img/partners/dotnet.svg" },
    { name: "ASP.NET Core",logo: "/img/partners/aspnet.svg" },
    { name: "C#",          logo: "/img/partners/csharp.svg" },
    { name: "Node.js",     logo: "" },
    { name: "Python",      logo: "" },
    { name: "PostgreSQL",  logo: "" },
    { name: "SQL Server",  logo: "" },
    { name: "Redis",       logo: "" },
  ],
  "frontend": [
    { name: "React",       logo: "/img/partners/react.svg" },
    { name: "Blazor",      logo: "/img/partners/blazor.svg" },
    { name: "Next.js",     logo: "" },
    { name: "Vue",         logo: "" },
    { name: "Angular",     logo: "" },
    { name: "TypeScript",  logo: "" },
    { name: "Tailwind CSS",logo: "" },
    { name: "Vite",        logo: "" },
  ],
  "mobile": [
    { name: "React Native",logo: "" },
    { name: "Flutter",     logo: "" },
    { name: "Swift",       logo: "" },
    { name: "Kotlin",      logo: "" },
  ],
  "devOps": [
    { name: "Docker",          logo: "/img/partners/docker.svg" },
    { name: "Kubernetes",      logo: "/img/partners/kubernetes.svg" },
    { name: "GitHub Actions",  logo: "" },
    { name: "Azure DevOps",    logo: "" },
    { name: "Terraform",       logo: "" },
    { name: "Helm",            logo: "" },
    { name: "Prometheus",      logo: "" },
    { name: "Grafana",         logo: "" },
  ],
  "webflow": [
    { name: "Webflow", logo: "" },
    { name: "Framer",  logo: "" },
  ],
  "design": [
    { name: "Figma",       logo: "" },
    { name: "Adobe XD",    logo: "" },
    { name: "Illustrator", logo: "" },
    { name: "Photoshop",   logo: "" },
  ],
};
