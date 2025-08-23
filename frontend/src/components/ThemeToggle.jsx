import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <button
      onClick={toggleDarkMode}
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 dark:text-white"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
