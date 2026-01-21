import React from "react";
import { useTheme } from "../../context/ThemeContext";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-5 right-5 z-dropdown">
      <button
        onClick={toggleTheme}
        className="bg-blue-600 border-2 border-blue-600 text-white px-4 py-2 rounded-full cursor-pointer font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
      >
        <span className="text-base">{theme === "light" ? "🌙" : "☀️"}</span>
      </button>
    </div>
  );
};
