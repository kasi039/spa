// src/components/NavBar.js
import { useState, useContext } from "react";
import { NavLink }              from "react-router-dom";
import { ThemeContext }         from "../ThemeContext";

import "./NavBar.css";                              // scoped styles

export default function NavBar() {
  /* ---- theme state (light / dark) ---- */
  const { mode, toggle: toggleTheme } = useContext(ThemeContext);

  /* ---- mobile-menu state ---- */
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  const closeMenu  = () => setOpen(false);

  /* ---- reusable link (closes drawer on click) ---- */
  const MyLink = ({ to, label }) => (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) => (isActive ? "active" : "")}
      onClick={closeMenu}
    >
      {label}
    </NavLink>
  );

  return (
    <header className="navbar">
      <div className="brand">My&nbsp;SPA</div>

      {/* hamburger (only visible <768 px) */}
      <button
        aria-label="Toggle menu"
        className={`hamburger ${open ? "is-open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span><span></span><span></span>
      </button>

      {/* link stack */}
      <nav className={open ? "menu open" : "menu"}>
        <MyLink to="/"         label="Home"     />
        <MyLink to="/about"    label="About"    />
        <MyLink to="/services" label="Services" />
        <MyLink to="/contact"  label="Contact"  />
      </nav>

      {/* dark-mode switch */}
      <button
  aria-label="Toggle dark mode"
  className="theme-btn"
  onClick={toggleTheme}
>
  {mode === "light" ? "🌙" : "☀️"}
</button>

    </header>
  );
}
