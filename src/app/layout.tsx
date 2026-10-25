import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond, Dancing_Script } from "next/font/google";
import { SiteHeader, SiteFooter } from "@/components/portfolio";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-body", subsets: ["latin"] });
const serif = Cormorant_Garamond({ variable: "--font-editorial", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const script = Dancing_Script({ variable: "--font-handwriting", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Hana Delisha | A little portfolio of possibility",
  description: "A sample secondary school portfolio: learning, creativity, school life, and a student's journey. All content is illustrative.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${script.variable}`}>
      {/* Extensions may inject body attributes (e.g. cz-shortcut-listen) before hydration.
          Suppress only this element's mismatch; descendant checks remain enabled. */}
      <body suppressHydrationWarning>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
