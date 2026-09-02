import { Constants } from '@/Constants';

/* Searchable site pages (services, solutions, company) — shared by the
   navbar search and the homepage hero search */
export const SITE_PAGES: { title: string; desc: string; url: string }[] = [
  { title: 'Custom Development',        desc: 'Web & app development, APIs, backend and frontend engineering', url: '/services/custom-development' },
  { title: 'Design',                    desc: 'UX research, UI design, design systems and prototyping',          url: '/services/design' },
  { title: 'AI Agents & RAG',           desc: 'AI agents, LLM integration and RAG pipelines on Azure',           url: '/services/ai-agents-rag' },
  { title: 'Cloud Architecture',        desc: 'Cloud-native architecture, microservices and system design',       url: '/cloud-software-architecture' },
  { title: 'Migrate to Azure',          desc: 'Low-risk cloud migration and modernisation',                       url: '/migrate-to-azure' },
  { title: 'Cloud Native Development',  desc: 'Kubernetes, microservices and CI/CD development',                   url: '/cloud-native-sd' },
  { title: 'DevOps on Azure',           desc: 'CI/CD pipelines and infrastructure-as-code',                       url: '/devops-on-azure' },
  { title: 'Data Lifecycle Management', desc: 'Data platforms, analytics and Power BI',                           url: '/data-lifecycle-management' },
  { title: 'Managed Services',          desc: 'Ongoing cloud managed services and support',                       url: '/managed-services' },
  { title: 'Payment Automation',        desc: 'Recurring billing, payments and reconciliation',                   url: '/payment-automation' },
  { title: 'NativeInvoice',             desc: 'Multi-tenant e-invoicing connected to the UJP e-Invoice system',   url: '/native-invoice' },
  { title: 'AI Legal Workspace',        desc: 'AI document and case workflows for legal teams',                   url: '/ai-legal-workspace' },
  { title: 'Airline & Travel Booking',  desc: 'GDS-connected airline and travel booking platform',                url: '/airline-booking' },
  { title: 'AI Accelerator',            desc: 'Adopt Azure AI services from use case to production',              url: '/solutions/ai-accelerator' },
  { title: 'GitHub Accelerator',        desc: 'GitHub Copilot adoption, migration and DevSecOps',                 url: '/solutions/github-accelerator' },
  { title: 'Nearshore Teams',           desc: 'Dedicated nearshore engineering and delivery teams',               url: '/nearshore-teams' },
  { title: 'Solutions',                 desc: 'All services and solutions',                                       url: Constants.PAGES.SOLUTIONS },
  { title: 'Case Studies',              desc: 'Client results and success stories',                               url: Constants.PAGES.CASE_STUDIES },
  { title: 'Workshops',                 desc: 'Azure, Kubernetes and AI training',                                url: Constants.PAGES.WORKSHOPS },
  { title: 'Knowledge Base',            desc: 'Guides, tutorials and articles',                                   url: Constants.PAGES.KNOWLEDGE_BASE },
  { title: 'Careers',                   desc: 'Open positions and jobs',                                          url: Constants.PAGES.CAREERS },
  { title: 'About Us',                  desc: 'Our team, mission and partners',                                   url: Constants.PAGES.ABOUT_US },
];
