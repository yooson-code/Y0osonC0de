"use client";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log("✅ ThemeProviders mounted!");
    // Debug observers removed - theme working properly
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      storageKey="theme"
      disableTransitionOnChange={false}
    >
      {children}
    </ThemeProvider>
  );
}
