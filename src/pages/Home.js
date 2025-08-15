// src/pages/Home.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";                     // page-specific styles

export default function Home() {
  /* -------------------------------------------------
     Add / remove .home-theme on <body>
     (gives this page its own colour palette)
  ------------------------------------------------- */
  useEffect(() => {
    document.body.classList.add("home-theme");
    return () => document.body.classList.remove("home-theme");
  }, []);

  return (
    <main>
      {/* ------------ HERO ------------- */}
      <header className="hero">
        <div className="hero-content container">
          <h1>Build. Launch. Grow.</h1>
          <p>
            Fast, accessible single-page applications that convert visitors
            into customers.
          </p>
          <Link to="/services" className="btn-primary">
            Our Services
          </Link>
        </div>
      </header>

      {/* ------------ FEATURES ------------- */}
      <section className="features container">
        <h2>Why choose us?</h2>

        <div className="feature-grid">
          <article>
            <h3>⚡ Performance 100</h3>
            <p>
              Every site ships with <strong>90-100 Lighthouse</strong> scores.
            </p>
          </article>

          <article>
            <h3>♿ Accessible</h3>
            <p>
              WCAG-AA compliance built-in—keyboard &amp; screen-reader friendly.
            </p>
          </article>

          <article>
            <h3>🔍 SEO-Ready</h3>
            <p>
              Structured data, meta tags, and blazing load times keep you on
              top.
            </p>
          </article>
        </div>
      </section>

      {/* ------------ STATS STRIP ------------- */}
      <section className="stats-strip">
        <div className="stat">
          <span>50+</span>
          projects shipped
        </div>
        <div className="stat">
          <span>98%</span>
          client satisfaction
        </div>
        <div className="stat">
          <span>3-5×</span>
          faster load times
        </div>
      </section>

      {/* ------------ TESTIMONIALS ------------- */}
      <section className="testimonials container">
        <h2>What clients say</h2>

        <blockquote>
          “The new SPA cut our bounce rate in half and doubled sign-ups.”
          <footer>— Maria L., Product Lead</footer>
        </blockquote>

        <blockquote>
          “SEO scores jumped from 59 to 95 overnight. Amazing work!”
          <footer>— Jamal K., Marketing Director</footer>
        </blockquote>
      </section>

      {/* ------------ CTA ------------- */}
      <section className="cta">
        <h2>Ready to launch your next project?</h2>
        <Link to="/contact" className="btn-primary btn-lg">
          Get a Free Quote
        </Link>
      </section>
    </main>
  );
}
