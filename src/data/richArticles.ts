const richArticles: Record<number, RichSection[]> = {
  5: [
    {
      id: 'introduction',
      heading: 'Introduction: Production AKS is Different',
      blocks: [
        { type: 'paragraph', text: 'Running Kubernetes in a demo is straightforward. A single node pool, default settings, and a few kubectl apply commands and you have something working. Production is a different challenge entirely. The configuration decisions you make when provisioning a cluster are often difficult and costly to change later — node pool architecture, networking model, identity strategy, and autoscaling configuration all have long-term implications.' },
        { type: 'paragraph', text: 'AKS abstracts the Kubernetes control plane, but everything else is your responsibility: node sizing, pod resource limits, network policies, secret management, and high availability. This guide covers the production best practices we apply on every AKS cluster we deploy — not theory, but the specific configuration choices that prevent incidents.' },
        { type: 'quote', text: 'The most expensive AKS mistakes are not the ones that cause outages — they are the configuration decisions made in week one that force a cluster rebuild in month six. Get the foundations right from the start.' },
        {
          type: 'list',
          ordered: false,
          items: [
            'Separate system and user node pools to protect cluster-critical components from noisy workloads.',
            'Set resource requests and limits on every pod — without them, one bad deployment can starve the entire node.',
            'Use Pod Disruption Budgets to guarantee availability during node upgrades and autoscaling events.',
            'Replace pod-managed identities with Azure Workload Identity — the deprecated approach is a security risk.',
            'Deploy across availability zones for resilience against single datacenter failures.',
          ],
        },
      ],
    },
    {
      id: 'cluster-configuration',
      heading: 'Cluster Configuration Best Practices',
      blocks: [
        { type: 'heading3', text: 'Separate system and user node pools' },
        { type: 'paragraph', text: 'AKS requires at least one system node pool to run cluster-critical components: CoreDNS, the metrics server, and the kube-proxy. If a workload on the same node pool consumes all available CPU or memory, these components are evicted and the cluster becomes unstable. Always separate system and user node pools.' },
        {
          type: 'code',
          language: 'yaml',
          code: `# System node pool — cluster-critical components only
az aks nodepool add \\
  --cluster-name myAKSCluster \\
  --resource-group myRG \\
  --name system \\
  --mode System \\
  --node-count 3 \\
  --node-vm-size Standard_D2s_v3 \\
  --zones 1 2 3 \\
  --node-taints CriticalAddonsOnly=true:NoSchedule

# User node pool — application workloads
az aks nodepool add \\
  --cluster-name myAKSCluster \\
  --resource-group myRG \\
  --name apps \\
  --mode User \\
  --node-count 3 \\
  --node-vm-size Standard_D4s_v3 \\
  --zones 1 2 3 \\
  --enable-cluster-autoscaler \\
  --min-count 2 \\
  --max-count 10`,
        },
        { type: 'heading3', text: 'Resource requests and limits' },
        { type: 'paragraph', text: 'Kubernetes schedules pods based on resource requests — the guaranteed minimum CPU and memory a pod needs. Without requests, the scheduler places pods arbitrarily, leading to overloaded nodes and evictions. Without limits, a single runaway pod can consume an entire node\'s resources.' },
        {
          type: 'code',
          language: 'yaml',
          code: `# Every container must have requests and limits defined
spec:
  containers:
    - name: api
      image: myregistry.azurecr.io/api:1.0.0
      resources:
        requests:
          cpu: 100m       # 0.1 CPU cores guaranteed
          memory: 128Mi   # 128 MB guaranteed
        limits:
          cpu: 500m       # max 0.5 CPU cores
          memory: 256Mi   # max 256 MB — OOMKilled if exceeded`,
        },
        { type: 'paragraph', text: 'Use a LimitRange in each namespace to enforce default requests and limits for pods that do not specify them. This prevents a missing resources block from silently deploying with no constraints.' },
        {
          type: 'code',
          language: 'yaml',
          code: `apiVersion: v1
kind: LimitRange
metadata:
  name: default-limits
  namespace: production
spec:
  limits:
    - type: Container
      default:
        cpu: 200m
        memory: 256Mi
      defaultRequest:
        cpu: 100m
        memory: 128Mi`,
        },
        { type: 'heading3', text: 'Pod Disruption Budgets' },
        { type: 'paragraph', text: 'During node upgrades, autoscaling scale-down events, or voluntary evictions, Kubernetes may need to terminate pods. Without a Pod Disruption Budget (PDB), it can terminate all replicas of a deployment simultaneously — causing a full outage. A PDB guarantees that a minimum number of pods remain available during disruption.' },
        {
          type: 'code',
          language: 'yaml',
          code: `apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: api-pdb
  namespace: production
spec:
  minAvailable: 2        # at least 2 pods must remain running
  selector:
    matchLabels:
      app: api`,
        },
        { type: 'heading3', text: 'Network Policies for micro-segmentation' },
        { type: 'paragraph', text: 'By default, every pod in a Kubernetes cluster can communicate with every other pod. In production, apply Network Policies to restrict traffic to only what is explicitly needed — deny all, then allow specific paths.' },
        {
          type: 'code',
          language: 'yaml',
          code: `# Deny all ingress by default for a namespace
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-all-ingress
  namespace: production
spec:
  podSelector: {}
  policyTypes: [Ingress]
---
# Allow ingress to the API only from the ingress controller
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-ingress-to-api
  namespace: production
spec:
  podSelector:
    matchLabels:
      app: api
  ingress:
    - from:
        - namespaceSelector:
            matchLabels:
              kubernetes.io/metadata.name: ingress-nginx`,
        },
      ],
    },
    {
      id: 'workload-identity-secrets',
      heading: 'Workload Identity and Secret Management',
      blocks: [
        { type: 'paragraph', text: 'Applications running on AKS frequently need to access other Azure services: Key Vault for secrets, Storage for files, Service Bus for messaging. The wrong way to do this is to put service principal credentials in environment variables or Kubernetes Secrets (which are only base64-encoded, not encrypted at rest by default). The right way is Azure Workload Identity.' },
        { type: 'heading3', text: 'Azure Workload Identity' },
        { type: 'paragraph', text: 'Azure Workload Identity allows a Kubernetes pod to authenticate to Azure services using a federated identity — no client secrets, no certificates, no credentials to rotate. The pod\'s Kubernetes service account is linked to an Azure Managed Identity via OIDC federation. When the pod calls an Azure SDK, it automatically gets a token.' },
        {
          type: 'code',
          language: 'yaml',
          code: `# 1. Annotate the Kubernetes service account with the managed identity client ID
apiVersion: v1
kind: ServiceAccount
metadata:
  name: api-service-account
  namespace: production
  annotations:
    azure.workload.identity/client-id: "<managed-identity-client-id>"

---
# 2. Label the pod to use workload identity
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api
spec:
  template:
    metadata:
      labels:
        azure.workload.identity/use: "true"
    spec:
      serviceAccountName: api-service-account
      containers:
        - name: api
          image: myregistry.azurecr.io/api:1.0.0`,
        },
        {
          type: 'code',
          language: 'csharp',
          code: `// In the application — DefaultAzureCredential picks up the workload identity token automatically
using Azure.Identity;
using Azure.Security.KeyVault.Secrets;

var client = new SecretClient(
    new Uri("https://my-keyvault.vault.azure.net/"),
    new DefaultAzureCredential()   // uses workload identity when running on AKS
);

var secret = await client.GetSecretAsync("DatabaseConnectionString");`,
        },
        { type: 'heading3', text: 'Secrets Store CSI Driver' },
        { type: 'paragraph', text: 'The Secrets Store CSI Driver mounts Azure Key Vault secrets directly into pods as files or environment variables, keeping secrets out of Kubernetes Secret objects entirely. Secrets are fetched from Key Vault at pod startup and automatically rotated when they change.' },
        {
          type: 'code',
          language: 'yaml',
          code: `apiVersion: secrets-store.csi.x-k8s.io/v1
kind: SecretProviderClass
metadata:
  name: keyvault-secrets
  namespace: production
spec:
  provider: azure
  parameters:
    usePodIdentity: "false"
    clientID: "<managed-identity-client-id>"
    keyvaultName: "my-keyvault"
    tenantId: "<tenant-id>"
    objects: |
      array:
        - |
          objectName: DatabaseConnectionString
          objectType: secret
        - |
          objectName: ApiKey
          objectType: secret`,
        },
      ],
    },
    {
      id: 'high-availability-autoscaling',
      heading: 'High Availability and Autoscaling',
      blocks: [
        { type: 'paragraph', text: 'A production AKS cluster must survive the failure of a single node, availability zone, or even a temporary Azure platform issue — without an outage. High availability on AKS is achieved through a combination of multi-zone node pools, the cluster autoscaler, and the Horizontal Pod Autoscaler.' },
        { type: 'heading3', text: 'Multi-zone node pools' },
        { type: 'paragraph', text: 'Deploy node pools across all three availability zones in your Azure region. AKS spreads nodes evenly across zones. Combined with pod anti-affinity rules that prevent multiple replicas from landing on the same zone, your application survives a full zone outage.' },
        {
          type: 'code',
          language: 'yaml',
          code: `# Force replicas to spread across availability zones
spec:
  template:
    spec:
      topologySpreadConstraints:
        - maxSkew: 1
          topologyKey: topology.kubernetes.io/zone
          whenUnsatisfiable: DoNotSchedule
          labelSelector:
            matchLabels:
              app: api`,
        },
        { type: 'heading3', text: 'Cluster Autoscaler' },
        { type: 'paragraph', text: 'The Cluster Autoscaler adds nodes when pods cannot be scheduled due to insufficient resources, and removes nodes when they are underutilised. Configure it with a sensible min/max range and tune the scale-down delay to avoid aggressive deprovisioning that causes pod churn.' },
        {
          type: 'code',
          language: 'yaml',
          code: `# Cluster autoscaler profile — applied at cluster level
az aks update \\
  --resource-group myRG \\
  --name myAKSCluster \\
  --cluster-autoscaler-profile \\
    scale-down-delay-after-add=10m \\
    scale-down-unneeded-time=10m \\
    scale-down-utilization-threshold=0.5 \\
    max-graceful-termination-sec=600`,
        },
        { type: 'heading3', text: 'Horizontal Pod Autoscaler (HPA)' },
        { type: 'paragraph', text: 'The HPA scales the number of pod replicas based on CPU utilisation, memory, or custom metrics. It works in tandem with the Cluster Autoscaler: HPA requests more pods, the autoscaler adds more nodes to accommodate them.' },
        {
          type: 'code',
          language: 'yaml',
          code: `apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: api-hpa
  namespace: production
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: api
  minReplicas: 3
  maxReplicas: 20
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70   # scale up when avg CPU > 70%
    - type: Resource
      resource:
        name: memory
        target:
          type: Utilization
          averageUtilization: 80`,
        },
        { type: 'heading3', text: 'Cluster upgrades without downtime' },
        { type: 'paragraph', text: 'AKS releases new Kubernetes versions regularly. Staying within the supported version window (N-2 minor versions) is required for Microsoft support. Use the surge upgrade feature to provision extra nodes before draining old ones — this avoids capacity constraints during upgrades and, combined with PDBs, ensures zero-downtime rolling upgrades.' },
        { type: 'cta', title: 'Want us to review your AKS configuration?', desc: 'We audit production AKS clusters, identify gaps in security, reliability, and cost efficiency, and provide a prioritised remediation plan.', buttonText: 'Book a cluster review', buttonUrl: '/schedule-call' },
      ],
    },
    {
      id: 'closing-thoughts',
      heading: 'Closing Thoughts',
      blocks: [
        { type: 'paragraph', text: 'Production AKS is not complicated — but it requires deliberate configuration from the start. Separate your node pools, set resource requests and limits on every pod, deploy across availability zones, and replace any pod-managed identities with Azure Workload Identity. These changes alone will make your cluster significantly more reliable, secure, and cost-efficient.' },
        { type: 'paragraph', text: 'Add Pod Disruption Budgets before you enable automatic upgrades, configure the Cluster Autoscaler with conservative scale-down settings, and use the Secrets Store CSI Driver to keep credentials out of Kubernetes Secrets. The teams that invest in these foundations in week one never have to deal with the painful cluster rebuilds that come from skipping them.' },
      ],
    },
  ],
  1: [
    {
      id: 'introduction',
      heading: 'Introduction to Azure OpenAI Service',
      blocks: [
        { type: 'paragraph', text: 'Azure OpenAI Service brings the most capable large language models — GPT-4o, GPT-4 Turbo, GPT-3.5 Turbo, and text embedding models — directly into your Azure environment. You get the same models as OpenAI\'s API, but with the enterprise controls that production workloads demand: regional data residency, private networking, Azure Active Directory authentication, content filtering, and compliance certifications.' },
        { type: 'paragraph', text: 'For organisations already running workloads on Azure, this is the natural starting point for AI features. Your data does not leave your Azure region, you manage access through the same identity platform you already use, and the service integrates with Azure Monitor, Key Vault, Private Endpoints, and your existing CI/CD pipelines.' },
        { type: 'quote', text: 'Azure OpenAI is not just OpenAI with a different URL. It is OpenAI\'s models wrapped in Azure\'s enterprise security, compliance, and networking model — the difference that matters when you are handling customer data in production.' },
        { type: 'heading3', text: 'Available models' },
        {
          type: 'list',
          ordered: false,
          items: [
            'GPT-4o — the most capable multimodal model. Accepts text and images as input. Best for complex reasoning, document analysis, and high-quality generation.',
            'GPT-4 Turbo — large context window (128k tokens). Best for long documents, summarisation, and multi-turn conversations with extensive history.',
            'GPT-3.5 Turbo — fast and cost-efficient. Best for simpler tasks, high-volume applications, and latency-sensitive use cases.',
            'text-embedding-3-large / text-embedding-ada-002 — converts text into vector embeddings for semantic search and RAG pipelines.',
            'DALL-E 3 — generates images from text prompts. Available in select regions.',
          ],
        },
      ],
    },
    {
      id: 'setting-up-azure-openai',
      heading: 'Setting Up Azure OpenAI',
      blocks: [
        { type: 'paragraph', text: 'Before you can make API calls, you need to provision an Azure OpenAI resource and deploy a model. The resource is the billing and access container; the deployment is the specific model instance your application will call.' },
        { type: 'heading3', text: 'Step 1: Request access and provision the resource' },
        { type: 'paragraph', text: 'Azure OpenAI requires an approved subscription. Submit a request through the Azure portal — approval typically takes 1–2 business days. Once approved, create the resource via the portal, Azure CLI, or Bicep.' },
        {
          type: 'code',
          language: 'bicep',
          code: `resource openAIAccount 'Microsoft.CognitiveServices/accounts@2023-05-01' = {
  name: 'openai-\${environment}'
  location: 'swedencentral'   // choose a region with your required model availability
  kind: 'OpenAI'
  sku: { name: 'S0' }
  properties: {
    publicNetworkAccess: 'Disabled'   // use Private Endpoint for production
    customSubDomainName: 'mycompany-openai'
  }
}`,
        },
        { type: 'heading3', text: 'Step 2: Deploy a model' },
        { type: 'paragraph', text: 'Model deployments are separate from the resource. Each deployment has a name (which you reference in API calls), a model version, and a tokens-per-minute (TPM) capacity limit. Deploy through Azure AI Studio or via Bicep.' },
        {
          type: 'code',
          language: 'bicep',
          code: `resource gpt4oDeployment 'Microsoft.CognitiveServices/accounts/deployments@2023-05-01' = {
  parent: openAIAccount
  name: 'gpt-4o'
  properties: {
    model: {
      format: 'OpenAI'
      name: 'gpt-4o'
      version: '2024-08-06'
    }
  }
  sku: {
    name: 'Standard'
    capacity: 30   // 30K tokens per minute
  }
}`,
        },
        { type: 'heading3', text: 'Step 3: Store credentials in Key Vault' },
        { type: 'paragraph', text: 'Never hardcode the API key or endpoint URL in your application code. Store them in Azure Key Vault and retrieve them at runtime using a managed identity — no secrets in environment variables, no secrets in source control.' },
        {
          type: 'code',
          language: 'bicep',
          code: `// Grant the app's managed identity access to read Key Vault secrets
resource kvSecretAccess 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  scope: keyVault
  name: guid(keyVault.id, appIdentityPrincipalId, 'Key Vault Secrets User')
  properties: {
    roleDefinitionId: subscriptionResourceId(
      'Microsoft.Authorization/roleDefinitions',
      '4633458b-17de-408a-b874-0445c86b69e6'  // Key Vault Secrets User
    )
    principalId: appIdentityPrincipalId
    principalType: 'ServicePrincipal'
  }
}`,
        },
      ],
    },
    {
      id: 'making-your-first-api-call',
      heading: 'Making Your First API Call',
      blocks: [
        { type: 'paragraph', text: 'The Azure OpenAI SDK is available for Python, .NET, JavaScript, and Java. The API is compatible with the OpenAI SDK — you only need to change the endpoint and add the Azure-specific deployment name.' },
        { type: 'heading3', text: 'Python' },
        {
          type: 'code',
          language: 'python',
          code: `import os
from openai import AzureOpenAI
from azure.identity import DefaultAzureCredential, get_bearer_token_provider

# Use managed identity (recommended for production)
token_provider = get_bearer_token_provider(
    DefaultAzureCredential(),
    "https://cognitiveservices.azure.com/.default"
)

client = AzureOpenAI(
    azure_endpoint=os.environ["AZURE_OPENAI_ENDPOINT"],
    azure_ad_token_provider=token_provider,
    api_version="2024-10-21"
)

response = client.chat.completions.create(
    model="gpt-4o",        # your deployment name
    messages=[
        { "role": "system", "content": "You are a helpful Azure cloud assistant." },
        { "role": "user",   "content": "Explain Azure Blob Storage in two sentences." }
    ],
    temperature=0.3,
    max_tokens=300
)

print(response.choices[0].message.content)`,
        },
        { type: 'heading3', text: '.NET / C#' },
        {
          type: 'code',
          language: 'csharp',
          code: `using Azure.AI.OpenAI;
using Azure.Identity;

var endpoint = new Uri(Environment.GetEnvironmentVariable("AZURE_OPENAI_ENDPOINT")!);

// Use managed identity — no API key required
var client = new AzureOpenAIClient(endpoint, new DefaultAzureCredential());
var chatClient = client.GetChatClient("gpt-4o");  // deployment name

var response = await chatClient.CompleteChatAsync(
    new SystemChatMessage("You are a helpful Azure cloud assistant."),
    new UserChatMessage("Explain Azure Blob Storage in two sentences.")
);

Console.WriteLine(response.Value.Content[0].Text);`,
        },
        { type: 'heading3', text: 'Streaming responses' },
        { type: 'paragraph', text: 'For user-facing applications, stream the response token by token rather than waiting for the full completion. This dramatically improves perceived responsiveness — users see text appearing immediately instead of waiting several seconds for a complete response.' },
        {
          type: 'code',
          language: 'python',
          code: `stream = client.chat.completions.create(
    model="gpt-4o",
    messages=[{ "role": "user", "content": "Write a short summary of Zero Trust security." }],
    stream=True
)

for chunk in stream:
    if chunk.choices and chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="", flush=True)`,
        },
      ],
    },
    {
      id: 'production-tips',
      heading: 'Production Tips',
      blocks: [
        { type: 'paragraph', text: 'Getting a prototype working is straightforward. Getting it reliable, cost-efficient, and safe in production requires a few more considerations.' },
        { type: 'heading3', text: 'Understand token limits and costs' },
        { type: 'paragraph', text: 'Every API call consumes tokens — both the input (prompt + context) and the output (completion). Token usage directly drives cost and determines whether you hit rate limits. GPT-4o costs significantly more per token than GPT-3.5 Turbo — profile your use case before choosing a model.' },
        {
          type: 'list',
          ordered: false,
          items: [
            'Use tiktoken (Python) or the Azure OpenAI tokenizer to estimate prompt size before sending requests.',
            'Set max_tokens on every request — without it, the model may generate a very long (and expensive) response.',
            'Cache responses for identical or near-identical prompts using Azure Cache for Redis.',
            'Use GPT-3.5 Turbo for classification, extraction, and simple Q&A — reserve GPT-4o for tasks that genuinely need it.',
          ],
        },
        { type: 'heading3', text: 'Write effective system prompts' },
        { type: 'paragraph', text: 'The system prompt defines the model\'s persona, constraints, and output format. A well-written system prompt is the single most impactful way to improve consistency and reduce hallucinations.' },
        {
          type: 'code',
          language: 'python',
          code: `system_prompt = """
You are a customer support assistant for NativeCloud, an Azure consulting company.

Rules:
- Answer only questions related to Azure and cloud infrastructure.
- If a question is outside your scope, say: "I can only help with Azure and cloud topics."
- Always be concise — maximum 3 sentences unless the user asks for detail.
- Never make up product names, prices, or features. If unsure, say so.
- Format lists using bullet points.
"""`,
        },
        { type: 'heading3', text: 'Handle rate limits and errors gracefully' },
        { type: 'paragraph', text: 'Azure OpenAI enforces tokens-per-minute (TPM) and requests-per-minute (RPM) limits per deployment. In production, implement exponential backoff with jitter when you receive a 429 (rate limit) response. Use multiple deployments or regions as fallback for high-availability applications.' },
        {
          type: 'code',
          language: 'python',
          code: `import time, random
from openai import RateLimitError

def call_with_retry(messages, max_retries=5):
    for attempt in range(max_retries):
        try:
            return client.chat.completions.create(
                model="gpt-4o",
                messages=messages
            )
        except RateLimitError:
            if attempt == max_retries - 1:
                raise
            wait = (2 ** attempt) + random.uniform(0, 1)
            time.sleep(wait)`,
        },
        { type: 'heading3', text: 'Content filtering' },
        { type: 'paragraph', text: 'Azure OpenAI has built-in content filters that block harmful input and output across categories: hate speech, violence, sexual content, and self-harm. In Azure AI Studio, configure custom filter thresholds and enable prompt shields to protect against jailbreak and indirect prompt injection attacks — especially important for customer-facing applications.' },
        { type: 'cta', title: 'Want to build an AI application on Azure?', desc: 'We help teams design and ship production-ready AI features — from first prototype to scaled, secure deployment.', buttonText: 'Schedule a call', buttonUrl: '/schedule-call' },
      ],
    },
    {
      id: 'closing-thoughts',
      heading: 'Closing Thoughts',
      blocks: [
        { type: 'paragraph', text: 'Azure OpenAI Service removes the gap between AI capability and enterprise requirements. You get GPT-4o and the full OpenAI model family with private networking, managed identity authentication, regional data residency, and the compliance certifications your organisation likely already requires.' },
        { type: 'paragraph', text: 'Start by provisioning a resource, deploying GPT-3.5 Turbo, and making your first API call in Python or .NET. Then add Key Vault for credential management, streaming for better UX, and a well-crafted system prompt. Those foundations will carry you from prototype to production.' },
      ],
    },
  ],
  8: [
    {
      id: 'zero-trust-mindset',
      heading: 'The Zero Trust Mindset',
      blocks: [
        { type: 'paragraph', text: 'Traditional perimeter-based security assumed that everything inside the corporate network was trustworthy. Build a strong wall, keep attackers out, and everything inside is safe. That model is dead. Cloud workloads span multiple regions, employees access systems from anywhere on any device, and modern attacks increasingly originate from inside the perimeter — through compromised credentials, phishing, or supply chain vulnerabilities.' },
        { type: 'paragraph', text: 'Zero Trust replaces implicit trust with continuous verification. The principle is simple: never trust, always verify. Every access request — whether it comes from inside or outside the network — must be authenticated, authorised, and validated before access is granted. No exceptions.' },
        { type: 'quote', text: 'Zero Trust is not a product you buy — it is a security posture you build. It assumes breach, operates with least privilege, and verifies explicitly. Applied consistently across identity, network, and data, it dramatically reduces the blast radius of any single compromised component.' },
        { type: 'heading3', text: 'The three Zero Trust principles' },
        {
          type: 'list',
          ordered: false,
          items: [
            'Verify explicitly — always authenticate and authorise based on all available data points: identity, location, device health, service, workload, and data classification.',
            'Use least privilege access — limit user and workload access with just-in-time and just-enough-access policies. Minimise lateral movement if an account is compromised.',
            'Assume breach — design as if attackers are already inside. Segment access, encrypt everything in transit and at rest, use analytics to detect anomalies, and have an incident response plan ready.',
          ],
        },
        { type: 'paragraph', text: 'On Azure, Zero Trust is implemented across three layers: identity and access (Microsoft Entra ID), network (Private Endpoints, NSGs, Azure Firewall), and workload visibility (Microsoft Defender for Cloud, Microsoft Sentinel). This article covers each layer with practical, implementable steps.' },
      ],
    },
    {
      id: 'identity-access-controls',
      heading: 'Identity and Access Controls',
      blocks: [
        { type: 'paragraph', text: 'Identity is the new perimeter. In a Zero Trust architecture, strong identity controls are the most impactful single investment you can make. A compromised credential with no MFA and broad permissions is a complete breach. The same credential with MFA, Conditional Access, and least-privilege RBAC is a contained incident.' },
        { type: 'heading3', text: 'Multi-Factor Authentication and Conditional Access' },
        { type: 'paragraph', text: 'Enable MFA for every user — no exceptions. In Microsoft Entra ID, use Security Defaults as a baseline or, for more control, Conditional Access policies. A strong baseline policy requires MFA when risk is detected and blocks legacy authentication protocols entirely.' },
        {
          type: 'list',
          ordered: false,
          items: [
            'Require MFA for all users — prioritise admins and service accounts first.',
            'Block legacy authentication (SMTP, POP3, IMAP) — these protocols cannot enforce MFA and are a frequent attack vector.',
            'Require compliant or Entra ID-joined devices for access to sensitive applications.',
            'Use sign-in risk and user risk policies: automatically block or require step-up authentication when Entra ID detects suspicious behaviour.',
          ],
        },
        { type: 'heading3', text: 'Privileged Identity Management (PIM)' },
        { type: 'paragraph', text: 'Permanent privileged access is one of the biggest risks in any Azure environment. A compromised Global Administrator account is a catastrophic breach. Privileged Identity Management (PIM) replaces permanent privileged roles with just-in-time access: users request elevation, provide a justification, and receive time-limited access that expires automatically.' },
        {
          type: 'code',
          language: 'json',
          code: `// PIM role assignment settings (configured via Entra ID portal or ARM)
{
  "rules": [
    {
      "ruleType": "RoleManagementPolicyExpirationRule",
      "isExpirationRequired": true,
      "maximumDuration": "PT8H"   // max 8-hour activation
    },
    {
      "ruleType": "RoleManagementPolicyNotificationRule",
      "notificationType": "Email",
      "recipientType": "Approver",
      "isDefaultRecipientsEnabled": true
    },
    {
      "ruleType": "RoleManagementPolicyApprovalRule",
      "setting": {
        "isApprovalRequired": true,
        "approvalStages": [{
          "approvalStageTimeOutInDays": 1,
          "primaryApprovers": [{ "id": "<security-team-group-id>" }]
        }]
      }
    }
  ]
}`,
        },
        { type: 'heading3', text: 'Least-privilege RBAC' },
        { type: 'paragraph', text: 'Apply Azure RBAC at the narrowest scope possible. Assign roles at the resource group level rather than the subscription, and at the resource level when dealing with sensitive assets. Never use Owner or Contributor at subscription scope for day-to-day work. Use custom roles when built-in roles are too broad.' },
        {
          type: 'code',
          language: 'bicep',
          code: `// Assign a custom least-privilege role at resource group scope
resource roleAssignment 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: guid(resourceGroup().id, principalId, roleDefinitionId)
  properties: {
    roleDefinitionId: roleDefinitionId  // custom or built-in role ID
    principalId: principalId             // managed identity or user object ID
    principalType: 'ServicePrincipal'
  }
}`,
        },
      ],
    },
    {
      id: 'network-hardening',
      heading: 'Network Hardening',
      blocks: [
        { type: 'paragraph', text: 'Network controls in Azure have shifted from perimeter firewalls to micro-segmentation and private connectivity. The goal is to eliminate public exposure for every resource that does not need it, and to ensure that traffic between services never leaves the Microsoft backbone network.' },
        { type: 'heading3', text: 'Private Endpoints' },
        { type: 'paragraph', text: 'By default, Azure services like Storage, SQL, Key Vault, and Cosmos DB have public endpoints — accessible from the internet with valid credentials. Private Endpoints replace the public endpoint with a private IP address in your Virtual Network. Traffic to the service stays within your VNet and the Microsoft backbone; it never traverses the public internet.' },
        {
          type: 'code',
          language: 'bicep',
          code: `resource privateEndpoint 'Microsoft.Network/privateEndpoints@2023-04-01' = {
  name: 'pe-storage'
  location: location
  properties: {
    subnet: { id: subnetId }
    privateLinkServiceConnections: [{
      name: 'storage-connection'
      properties: {
        privateLinkServiceId: storageAccount.id
        groupIds: ['blob']
      }
    }]
  }
}

// Disable public network access on the storage account
resource storageAccount 'Microsoft.Storage/storageAccounts@2023-01-01' = {
  name: storageAccountName
  properties: {
    publicNetworkAccess: 'Disabled'
    networkAcls: { defaultAction: 'Deny' }
  }
}`,
        },
        { type: 'heading3', text: 'Just-in-Time VM Access' },
        { type: 'paragraph', text: 'Virtual machines with open RDP (port 3389) or SSH (port 22) ports are constantly probed by automated scanners. Just-in-Time (JIT) VM access, provided by Microsoft Defender for Cloud, locks down management ports by default. When an administrator needs access, they request it through the portal or CLI — the port is opened for the specific source IP for a limited time window, then automatically closed.' },
        {
          type: 'list',
          ordered: true,
          items: [
            'Enable Microsoft Defender for Servers on the subscription.',
            'In Defender for Cloud, go to Workload Protections → Just-in-time VM access.',
            'Select the VMs to protect and configure allowed ports (RDP, SSH, WinRM) with maximum request times.',
            'To request access: select the VM, click Request access, enter your source IP and duration.',
            'Defender for Cloud creates an NSG rule for the duration, then removes it automatically.',
          ],
        },
        { type: 'heading3', text: 'Network Segmentation with NSGs and Azure Firewall' },
        { type: 'paragraph', text: 'Use Network Security Groups (NSGs) to enforce micro-segmentation between subnets. Apply the principle of least privilege: deny all traffic by default and allow only what is explicitly required. For centralised, stateful filtering across the entire hub network, deploy Azure Firewall with IDPS (Intrusion Detection and Prevention System) enabled.' },
        {
          type: 'code',
          language: 'bicep',
          code: `resource nsg 'Microsoft.Network/networkSecurityGroups@2023-04-01' = {
  name: 'nsg-app-tier'
  location: location
  properties: {
    securityRules: [
      {
        name: 'allow-https-inbound'
        properties: {
          priority: 100
          protocol: 'Tcp'
          access: 'Allow'
          direction: 'Inbound'
          sourceAddressPrefix: 'VirtualNetwork'
          sourcePortRange: '*'
          destinationAddressPrefix: '*'
          destinationPortRange: '443'
        }
      }
      {
        name: 'deny-all-inbound'
        properties: {
          priority: 4096
          protocol: '*'
          access: 'Deny'
          direction: 'Inbound'
          sourceAddressPrefix: '*'
          sourcePortRange: '*'
          destinationAddressPrefix: '*'
          destinationPortRange: '*'
        }
      }
    ]
  }
}`,
        },
      ],
    },
    {
      id: 'security-monitoring',
      heading: 'Security Monitoring with Defender and Sentinel',
      blocks: [
        { type: 'paragraph', text: 'Assume breach means you must detect and respond to incidents quickly. Visibility across your entire Azure environment — who is doing what, which resources are misconfigured, and where anomalous activity is occurring — is not optional. It is the difference between a contained incident and a front-page breach.' },
        { type: 'heading3', text: 'Microsoft Defender for Cloud' },
        { type: 'paragraph', text: 'Defender for Cloud provides a unified security posture score across your Azure subscriptions. It continuously assesses your resources against security benchmarks (CIS, NIST, Azure Security Benchmark) and surfaces recommendations ranked by impact. Enable the enhanced workload protections (Defender for Servers, Defender for Containers, Defender for SQL) to add threat detection on top of posture management.' },
        {
          type: 'list',
          ordered: false,
          items: [
            'Start with the Secure Score in Defender for Cloud — anything below 70% has significant exposure.',
            'Address "High" severity recommendations first: exposed management ports, missing MFA, disabled disk encryption.',
            'Enable Defender for Servers to get JIT VM access, file integrity monitoring, and endpoint detection.',
            'Enable Defender for Containers to scan images in ACR for vulnerabilities and monitor AKS for runtime threats.',
            'Export recommendations to Azure Policy to enforce compliance automatically on new resources.',
          ],
        },
        { type: 'heading3', text: 'Microsoft Sentinel for SIEM and SOAR' },
        { type: 'paragraph', text: 'Microsoft Sentinel is Azure\'s cloud-native Security Information and Event Management (SIEM) and Security Orchestration, Automation and Response (SOAR) platform. It ingests logs from Entra ID, Azure resources, Microsoft 365, and third-party sources, applies machine learning to detect threats, and can trigger automated response playbooks.' },
        {
          type: 'code',
          language: 'json',
          code: `// Example Sentinel analytics rule: detect impossible travel
{
  "displayName": "Impossible Travel Activity",
  "description": "Detects sign-ins from two geographically distant locations in a short time window",
  "severity": "High",
  "query": "SigninLogs | where ResultType == 0 | summarize Locations = make_set(Location), Times = make_list(TimeGenerated) by UserPrincipalName | where array_length(Locations) > 1",
  "queryFrequency": "PT1H",
  "queryPeriod": "PT1H",
  "triggerOperator": "gt",
  "triggerThreshold": 0,
  "tactics": ["InitialAccess"],
  "techniques": ["T1078"]
}`,
        },
        { type: 'paragraph', text: 'Connect Sentinel to your Entra ID sign-in logs, Azure Activity logs, and Defender for Cloud alerts as a minimum baseline. Use the built-in MITRE ATT&CK coverage workbook to understand which attack techniques you can detect and which are gaps.' },
        { type: 'cta', title: 'Want us to harden your Azure environment?', desc: 'We assess your current security posture, identify the highest-risk gaps, and implement Zero Trust controls across identity, network, and workloads.', buttonText: 'Book a security review', buttonUrl: '/schedule-call' },
      ],
    },
    {
      id: 'closing-thoughts',
      heading: 'Closing Thoughts',
      blocks: [
        { type: 'paragraph', text: 'Zero Trust is not a destination — it is a continuous improvement process. Start with the highest-impact controls: MFA for all users, PIM for privileged roles, Private Endpoints for sensitive services, and JIT VM access. These four changes alone will dramatically reduce your attack surface.' },
        { type: 'paragraph', text: 'Then establish visibility: enable Defender for Cloud, connect Sentinel, and review your Secure Score monthly. Security is a culture, not a project. The organisations that treat it as ongoing practice — not a one-time audit — are the ones that catch incidents early and contain the blast radius when something does go wrong.' },
      ],
    },
  ],
  4: [
    {
      id: 'from-monolith-to-microservices',
      heading: 'From Monolith to Microservices',
      blocks: [
        { type: 'paragraph', text: 'Most systems start as monoliths. A single deployable unit, a single database, a single team. For a long time, this is the right architecture — simple to reason about, easy to test, and fast to ship. The monolith becomes a problem when it starts fighting you: deployments take an hour, a bug in the payment module breaks the entire application, and ten teams are all stepping on each other in the same codebase.' },
        { type: 'paragraph', text: 'Microservices decompose that monolith into independently deployable services, each owning its own data and communicating over well-defined APIs or messages. The goal is not to have many small services — it is to have the right boundaries so teams can move independently.' },
        { type: 'quote', text: 'Do not start with microservices. Start with a well-structured monolith, find the seams where teams and domains naturally separate, then extract services along those boundaries. Decomposing prematurely creates a distributed monolith — all the complexity of microservices with none of the benefits.' },
        { type: 'heading3', text: 'The Strangler Fig pattern' },
        { type: 'paragraph', text: 'The safest way to decompose a monolith is the Strangler Fig pattern: incrementally extract functionality into new services while the monolith continues to run. A facade (often an API gateway or Azure Application Gateway) routes traffic — new requests go to the new service, old requests go to the monolith. Over time, the monolith shrinks and the new services grow until the monolith can be retired.' },
        {
          type: 'list',
          ordered: true,
          items: [
            'Identify a bounded context — a domain with clear ownership and minimal coupling to other modules (e.g. order management, user accounts, notifications).',
            'Build the new service independently, with its own database and deployment pipeline.',
            'Put a routing layer (API Gateway or Azure Front Door) in front of both the monolith and the new service.',
            'Migrate traffic incrementally — start with read traffic, then writes, then retire the monolith module.',
            'Repeat for the next bounded context.',
          ],
        },
      ],
    },
    {
      id: 'architecture-design',
      heading: 'Architecture Design on Azure',
      blocks: [
        { type: 'paragraph', text: 'A cloud-native microservices architecture on Azure is built around three core decisions: where services run, how they communicate, and how each service manages its data.' },
        { type: 'image', src: '/img/cloud-native-architecture-components.webp', alt: 'Cloud-native architecture components on Azure', size: 'full' },
        { type: 'heading3', text: 'Azure Kubernetes Service (AKS) as the runtime' },
        { type: 'paragraph', text: 'AKS is the most common runtime for microservices on Azure. It provides container orchestration, service discovery, health management, rolling deployments, and horizontal scaling. Each microservice is packaged as a Docker image and deployed as a Kubernetes Deployment with its own service, resource limits, and health probes.' },
        {
          type: 'code',
          language: 'yaml',
          code: `# k8s/order-service.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: order-service
  namespace: production
spec:
  replicas: 3
  selector:
    matchLabels:
      app: order-service
  template:
    metadata:
      labels:
        app: order-service
    spec:
      containers:
        - name: order-service
          image: myregistry.azurecr.io/order-service:1.0.0
          ports:
            - containerPort: 8080
          resources:
            requests:
              cpu: 100m
              memory: 128Mi
            limits:
              cpu: 500m
              memory: 256Mi
          livenessProbe:
            httpGet:
              path: /healthz
              port: 8080
            initialDelaySeconds: 10
            periodSeconds: 15
          readinessProbe:
            httpGet:
              path: /ready
              port: 8080
            initialDelaySeconds: 5
            periodSeconds: 10`,
        },
        { type: 'heading3', text: 'Per-service data isolation with Azure Cosmos DB' },
        { type: 'paragraph', text: 'Each microservice owns its data. No shared databases — this is the most important rule. Shared databases create invisible coupling: one service\'s schema change breaks another service\'s queries. Use Azure Cosmos DB for services that need globally distributed, low-latency reads, or Azure SQL / PostgreSQL Flexible Server for relational workloads.' },
        {
          type: 'list',
          ordered: false,
          items: [
            'One database (or database account) per service — never share a database between two services.',
            'If service A needs data owned by service B, it calls service B\'s API or subscribes to service B\'s events.',
            'Cosmos DB\'s partitioning model aligns well with microservice access patterns — partition by the entity your service most frequently queries (e.g. orderId, customerId).',
            'Use Cosmos DB change feed to publish events when data changes — other services subscribe to these events rather than polling.',
          ],
        },
        { type: 'heading3', text: 'Asynchronous messaging with Azure Service Bus' },
        { type: 'paragraph', text: 'Synchronous HTTP calls between services create tight coupling and cascade failures. If the payment service is slow, the order service becomes slow too. Use Azure Service Bus for asynchronous, decoupled communication between services — especially for operations that do not need an immediate response.' },
        {
          type: 'code',
          language: 'csharp',
          code: `// Publishing an event to Service Bus from the Order service
public class OrderService
{
    private readonly ServiceBusSender _sender;

    public async Task PlaceOrderAsync(Order order)
    {
        await _orderRepository.SaveAsync(order);

        var message = new ServiceBusMessage(
            JsonSerializer.Serialize(new OrderPlacedEvent
            {
                OrderId = order.Id,
                CustomerId = order.CustomerId,
                TotalAmount = order.Total,
                PlacedAt = DateTimeOffset.UtcNow
            }))
        {
            Subject = "order.placed",
            ContentType = "application/json"
        };

        await _sender.SendMessageAsync(message);
    }
}`,
        },
      ],
    },
    {
      id: 'distributed-tracing-messaging',
      heading: 'Distributed Tracing and the Outbox Pattern',
      blocks: [
        { type: 'paragraph', text: 'When a request spans five services, a log in one service tells you nothing on its own. You need distributed tracing — a way to follow a single request across every service it touches and see where time was spent or where it failed.' },
        { type: 'heading3', text: 'OpenTelemetry and Azure Monitor' },
        { type: 'paragraph', text: 'OpenTelemetry is the open standard for distributed tracing and metrics. Instrument your services once with the OpenTelemetry SDK and export traces to Azure Monitor (Application Insights). Every cross-service call propagates a trace context — a correlation ID that links all the spans from a single user request into one end-to-end trace.' },
        {
          type: 'code',
          language: 'csharp',
          code: `// Program.cs — wire up OpenTelemetry in .NET
builder.Services.AddOpenTelemetry()
    .WithTracing(tracing => tracing
        .AddAspNetCoreInstrumentation()
        .AddHttpClientInstrumentation()
        .AddEntityFrameworkCoreInstrumentation()
        .AddAzureMonitorTraceExporter(options =>
        {
            options.ConnectionString = builder.Configuration
                ["ApplicationInsights:ConnectionString"];
        }))
    .WithMetrics(metrics => metrics
        .AddAspNetCoreInstrumentation()
        .AddRuntimeInstrumentation()
        .AddAzureMonitorMetricExporter());`,
        },
        { type: 'paragraph', text: 'In Azure Monitor, use the Application Map to see the topology of your services and where latency or failures are occurring. Use Transaction Search to drill into a specific failing request and see every span across every service.' },
        { type: 'heading3', text: 'The Outbox Pattern for reliable event publishing' },
        { type: 'paragraph', text: 'A common bug in event-driven microservices: a service saves data to its database and then publishes an event to Service Bus. If the service crashes between those two steps, the data is saved but the event is never published — downstream services never know the order was placed.' },
        { type: 'paragraph', text: 'The Outbox Pattern solves this by writing the event to an outbox table in the same database transaction as the business data. A background process (the outbox relay) reads from the outbox table and publishes to Service Bus, marking events as published once confirmed. The event is guaranteed to be published exactly once, even if the service crashes mid-operation.' },
        {
          type: 'code',
          language: 'csharp',
          code: `// Save order + outbox event in a single transaction
public async Task PlaceOrderAsync(Order order)
{
    await using var transaction = await _db.Database.BeginTransactionAsync();

    _db.Orders.Add(order);
    _db.OutboxMessages.Add(new OutboxMessage
    {
        Id = Guid.NewGuid(),
        Type = "order.placed",
        Payload = JsonSerializer.Serialize(new OrderPlacedEvent(order)),
        CreatedAt = DateTimeOffset.UtcNow,
        PublishedAt = null  // null = not yet published
    });

    await _db.SaveChangesAsync();
    await transaction.CommitAsync();
    // Background relay will pick up the outbox message and publish to Service Bus
}`,
        },
      ],
    },
    {
      id: 'avoiding-common-pitfalls',
      heading: 'Avoiding Common Pitfalls',
      blocks: [
        { type: 'paragraph', text: 'Microservices introduce a class of problems that do not exist in a monolith. Teams that are not prepared for them end up with something worse than what they started with: a distributed monolith that is hard to deploy, hard to debug, and has all the operational complexity of microservices without the independence.' },
        { type: 'heading3', text: 'The distributed monolith anti-pattern' },
        { type: 'paragraph', text: 'The most common microservices failure mode: services that are technically separate deployables but are tightly coupled at runtime. Service A calls Service B synchronously, which calls Service C, which queries Service A\'s database directly. The result: you cannot deploy A without also deploying B and C, latency is additive, and a single slow service degrades everything.' },
        { type: 'paragraph', text: 'Signs you have a distributed monolith: services share a database, services cannot be deployed independently, a single business operation requires synchronous calls across 4+ services, and your integration test suite takes 40 minutes.' },
        { type: 'heading3', text: 'Handling distributed transactions with the Saga pattern' },
        { type: 'paragraph', text: 'In a monolith, a database transaction guarantees atomicity: either all steps succeed or all are rolled back. In microservices, there is no cross-service transaction. Use the Saga pattern instead: define a sequence of local transactions, each publishing an event that triggers the next. If a step fails, compensating transactions undo the previous steps.' },
        {
          type: 'list',
          ordered: false,
          items: [
            'Choreography-based saga — each service listens for events and reacts. Simple but hard to follow the overall flow.',
            'Orchestration-based saga — a central orchestrator (Azure Durable Functions works well here) coordinates the steps and handles compensations. Easier to reason about and debug.',
            'Use Azure Durable Functions for the orchestrator: they are stateful, handle retries automatically, and the workflow code reads linearly despite being async and distributed.',
          ],
        },
        { type: 'heading3', text: 'NGINX Ingress with rate limiting and TLS' },
        { type: 'paragraph', text: 'Expose your microservices through a single ingress controller — do not give each service its own public endpoint. NGINX Ingress on AKS handles TLS termination (cert-manager + Let\'s Encrypt or Azure Key Vault certificates), path-based routing, rate limiting, and CORS in one place.' },
        {
          type: 'code',
          language: 'yaml',
          code: `apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: api-ingress
  annotations:
    nginx.ingress.kubernetes.io/rate-limit: "100"
    nginx.ingress.kubernetes.io/rate-limit-window: "1m"
    cert-manager.io/cluster-issuer: letsencrypt-prod
spec:
  ingressClassName: nginx
  tls:
    - hosts: [api.myapp.com]
      secretName: api-tls
  rules:
    - host: api.myapp.com
      http:
        paths:
          - path: /orders
            pathType: Prefix
            backend:
              service:
                name: order-service
                port: { number: 80 }
          - path: /payments
            pathType: Prefix
            backend:
              service:
                name: payment-service
                port: { number: 80 }`,
        },
        { type: 'cta', title: 'Want us to design your microservices architecture?', desc: 'We help teams define service boundaries, design event-driven communication, and deploy production-grade microservices on AKS.', buttonText: 'Schedule a call', buttonUrl: '/schedule-call' },
      ],
    },
    {
      id: 'closing-thoughts',
      heading: 'Closing Thoughts',
      blocks: [
        { type: 'paragraph', text: 'Microservices done right unlock independent deployability, targeted scaling, and genuine team autonomy. But the architecture only delivers on that promise when service boundaries are well-drawn, data is isolated, communication is asynchronous where possible, and observability is built in from the start.' },
        { type: 'paragraph', text: 'Start with the Strangler Fig pattern if you are decomposing a monolith. Use AKS as your runtime, Service Bus for async messaging, and the Outbox Pattern to guarantee event delivery. Instrument everything with OpenTelemetry from day one — you will be glad you did when you are debugging a production incident at midnight.' },
      ],
    },
  ],
  3: [
    {
      id: 'introduction',
      heading: 'Introduction to CI/CD',
      blocks: [
        { type: 'paragraph', text: 'A CI/CD pipeline is the backbone of a high-performing engineering team. Without one, deployments are manual, error-prone, and slow. With one, every code change is automatically tested, built, and delivered to production — or stopped at the gate if something breaks.' },
        { type: 'paragraph', text: 'CI stands for Continuous Integration: the practice of automatically building and testing code every time a developer pushes a change. CD stands for Continuous Delivery (or Deployment): automatically delivering that tested code to one or more environments.' },
        { type: 'quote', text: 'High-performing engineering teams deploy to production multiple times per day. The pipeline is what makes that safe — not heroics, not careful humans, but automated gates that catch problems before they reach users.' },
        { type: 'paragraph', text: 'In the Azure ecosystem, two tools dominate: Azure DevOps Pipelines and GitHub Actions. They are not competitors — they are complementary. Many teams use both, letting each do what it does best. This article explains how to combine them into a complete, production-grade pipeline.' },
        { type: 'heading3', text: 'What a complete pipeline looks like' },
        {
          type: 'list',
          ordered: true,
          items: [
            'Developer pushes code to a feature branch on GitHub.',
            'GitHub Actions triggers: runs unit tests, builds a Docker image, pushes it to Azure Container Registry.',
            'A pull request is opened — the CI checks must pass before merge is allowed.',
            'Code is merged to main. GitHub Actions tags the image with the commit SHA.',
            'Azure DevOps detects the new image in ACR and triggers a release pipeline.',
            'The release pipeline deploys to staging, runs smoke tests, waits for manual approval, then deploys to production.',
          ],
        },
      ],
    },
    {
      id: 'azure-devops-vs-github-actions',
      heading: 'Azure DevOps vs GitHub Actions',
      blocks: [
        { type: 'paragraph', text: 'Both tools can build, test, and deploy code. The question is not which is better — it is which is better for each part of the job.' },
        { type: 'heading3', text: 'GitHub Actions strengths' },
        {
          type: 'list',
          ordered: false,
          items: [
            'Native to GitHub — triggers on every GitHub event: push, PR, issue comment, release, schedule.',
            'Massive marketplace of pre-built actions (checkout, Docker build, Azure login, etc.).',
            'YAML-first, simple syntax — easy to version alongside application code.',
            'Free for public repositories; generous free tier for private repos.',
            'Best for CI: building, testing, linting, security scanning, and image publishing.',
          ],
        },
        { type: 'heading3', text: 'Azure DevOps strengths' },
        {
          type: 'list',
          ordered: false,
          items: [
            'Mature release pipeline UI with approval gates, deployment stages, and rollback controls.',
            'Deep integration with Azure: service connections, Azure Key Vault variable groups, environments with checks.',
            'Boards, Repos, Test Plans, Artifacts — a full ALM suite if you need it.',
            'Better audit trail for enterprise compliance — who approved what, when, and why.',
            'Best for CD: controlled multi-stage releases with approvals and environment governance.',
          ],
        },
        { type: 'paragraph', text: 'The winning combination for Azure workloads: use GitHub Actions for the CI phase (test, build, push image to ACR) and Azure DevOps for the CD phase (pull from ACR, deploy to AKS or App Service with approval gates). Each tool does what it is designed for.' },
      ],
    },
    {
      id: 'building-the-pipeline',
      heading: 'Building the Pipeline',
      blocks: [
        { type: 'paragraph', text: 'The pipeline below covers the full path from code push to production deployment. It uses GitHub Actions for CI and Azure DevOps for the release.' },
        { type: 'heading3', text: 'GitHub Actions: CI workflow' },
        { type: 'paragraph', text: 'This workflow runs on every push to main and on pull requests. It builds and pushes a Docker image to Azure Container Registry tagged with the Git commit SHA — a stable, immutable reference for the release pipeline to consume.' },
        {
          type: 'code',
          language: 'yaml',
          code: `# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

env:
  ACR_NAME: myregistry.azurecr.io
  IMAGE_NAME: myapp

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Run unit tests
        run: dotnet test --configuration Release

      - name: Log in to Azure Container Registry
        uses: azure/docker-login@v1
        with:
          login-server: \${{ env.ACR_NAME }}
          username: \${{ secrets.ACR_USERNAME }}
          password: \${{ secrets.ACR_PASSWORD }}

      - name: Build and push Docker image
        run: |
          docker build -t \$ACR_NAME/\$IMAGE_NAME:\${{ github.sha }} .
          docker push \$ACR_NAME/\$IMAGE_NAME:\${{ github.sha }}`,
        },
        { type: 'heading3', text: 'Azure DevOps: multi-stage release pipeline' },
        { type: 'paragraph', text: 'The Azure DevOps pipeline picks up the image published by GitHub Actions and deploys it through staging and production. The approval gate between stages ensures a human confirms before production is touched.' },
        {
          type: 'code',
          language: 'yaml',
          code: `# azure-pipelines.yml
trigger: none  # triggered by ACR image push, not code push

resources:
  containers:
    - container: app
      type: ACR
      azureSubscription: my-azure-service-connection
      resourceGroup: my-rg
      registry: myregistry
      repository: myapp
      trigger:
        tags:
          include: ['*']

stages:
  - stage: Staging
    jobs:
      - deployment: DeployStaging
        environment: staging
        strategy:
          runOnce:
            deploy:
              steps:
                - task: KubernetesManifest@1
                  inputs:
                    action: deploy
                    kubernetesServiceConnection: aks-staging
                    manifests: k8s/deployment.yaml
                    containers: myregistry.azurecr.io/myapp:\$(resources.container.app.tag)

  - stage: Production
    dependsOn: Staging
    jobs:
      - deployment: DeployProduction
        environment: production  # has approval check configured
        strategy:
          runOnce:
            deploy:
              steps:
                - task: KubernetesManifest@1
                  inputs:
                    action: deploy
                    kubernetesServiceConnection: aks-production
                    manifests: k8s/deployment.yaml
                    containers: myregistry.azurecr.io/myapp:\$(resources.container.app.tag)`,
        },
        { type: 'paragraph', text: 'In Azure DevOps, go to Pipelines → Environments → production → Approvals and checks to add required reviewers. The pipeline will pause at the Production stage until an approver confirms, giving your team a final human gate before every production release.' },
      ],
    },
    {
      id: 'secrets-rollback-strategies',
      heading: 'Secrets Management and Rollback Strategies',
      blocks: [
        { type: 'paragraph', text: 'Two things break most pipelines in production: secrets leaking into logs or source control, and no clear path to roll back a bad deployment. Both are preventable.' },
        { type: 'heading3', text: 'Secrets with Azure Key Vault' },
        { type: 'paragraph', text: 'Never store secrets in pipeline YAML files or repository settings beyond what is absolutely necessary. Use Azure Key Vault as the single source of truth. In Azure DevOps, link a Key Vault to a variable group — the pipeline reads secrets at runtime without any human ever seeing them.' },
        {
          type: 'code',
          language: 'yaml',
          code: `# In azure-pipelines.yml — reference a Key Vault-linked variable group
variables:
  - group: production-secrets  # linked to Azure Key Vault

steps:
  - script: echo "Deploying with connection string \$(DatabaseConnectionString)"
    # DatabaseConnectionString is fetched from Key Vault at runtime
    # It is masked in logs automatically`,
        },
        { type: 'paragraph', text: 'In GitHub Actions, use the azure/get-keyvault-secrets action to pull secrets from Key Vault into the workflow environment. Secrets fetched this way are automatically masked in logs.' },
        {
          type: 'code',
          language: 'yaml',
          code: `- name: Get secrets from Key Vault
  uses: Azure/get-keyvault-secrets@v1
  with:
    keyvault: my-keyvault
    secrets: 'DatabaseConnectionString, ApiKey'
  id: keyvaultSecrets

- name: Use secret
  run: echo \${{ steps.keyvaultSecrets.outputs.DatabaseConnectionString }}`,
        },
        { type: 'heading3', text: 'Rollback with deployment slots (App Service)' },
        { type: 'paragraph', text: 'Azure App Service deployment slots give you zero-downtime deployments with an instant rollback path. Deploy to a staging slot, run smoke tests, then swap slots to promote to production. If something goes wrong, swap back — it takes seconds.' },
        {
          type: 'code',
          language: 'yaml',
          code: `- task: AzureWebApp@1
  displayName: Deploy to staging slot
  inputs:
    azureSubscription: my-service-connection
    appName: my-web-app
    deployToSlotOrASE: true
    resourceGroupName: my-rg
    slotName: staging

- task: AzureAppServiceManage@0
  displayName: Swap staging to production
  inputs:
    azureSubscription: my-service-connection
    action: Swap Slots
    webAppName: my-web-app
    resourceGroupName: my-rg
    sourceSlot: staging`,
        },
        { type: 'heading3', text: 'Rollback with Kubernetes (AKS)' },
        { type: 'paragraph', text: 'On AKS, every deployment is versioned by Kubernetes. If a bad deployment goes out, you can roll back to the previous revision in a single command:' },
        {
          type: 'code',
          language: 'yaml',
          code: `# Roll back to the previous deployment revision
kubectl rollout undo deployment/myapp -n production

# Or roll back to a specific revision
kubectl rollout undo deployment/myapp --to-revision=3 -n production

# Check rollout status
kubectl rollout status deployment/myapp -n production`,
        },
        { type: 'paragraph', text: 'For automated rollback, configure a Kubernetes liveness probe and readiness probe on your deployment. If the new pods fail their health checks, Kubernetes will stop the rollout and the old pods remain in service — the pipeline fails visibly rather than silently leaving a broken deployment running.' },
        { type: 'cta', title: 'Want us to build your CI/CD pipeline?', desc: 'We design and implement production-grade pipelines for Azure workloads — from first commit to automated multi-environment delivery.', buttonText: 'Schedule a call', buttonUrl: '/schedule-call' },
      ],
    },
    {
      id: 'closing-thoughts',
      heading: 'Closing Thoughts',
      blocks: [
        { type: 'paragraph', text: 'A well-designed CI/CD pipeline is not a nice-to-have — it is the difference between a team that ships with confidence and one that dreads release day. GitHub Actions handles CI beautifully: fast, cheap, and tightly integrated with your repository. Azure DevOps handles CD with the governance controls that production environments demand.' },
        { type: 'paragraph', text: 'Start with the GitHub Actions CI workflow in this guide, get your image building and pushing to ACR, then add the Azure DevOps release pipeline with a staging environment and a single approval gate. That combination alone will transform how your team ships software.' },
      ],
    },
  ],
  7: [
    {
      id: 'what-is-rag',
      heading: 'What is Retrieval-Augmented Generation (RAG)?',
      blocks: [
        { type: 'paragraph', text: 'Large language models like GPT-4o are remarkably capable, but they have a fundamental limitation: their knowledge is frozen at training time. Ask a model about your internal documentation, your product catalogue, or last quarter\'s financial reports — and it will either hallucinate an answer or tell you it doesn\'t know.' },
        { type: 'paragraph', text: 'Retrieval-Augmented Generation (RAG) solves this by combining a language model with a search system. Instead of relying solely on what the model learned during training, RAG retrieves the most relevant documents from your own data at query time and passes them as context to the model. The model then generates a grounded answer based on what was retrieved.' },
        { type: 'quote', text: 'RAG is not a workaround for a weak model — it is the correct architecture for knowledge-intensive applications. Fine-tuning encodes facts into weights; RAG retrieves them on demand. Retrieval scales; fine-tuning gets stale.' },
        { type: 'paragraph', text: 'On Azure, RAG pipelines are built on three core services: Azure Blob Storage (document store), Azure AI Search (retrieval engine with vector + keyword support), and Azure OpenAI (the generative model). Together they form a pipeline that can answer questions grounded in documents your model has never seen before.' },
        { type: 'heading3', text: 'When to use RAG vs. fine-tuning' },
        {
          type: 'list',
          ordered: false,
          items: [
            'Use RAG when your knowledge base changes frequently — product docs, support articles, internal wikis. Updating an index is instant; retraining a model takes hours and costs money.',
            'Use RAG when you need source citations — the model can reference the exact document chunk it drew from, making answers auditable.',
            'Use fine-tuning when you need to change the model\'s tone, format, or domain-specific reasoning style — not its factual knowledge.',
            'Use both together for the best results: fine-tune the model on your domain\'s style, then supply current facts via RAG.',
          ],
        },
      ],
    },
    {
      id: 'indexing-your-data',
      heading: 'Indexing Your Data with Azure AI Search',
      blocks: [
        { type: 'paragraph', text: 'The quality of a RAG pipeline is largely determined by the quality of retrieval. If the wrong documents are retrieved, the model will produce a wrong or misleading answer regardless of how capable it is. Indexing is where you invest most of your engineering effort.' },
        { type: 'heading3', text: 'Step 1: Chunking your documents' },
        { type: 'paragraph', text: 'Documents must be split into chunks before indexing. A chunk is the unit of retrieval — what gets passed to the model as context. Chunks that are too large dilute relevance; chunks that are too small lose context. A practical starting point is 512 tokens with a 10% overlap between consecutive chunks to avoid splitting mid-sentence.' },
        {
          type: 'code',
          language: 'python',
          code: `from azure.storage.blob import BlobServiceClient
from openai import AzureOpenAI
import tiktoken

def chunk_text(text: str, max_tokens: int = 512, overlap: int = 50) -> list[str]:
    enc = tiktoken.get_encoding("cl100k_base")
    tokens = enc.encode(text)
    chunks = []
    start = 0
    while start < len(tokens):
        end = min(start + max_tokens, len(tokens))
        chunks.append(enc.decode(tokens[start:end]))
        start += max_tokens - overlap
    return chunks`,
        },
        { type: 'heading3', text: 'Step 2: Generating embeddings' },
        { type: 'paragraph', text: 'Each chunk is converted into a vector embedding — a numerical representation of its semantic meaning — using Azure OpenAI\'s embedding model. Chunks with similar meaning will have vectors that are close together in vector space, enabling semantic search.' },
        {
          type: 'code',
          language: 'python',
          code: `client = AzureOpenAI(
    azure_endpoint=os.environ["AZURE_OPENAI_ENDPOINT"],
    api_key=os.environ["AZURE_OPENAI_API_KEY"],
    api_version="2024-02-01"
)

def get_embedding(text: str) -> list[float]:
    response = client.embeddings.create(
        input=text,
        model="text-embedding-3-large"  # or text-embedding-ada-002
    )
    return response.data[0].embedding`,
        },
        { type: 'heading3', text: 'Step 3: Creating the Azure AI Search index' },
        { type: 'paragraph', text: 'Azure AI Search stores both the text chunks and their vector embeddings. Define your index schema with a vector field configured for cosine similarity and the HNSW algorithm, which gives fast approximate nearest-neighbour search at scale.' },
        {
          type: 'code',
          language: 'json',
          code: `{
  "name": "documents-index",
  "fields": [
    { "name": "id", "type": "Edm.String", "key": true },
    { "name": "content", "type": "Edm.String", "searchable": true },
    { "name": "source", "type": "Edm.String", "filterable": true },
    { "name": "page", "type": "Edm.Int32", "filterable": true },
    {
      "name": "contentVector",
      "type": "Collection(Edm.Single)",
      "dimensions": 3072,
      "vectorSearchProfile": "hnsw-profile"
    }
  ],
  "vectorSearch": {
    "algorithms": [{ "name": "hnsw-config", "kind": "hnsw" }],
    "profiles": [{ "name": "hnsw-profile", "algorithmConfigurationName": "hnsw-config" }]
  }
}`,
        },
        { type: 'paragraph', text: 'Upload each chunk as a document to the index: store the chunk text in the content field, the embedding in contentVector, and metadata (source filename, page number) in filterable fields. Filterable metadata lets you scope retrieval to specific documents or sections at query time.' },
      ],
    },
    {
      id: 'retrieval-prompt-assembly',
      heading: 'Retrieval and Prompt Assembly',
      blocks: [
        { type: 'paragraph', text: 'With the index populated, the retrieval pipeline runs on every user query. The goal is to find the chunks most likely to contain the answer, then assemble them into a prompt for GPT-4o.' },
        { type: 'heading3', text: 'Hybrid search: vector + keyword' },
        { type: 'paragraph', text: 'Pure vector search finds semantically similar content but can miss exact matches — product codes, names, or specific identifiers. Pure keyword search misses paraphrased content. Hybrid search combines both using Azure AI Search\'s Reciprocal Rank Fusion (RRF), producing better results than either alone.' },
        {
          type: 'code',
          language: 'python',
          code: `from azure.search.documents import SearchClient
from azure.search.documents.models import VectorizedQuery

def retrieve(query: str, top_k: int = 5) -> list[dict]:
    search_client = SearchClient(
        endpoint=os.environ["SEARCH_ENDPOINT"],
        index_name="documents-index",
        credential=AzureKeyCredential(os.environ["SEARCH_API_KEY"])
    )
    vector_query = VectorizedQuery(
        vector=get_embedding(query),
        k_nearest_neighbors=top_k,
        fields="contentVector"
    )
    results = search_client.search(
        search_text=query,          # keyword search
        vector_queries=[vector_query],  # vector search
        select=["content", "source", "page"],
        top=top_k
    )
    return [{"content": r["content"], "source": r["source"], "page": r["page"]} for r in results]`,
        },
        { type: 'heading3', text: 'Assembling the prompt' },
        { type: 'paragraph', text: 'Once you have the top-k retrieved chunks, assemble them into a prompt. Pass them as context in the system message, clearly separated from the user\'s question. Instruct the model to answer only from the provided context and to cite its sources.' },
        {
          type: 'code',
          language: 'python',
          code: `def answer(query: str) -> str:
    chunks = retrieve(query, top_k=5)
    context = "\\n\\n".join(
        f"[Source: {c['source']}, page {c['page']}]\\n{c['content']}"
        for c in chunks
    )
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {
                "role": "system",
                "content": (
                    "You are a helpful assistant. Answer the user's question using "
                    "only the context below. If the answer is not in the context, "
                    "say so. Always cite the source document and page number.\\n\\n"
                    f"Context:\\n{context}"
                )
            },
            { "role": "user", "content": query }
        ],
        temperature=0.2,
    )
    return response.choices[0].message.content`,
        },
        { type: 'paragraph', text: 'Keep temperature low (0.1–0.3) for factual RAG applications. Higher temperature increases creativity but also hallucination risk. For question-answering over documents, you want the model to stay close to the retrieved content.' },
      ],
    },
    {
      id: 'evaluation-quality',
      heading: 'Evaluation and Improving Retrieval Quality',
      blocks: [
        { type: 'paragraph', text: 'A RAG pipeline is only as good as its weakest link. Most failures fall into two categories: retrieval failures (the right chunks were not returned) and generation failures (the right chunks were returned but the model answered incorrectly). Knowing which is happening tells you where to invest.' },
        { type: 'heading3', text: 'Chunking strategy matters more than model size' },
        {
          type: 'list',
          ordered: false,
          items: [
            'Fixed-size chunking (512 tokens with overlap) is a safe default for prose documents.',
            'Semantic chunking splits on paragraph or section boundaries — better for structured documents like policies or manuals.',
            'Hierarchical chunking stores both a summary chunk and its constituent detail chunks. Retrieve by summary, pass the detail for generation.',
            'Smaller chunks improve retrieval precision but reduce the context available to the model. Tune chunk size against your specific document structure.',
          ],
        },
        { type: 'heading3', text: 'Semantic ranker in Azure AI Search' },
        { type: 'paragraph', text: 'Azure AI Search includes a built-in semantic ranker that re-scores the top results from hybrid search using a language model trained for relevance. Enable it with a single parameter change and it typically improves answer quality noticeably, especially for longer or ambiguous queries.' },
        {
          type: 'code',
          language: 'python',
          code: `results = search_client.search(
    search_text=query,
    vector_queries=[vector_query],
    query_type="semantic",
    semantic_configuration_name="default",
    query_caption="extractive",
    query_answer="extractive",
    top=top_k
)`,
        },
        { type: 'heading3', text: 'Measuring pipeline quality' },
        { type: 'paragraph', text: 'Build an evaluation set: 20–50 question/answer pairs grounded in your documents. Measure retrieval recall (did the correct chunk appear in the top-5?), answer correctness, and faithfulness (did the model answer from the context or hallucinate?). Run this evaluation every time you change chunking, embedding model, or index configuration.' },
        { type: 'paragraph', text: 'Azure AI Studio\'s evaluation features support automated RAG evaluation using GPT-4 as a judge — it can score groundedness, relevance, and coherence at scale without manual review.' },
        { type: 'cta', title: 'Want to build a RAG pipeline for your organisation?', desc: 'Book a free call and we will scope out the right architecture for your data, team, and use case.', buttonText: 'Schedule a call', buttonUrl: '/schedule-call' },
      ],
    },
    {
      id: 'closing-thoughts',
      heading: 'Closing Thoughts',
      blocks: [
        { type: 'paragraph', text: 'RAG is the right default architecture for most enterprise AI applications. It is faster to build than fine-tuning, cheaper to maintain, and produces auditable answers with source citations. Azure gives you all the building blocks: Blob Storage, AI Search with hybrid retrieval and semantic ranking, and GPT-4o for generation.' },
        { type: 'paragraph', text: 'Start with a small document set, a fixed chunking strategy, and hybrid search. Get a working pipeline first, then invest in evaluation and quality improvements. The teams that ship a basic RAG pipeline in week one learn far more than those who spend month one perfecting the chunking strategy in isolation.' },
      ],
    },
  ],
  6: [
    {
      id: 'why-cloud-costs-spiral',
      heading: 'Why Cloud Costs Spiral',
      blocks: [
        { type: 'paragraph', text: 'Cloud computing promised to reduce costs. Pay only for what you use, scale down when demand drops, no more idle hardware. In practice, most organisations find their Azure bill grows faster than expected — and faster than the business value it delivers.' },
        { type: 'paragraph', text: 'The root cause is almost always the same: cloud resources are easy to provision and easy to forget. A developer spins up a VM to test something, the test finishes, the VM stays running. A project ends, but the storage accounts, public IPs, and load balancers quietly accumulate charges every hour.' },
        { type: 'quote', text: 'In our experience working with Azure customers across industries, most organisations have between 25% and 45% in immediate savings available — without any impact on performance or reliability.' },
        { type: 'paragraph', text: 'The good news: cloud cost optimisation is not a one-time project. It is a discipline. Once you establish the right habits, monitoring processes, and automated guardrails, costs become predictable and controllable. This guide walks through the most impactful techniques, in order of effort vs. return.' },
      ],
    },
    {
      id: 'right-sizing-vms',
      heading: 'Right-Sizing Virtual Machines',
      blocks: [
        { type: 'paragraph', text: 'Virtual machines are typically the largest line item on an Azure bill. They are also the most common source of waste. Teams provision VMs based on peak estimated load, then those VMs run at 5–15% CPU utilisation for months.' },
        { type: 'paragraph', text: 'Azure Advisor analyses your VM usage and flags machines that are consistently over-provisioned. It recommends smaller SKUs that would handle your actual workload at a fraction of the cost. This is the first place to look.' },
        { type: 'heading3', text: 'How to use Azure Advisor for right-sizing' },
        {
          type: 'list',
          ordered: true,
          items: [
            'Open the Azure Portal and search for "Azure Advisor".',
            'Go to the Cost tab — this lists all right-sizing recommendations.',
            'Review each recommendation: Advisor shows current vs. recommended SKU, estimated monthly savings, and CPU/memory percentile data.',
            'For each VM, verify the workload profile: is the low CPU expected (e.g. a scheduled batch job) or is it genuinely idle?',
            'Resize or deallocate as appropriate. For production VMs, schedule the resize during a maintenance window.',
          ],
        },
        { type: 'paragraph', text: 'A common pattern: teams run D4s_v3 (4 vCPUs, 16 GB RAM) when a B2ms (2 vCPUs, 8 GB RAM) or even a B1ms would suffice. The price difference can be 50–70% for the same availability.' },
        { type: 'heading3', text: 'Use Burstable VMs for variable workloads' },
        { type: 'paragraph', text: 'The B-series (Burstable) VMs are ideal for workloads that are mostly idle but occasionally spike — development servers, CI build agents, internal tooling. They accumulate CPU credits during idle periods and spend them on bursts. For these workloads, B-series can cost 3–4× less than equivalent D-series VMs.' },
      ],
    },
    {
      id: 'reserved-instances-savings-plans',
      heading: 'Reserved Instances and Savings Plans',
      blocks: [
        { type: 'paragraph', text: 'If you have workloads that run continuously — production web servers, databases, always-on services — you are almost certainly overpaying by using pay-as-you-go pricing.' },
        { type: 'paragraph', text: 'Azure offers two commitment-based discount models:' },
        {
          type: 'list',
          ordered: false,
          items: [
            'Reserved Instances (RIs) — commit to a specific VM size in a specific region for 1 or 3 years. Discounts of 40–72% off pay-as-you-go. Best for stable, predictable workloads.',
            'Azure Savings Plans — commit to a fixed hourly spend (e.g. $5/hour) across any compute. More flexible than RIs: the discount applies across VM sizes, regions, and even Azure App Service. Typical savings: 15–37%.',
          ],
        },
        { type: 'quote', text: 'Reservations are not a lock-in trap — they are a pricing instrument. You can exchange or cancel a reservation within the first 12 months, subject to an early termination fee.' },
        { type: 'heading3', text: 'Which one to choose?' },
        { type: 'paragraph', text: 'Use Reserved Instances when the workload is stable and you know the exact VM SKU and region. Use Savings Plans when your compute footprint is more dynamic — you scale between sizes, move across regions, or run a mix of VMs and App Service.' },
        { type: 'paragraph', text: 'A practical approach: run your workload on pay-as-you-go for 30–60 days, export your usage from Azure Cost Management, identify the steady-state baseline, then cover that baseline with reservations. Keep the variable capacity on pay-as-you-go.' },
      ],
    },
    {
      id: 'auto-shutdown-serverless',
      heading: 'Auto-Shutdown and Serverless Replacements',
      blocks: [
        { type: 'paragraph', text: 'Non-production environments — development, staging, QA — do not need to run 24/7. A dev VM running overnight and on weekends that nobody is using is pure waste.' },
        { type: 'heading3', text: 'Auto-shutdown for dev/test VMs' },
        { type: 'paragraph', text: 'Azure DevTest Labs and the native VM auto-shutdown feature let you schedule VMs to shut down automatically at a defined time. Enable it across all non-production VMs and you can cut their cost by 65% or more (e.g. running 9am–7pm weekdays = ~55 hours/week vs. 168 hours/week).' },
        {
          type: 'code',
          language: 'json',
          code: `{
  "autoShutdownProfile": {
    "shutdown": {
      "status": "Enabled",
      "taskType": "ComputeVmShutdownTask",
      "dailyRecurrence": { "time": "1900" },
      "timeZoneId": "UTC",
      "notificationSettings": {
        "status": "Enabled",
        "timeInMinutes": 30
      }
    }
  }
}`,
        },
        { type: 'heading3', text: 'Replace always-on VMs with serverless' },
        { type: 'paragraph', text: 'For batch workloads, background jobs, and event-driven processing, an always-on VM is overkill. Azure Container Apps, Azure Functions, and Azure Container Instances offer consumption-based pricing — you pay only when code is running.' },
        {
          type: 'list',
          ordered: false,
          items: [
            'Azure Functions — best for short-lived, event-triggered tasks (queue processing, HTTP triggers, timers). Free tier: 1 million executions/month.',
            'Azure Container Apps — best for containerised microservices that scale to zero. No minimum instance cost when idle.',
            'Azure Container Instances — best for one-off batch jobs. Billed per second, no standing infrastructure.',
          ],
        },
        { type: 'paragraph', text: 'A common migration pattern: a VM running a cron job every 15 minutes, consuming 100% of a $150/month machine, replaced by an Azure Function on a Consumption plan costing under $5/month.' },
      ],
    },
    {
      id: 'orphaned-resources',
      heading: 'Identifying and Removing Orphaned Resources',
      blocks: [
        { type: 'paragraph', text: 'Orphaned resources are Azure assets that were created to support something that no longer exists. They generate charges silently in the background. The most common culprits:' },
        {
          type: 'list',
          ordered: false,
          items: [
            'Managed disks — VMs are deleted but their OS and data disks remain. A 256 GB Premium SSD costs ~$35/month unattached.',
            'Public IP addresses — reserved IPs not attached to any resource still incur a small hourly charge.',
            'Load balancers — provisioned for a service that was decommissioned.',
            'Snapshots — point-in-time disk snapshots accumulate over time and are rarely cleaned up.',
            'App Service Plans — the plan incurs cost even if all apps running on it are deleted.',
            'Unused Azure SQL databases — databases in the "paused" state (serverless tier) or low-DTU tiers left over from old projects.',
          ],
        },
        { type: 'heading3', text: 'Automated orphan detection' },
        { type: 'paragraph', text: 'Azure Resource Graph lets you query your entire subscription for unattached resources. The query below finds all managed disks with no owner:' },
        {
          type: 'code',
          language: 'kusto',
          code: `Resources
| where type == "microsoft.compute/disks"
| where properties.diskState == "Unattached"
| project name, resourceGroup,
          sku = tostring(properties.sku.name),
          sizeGB = properties.diskSizeGB,
          location
| order by sizeGB desc`,
        },
        { type: 'paragraph', text: 'Run this query monthly in Azure Resource Graph Explorer (Portal → Resource Graph Explorer). Build a similar query for unattached public IPs, empty App Service Plans, and unused snapshots. Tag anything you are unsure about and set a 30-day review reminder before deleting.' },
      ],
    },
    {
      id: 'cost-alerts-budgets',
      heading: 'Cost Alerts, Budgets, and Governance',
      blocks: [
        { type: 'paragraph', text: 'Cost optimisation is not a one-time cleanup — it requires ongoing visibility. Without alerts, a misconfigured autoscaler or a runaway background job can double your bill before anyone notices.' },
        { type: 'heading3', text: 'Set up budgets in Azure Cost Management' },
        {
          type: 'list',
          ordered: true,
          items: [
            'Open Azure Cost Management + Billing in the Portal.',
            'Navigate to Budgets and click Add.',
            'Set a monthly budget at the subscription or resource group level.',
            'Configure alert thresholds at 80%, 100%, and 120% of budget.',
            'Add email recipients — include the team lead and the Azure admin.',
            'Optionally trigger an action group to notify via Teams or PagerDuty.',
          ],
        },
        { type: 'heading3', text: 'Use cost allocation tags' },
        { type: 'paragraph', text: 'Enforce a tagging policy so every resource is tagged with at minimum: Environment (dev/staging/prod), Team or CostCentre, and Project. This lets you break down costs by team and project in Cost Management, making it immediately clear who owns the spend.' },
        {
          type: 'code',
          language: 'bicep',
          code: `resource taggingPolicy 'Microsoft.Authorization/policyAssignments@2022-06-01' = {
  name: 'require-cost-tags'
  properties: {
    displayName: 'Require cost allocation tags'
    policyDefinitionId: '/providers/Microsoft.Authorization/policyDefinitions/require-tag-on-resource'
    parameters: {
      tagName: { value: 'CostCentre' }
    }
    enforcementMode: 'Default'
  }
}`,
        },
        { type: 'heading3', text: 'Azure Policy for cost guardrails' },
        { type: 'paragraph', text: 'Use Azure Policy to prevent expensive resources from being created without approval. Common guardrails include: blocking VM SKUs above a certain size, requiring tags on all resources, and denying resource creation in regions outside your approved list. These prevent cost surprises before they happen.' },
        { type: 'cta', title: 'Want us to audit your Azure costs?', desc: 'We will review your subscription, identify the biggest savings opportunities, and give you a prioritised action plan — free of charge.', buttonText: 'Book a free cost review', buttonUrl: '/schedule-call' },
      ],
    },
    {
      id: 'closing-thoughts',
      heading: 'Closing Thoughts',
      blocks: [
        { type: 'paragraph', text: 'A 25–40% cost reduction is achievable in most Azure subscriptions without touching architecture or sacrificing reliability. The work is not glamorous — right-sizing VMs, cleaning up orphaned disks, turning off dev environments at night — but the compound effect is significant.' },
        { type: 'paragraph', text: 'Start with Azure Advisor and Resource Graph. They will surface the quick wins. Then establish budgets, alerts, and a monthly cost review cadence. Cost optimisation is a culture, not a project — and the teams that treat it that way consistently get more from their cloud investment.' },
      ],
    },
  ],
  9: [
    {
      id: 'what-is-iac',
      heading: 'What is Infrastructure as Code (IaC)?',
      blocks: [
        { type: 'paragraph', text: 'Infrastructure as Code (IaC) is the practice of managing and deploying cloud infrastructure using code instead of doing it manually. It allows you to manage and provision compute infrastructure through machine-readable and usable files.' },
        { type: 'paragraph', text: 'Predominant tools for IaC include Azure Bicep, Azure Resource Manager (ARM) templates, Terraform and more. IaC allows developers and admins to automate how resources are created, updated, and monitored. This removes manual management and provisioning, resulting in quicker, more reliable, consistent deployments across cloud environments.' },
        { type: 'quote', text: 'IaC involves using code to define the infrastructure that needs to be deployed in a descriptive model, similar to how code defines applications.', illustration: '/img/iac_code.webp' },
        { type: 'heading3', text: 'What is Infrastructure as Code (IaC)?' },
        { type: 'paragraph', text: 'Infrastructure as Code (IaC) is the practice of managing and deploying cloud infrastructure using code instead of doing it manually. It allows you to manage and provision compute infrastructure through machine-readable and usable files.' },
        { type: 'paragraph', text: 'Predominant tools for IaC include Azure Bicep, Azure Resource Manager (ARM) templates, Terraform and more (we\'ll cover that later).' },
        { type: 'paragraph', text: 'IaC allows developers and admins to automate how resources are created, updated, and monitored. This removes manual management and provisioning, resulting in quicker, more reliable, consistent deployments across cloud environments.' },
        { type: 'paragraph', text: 'IaC lets you define Azure infrastructure (like virtual machines, networks, and storage) in templates. However, it is not limited to infrastructure (IaaS) parts — we can automate basically every other aspect of Azure resources. Think about PaaS services and serverless resources such as Azure Functions, Azure Logic Apps, or even access control policies, databases and database objects.' },
      ],
    },
    {
      id: 'benefits',
      heading: 'Benefits of Infrastructure as Code (IaC)',
      blocks: [
        { type: 'paragraph', text: 'IaC is a practice where you manage and provision computing infrastructure using machine-readable definition files, instead of configuring physical hardware or using interactive tools. It offers several key benefits:' },
        {
          type: 'list',
          ordered: false,
          items: [
            'Consistency — ensures that infrastructure deployments are consistent across all environments.',
            'Version Control — tools like Bicep and Terraform enable version-controlled infrastructure, allowing you to track changes, roll back versions, and collaborate effectively.',
            'Faster deployments — automating infrastructure deployment minimises recovery time, allowing businesses to respond to disruptions promptly.',
            'Reusability — whether for testing, development, or production, IaC promises consistency and efficiency across environments.',
            'Scalability — allows organisations to scale their infrastructure quickly and reliably with predefined templates.',
            'Automation — handles the entire infrastructure lifecycle, from provisioning to teardown automatically.',
          ],
        },
      ],
    },
    {
      id: 'disaster-recovery',
      heading: 'Infrastructure as Code and its role in Disaster Recovery (DR)',
      blocks: [
        { type: 'paragraph', text: 'What happens if you have run out of backups or your backups do not work? If you have to rebuild loads of servers and deploy all the software, that is going to take ages.' },
        { type: 'paragraph', text: 'But using Infrastructure as Code you can rebuild environments quickly. This is crucial for ensuring business continuity.' },
        { type: 'quote', text: 'If you have run out of backups or your backups do not work... having infrastructure as code means you can rebuild that environment super quickly.', author: 'Simon Lee — Azure Expert & Consultant' },
      ],
    },
    {
      id: 'how-does-azure-iac-work',
      heading: 'How Does Azure IaC work?',
      blocks: [
        { type: 'paragraph', text: 'A typical IaC workflow in Microsoft Azure looks like this:' },
        {
          type: 'list',
          ordered: true,
          items: [
            'A developer or operator writes the infrastructure definition in code using tools like Azure Bicep, ARM templates, or Terraform.',
            'They commit it to a source-code repository — Git.',
            'The change is reviewed and validated to check whether it is not malicious and does what it is intended.',
            'Once approved, the change is merged and sent through a CI/CD pipeline.',
            'The pipeline includes a build phase (tests, checks) and a release phase.',
            'The release phase actually creates the resources in Azure.',
          ],
        },
        { type: 'image', src: '/img/azure_iac_working.webp', alt: 'Azure Infrastructure as Code workflow diagram' },
        { type: 'heading3', text: 'Build phase' },
        { type: 'paragraph', text: 'In the build pipeline stage, developers write code and tests, which are then packaged into a deployable artefact that can be deployed across multiple environments.' },
        { type: 'paragraph', text: 'The pipeline runs syntax checks and scans for secrets, credentials or misconfigurations and vulnerabilities.' },
        { type: 'paragraph', text: 'If any issues are found, the pipeline can fail early. This way, unsafe assets are prevented from reaching the next phase: release.' },
        { type: 'heading3', text: 'Release phase' },
        { type: 'paragraph', text: 'In the release phase, the pipeline authenticates to Azure using a service principal or managed identity. It retrieves secrets (e.g. passwords, cryptographic keys, certificates, connection strings) from Azure Key Vault. Instead of embedding secrets in files, you store them there.' },
        { type: 'paragraph', text: 'Most IaC tools integrate well with Key Vault, allowing the pipeline to retrieve these secrets at runtime without enabling developers direct access to the secrets. This reduces the risk of secrets being misused or accidentally exposed.' },
        { type: 'paragraph', text: 'Next, the IaC tool runs deployment commands and applies the configuration to the target Azure environment. Azure compares the desired state defined in the IaC code with the current state of your infrastructure.' },
        { type: 'paragraph', text: 'If there\'s a mismatch, the IaC tool takes action – creating missing resources, updating existing ones, or removing anything no longer needed. This ensures that your environment remains consistent with what is declared in the code.' },
      ],
    },
    {
      id: 'azure-iac-tools',
      heading: 'Azure IaC Tools',
      blocks: [
        { type: 'paragraph', text: 'There are many tools for Infrastructure as Code. Which you use depends on your company\'s use case, needs, environment, and resources.' },
        { type: 'heading3', text: 'Azure Bicep' },
        { type: 'image', src: '/img/bicep-logo.webp', alt: 'Azure Bicep logo', size: 'small' },
        { type: 'paragraph', text: 'Azure Bicep is Microsoft\'s native IaC language. It is actively developed, fully supported, and integrates well with Azure tooling. It is a domain-specific language (DSL) built to simplify ARM templates — declarative, readable, and seamlessly integrated with Azure.' },
        {
          type: 'code',
          language: 'bicep',
          code: `param location string = 'East US'
param storageAccountName string = 'mystorageaccount'

resource storageAccount 'Microsoft.Storage/storageAccounts@2022-09-01' = {
  name: storageAccountName
  location: location
  kind: 'StorageV2'
  sku: { name: 'Standard_LRS' }
}`,
        },
        { type: 'heading3', text: 'Azure Resource Manager (ARM) Templates' },
        { type: 'image', src: '/img/Azure Resource Manager (ARM) Templates', alt: 'Azure Resource Manager logo', size: 'small' },
        { type: 'paragraph', text: 'ARM templates are JSON-based and used to define Azure resources declaratively. They provide deep integration with Azure but can be complex to write and maintain. Bicep was introduced as an abstraction over ARM templates to simplify the experience.' },
        {
          type: 'code',
          language: 'json',
          code: `{
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "resources": [{
    "type": "Microsoft.Storage/storageAccounts",
    "apiVersion": "2022-09-01",
    "name": "mystorageaccount",
    "location": "East US",
    "sku": { "name": "Standard_LRS" },
    "kind": "StorageV2"
  }]
}`,
        },
        { type: 'heading3', text: 'Terraform' },
        { type: 'image', src: '/img/terraform-logo.webp', alt: 'Terraform logo', size: 'small' },
        { type: 'paragraph', text: 'Terraform is cloud-agnostic — it allows you to define infrastructure across multiple providers, not just Azure. It uses HashiCorp Configuration Language (HCL), which is easy to learn. If you work in multi-cloud environments, Terraform is a strong option. OpenTofu is also worth looking at as a fully open-source alternative governed by the Linux Foundation.' },
        {
          type: 'code',
          language: 'hcl',
          code: `provider "azurerm" {
  features {}
}

resource "azurerm_storage_account" "storage" {
  name                     = "mystorageaccount"
  resource_group_name      = "myResourceGroup"
  location                 = "East US"
  account_tier             = "Standard"
  account_replication_type = "LRS"
}`,
        },
        { type: 'heading3', text: 'Pulumi' },
        { type: 'image', src: '/img/pulumi.webp', alt: 'Pulumi logo', size: 'small' },
        { type: 'paragraph', text: 'Unlike Bicep and Terraform, Pulumi allows you to write infrastructure in general-purpose programming languages like Python, TypeScript, and C#. This makes it appealing to developers who prefer imperative coding, though it requires more programming knowledge.' },
        {
          type: 'code',
          language: 'typescript',
          code: `import * as azure from "@pulumi/azure";

const storageAccount = new azure.storage.Account("storage", {
  name: "mystorageaccount",
  resourceGroupName: "myResourceGroup",
  location: "East US",
  accountTier: "Standard",
  accountReplicationType: "LRS",
});`,
        },
      ],
    },
    {
      id: 'choose-right-tool',
      heading: 'How do I Choose the right IaC tool?',
      blocks: [
        { type: 'paragraph', text: 'Before selecting a tool, ask yourself and your team:' },
        {
          type: 'list',
          ordered: false,
          items: [
            'Do you have any existing experience with a specific IaC tool?',
            'What programming skills does the team already have? (C#, Go, JSON, TypeScript — or none?)',
            'Which cloud provider are you using?',
            'What is your deployment mechanism?',
            'What are the compliance requirements of your organisation?',
            'Do you need an imperative or declarative approach?',
            'Who will manage the IaC templates, and where will they live?',
            'Are you managing configuration too, or just provisioning infrastructure?',
          ],
        },
        { type: 'heading3', text: 'Check supported languages in your environment' },
        { type: 'paragraph', text: 'Before selecting an IaC language, verify what your environment supports. Check official documentation — Azure officially supports Bicep, Terraform, Pulumi, and ARM templates. Review policy and compliance requirements, examine existing infrastructure, and experiment in a test environment to see which language aligns best with your workflow.' },
        { type: 'heading3', text: 'Choose the right language' },
        { type: 'paragraph', text: 'The choice of an IaC language depends on your cloud provider, work environment, and personal preferences. Once you know what your environment supports, decide on the best fit based on your organisational needs and research how to get started.' },
      ],
    },
    {
      id: '10-best-practices',
      heading: '10 Azure IaC Best Practices',
      blocks: [
        { type: 'paragraph', text: 'Starting may seem overwhelming, but breaking it down into manageable steps will make it easier. Here are the 10 best practices to help you get started successfully:' },
        { type: 'heading3', text: '1. Set up your development environment' },
        { type: 'paragraph', text: 'Install the necessary tools and CLI for your chosen IaC language. Ensure you have access to an Azure subscription. Use Visual Studio Code with extensions such as the Bicep Extension, Terraform Extension by HashiCorp, or Pulumi Extension to improve syntax highlighting, autocompletion, and deployment capabilities.' },
        { type: 'heading3', text: '2. Learn from official resources' },
        { type: 'paragraph', text: 'Microsoft provides excellent learning resources for Bicep via Microsoft Learn. Terraform and Pulumi also offer extensive documentation and hands-on labs. Invest time in these before going to production.' },
        { type: 'heading3', text: '3. Start with simple deployments' },
        { type: 'paragraph', text: 'Start with small resources, such as deploying a storage account. Test your scripts in a sandbox environment before deploying to production. Follow best practices such as using parameters and modular structures, and explore Azure Verified Modules which support both Bicep and Terraform.' },
        { type: 'heading3', text: '4. Use version control' },
        { type: 'paragraph', text: 'Store your IaC files in GitHub, Azure DevOps, or another version-controlled repository to maintain detailed change histories and support rollback capabilities. This gives you a 4-eyes principle before changes reach production, mitigating mistakes.' },
        { type: 'heading3', text: '5. Test and validate' },
        { type: 'paragraph', text: 'Regular testing of IaC scripts is paramount. Ensuring scripts perform as expected before deploying to production can prevent potential issues that could impact business operations.' },
        { type: 'heading3', text: '6. Avoid configuration drift' },
        { type: 'paragraph', text: 'Avoiding drift is key to reliable infrastructure. By removing direct human access and routing all changes through your CI/CD pipeline, you ensure that Infrastructure as Code remains the single source of truth.' },
        { type: 'heading3', text: '7. Automate' },
        { type: 'paragraph', text: 'Automation eliminates manual steps, reduces errors, and enables consistent reproduction of environments. Implement CI/CD pipelines (e.g. Azure DevOps, GitHub Actions) to automate deployments across all environments — development, test, staging, and production.' },
        { type: 'heading3', text: '8. Parameterise your IaC templates' },
        { type: 'paragraph', text: 'Define all environments using the same IaC template, and vary only the input parameters (e.g. scale, region, resource SKUs). This keeps your infrastructure consistent across environments, avoids configuration drift, and ensures tests in lower environments are valid and representative of production.' },
        { type: 'heading3', text: '9. Limit access to the production environment' },
        { type: 'paragraph', text: 'Having people change things manually in production may cause your IaC to break. Restrict write access to production environments. For urgent changes, use Privileged Identity Management (PIM) for just-in-time access with time limits and audit logs, or break-glass accounts stored securely for genuine emergencies.' },
        { type: 'heading3', text: '10. Manage and store secrets in the right place' },
        { type: 'paragraph', text: 'Never store hard-coded secrets in your IaC code files. Instead, store and manage secrets in Azure Key Vault — a secure and centralised place that integrates natively with all major IaC tools.' },
        { type: 'cta', title: 'Want us to implement IaC for your Azure environment?', desc: 'Book a free call and we will walk you through the right setup for your team.', buttonText: 'Schedule a call', buttonUrl: '/schedule-call' },
      ],
    },
    {
      id: 'closing-thoughts',
      heading: 'Closing thoughts',
      blocks: [
        { type: 'paragraph', text: 'Infrastructure as Code is no longer optional for teams running workloads in Azure. It is the foundation of reliable, repeatable, and auditable infrastructure. Whether you choose Bicep for Azure-native simplicity, Terraform for multi-cloud reach, or Pulumi for developer-first workflows — the key is to start, iterate, and automate.' },
        { type: 'paragraph', text: 'Begin with a single resource, put it in version control, run it through a pipeline, and build from there. The 10 best practices in this guide give you the foundation to do it right from day one.' },
      ],
    },
  ],
};

export default richArticles;
