// src/ThemeContext.jsx
import { createContext, useEffect, useState } from "react";

/* Provides:  { mode, toggle }  */
export const ThemeContext = createContext({
  mode: "light",
  toggle: () => {}
});

export function ThemeProvider({ children }) {
  /* 1) Try localStorage  ➜  2) fall back to system preference */
  const systemPref = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  const [mode, setMode] = useState(
    () => localStorage.getItem("theme") ?? systemPref
  );

  /* Persist choice */
  useEffect(() => localStorage.setItem("theme", mode), [mode]);

  const toggle = () => setMode(prev => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
