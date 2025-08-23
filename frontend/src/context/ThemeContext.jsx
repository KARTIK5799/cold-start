// ThemeContext.tsx
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {}
});

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode: () => setDarkMode(d => !d) }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
