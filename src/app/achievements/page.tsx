import { PortfolioPage } from "@/components/portfolio";
import { profile } from "@/lib/portfolio";

export const metadata = { title: "Achievements | " + profile.name };

export default function Page() {
  return <PortfolioPage section="achievements" />;
}
