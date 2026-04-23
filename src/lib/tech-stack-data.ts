export type TechItem = {
  name: string;
  logo: string;
};

export const techStack: Record<string, TechItem[]> = {
  "generative AI": [
    { name: "Semantic Kernel", logo: "/img/partners/skernel.svg" },
    { name: "Azure OpenAI", logo: "/img/partners/azure.svg" },
    { name: "ChatGPT", logo: "/img/partners/chatgpt.svg" },
    { name: "Claude", logo: "/img/tech/claude.svg" },
    { name: "Mistral AI", logo: "/img/tech/mistral.svg" },
    { name: "Copilot", logo: "/img/tech/copilot.svg" },
    { name: "MS Agent Framework", logo: "/img/tech/ms-agent.svg" },
    { name: "Gemini", logo: "/img/tech/gemini.svg" },
  ],
  "backend": [
    { name: ".NET", logo: "/img/partners/dotnet.svg" },
    { name: "ASP.NET Core", logo: "/img/partners/aspnet.svg" },
    { name: "Node.js", logo: "/img/tech/nodejs.svg" },
    { name: "Python", logo: "/img/tech/python.svg" },
    { name: "PostgreSQL", logo: "/img/tech/postgresql.svg" },
    { name: "C#", logo: "/img/partners/csharp.svg" },
    { name: "SQL Server", logo: "/img/tech/sqlserver.svg" },
    { name: "Redis", logo: "/img/tech/redis.svg" },
  ],
  "frontend": [
    { name: "React", logo: "/img/partners/react.svg" },
    { name: "Next.js", logo: "/img/tech/nextjs.svg" },
    { name: "Vue", logo: "/img/tech/vue.svg" },
    { name: "Angular", logo: "/img/tech/angular.svg" },
    { name: "Blazor", logo: "/img/partners/blazor.svg" },
    { name: "TypeScript", logo: "/img/tech/typescript.svg" },
    { name: "Tailwind CSS", logo: "/img/tech/tailwind.svg" },
    { name: "Vite", logo: "/img/tech/vite.svg" },
  ],
  "mobile": [
    { name: "React Native", logo: "/img/tech/react-native.svg" },
    { name: "Flutter", logo: "/img/tech/flutter.svg" },
    { name: "Swift", logo: "/img/tech/swift.svg" },
    { name: "Kotlin", logo: "/img/tech/kotlin.svg" },
  ],
  "devOps": [
    { name: "Docker", logo: "/img/partners/docker.svg" },
    { name: "Kubernetes", logo: "/img/partners/kubernetes.svg" },
    { name: "GitHub Actions", logo: "/img/tech/github-actions.svg" },
    { name: "Azure DevOps", logo: "/img/tech/azure-devops.svg" },
    { name: "Terraform", logo: "/img/tech/terraform.svg" },
    { name: "Helm", logo: "/img/tech/helm.svg" },
    { name: "Prometheus", logo: "/img/tech/prometheus.svg" },
    { name: "Grafana", logo: "/img/tech/grafana.svg" },
  ],
  "webflow": [
    { name: "Webflow", logo: "/img/tech/webflow.svg" },
    { name: "Framer", logo: "/img/tech/framer.svg" },
  ],
  "design": [
    { name: "Figma", logo: "/img/tech/figma.svg" },
    { name: "Adobe XD", logo: "/img/tech/adobe-xd.svg" },
    { name: "Illustrator", logo: "/img/tech/illustrator.svg" },
    { name: "Photoshop", logo: "/img/tech/photoshop.svg" },
  ],
};
