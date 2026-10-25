import { PortfolioPage } from "@/components/portfolio";
import { profile } from "@/lib/portfolio";

export const metadata = { title: "About me | " + profile.name };

export default function Page() {
  return <PortfolioPage section="about" />;
}
