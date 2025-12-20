import { tokens } from "@/lib/theme";
import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Corbin United Inc. | Family Health, History & Well-Being",
  description:
    "Corbin United Inc. is a 501(c)(3) organization focused on improving family health, preserving history, and enhancing community well-being.",
  keywords: [
    "Corbin United",
    "501(c)(3)",
    "community foundation",
    "family health",
    "scholarships",
    "financial assistance",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${sourceSans.variable}`}>
        <style>{`
          :root {
            --font-heading: ${playfairDisplay.style.fontFamily};
            --font-body: ${sourceSans.style.fontFamily};
            --theme-background: ${tokens.colors.surface};
            --theme-foreground: ${tokens.colors.text};
          }
        `}</style>
        {children}
      </body>
    </html>
  );
}
