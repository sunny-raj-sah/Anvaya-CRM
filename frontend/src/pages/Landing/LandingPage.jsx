
import { Link } from "react-router-dom";
import "./LandingPage.css";

const features = [
  {
    icon: "🎯",
    title: "Smart Lead Management",
    description:
      "Create, update, organize and manage customer leads from one centralized workspace.",
  },
  {
    icon: "📊",
    title: "Sales Pipeline Tracking",
    description:
      "Track every opportunity through New, Contacted, Qualified, Proposal Sent and Closed.",
  },
  {
    icon: "👥",
    title: "Sales Agent Management",
    description:
      "Manage your sales agents and assign leads to keep your sales operations organized.",
  },
  {
    icon: "💬",
    title: "Team Discussions",
    description:
      "Add comments to individual leads and maintain contextual discussions with timestamps.",
  },
  {
    icon: "🔎",
    title: "Advanced Search & Filters",
    description:
      "Find leads using search, status, priority, source and assigned sales agent filters.",
  },
  {
    icon: "📈",
    title: "Business Analytics",
    description:
      "Understand pipeline distribution, recently closed leads and sales agent performance.",
  },
];

const workflow = [
  { number: "01", title: "New", color: "#64748b" },
  { number: "02", title: "Contacted", color: "#3b82f6" },
  { number: "03", title: "Qualified", color: "#8b5cf6" },
  { number: "04", title: "Proposal Sent", color: "#f59e0b" },
  { number: "05", title: "Closed", color: "#10b981" },
];

