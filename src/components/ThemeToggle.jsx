import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
      p-2
      rounded-lg
      border
      cursor-pointer
      "
    >
      {darkMode ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;