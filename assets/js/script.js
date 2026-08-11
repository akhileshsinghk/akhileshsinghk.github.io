/* =========================================================
   Data
========================================================= */
const SKILLS = [
  { title: "Programming", tags: ["Python (Expert)", "SQL", "JavaScript"] },
  { title: "LLMs & AI Frameworks", tags: ["GPT-4 / 4o", "Claude 3 / 3.5", "LLaMA", "BERT", "T5", "OpenAI API", "Anthropic API", "Hugging Face"] },
  { title: "Agentic AI", tags: ["LangChain", "LangGraph", "LlamaIndex", "ReAct Patterns", "Function Calling", "Tool Use", "Multi-Agent Systems"] },
  { title: "Prompt Engineering", tags: ["Few-shot Learning", "Chain-of-Thought", "System Prompts", "Temperature Tuning", "Prompt Templates"] },
  { title: "RAG & Vector DBs", tags: ["FAISS", "Pinecone", "Weaviate", "Milvus", "Semantic Search", "Embeddings", "Retrieval-Augmented Generation"] },
  { title: "Backend & APIs", tags: ["FastAPI", "Flask", "Django", "REST APIs", "API Integration", "WebSockets", "Async Programming"] },
  { title: "UI/Demo Tools", tags: ["React", "Streamlit", "FastAPI", "Flask", "Gradio", "Interactive Prototypes"] },
  { title: "Data Processing", tags: ["Pandas", "NumPy", "Structured/Unstructured Data", "JSON", "CSV", "PDF Processing", "Text Extraction"] },
  { title: "ML Frameworks", tags: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "Model Fine-tuning", "Transfer Learning"] },
  { title: "Cloud & DevOps", tags: ["Azure", "AWS", "Docker", "Git / GitHub", "CI/CD"] },
  { title: "Tools", tags: ["Git", "GitHub", "Code Review", "Agile Development", "Documentation", "Technical Writing"] },
  { title: "Data Engineering & Analytics", tags: ["Databricks", "Delta Lake", "PySpark", "MLflow", "Spark SQL", "Lakehouse Architecture", "Feature Store"] },
  { title: "Observability & Monitoring", tags: ["Azure Monitor", "Application Insights", "OpenTelemetry", "Langfuse", "Grafana", "Datadog", "Distributed Tracing", "SLO/SLI Dashboards"] },
  { title: "Distributed Systems & Messaging", tags: ["Microservices", "gRPC", "GraphQL", "Kafka", "Azure Service Bus", "Saga Orchestration", "Idempotency", "Circuit Breakers", "Dead-Letter Queues", "Workflow Orchestration"] },
];

