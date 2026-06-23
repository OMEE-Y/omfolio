"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "@phosphor-icons/react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  // Replaced static layout with a matching placeholder structure to prevent layout shifts
  if (!mounted) {
    return (
      <div className="p-2.5 w-[40px] h-[40px]" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="p-2.5 hover:bg-zinc-200 dark:hover:bg-white/10 rounded-xl transition-all duration-200 text-zinc-500 hover:text-black dark:hover:text-white group flex items-center justify-center"
    >
      {theme === "dark" ? (
        <Sun size={20} weight="duotone" className="transition-transform group-hover:scale-110" />
      ) : (
        <Moon size={20} weight="duotone" className="transition-transform group-hover:scale-110" />
      )}
    </button>
  );
}