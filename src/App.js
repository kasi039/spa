// src/App.jsx
import { useContext, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

import NavBar   from "./components/NavBar";
import Home     from "./pages/Home";
import About    from "./pages/About";
import Services from "./pages/Services";
import Contact  from "./pages/Contact";

import "./App.css";

export default function App() {
  const { mode } = useContext(ThemeContext);
  const location = useLocation();          // for scroll-to-top

  /* Toggle .dark class on <body> whenever theme changes */
  useEffect(() => {
    document.body.classList.toggle("dark", mode === "dark");
  }, [mode]);

  /* Smooth-scroll to top on every route change */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/about"    element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact"  element={<Contact />} />
      </Routes>
    </>
  );
}