const EXPERIENCE = [
  {
    role: "Senior AI/ML Engineer",
    company: "State Farm",
    location: "USA",
    period: "Jul 2025 — Present",
    current: true,
    bullets: [
      "Directed the architecture and rollout of a full-stack Agentic RAG platform (Python 3.12/FastAPI backend, React/TypeScript dashboards) — a claims and policy-servicing assistant used across multiple regional processing centers, covering everything from UI and APIs to retrieval infrastructure and deployment.",
      "Architected a blue-green alias swap strategy for live index reindexing, cutting index-rebuild downtime from ~31 minutes to under a second with zero service interruption.",
      "Co-developed a multi-agent orchestration layer (LangGraph + Claude 3.5 Sonnet) implementing a Plan-Execute-Replan workflow across claims-processing agents, integrated into downstream REST APIs consumed by internal web applications.",
    ],
    extra: [
      "Engineered hybrid dense + sparse retrieval with RRF fusion and dual-pass query enrichment, using OpenAI text-embedding-3-large embeddings across line-of-business-segmented Milvus collections to power real-time, user-facing search and assistant experiences.",
      "Designed human-in-the-loop review checkpoints and corresponding UI workflows for adjuster/underwriter approval on high-stakes claims decisions, surfaced through interactive front-end review queues with state persistence and timeout-based escalation.",
      "Built resilience patterns — circuit breakers, idempotent retries, compensating transactions — across claims-intake and coverage-verification microservices (REST + gRPC) deployed on Azure; refactored the request-processing path to reduce latency while preserving zero-downtime rollback.",
      "Developed an internal LLM gateway (SSE streaming, async request pooling, WebSocket-based client updates) routing requests between GPT-4o, Claude 3 Haiku, and self-hosted LLaMA by task complexity and data-residency requirements — exposed via authenticated REST APIs consumed by internal front-end tools.",
      "Instrumented the LLM gateway and supporting microservices with OpenTelemetry and Langfuse-based distributed tracing, building SLO/SLI dashboards in Grafana and Datadog for full-stack production observability.",
      "Redesigned a multi-round-trip claims-summarization workflow into a single-call structured-output API, improving output consistency and front-end rendering reliability through deterministic (temperature=0) generation.",
      "Built evaluation pipelines and an internal review dashboard for a claims-documentation QA agent — automated LLM-as-judge scoring (Claude 3 Opus), few-shot/chain-of-thought prompting, and human expert review — surfaced through a React-based UI.",
      "Implemented prompt-injection safeguards (content-boundary tagging, injection canaries) and audit-trail hashing for tamper-evident review logs, gated behind RBAC and authentication across both API and UI tiers.",
      "Partnered with compliance and security teams on PII de-identification and vendor risk reviews across third-party LLM integrations to meet insurance-industry regulatory requirements for claims-adjacent workflows.",
      "Built Databricks-native data pipelines (PySpark, Delta Lake, Unity Catalog) on Azure to analyze agent conversation logs and evaluation traces, surfacing failure patterns and SOP-adherence drift — orchestrated via Databricks Workflows with MLflow tracking and exposed through internal analytics dashboards.",
    ],
    tech: ["Python 3.12", "FastAPI", "React", "TypeScript", "LangGraph", "Claude 3.5 Sonnet", "GPT-4o", "Milvus", "Databricks", "Azure"],
  },
  {
    role: "AI/ML Engineer",
    company: "CIBC",
    location: "USA",
    period: "Feb 2024 — May 2025",
    bullets: [
      "Owned the end-to-end lifecycle of an autonomous client-personalization agent — from UI-facing APIs to model infrastructure — initially built on GPT-4 with LangGraph-based ReAct workflows, later migrated to GPT-4o and the Databricks Mosaic AI Agent Framework for next-best-action decisioning.",
      "Scaled the personalization agent into a production full-stack application serving 8K+ daily client interactions, architecting a Django/REST backend with async WebSocket updates for real-time UI state — driving $3.2M incremental revenue.",
      "Architected a production ML/RAG pipeline on Azure Databricks integrating the DBRX foundation model with Pinecone for vector retrieval, processing 2.5M+ client and transaction records with semantic search and predictive scoring.",
    ],
    extra: [
      "Engineered LlamaIndex-based RAG retrieval into the personalization agent, enabling context-aware recommendations grounded in client history and product catalog data.",
      "Implemented Unity Catalog's AI/ML governance and RBAC controls to manage model lineage, access permissions, and audit tracking across the RAG pipeline and connected application services.",
      "Improved model precision by 39% through systematic feature engineering (Pandas/NumPy) and retrieval-pipeline optimization across the semantic search architecture.",
      "Built a ModelOps/CI/CD framework (MLflow experiment tracking, Git/GitHub version control, automated A/B testing) transforming model deployment from manual handoffs into an automated, repeatable release pipeline.",
      "Led PyTorch-based fine-tuning and transfer-learning experiments for candidate scoring models, enabling rapid experimentation across 15+ enterprise AI/ML use cases.",
      "Designed and shipped LLM-powered risk-summarization and behavioral-scoring microservices (GPT-4, upgraded to GPT-4o) ensembled with an XGBoost tabular risk model and exposed via REST APIs, processing 400K+ daily transaction records to generate audit-ready summaries and shorten analyst case-triage time.",
      "Built agentic AI orchestration (LangGraph + LangChain) with function-calling and dynamic tool-selection patterns, integrating core banking and data platforms via gRPC and Kafka event streams for multi-turn, tool-augmented conversations.",
      "Developed interactive full-stack analytics tools and rapid prototypes (Streamlit, Databricks AI/BI dashboards, GPT-4/4o) to accelerate model validation and secure funding for additional enterprise AI initiatives.",
      "Designed event-driven microservices integrating structured/unstructured enterprise data (JSON, CSV, PDF extraction) via Unity Catalog and Azure Service Bus, with ETL pipelines handling retry/backoff logic, dead-letter queues, and observability to reliably process 8M+ daily data points.",
    ],
    tech: ["Django", "React", "LangGraph", "GPT-4o", "Pinecone", "DBRX", "MLflow", "PyTorch", "Kafka", "gRPC"],
  },
  {
    role: "Python Developer & ML Engineer",
    company: "TCS",
    location: "USA",
    period: "Dec 2019 — Dec 2023",
    bullets: [
      "Led end-to-end design of a diagnostics and parts-matching platform for vehicle service technicians — from the React/TypeScript front end to backend retrieval services (Python, FAISS, Hugging Face transformer models, AWS Lambda/S3) — built jointly with teams in Detroit and Pune, supporting 30K+ daily advisor queries at 88% first-contact resolution.",
      "Designed and built a full-stack rules-and-ML-based warranty-claim workflow application, pairing a Next.js/React approval dashboard with custom Python orchestration validating repair labor codes against a SQL-backed policy database and producing auditable approval trails — with RBAC for claims adjusters, replacing manual cross-checks with automated validation.",
      "Built a document-intelligence pipeline and companion web dashboard (React, Tailwind CSS) using T5-based summarization models for supplier quality reports and parts inspection PDFs, processing 4.5K+ documents daily with iterative model refinement improving classification accuracy.",
    ],
    extra: [
      "Developed structured data-extraction and classification pipelines (rule-based + ML classification, Pydantic-validated JSON schemas) for fault-code-to-repair mapping, exposed through internal REST APIs and a lightweight React review interface — improving diagnostic accuracy and reducing technician escalations.",
      "Implemented semantic search (RAG-style retrieval) over 20K+ technical manuals using sentence-transformers and BERT re-ranking, delivered via a FastAPI backend and a responsive React/Next.js search UI for technicians and parts teams across US and India.",
      "Architected distributed, microservices-based AI/agentic tooling exposing telematics APIs, DMS queries, and parts-inventory endpoints as callable agent tools for automated predictive-maintenance alerts and parts-reorder recommendations.",
      "Engineered real-time data infrastructure for the connected-vehicle fleet — SSE/WebSocket live telemetry streaming to front-end dashboards, Kafka-based ingestion, and an async API gateway handling auth, rate limiting, and circuit breakers — lowering inference costs through caching and optimized model serving.",
      "Instrumented full-stack observability (structured logging, metrics, distributed tracing) across front-end, API, and AI-inference layers to track system health and service performance, enabling proactive incident response with product and DevOps stakeholders in Detroit and Pune.",
    ],
    tech: ["Python", "React", "Next.js", "FAISS", "Hugging Face", "T5", "AWS", "Azure Functions", "FastAPI", "Kafka"],
  },
  {
    role: "ML Engineer",
    company: "Vowels Information",
    location: "India",
    period: "Sep 2018 — Nov 2019",
    bullets: [
      "Built a customer-support chatbot (Rasa + Python) with intent classification and entity extraction, cutting average first-response time by 35%.",
      "Developed an NLU pipeline (spaCy + BERT embeddings), improving intent-recognition accuracy across 40+ categories through iterative training-data augmentation and transfer learning.",
      "Deployed the chatbot as a Flask REST API with a JS web widget, handling 5K+ daily conversations in production.",
    ],
    extra: [
      "Implemented dialogue management using Rasa Core's state-tracking framework for multi-turn order-tracking, returns, and FAQ flows — reducing the volume of tickets requiring human-agent handling.",
    ],
    tech: ["Rasa", "spaCy", "BERT", "Flask", "PostgreSQL"],
  },
  {
    role: "ML Engineer Intern",
    company: "Vowels Information",
    location: "India",
    period: "Jan 2018 — Aug 2018",
    bullets: [
      "Built a collaborative-filtering recommendation engine (TensorFlow + Pandas) for an e-commerce platform, improving click-through rate by 18%.",
      "Implemented a hybrid ALS + content-based model addressing cold-start issues, improving recommendation relevance as measured by NDCG@10.",
    ],
    extra: [
      "Developed ETL pipelines (Python, Pandas, PostgreSQL) to process user-interaction logs at scale for the training pipeline.",
    ],
    tech: ["Python", "TensorFlow", "Scikit-learn", "PostgreSQL"],
  },
];

