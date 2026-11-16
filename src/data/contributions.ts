/*
 * Community contributions shown on /contributions.
 *
 * ── HOW TO ADD ONE ──
 * Add an entry to the matching list below. Only `title` is required.
 * A group with no entries is hidden on the page, so leave a list empty
 * until you have something real to put in it.
 *
 * Knowledge-base articles are NOT listed here — the page reads them
 * automatically from public/blogs.json.
 */

export type Contribution = {
  title: string;
  /** Event, organisation, publication or repository it belongs to. */
  where?: string;
  /** ISO date (YYYY-MM-DD), a month ("2025-03") or just a year ("2025"). Used for sorting and display. */
  date?: string;
  /** One sentence on what you did. */
  summary?: string;
  /** Public link that proves it: event page, recording, repo, post. */
  url?: string;
};

export type ContributionGroup = {
  key: string;
  label: string;
  blurb: string;
  /** True for lists that are not contributions (recognition, attendance): rendered after the articles and left out of the count. */
  notCounted?: boolean;
  items: Contribution[];
};

export const CONTRIBUTION_GROUPS: ContributionGroup[] = [
  {
    key: 'community',
    label: 'Community leadership',
    blurb: 'User groups, meetups and communities organised or led.',
    items: [
      {
        title: 'Lead, Global AI Community Skopje',
        where: 'Global AI Community',
        summary: 'Leading the Skopje chapter and working with international technology communities and product teams.',
      },
    ],
  },
  {
    key: 'talks',
    label: 'Talks & workshops',
    blurb: 'Conference sessions, meetup talks and hands-on workshops.',
    items: [],
  },
  {
    key: 'open-source',
    label: 'Open source & samples',
    blurb: 'Repositories, samples and code shared with the community.',
    items: [],
  },
  {
    key: 'media',
    label: 'Posts, videos & podcasts',
    blurb: 'Writing and appearances published outside this site.',
    items: [
      {
        // TODO: add the post's date and its LinkedIn URL.
        title: 'Claude Opus 5 in Microsoft Foundry: what it means for teams building on Azure',
        where: 'LinkedIn carousel',
        summary: 'An overview of the main capabilities, where Claude Opus 5 fits in a Microsoft-based architecture, and what developers should consider when using it through Foundry.',
      },
      {
        // TODO: add the post's date and its LinkedIn URL.
        title: 'Infrastructure as Code on Azure: tools and 10 best practices',
        where: 'LinkedIn post',
        summary: 'Why manual Azure setup does not scale, how to choose between Bicep, Terraform and Pulumi, and the practices that keep dev, staging and production consistent.',
      },
      {
        // TODO: add the post's date and its LinkedIn URL.
        title: 'Microsoft.Extensions.AI: unified AI abstractions for .NET',
        where: 'LinkedIn post',
        summary: 'A first look at the new library: how it grew out of Semantic Kernel, what its abstractions for chat, embeddings and tool calling offer, and the reference implementations for OpenAI, Azure AI and Ollama.',
      },
      {
        // TODO: add the post's date and its LinkedIn URL.
        title: '.NET Aspire highlights for cloud-native development',
        where: 'LinkedIn post',
        summary: 'Seven things .NET Aspire brings to cloud-native .NET: container orchestration, simpler microservices, built-in DevOps tooling, security, cross-cloud compatibility and monitoring.',
      },
      {
        // TODO: add the post's date and its LinkedIn URL.
        title: 'Azure security best practices',
        where: 'LinkedIn post',
        summary: 'A checklist across identity and access, network security, secrets, and data and operational security: Zero Trust, MFA, least-privilege RBAC, Azure Bastion, Key Vault and managed identities.',
      },
      {
        // TODO: add the post's date and its LinkedIn URL.
        title: 'Azure security in three layers: Network, Workloads and Secrets',
        where: 'LinkedIn carousel',
        summary: 'What each security layer protects, how the layers work together to reduce risk, and why each needs to be protected independently.',
      },
    ],
  },
  {
    // Recognition, not contributions: shown after the articles and left out of the contribution count.
    key: 'recognition',
    label: 'Recognition',
    blurb: 'Where my work has been featured or acknowledged.',
    notCounted: true,
    items: [
      {
        // TODO: add the date and a link to the university's feature.
        title: 'Featured among the Computer Science success stories',
        where: 'University of Tetova',
        summary: 'Selected by the university as one of its Computer Science success stories, on International Programmers’ Day.',
      },
    ],
  },
  {
    // Certifications, not contributions: shown after the articles and left out of the contribution count.
    key: 'certifications',
    label: 'Microsoft certifications',
    blurb: 'Exams and certifications earned from Microsoft.',
    notCounted: true,
    items: [
      { title: 'Microsoft Certified: DevOps Engineer Expert', where: 'Microsoft', date: '2023-08' },
      { title: 'Microsoft Certified: Azure Developer Associate', where: 'Microsoft', date: '2023-05' },
      { title: 'Microsoft Certified: Azure DevOps Engineer (AZ-400)', where: 'Microsoft', date: '2021-01' },
      { title: 'MCSD: Microsoft Certified Solutions Developer for Microsoft .NET', where: 'Microsoft', date: '2017-09' },
      { title: 'MCSD: Microsoft Certified Solutions Developer, App Builder', where: 'Microsoft', date: '2017-09' },
      { title: 'Developing Microsoft Azure and Web Services', where: 'Microsoft', date: '2017-07' },
      { title: 'MCSA: Developing ASP.NET MVC Web Applications', where: 'Microsoft', date: '2017-03' },
      { title: 'MCPS: Microsoft Certified Professional', where: 'Microsoft', date: '2016-08' },
    ],
  },
  {
    // Attendance, not contributions: shown last and left out of the contribution count.
    key: 'events',
    label: 'Events attended',
    blurb: 'Microsoft and community events I took part in as an attendee.',
    notCounted: true,
    items: [
      // TODO: add dates (and event links) for both.
      {
        title: 'Build Zurich',
        where: 'Microsoft · Zurich, Switzerland',
        summary: 'A day of sessions and hands-on discussions on AI agents, MCP, Work IQ, Fabric IQ and Foundry IQ, with the ideas brought back to the Global AI Community in Skopje.',
      },
      { title: 'Shaping the Future with AI', where: 'Microsoft · The Circle, Zurich, Switzerland' },
      {
        title: 'Microsoft AI Tour Frankfurt 2025',
        where: 'Microsoft · Frankfurt, Germany',
        date: '2025-11-06',
        url: 'https://www.microsoft.com/de-de/techwiese/news/microsoft-ai-tour-frankfurt-2025.aspx',
      },
      { title: '.NET Summer', where: 'Vienna, Austria' },
      {
        title: 'Generative AI in solutions with Python & .NET',
        where: '.NET Zurich meetup · Zurich, Switzerland',
        summary: 'Sessions on integrating large language models into Python and .NET applications through data APIs.',
      },
      {
        title: 'Azure Developer Community Day 2024 München',
        where: 'Microsoft Deutschland · Munich, Germany',
        date: '2024-12-03',
        url: 'https://muc24.azuredev.org/en/',
        summary: 'Sessions and conversations on Azure, Semantic Kernel, LLMs and agentic AI.',
      },
    ],
  },
];
