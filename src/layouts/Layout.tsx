import React, { useEffect } from "react";
import { Footer } from "../components/elements";
import { useThemeStore } from "../store/themeStore";
import { Header } from "../components/elements/Header";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export const Layout = ({ title, children }: LayoutProps) => {
  document.title = title;
  const { theme } = useThemeStore();

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") html.classList.add("dark");
    else html.classList.remove("dark");
  }, [theme]);

  return (
    <div className="container">
      <Header />
      <main className="flex flex-col gap-y-10 md:gap-y-20 overflow-hidden min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  );
};