/* =========================================================
   Render: Skills
========================================================= */
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = SKILLS.map(group => `
    <div class="skill-group">
      <h3>${group.title}</h3>
      <div class="skill-tags">
        ${group.tags.map(t => `<span class="skill-tag">${t}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

/* =========================================================
   Render: Experience timeline
========================================================= */
function renderTimeline() {
  const el = document.getElementById("timeline");
  el.innerHTML = EXPERIENCE.map((job, i) => `
    <div class="timeline-item ${job.current ? "current" : ""}">
      <span class="timeline-dot"></span>
      <div class="timeline-card">
        <div class="timeline-top">
          <span class="timeline-role">${job.role} · ${job.company}</span>
          ${job.current ? '<span class="timeline-badge">CURRENT</span>' : ""}
        </div>
        <div class="timeline-meta">
          <span>${job.period}</span>
          <span class="dot"></span>
          <span>${job.location}</span>
        </div>
        <ul class="timeline-bullets">
          ${job.bullets.map(b => `<li>${b}</li>`).join("")}
        </ul>
        ${job.extra && job.extra.length ? `
          <ul class="timeline-bullets extra" id="extra-${i}">
            ${job.extra.map(b => `<li>${b}</li>`).join("")}
          </ul>
          <button class="timeline-toggle" data-target="extra-${i}">
            <span class="toggle-label">Show more</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
        ` : ""}
        <div class="timeline-tech">
          ${job.tech.map(t => `<span>${t}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");

  el.querySelectorAll(".timeline-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.target);
      const open = target.classList.toggle("open");
      btn.classList.toggle("open", open);
      btn.querySelector(".toggle-label").textContent = open ? "Show less" : "Show more";
    });
  });
}

