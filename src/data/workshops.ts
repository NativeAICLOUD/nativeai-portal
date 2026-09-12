export type Workshop = {
  id: number;
  level: 'Basic' | 'Deep Dive' | 'Special';
  title: string;
  desc: string;
  date: string;
  duration: string;
  language: string;
  format: string;
  tags: string[];
  audience: string;
  intro: string;
  closing: string;
  speakerRole: string;
  agenda: string[];
  agendaDetails: string[];
};

export const workshops: Workshop[] = [
  {
    id: 1,
    level: 'Basic',
    title: 'Azure Cloud Fundamentals',
    desc: 'Get up to speed with Microsoft Azure. Learn core services, resource management, and how to architect your first cloud workload — no prior cloud experience required.',
    date: '24 May 2025',
    duration: '2 hours',
    language: 'English',
    format: 'Online',
    tags: ['Azure', 'Beginner'],
    audience: 'Engineers and IT professionals new to Azure who want a solid working foundation before diving into a production workload.',
    intro: 'We start from first principles — subscriptions, resource groups, regions — and build up to a real architecture decision by the end of the session.',
    closing: 'You will leave with a working mental model of Azure and the confidence to spin up and manage your first real workload.',
    speakerRole: 'Cloud Solutions Architect',
    agenda: [
      'Azure fundamentals: subscriptions, resource groups, and regions',
      'Core compute, storage, and networking services',
      'Identity and access management with Entra ID',
      'Architecting your first cloud workload',
    ],
    agendaDetails: [
      'How Azure organises resources, why regions matter for latency and compliance, and how to structure subscriptions so costs and access stay manageable as you grow.',
      'A practical tour of virtual machines, App Service, Blob Storage, and Azure Virtual Network — what each is for and when to reach for it.',
      'Setting up users, groups, and role-based access control with Entra ID so the right people have the right access from day one.',
      'Putting it together: a guided walkthrough of designing and deploying a simple, production-ready workload end to end.',
    ],
  },
  {
    id: 2,
    level: 'Deep Dive',
    title: 'Kubernetes on AKS',
    desc: 'Go deep on Azure Kubernetes Service. Cover cluster design, workload scheduling, autoscaling, and production-grade observability for containerised applications.',
    date: '31 May 2025',
    duration: '4 hours',
    language: 'English',
    format: 'Online',
    tags: ['Kubernetes', 'AKS'],
    audience: 'Platform and DevOps engineers running (or planning to run) containerised workloads on Azure Kubernetes Service.',
    intro: 'This is a hands-on, cluster-first session — we design a real AKS topology together and stress-test the decisions that matter in production.',
    closing: 'You will leave with an AKS reference architecture you can adapt to your own workloads, plus the observability setup to trust it in production.',
    speakerRole: 'Platform Engineer',
    agenda: [
      'AKS cluster design and node pool strategy',
      'Workload scheduling, autoscaling, and resource limits',
      'Networking, ingress, and service mesh options',
      'Production-grade observability and incident response',
    ],
    agendaDetails: [
      'Choosing node pool shapes, system vs. user pools, and multi-zone layouts that hold up under real traffic and failure conditions.',
      'How the scheduler places workloads, when to use the Horizontal Pod Autoscaler and cluster autoscaler, and setting resource requests/limits that prevent noisy-neighbour issues.',
      'Comparing ingress controllers and evaluating when a service mesh (Istio, Linkerd) earns its complexity.',
      'Wiring up Container Insights, Prometheus, and alerting so you know about problems before your users do.',
    ],
  },
  {
    id: 3,
    level: 'Special',
    title: 'AI Agents & RAG on Azure',
    desc: 'Build production-ready AI Agents powered by GPT-4o and Azure AI Search. Implement Retrieval-Augmented Generation pipelines connected to your own data.',
    date: '7 Jun 2025',
    duration: '3 hours',
    language: 'English',
    format: 'Online',
    tags: ['AI', 'RAG', 'GPT-4o'],
    audience: 'Developers and architects building AI-powered products who want a production-ready RAG pattern, not a demo.',
    intro: 'We build a working RAG pipeline live, end to end, using your own document set as the example data — not a toy dataset.',
    closing: 'You will leave with a working RAG pipeline pattern, an evaluation checklist, and a clear view of what changes between a demo and a production system.',
    speakerRole: 'AI Engineer',
    agenda: [
      'Designing an agent architecture around GPT-4o',
      'Indexing your own data with Azure AI Search',
      'Building a Retrieval-Augmented Generation pipeline',
      'Evaluation, guardrails, and deployment considerations',
    ],
    agendaDetails: [
      'Where an agent needs tools vs. plain completion, and how to structure prompts and function calls around GPT-4o reliably.',
      'Chunking strategy, embeddings, and configuring Azure AI Search indexes so retrieval quality holds up on real documents.',
      'Connecting retrieval to generation: prompt assembly, citation handling, and keeping answers grounded in your data.',
      'Testing for hallucination and drift, adding guardrails, and what changes when you move a RAG pipeline from prototype to production.',
    ],
  },
  {
    id: 4,
    level: 'Basic',
    title: 'DevOps on Azure Bootcamp',
    desc: 'Set up CI/CD pipelines with Azure DevOps and GitHub Actions. Automate builds, tests, and deployments to Azure with infrastructure-as-code using Bicep and Terraform.',
    date: '14 Jun 2025',
    duration: '3 hours',
    language: 'English',
    format: 'Online',
    tags: ['DevOps', 'CI/CD'],
    audience: 'Engineering teams looking to automate their build, test, and deployment pipeline on Azure.',
    intro: 'We build a real pipeline from a blank repository — commit, build, test, and deploy to Azure — using tooling you can keep using after the session.',
    closing: 'You will leave with a working CI/CD pipeline template and the infrastructure-as-code to reproduce it for every project after this one.',
    speakerRole: 'DevOps Engineer',
    agenda: [
      'CI/CD pipeline design with Azure DevOps and GitHub Actions',
      'Automated builds, testing, and release gates',
      'Infrastructure-as-code with Bicep and Terraform',
      'Rollback strategies and deployment safety nets',
    ],
    agendaDetails: [
      'Comparing Azure DevOps Pipelines and GitHub Actions, and structuring a pipeline that fits your team\'s existing workflow.',
      'Automating unit and integration tests, and setting up approval gates so nothing ships without passing checks.',
      'Defining your infrastructure in Bicep and Terraform so environments are reproducible and reviewable like any other code.',
      'Blue-green deployments, automated rollbacks, and the monitoring hooks that catch a bad release before it becomes an incident.',
    ],
  },
  {
    id: 5,
    level: 'Deep Dive',
    title: 'Cloud-Native Architecture',
    desc: 'Design scalable, resilient microservices on Azure. Cover event-driven patterns, service mesh, distributed tracing, and zero-downtime deployment strategies.',
    date: '21 Jun 2025',
    duration: '4 hours',
    language: 'English',
    format: 'Online',
    tags: ['Architecture', 'Microservices'],
    audience: 'Architects and senior engineers designing or scaling a microservices estate on Azure.',
    intro: 'We work through a real architecture review — drawing service boundaries, tracing a request end to end, and finding the failure points before your users do.',
    closing: 'You will leave with a reference architecture and a checklist for reviewing your own service boundaries and deployment strategy.',
    speakerRole: 'Solutions Architect',
    agenda: [
      'Microservice boundaries and event-driven patterns',
      'Service mesh and inter-service communication',
      'Distributed tracing and observability',
      'Zero-downtime deployment strategies',
    ],
    agendaDetails: [
      'How to draw service boundaries around business capabilities, and when an event-driven pattern beats direct service-to-service calls.',
      'What a service mesh actually buys you — traffic management, mTLS, retries — and when plain HTTP is simpler and good enough.',
      'Instrumenting a request end to end so you can see exactly where time and failures happen across services.',
      'Blue-green and canary releases, feature flags, and the database migration patterns that make zero-downtime deploys possible.',
    ],
  },
  {
    id: 6,
    level: 'Special',
    title: 'Azure Security & Compliance',
    desc: 'Harden your Azure environment. Implement Zero Trust, manage identities with Entra ID, configure Defender for Cloud, and meet compliance requirements in regulated industries.',
    date: '28 Jun 2025',
    duration: '3 hours',
    language: 'English',
    format: 'Online',
    tags: ['Security', 'Compliance'],
    audience: 'Azure professionals, administrators, and architects responsible for securing a cloud environment in a regulated industry.',
    intro: 'We audit a live Azure environment together, apply Zero Trust controls step by step, and map every change back to a real compliance requirement.',
    closing: 'You will leave with a Zero Trust checklist for your own environment and a clear map from technical controls to compliance requirements.',
    speakerRole: 'Security Architect',
    agenda: [
      'Zero Trust principles applied to Azure',
      'Identity and access management with Entra ID',
      'Configuring Microsoft Defender for Cloud',
      'Meeting regulatory compliance requirements (GDPR and more)',
    ],
    agendaDetails: [
      'Translating "never trust, always verify" into concrete Azure controls: conditional access, least privilege, and network segmentation.',
      'Hardening identity with Entra ID: Multi-Factor Authentication, Privileged Identity Management, and reducing your Identity Secure Score gaps.',
      'Turning on and tuning Microsoft Defender for Cloud so it surfaces real risk instead of noise.',
      'Mapping technical controls to GDPR, ISO 27001, and SOC 2 requirements so your compliance evidence is audit-ready.',
    ],
  },
];

export function getWorkshopById(id: number): Workshop | undefined {
  return workshops.find((w) => w.id === id);
}