const LandingPage = () => {
  return (
    <div className="anvaya-landing">

      {/* NAVBAR */}
      <nav className="anvaya-navbar">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">

            <Link to="/" className="anvaya-brand">
              <span className="brand-mark">A</span>
              <span>Anvaya<span className="brand-light">CRM</span></span>
            </Link>

            <div className="anvaya-nav-links d-none d-md-flex">
              <a href="#features">Features</a>
              <a href="#workflow">Workflow</a>
              <a href="#technology">Technology</a>
            </div>

            <div className="d-flex gap-2 align-items-center">
              <Link to="/login" className="anvaya-login-link">
                Login
              </Link>

              <Link to="/register" className="anvaya-nav-button">
                Get Started <span>↗</span>
              </Link>
            </div>

          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="anvaya-hero">
        <div className="container">
          <div className="row align-items-center gy-5">

            <div className="col-lg-6">

              <div className="hero-eyebrow">
                <span className="status-dot"></span>
                YOUR SALES. YOUR PIPELINE. ONE WORKSPACE.
              </div>

              <h1>
                Turn every lead into your next{" "}
                <span>opportunity.</span>
              </h1>

              <p className="hero-description">
                Take control of your sales process with Anvaya CRM.
                Organize leads, manage sales agents, track opportunities
                and understand your business performance — all in one place.
              </p>

              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link to="/register" className="hero-primary-btn">
                  Get Started Free <span>→</span>
                </Link>

                <a href="#features" className="hero-secondary-btn">
                  Explore Features
                </a>
              </div>

              <div className="hero-trust">
                <span>✓</span> Centralized lead management
                <span>✓</span> Real-time business overview
              </div>

            </div>

            {/* PRODUCT PREVIEW */}
            <div className="col-lg-6">
              <div className="dashboard-preview">

                <div className="preview-topbar">
                  <div className="d-flex align-items-center gap-2">
                    <span className="preview-logo">A</span>
                    <strong>Anvaya CRM</strong>
                  </div>

                  <span className="preview-indicator">
                    Product Preview
                  </span>
                </div>

                <div className="preview-body">

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                      <small className="preview-muted">OVERVIEW</small>
                      <h5 className="fw-bold mt-1 mb-0">
                        Sales Dashboard
                      </h5>
                    </div>
                    <span className="preview-date">Sales workspace</span>
                  </div>

                  <div className="row g-2 mb-4">
                    {[
                      ["Total Leads", "248", "👥"],
                      ["Pipeline", "186", "📊"],
                      ["Closed", "62", "✓"],
                    ].map(([label, value, icon]) => (
                      <div className="col-4" key={label}>
                        <div className="preview-stat">
                          <span>{icon}</span>
                          <small>{label}</small>
                          <strong>{value}</strong>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="preview-panel">
                    <div className="d-flex justify-content-between mb-3">
                      <strong>Lead Pipeline</strong>
                      <small>Sample data</small>
                    </div>

                    {[
                      ["New", 78, "#64748b"],
                      ["Contacted", 60, "#3b82f6"],
                      ["Qualified", 48, "#8b5cf6"],
                      ["Proposal Sent", 35, "#f59e0b"],
                      ["Closed", 24, "#10b981"],
                    ].map(([label, width, color]) => (
                      <div className="pipeline-row" key={label}>
                        <div className="d-flex justify-content-between">
                          <small>{label}</small>
                          <small>{width}%</small>
                        </div>
                        <div className="pipeline-track">
                          <div
                            className="pipeline-fill"
                            style={{ width: `${width}%`, background: color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="preview-bottom">
                    <span>📈 Business insights</span>
                    <span>👥 Sales management</span>
                    <span>💬 Lead discussions</span>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST / HIGHLIGHTS */}
      <section className="anvaya-highlights">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-6 col-md-3">
              <strong>01</strong>
              <span>Centralized CRM</span>
            </div>
            <div className="col-6 col-md-3">
              <strong>05</strong>
              <span>Pipeline Stages</span>
            </div>
            <div className="col-6 col-md-3">
              <strong>360°</strong>
              <span>Lead Visibility</span>
            </div>
            <div className="col-6 col-md-3">
              <strong>100%</strong>
              <span>Web Based</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="anvaya-features section-padding" id="features">
        <div className="container">

          <div className="section-heading text-center">
            <span className="section-label">WHAT ANVAYA OFFERS</span>
            <h2>
              Everything you need to manage
              <span> your sales journey.</span>
            </h2>
            <p>
              A centralized workspace designed to simplify lead management
              and give you better visibility into your sales operations.
            </p>
          </div>

          <div className="row g-4 mt-3">
            {features.map((feature, index) => (
              <div className="col-md-6 col-lg-4" key={feature.title}>
                <div className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <small>0{index + 1}</small>
                  <h5>{feature.title}</h5>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WORKFLOW */}
      <section className="anvaya-workflow section-padding" id="workflow">
        <div className="container">

          <div className="section-heading text-center">
            <span className="section-label">YOUR SALES JOURNEY</span>
            <h2>
              From first contact to
              <span> successful closure.</span>
            </h2>
            <p>
              Follow a structured sales pipeline and understand
              exactly where every opportunity stands.
            </p>
          </div>

          <div className="workflow-container mt-5">
            {workflow.map((step, index) => (
              <div className="workflow-step" key={step.title}>
                <div
                  className="workflow-number"
                  style={{ borderColor: step.color, color: step.color }}
                >
                  {step.number}
                </div>

                <div
                  className="workflow-dot"
                  style={{ background: step.color }}
                />

                <h6>{step.title}</h6>

                {index !== workflow.length - 1 && (
                  <div className="workflow-line" />
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ANALYTICS */}
      <section className="anvaya-analytics section-padding">
        <div className="container">
          <div className="row align-items-center gy-4">

            <div className="col-lg-6">
              <span className="section-label">DATA-DRIVEN DECISIONS</span>

              <h2>
                Don't just manage leads.
                <span> Understand your business.</span>
              </h2>

              <p>
                Turn your CRM data into meaningful business insights.
                Anvaya provides dedicated reports to help you understand
                pipeline distribution, recently closed leads and agent performance.
              </p>

              <ul className="analytics-list">
                <li>✓ Pipeline distribution by status</li>
                <li>✓ Closed leads from the last seven days</li>
                <li>✓ Closed leads grouped by sales agent</li>
                <li>✓ Visual reporting using Chart.js</li>
              </ul>

              <Link to="/register" className="hero-primary-btn">
                Explore Anvaya <span>→</span>
              </Link>
            </div>

            <div className="col-lg-6">
              <div className="analytics-preview">
                <div className="d-flex justify-content-between">
                  <strong>Business Reports</strong>
                  <span>📊</span>
                </div>

                <div className="analytics-bars">
                  {[
                    ["New", 85],
                    ["Contacted", 68],
                    ["Qualified", 55],
                    ["Proposal", 38],
                    ["Closed", 25],
                  ].map(([name, height]) => (
                    <div className="analytics-bar-item" key={name}>
                      <div className="analytics-bar-space">
                        <div style={{ height: `${height}%` }} />
                      </div>
                      <small>{name}</small>
                    </div>
                  ))}
                </div>

                <div className="analytics-note">
                  <span className="status-dot" />
                  Visual sales pipeline overview
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="anvaya-tech section-padding" id="technology">
        <div className="container">

          <div className="section-heading text-center">
            <span className="section-label">BUILT WITH MODERN TECHNOLOGY</span>
            <h2>Engineered for a complete full-stack experience.</h2>
            <p>
              A React-based frontend connected to a REST API backend
              with MongoDB-powered data management.
            </p>
          </div>

          <div className="tech-grid mt-5">
            {[
              ["⚛️", "React 19", "Frontend"],
              ["🟢", "Node.js", "Runtime"],
              ["🚀", "Express.js", "Backend"],
              ["🍃", "MongoDB", "Database"],
              ["🔐", "JWT", "Authentication"],
              ["📊", "Chart.js", "Visualization"],
            ].map(([icon, name, category]) => (
              <div className="tech-card" key={name}>
                <span>{icon}</span>
                <strong>{name}</strong>
                <small>{category}</small>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="anvaya-cta">
        <div className="container text-center">
          <span className="section-label">READY TO GET ORGANIZED?</span>
          <h2>
            Bring your sales process
            <span> together with Anvaya.</span>
          </h2>
          <p>
            Start managing leads, organizing your pipeline
            and understanding your sales performance.
          </p>

          <Link to="/register" className="cta-button">
            Get Started <span>→</span>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="anvaya-footer">
        <div className="container">
          <div className="row gy-4 align-items-center">

            <div className="col-md-6">
              <Link to="/" className="anvaya-brand footer-brand">
                <span className="brand-mark">A</span>
                Anvaya<span className="brand-light">CRM</span>
              </Link>
              <p className="mt-3 mb-0">
                A smarter way to manage your sales journey.
              </p>
            </div>

            <div className="col-md-6 text-md-end">
              <a
                href="https://github.com/sunny-raj-sah/Anvaya"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://anvaya-crm-lead-management-system.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Application
              </a>
            </div>

          </div>

          <hr />

          <div className="d-flex flex-wrap justify-content-between gap-2">
            <small>© {new Date().getFullYear()} Anvaya CRM. All rights reserved.</small>
            <small>Designed and developed by Sunny Raj.</small>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;
