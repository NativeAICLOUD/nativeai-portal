/*
 * Microsoft Frontier Tour 2027 sessions shown on the AI Accelerator page.
 * New sessions land almost every week — add one object to the TOP of this list
 * (newest first) and the page picks it up. Keep wording about what WE build with
 * the technology; don't imply Microsoft endorses NativeCloud.
 */

export type FrontierSession = {
  /** Session code from the repo name, e.g. "ILL392". */
  code: string;
  title: string;
  /** One or two sentences: the business problem and what gets built. */
  summary: string;
  /** Plain-language "what it means for you" — one sentence a non-technical buyer understands. */
  explainer: string;
  /** What we can deliver for a client with this — 3 to 5 short lines. */
  capabilities: string[];
  /** Short technology names shown as chips. */
  tech: string[];
  repo: string;
  /** Optional full session page at /solutions/ai-accelerator/frontier-tour/<code>. */
  detail?: FrontierDetail;
};

export type FrontierDetail = {
  /** Who the agent is for and the decision it supports. */
  scenario: string[];
  architecture?: { src: string; alt: string; caption: string };
  /** Capability → what it does for the agent. */
  builds: { capability: string; does: string }[];
  /** The lab, part by part; each step is one short action. */
  parts: { title: string; summary: string; steps: string[]; image?: { src: string; alt: string } }[];
  /** Session timing as presented. */
  runOfShow: { time: string; what: string }[];
  links: { label: string; href: string }[];
  /** Attribution for adapted content and images (the repo's docs are CC BY-SA 4.0). */
  credit: string;
};

