import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        relative flex h-11 w-[84px] items-center
        rounded-full border border-slate-200
        bg-slate-100 p-1
        shadow-sm
        transition-all duration-300
        hover:shadow-md
        dark:border-slate-700
        dark:bg-slate-800
      "
    >
      <span
        className={`
          absolute flex h-9 w-9 items-center justify-center
          rounded-full bg-white shadow-sm
          transition-transform duration-300
          dark:bg-slate-950
          ${theme === "dark" ? "translate-x-10" : "translate-x-0"}
        `}
      >
        {theme === "light" ? (
          <Sun className="h-5 w-5 text-amber-500" />
        ) : (
          <Moon className="h-5 w-5 text-blue-400" />
        )}
      </span>

      <div className="flex w-full justify-between px-2">
        <Sun className="h-4 w-4 text-slate-400" />
        <Moon className="h-4 w-4 text-slate-400" />
      </div>
    </button>
  );
};

export default ThemeToggle;