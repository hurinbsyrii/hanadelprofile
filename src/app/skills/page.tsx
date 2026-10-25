import { PortfolioPage } from "@/components/portfolio";
import { profile } from "@/lib/portfolio";

export const metadata = { title: "Skills | " + profile.name };

export default function Page() {
  return <PortfolioPage section="skills" />;
}