export const frontierSessions: FrontierSession[] = [
  {
    code: 'BRK240',
    title: 'Context-aware agents with Microsoft IQ',
    summary:
      "One agent grounded in all of a company's context — its data, its documents, its people's work and the live web — shown as a supplier-assurance agent that decides on supplier performance and policy.",
    explainer:
      "Your agent answers like a colleague who knows your business: it checks your numbers, your contracts, the latest emails and today's news before it acts — under your security rules.",
    capabilities: [
      'Business data grounding with Fabric IQ (Fabric & OneLake)',
      'Policy and contract knowledge with Foundry IQ',
      'Microsoft 365 mailbox and work context with Work IQ',
      'Real-time external signals with Web IQ',
      'Governed Agent 365 autopilot: identity, on-behalf-of auth, observability',
    ],
    tech: ['Microsoft IQ', 'Microsoft Foundry', 'Agent 365', 'Microsoft Fabric', 'OneLake'],
    repo: 'https://github.com/microsoft/frontiertour27-BRK240-building-context-aware-agents-with-microsoft-iq',
  },
  {
    code: 'LTG232',
    title: 'Agent development beyond Hello World',
    summary:
      'Take an agent from first prompt to production: configure, debug, test and deploy it end to end inside VS Code, shown on a pharmaceutical (Caldova) agent.',
    explainer:
      'Not a demo that breaks next week — an agent that is tested, debuggable and ready to run in production.',
    capabilities: [
      'Agent configuration and tool wiring in VS Code',
      'Step-through debugging of agent runs and tool calls',
      'Integration testing against real business scenarios',
      'Production-ready deployment to Microsoft Foundry',
    ],
    tech: ['GitHub Copilot', 'Microsoft Foundry', 'Foundry Toolkit', 'VS Code'],
    repo: 'https://github.com/microsoft/frontiertour27-LTG232-agent-development-beyond-hello-world',
  },
  {
    code: 'ILL392',
    title: 'Agentic AI Postgres apps on Azure HorizonDB',
    summary:
      'One Postgres database as the relational store, search engine, vector database, graph and long-term agent memory — powering a compliance advisor agent that finds precedent and cites its evidence.',
    explainer:
      'Your agent finds the right answer in your own records and shows where it came from — with fewer systems to buy and run.',
    capabilities: [
      'Hybrid search: BM25 keywords + DiskANN vector similarity',
      'Citation and relationship graphs with Apache AGE',
      'In-database AI extraction of facts with azure_ai',
      'Long-term agent memory with Mem0, stored in Postgres',
      'Agents that combine internal data with external APIs',
    ],
    tech: ['Azure HorizonDB', 'Microsoft Agent Framework', 'Azure OpenAI', 'pgvector', 'Apache AGE', 'Mem0'],
    repo: 'https://github.com/microsoft/frontiertour27-ILL392-build-agentic-ai-postgres-apps-on-azure-horizondb',
    detail: {
      scenario: [
        "Caldova's compliance manager needs to know whether an issue has precedent, what evidence supports the conclusion, what the risk is, and whether the business can go ahead. The session builds the evidence-gathering core of that Compliance Advisor Agent: find similar issues, connect related cases, and extract facts for review.",
        'The worked example uses Washington State court cases and a Seattle property-flooding dispute. The domain is different, but the decision pattern is the same: retrieve precedent, gather supporting evidence, and keep a human accountable for the recommendation.',
        'Microsoft Agent Framework connects the Azure OpenAI model to five tools. The agent picks the tools, supplies their inputs and uses the evidence they return to draft an answer — and every tool call is visible.',
      ],
      architecture: {
        src: '/img/frontier-tour/ill392/architecture.png',
        alt: 'Compliance Advisor Agent architecture: VS Code and Jupyter code base, Microsoft Agent Framework tools, Mem0 memory, Azure OpenAI, a two-node Azure HorizonDB cluster with Apache AGE and the Azure AI extension, and the Open-Meteo weather service',
        caption: 'The agent, its five tools and Mem0 memory all sit on a two-node Azure HorizonDB cluster; Azure OpenAI provides chat and embeddings, Open-Meteo the external weather evidence.',
      },
      builds: [
        { capability: 'BM25 full-text search (pg_textsearch)', does: 'Finds opinions that match the relevant legal terms.' },
        { capability: 'Vector search (pgvector + DiskANN)', does: 'Finds semantically similar cases, filtered by court and year.' },
        { capability: 'Graph queries (Apache AGE)', does: 'Follows citations to related court decisions.' },
        { capability: 'In-database AI (azure_ai.extract)', does: 'Calls Azure OpenAI from SQL to pull out rulings, issues, cited laws and outcomes.' },
        { capability: 'External evidence (Open-Meteo)', does: 'Fetches historical rainfall for the place and dates in the question.' },
        { capability: 'Long-term memory (Mem0)', does: 'Keeps selected facts in HorizonDB for later turns of the conversation.' },
        { capability: 'Gradio chat app', does: 'Shows the conversation, every tool call and memory update side by side.' },
      ],
      parts: [
        {
          title: 'Part 0 — Set up the Azure resources',
          summary: 'Sign in to Azure and check the two resources the lab uses.',
          steps: [
            'Open the Azure portal and sign in.',
            'Select View all resources.',
            'Find the Azure HorizonDB cluster and the Azure OpenAI resource used in the lab.',
          ],
        },
        {
          title: 'Part 1 — Connect HorizonDB to VS Code',
          summary: 'Use the VS Code extension for PostgreSQL to connect, explore and query the database.',
          steps: [
            'Open the lab folder in VS Code and review the .env file with the connection settings.',
            'Open the PostgreSQL extension (elephant icon) and choose Add Connection.',
            'Fill in the HorizonDB details, Test Connection, then Save & Connect.',
            'Open the connection Dashboard: wait events, disk I/O, transactions and storage.',
            'Open a New Query on the postgres database and run a first SQL statement.',
          ],
        },
        {
          title: 'Part 2 — Prepare the data (notebook 1)',
          summary: 'Turn raw court cases into relational rows, vectors, indexes and a citation graph — all in one database.',
          steps: [
            'Load the Python libraries and read the connection settings.',
            'Enable the HorizonDB extensions: vector, pg_textsearch, age, pg_diskann, azure_ai.',
            'Register the chat and embedding models (lab-chat, lab-embedding).',
            'Load the court cases from CSV and check the rows.',
            'Add a vector column and generate an embedding for every opinion.',
            'Build the citation graph with Apache AGE (one node per case).',
            'Build and test the BM25 full-text index.',
            'Build the DiskANN vector index.',
            'Visualise the relational schema and the citation graph.',
          ],
          image: { src: '/img/frontier-tour/ill392/citation-graph.png', alt: 'Citation graph of court cases built with Apache AGE' },
        },
        {
          title: 'Part 3 — Build and try the agent (notebook 2)',
          summary: 'Give the agent one tool at a time, compare the answers, then add memory, a chat UI and a failover test.',
          steps: [
            'Define the BM25 keyword search tool, test it, and give it to the agent.',
            'Add the vector search tool and compare BM25 and vector results — then use both (hybrid search).',
            'Add the Apache AGE graph tool to expand results with cited precedent.',
            'Add the in-database AI extraction tool so the answer includes extracted facts.',
            'Add the external weather tool and run the agent with all five tools.',
            'Add long-term memory with Mem0.',
            'Use the Gradio chat app and send four connected messages.',
            'Force a database failover and watch the app recover.',
          ],
          image: { src: '/img/frontier-tour/ill392/chat-app.png', alt: 'Chat app showing the agent answer, the five-tool trace and Mem0 long-term memory' },
        },
      ],
      runOfShow: [
        { time: '00:00 – 02:00', what: 'Introduction and overview' },
        { time: '02:00 – 15:00', what: 'The Caldova scenario and key concepts' },
        { time: '15:00 – 70:00', what: 'Hands-on lab steps' },
        { time: '70:00 – 75:00', what: 'Wrap-up and Q&A' },
      ],
      links: [
        { label: 'Session recording', href: 'https://aka.ms/ft27/ill392/youtube' },
        { label: 'Lab repository on GitHub', href: 'https://github.com/microsoft/frontiertour27-ILL392-build-agentic-ai-postgres-apps-on-azure-horizondb' },
        { label: 'Frontier Tour 2027 resource center', href: 'https://aka.ms/FrontierTour27' },
        { label: 'GraphRAG for Azure Database for PostgreSQL', href: 'https://aka.ms/pg-graphrag' },
      ],
      credit:
        'Scenario, steps and diagrams adapted from the Microsoft Frontier Tour 2027 lab ILL392 (© Microsoft, CC BY-SA 4.0). Sample data is a learning example, not legal advice.',
    },
  },
];
