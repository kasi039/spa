// src/pages/About.jsx
import "./About.css";

/* ---- Timeline milestones ---- */
const milestones = [
  { year: 2024, text: "Founded as a two-person side project." },
  { year: 2025, text: "Shipped 50th client SPA & hit 98% satisfaction." },
  { year: 2026, text: "Opened second office and added performance team." }
];

/* ---- Team (uses images from /public/assets/ ... ) ----
   Keep your existing files for the first three members.
   Add /public/assets/aditi.jpg for Aditi (or change the file name below).
*/
const team = [
  { name: "Harpreet singh",        role: "Lead Engineer",      img: "/assets/avery.png"  },
  { name: "Himanshu Grover",       role: "UX Designer",         img: "/assets/diego.png"  },
  { name: "kasiviswanadham Thota", role: "SEO Strategist",      img: "/assets/kasi.jpg"   },
  { name: "Aditi",                 role: "Project Manager",     img: "/assets/aditi.jpg"  }
];

/* ---- Capability badges (fun, skimmable) ---- */
const capabilities = [
  "React + Routing",
  "A11y (WCAG-AA)",
  "SEO & Schema",
  "PWAs",
  "Performance Tuning",
  "Design Systems"
];

export default function About() {
  return (
    <main className="about-page container">
      {/* HERO BANNER */}
      <header className="about-hero">
        <h1>About Us</h1>
        <p>
          We’re a boutique agency crafting high-performance, accessible single-page
          applications that help businesses grow online.
        </p>
      </header>

      {/* AT A GLANCE */}
      <section className="about-stats" aria-label="Company at a glance">
        <article className="stat">
          <span className="num">50+</span>
          <span className="label">Projects delivered</span>
        </article>
        <article className="stat">
          <span className="num">98%</span>
          <span className="label">Client satisfaction</span>
        </article>
        <article className="stat">
          <span className="num">3–5×</span>
          <span className="label">Faster load times</span>
        </article>
        <article className="stat">
          <span className="num">2</span>
          <span className="label">Offices worldwide</span>
        </article>
      </section>

      {/* MISSION / VALUES */}
      <section className="values">
        <h2>Our Mission</h2>
        <p>
          Empower every business—big or small—to reach its audience with
          lightning-fast, inclusive web experiences.
        </p>

        <h2>Core Values</h2>
        <ul className="value-grid">
          <li> Quality first</li>
          <li> Transparent collaboration</li>
          <li> Continuous improvement</li>
          <li> Accessibility for everyone</li>
        </ul>
      </section>

      {/* TIMELINE */}
      <section className="timeline">
        <h2>Milestones</h2>
        <ol>
          {milestones.map((m) => (
            <li key={m.year}>
              <span className="year">{m.year}</span>
              {m.text}
            </li>
          ))}
        </ol>
      </section>

      {/* CAPABILITIES */}
      <section className="capabilities">
        <h2>What we’re great at</h2>
        <ul className="caps-grid">
          {capabilities.map((c) => (
            <li key={c} className="cap">{c}</li>
          ))}
        </ul>
      </section>

      {/* TEAM */}
      <section className="team">
        <h2>Meet the team</h2>
        <div className="team-grid">
          {team.map((t) => (
            <article key={t.name} className="card">
              <div className="avatar">
                <img src={t.img} alt={t.name} />
              </div>
              <h3>{t.name}</h3>
              <p>{t.role}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
