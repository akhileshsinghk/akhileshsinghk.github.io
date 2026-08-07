/* =========================================================
   Data
========================================================= */
const SKILLS = [
  { title: "Programming", tags: ["Python (Expert)", "SQL", "JavaScript"] },
  { title: "LLMs & AI Frameworks", tags: ["GPT-4 / 4o", "Claude 3 / 3.5", "LLaMA", "BERT", "T5", "OpenAI API", "Anthropic API", "Hugging Face"] },
  { title: "Agentic AI", tags: ["LangChain", "LangGraph", "LlamaIndex", "ReAct Patterns", "Function Calling", "Multi-Agent Systems"] },
  { title: "Prompt Engineering", tags: ["Few-shot Learning", "Chain-of-Thought", "System Prompts", "Prompt Templates"] },
  { title: "RAG & Vector DBs", tags: ["FAISS", "Pinecone", "Weaviate", "Milvus", "Semantic Search", "Embeddings"] },
  { title: "Backend & APIs", tags: ["FastAPI", "Flask", "Django", "REST APIs", "WebSockets", "Async Programming"] },
  { title: "ML Frameworks", tags: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "Transfer Learning"] },
  { title: "Data Engineering", tags: ["Databricks", "Delta Lake", "PySpark", "MLflow", "Spark SQL", "Lakehouse"] },
  { title: "Cloud & DevOps", tags: ["Azure", "AWS", "Docker", "Git / GitHub", "CI/CD"] },
  { title: "Observability", tags: ["OpenTelemetry", "Langfuse", "Grafana", "Datadog", "Structured Logging"] },
  { title: "Distributed Systems", tags: ["Microservices", "gRPC", "Kafka", "Saga Orchestration", "Circuit Breakers"] },
  { title: "Compliance & Data Privacy", tags: ["PII De-identification", "RBAC", "NAIC Model Law", "Audit Trails", "SHA-256 Tamper-Evidence"] },
];