/* =========================================================
   Theme toggle
========================================================= */
function initTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const stored = localStorage.getItem("theme");
  if (stored) root.setAttribute("data-theme", stored);

  toggle.addEventListener("click", () => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const current = root.getAttribute("data-theme") || (prefersDark ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}

/* =========================================================
   Header scroll state + mobile nav + active link
========================================================= */
function initNav() {
  const header = document.getElementById("siteHeader");
  const menuToggle = document.getElementById("menuToggle");
  const navMobile = document.getElementById("navMobile");
  const progressBar = document.getElementById("progressBar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = [...document.querySelectorAll("section[id]")];

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 10);

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    progressBar.style.width = progress + "%";

    let currentId = "";
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) currentId = sec.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
    });
  }, { passive: true });

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
    navMobile.classList.toggle("open");
  });

  document.querySelectorAll(".nav-mobile .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("open");
      navMobile.classList.remove("open");
    });
  });
}

/* =========================================================
   Reveal-on-scroll
========================================================= */
function initReveal() {
  const targets = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  targets.forEach(t => io.observe(t));
}

/* =========================================================
   Contact form -> mailto
========================================================= */
function initContactForm() {
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:akhileshsinghkushwaha54@gmail.com?subject=${subject}&body=${body}`;
  });
}

/* =========================================================
   Misc
========================================================= */
function initMisc() {
  document.getElementById("year").textContent = new Date().getFullYear();
  const backToTop = document.getElementById("backToTop");
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* =========================================================
   Init
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderTimeline();
  initTheme();
  initNav();
  initReveal();
  initContactForm();
  initMisc();
});
