"use client";

import { useState } from "react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./components/pages/HomePage";
import { PortfolioPage } from "./components/pages/PortfolioPage";
import { ContactPage } from "./components/pages/ContactPage";

type Page = "home" | "portfolio" | "contact";

export default function MainPage() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "portfolio":
        return <PortfolioPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="transition-opacity duration-300">{renderPage()}</main>
      <Footer />
    </div>
  );
}
