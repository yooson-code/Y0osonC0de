"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });
  const navLinksRef = useRef<{ [key: string]: HTMLElement }>({});

  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Update underline position when activeId changes
  useEffect(() => {
    if (navLinksRef.current[activeId]) {
      const element = navLinksRef.current[activeId];
      setUnderlineStyle({
        width: element.offsetWidth,
        left: element.offsetLeft,
      });
    }
  }, [activeId]);

  useEffect(() => {
    const ids = ["home", "about", "projects", "work"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="dark:bg-[#24292f] px-4 py-3 sticky top-0 z-40 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link
            href="/"
            className="font-black text-gray-50 dark:text-white hover:text-gray-800 dark:hover:text-white transition-colors"
          >
            Yooson—code
          </Link>
        </div>

        {/* desktop links */}
        <div className="hidden md:flex items-center space-x-6 relative">
          {/* Animated underline */}
          <div
            className="absolute bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 transition-all duration-500 ease-out shadow-lg shadow-blue-500/50 dark:shadow-blue-400/50 navbar-underline"
            style={{
              width: `${underlineStyle.width}px`,
              left: `${underlineStyle.left}px`,
            }}
          />
          <a
            ref={(el) => {
              if (el) navLinksRef.current["home"] = el;
            }}
            href="#home"
            className={`${
              activeId === "home"
                ? "text-gray-50 dark:text-white"
                : "text-gray-50 dark:text-white"
            } hover:text-gray-900 dark:hover:text-white transition-colors relative`}
          >
            Home
          </a>
          <a
            ref={(el) => {
              if (el) navLinksRef.current["about"] = el;
            }}
            href="#about"
            className={`${
              activeId === "about"
                ? "text-gray-50 dark:text-white"
                : "text-gray-50 dark:text-white"
            } hover:text-gray-900 dark:hover:text-white transition-colors relative`}
          >
            About
          </a>
          <a
            ref={(el) => {
              if (el) navLinksRef.current["projects"] = el;
            }}
            href="#projects"
            className={`${
              activeId === "projects"
                ? "text-gray-50 dark:text-white"
                : "text-gray-50 dark:text-white"
            } hover:text-gray-900 dark:hover:text-white transition-colors relative`}
          >
            Projects
          </a>
          <a
            ref={(el) => {
              if (el) navLinksRef.current["work"] = el;
            }}
            href="#work"
            className={`${
              activeId === "work"
                ? "text-gray-50 dark:text-white"
                : "text-gray-50 dark:text-white"
            } hover:text-gray-900 dark:hover:text-white transition-colors relative`}
          >
            Work
          </a>
        </div>

        {/* right controls: theme + mobile burger */}
        <div className="flex items-center space-x-4">
          {/* Theme toggle desktop */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hidden md:inline text-gray-50 dark:text-white hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              )}
            </button>
          )}

          {/* mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-900 dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div className="md:hidden mobile-menu">
          <div className="px-4 py-3 space-y-2 flex flex-col">
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className={`${
                activeId === "home"
                  ? "text-gray-50 dark:text-white"
                  : "text-gray-50 dark:text-white"
              } block`}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className={`${
                activeId === "about"
                  ? "text-gray-50 dark:text-white"
                  : "text-gray-50 dark:text-white"
              } block`}
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className={`${
                activeId === "projects"
                  ? "text-gray-50 dark:text-white"
                  : "text-gray-50 dark:text-white"
              } block`}
            >
              Projects
            </a>
            <a
              href="#work"
              onClick={() => setMenuOpen(false)}
              className={`${
                activeId === "work"
                  ? "text-gray-50 dark:text-white"
                  : "text-gray-50 dark:text-white"
              } block`}
            >
              Work
            </a>

            {/* Theme toggle mobile */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center space-x-2 text-gray-700 dark:text-white"
              >
                {theme === "dark" ? (
                  // ☀️ Sun icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 
             1.591M21 12h-2.25m-.386 
             6.364l-1.591-1.591M12 
             18.75V21m-4.773-4.227l-1.591 
             1.591M5.25 12H3m4.227-4.773L5.636 
             5.636M15.75 12a3.75 3.75 
             0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                ) : (
                  // 🌙 Moon icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.718 9.718 
             0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 
             0-1.33.266-2.597.748-3.752A9.753 
             9.753 0 003 11.25C3 16.635 7.365 21 
             12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                  </svg>
                )}
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