const EXPERIENCE = [
  {
    role: "Senior Backend Platform Engineer",
    company: "State Farm",
    location: "USA",
    period: "Jul 2025 — Present",
    current: true,
    bullets: [
      "Architected a production-grade Agentic RAG platform (Python 3.12 / FastAPI) powering a multi-region claims and policy-servicing assistant across regional processing centers (Nashville, TN and Boston, MA hubs).",
      "Delivered an 18,000× index-rebuild downtime reduction (31 min → 103 ms) via blue-green alias atomic swaps for live production reindexing.",
      "Spearheaded distributed multi-agent orchestration on LangGraph + Claude 3.5 Sonnet — a 32-node state-graph orchestrator with a Plan-Execute-Replan DAG and Human-in-the-Loop pauses for adjuster/underwriter review.",
    ],
    extra: [
      "Featured hybrid dense + sparse retrieval, two-stage RRF fusion, dual-pass query enrichment, and GPT-4o embeddings across regionally-segmented Milvus collections per line-of-business (auto, home, life).",
      "Implemented CCM-driven dual-path failover, saga-style compensating transactions, and circuit-breaker resilience across 6 distributed microservices (REST + gRPC) for claims-intake and coverage-verification, collapsing request-path layers 5 → 1 with zero-downtime rollback.",
      "Engineered high-throughput LLM serving with SSE streaming, async httpx pooling, and Langfuse/OpenTelemetry-instrumented tracing through an internal LLM Gateway routing GPT-4o and Claude 3 Haiku by task complexity.",
      "Built a Self-Refine structured-output ADR that cut per-turn LLM round-trips by 48%, locking deterministic reproducibility across 1,850+ tests at 92% coverage.",
      "Owned ML evaluation & AI security pipelines: 3-stage eval (System/API + Champion/Challenger LLM judge using Claude 3 Opus + human claims-expert reviewer), with prompt-injection hardening (role-tagged content boundaries, injection canary) and SHA-256 audit-run deduplication for tamper-evident, regulator-ready trails.",
      "Validated 71% weighted adherence on a production 16-step claims-documentation SOP referencing state-specific insurance codes; led a 5-hour P1 incident response and authored the full post-mortem with 4 upstream framework fixes.",
      "Applied PII de-identification and vendor risk/compliance evaluation across all third-party LLM integrations to maintain NAIC Model Law compliance; containerized with Docker and deployed through a CI/CD pipeline with automated test gating.",
      "Built Databricks-native agent tooling — PySpark/Spark SQL over Delta Lake in a Unity Catalog Lakehouse with a shared Feature Store — mining conversation telemetry and Langfuse spans to surface failure clusters, prompt-injection canary triggers, and SOP-adherence drift; orchestrated as Databricks Workflows with MLflow tracking, cutting weekly QA-review effort by 41%.",
    ],
    tech: ["Python 3.12", "FastAPI", "LangGraph", "Claude 3.5 Sonnet", "GPT-4o", "Milvus", "Databricks", "PySpark", "MLflow", "Docker"],
  },
  {
    role: "Senior Backend Engineer",
    company: "CIBC",
    location: "USA",
    period: "Feb 2024 — May 2025",
    bullets: [
      "Developed an autonomous client-personalization agent using Databricks Mosaic AI + GPT-4o in 5 weeks, with ReAct-pattern agentic workflows via LangGraph and LlamaIndex retrieval.",
      "Scaled to production serving 8K+ daily client interactions via a Django/REST backend with async WebSocket updates, driving $3.2M incremental revenue.",
      "Architected a production RAG pipeline (Databricks DBRX, Pinecone, Weaviate) processing 2.5M+ client and transaction records with semantic search and predictive scoring.",
    ],
    extra: [
      "Improved model precision by 39% through systematic feature engineering (Pandas/NumPy) and retrieval optimization.",
      "Built a ModelOps framework with MLflow experiment tracking, Git-based version control, and automated A/B testing; PyTorch fine-tuning for candidate scoring models.",
      "Improved model deployment velocity by 46%, enabling rapid experimentation across 15+ enterprise AI/ML use cases.",
      "Created LLM-powered risk-summarization tools (GPT-4o + Llama 3) ensembled with an XGBoost tabular risk model, processing 400K+ transaction records daily — analyst throughput up 22%.",
      "Implemented function-calling and tool-orchestration for LLM agents (LangGraph + Claude 3.5 Sonnet) across core banking platforms integrated via gRPC and Kafka.",
    ],
    tech: ["Django", "LangGraph", "GPT-4o", "Pinecone", "Weaviate", "MLflow", "PyTorch", "Kafka", "gRPC"],
  },
  {
    role: "Machine Learning Engineer",
    company: "TCS",
    location: "USA",
    period: "Dec 2019 — Dec 2023",
    bullets: [
      "Built a RAG-based conversational assistant for vehicle diagnostics (GPT-3.5/4, FAISS, Hugging Face), deployed to production handling 30K+ daily queries at 88% first-contact resolution.",
      "Engineered an agentic dealer warranty-claim workflow validating repair codes against a policy database with auditable approval trails — reduced claim-processing time by 45%.",
      "Built an LLM document-intelligence pipeline (GPT-4, LangChain, T5) processing 4.5K+ supplier-quality documents daily at 86% accuracy.",
    ],
    extra: [
      "Developed domain-specific prompt engineering (chain-of-thought, few-shot, Pydantic-validated JSON schemas) for fault-code-to-repair mapping — accuracy up 39%, escalations down 46%.",
      "Implemented semantic search over 20K+ technical manuals using sentence-transformers and BERT re-ranking — retrieval precision up 30%.",
      "Integrated OpenAI API and Azure OpenAI with distributed FastAPI microservices across AWS US-East and India, handling rate limiting, retries, and streaming telemetry via Kafka.",
      "Reduced LLM inference costs by 36% through caching, prompt compression, and batched inference across the connected-vehicle fleet.",
    ],
    tech: ["Python", "GPT-3.5/4", "LangChain", "FAISS", "Hugging Face", "AWS", "FastAPI", "Kafka"],
  },
  {
    role: "ML Engineer",
    company: "Vowels Information",
    location: "India",
    period: "Sep 2018 — Nov 2019",
    bullets: [
      "Built a customer-support chatbot (Rasa + Python) with intent classification and entity extraction, cutting average first-response time by 35%.",
      "Developed an NLU pipeline (spaCy + BERT embeddings), improving intent-recognition accuracy to 88% across 40+ categories.",
      "Deployed the chatbot as a Flask REST API with a JS web widget, handling 5K+ daily conversations in production.",
    ],
    extra: [
      "Implemented dialogue management using Rasa Core's state-tracking framework for multi-turn order-tracking, returns, and FAQ flows — deflecting ~30% of support tickets.",
    ],
    tech: ["Rasa", "spaCy", "BERT", "Flask", "PostgreSQL"],
  },
  {
    role: "ML Engineer",
    company: "Vowels Information",
    location: "India",
    period: "Jan 2018 — Aug 2018",
    bullets: [
      "Built a collaborative-filtering recommendation engine (TensorFlow + Pandas) for an e-commerce platform, improving click-through rate by 18%.",
      "Implemented a hybrid ALS + content-based model addressing cold-start issues, achieving a 12% lift in recommendation relevance (NDCG@10).",
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
   Animated counters
========================================================= */
function initCounters() {
  const nums = document.querySelectorAll(".stat-num");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      io.unobserve(el);
      const target = parseFloat(el.dataset.count);
      const decimals = parseInt(el.dataset.decimal || "0", 10);
      const prefix = el.dataset.prefix || "";
      const suffix = el.dataset.suffix || "";
      const duration = 1400;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        el.textContent = prefix + value.toFixed(decimals) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.5 });
  nums.forEach(n => io.observe(n));
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
  initCounters();
  initContactForm();
  initMisc();
});
