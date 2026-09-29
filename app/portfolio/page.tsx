import type { Metadata } from "next";
import { PortfolioPage } from "../components/pages/PortfolioPage";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Recent landscape construction projects by Vision Landscapes in Dublin, Ireland.",
};

export default function Page() {
  return <PortfolioPage />;
}
