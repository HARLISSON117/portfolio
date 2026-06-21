import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { profile } from "@/data/profile";
import ThemeProvider from "@/components/ui/ThemeProvider";

const themeInitScript = `
(function () {
  try {
    var savedTheme = localStorage.getItem("theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var shouldUseDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  } catch (_) {
    document.documentElement.classList.add("dark");
  }
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.shortName} — Desenvolvedor Full Stack em formação`,
    template: `%s | ${profile.shortName}`,
  },
  description: `Portfólio de ${profile.name}. ${profile.tagline}`,
  keywords: [
    "desenvolvedor full stack",
    "análise e desenvolvimento de sistemas",
    "portfólio",
    "ADS",
    "Next.js",
    "React",
    "Python",
    "Maranhão",
    profile.name,
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: profile.siteUrl,
    title: `${profile.shortName} — Desenvolvedor Full Stack em formação`,
    description: `Portfólio de ${profile.name}. ${profile.tagline}`,
    siteName: `Portfólio de ${profile.shortName}`,
    images: [
      {
        url: profile.ogImage,
        width: 1200,
        height: 630,
        alt: `Portfólio de ${profile.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.shortName} — Desenvolvedor Full Stack em formação`,
    description: profile.tagline,
    images: [profile.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0f0f1a" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
