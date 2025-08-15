// src/pages/Services.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

/* ----------------------------------------------------------
   All service data lives in one array — easy to maintain.
---------------------------------------------------------- */
const cards = [
  /* ───────── Development ───────── */
  {
    id: 1,
    cat: "Development",
    title: "Web Design & Development",
    img: new URL("../assets/webdesign.png", import.meta.url).href,
    features: [
      "Responsive layouts",
      "CMS integration",
      "Progressive Web App"
    ],
    price: "from $1 500"
  },
  {
    id: 2,
    cat: "Development",
    title: "E-Commerce Solutions",
    img: new URL("../assets/ecommerce.png", import.meta.url).href,
    features: [
      "Secure checkout",
      "Inventory management",
      "Payment gateways"
    ],
    price: "from $2 000"
  },

  /* ───────── Marketing ───────── */
  {
    id: 3,
    cat: "Marketing",
    title: "SEO Optimisation",
    img: new URL("../assets/SEO.png", import.meta.url).href,
    features: [
      "Keyword research",
      "Technical audits",
      "Schema markup"
    ],
    price: "from $800"
  },
  {
    id: 4,
    cat: "Marketing",
    title: "Content Strategy",
    img: new URL("../assets/content.png", import.meta.url).href,
    features: [
      "Brand voice",
      "Copywriting",
      "Editorial calendar"
    ],
    price: "from $600"
  },

  /* ───────── Optimisation ───────── */
  {
    id: 5,
    cat: "Optimisation",
    title: "Performance Audits",
    img: new URL("../assets/audits.png", import.meta.url).href,
    features: [
      "Lighthouse report",
      "Code-splitting",
      "Image optimisation"
    ],
    price: "from $600"
  },
  {
    id: 6,
    cat: "Optimisation",
    title: "Accessibility Compliance",
    img: new URL("../assets/accessibility.png", import.meta.url).href,
    features: [
      "WCAG-AA review",
      "Keyboard & ARIA",
      "Alt-text & colour test"
    ],
    price: "from $500"
  }
];

/* unique category list for filter buttons */
const categories = ["All", ...new Set(cards.map(c => c.cat))];

export default function Services() {
  const [activeCat, setActiveCat] = useState("All");
  const navigate = useNavigate();

  const visibleCards =
    activeCat === "All" ? cards : cards.filter(c => c.cat === activeCat);

  return (
    <main className="container section">
      <h1>Our Services</h1>

      {/* -------- Filter Bar -------- */}
      <div className="filter-bar" role="tablist" aria-label="Service category">
        {categories.map(cat => (
          <button
            key={cat}
            role="tab"
            className={cat === activeCat ? "active" : ""}
            onClick={() => setActiveCat(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* -------- Card Grid -------- */}
      <div className="card-grid">
        {visibleCards.map(c => (
          <article key={c.id} className="card">
            <img src={c.img} alt={c.title} />

            <div className="card-content">
              <h2>{c.title}</h2>

              <ul className="features-list">
                {c.features.map(f => <li key={f}>{f}</li>)}
              </ul>

              <p className="price">{c.price}</p>

              <button
                className="btn-secondary"
                onClick={() => navigate("/contact")}
              >
                Get Quote
              </button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
