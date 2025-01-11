import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Haktan Yürük | Portfolio",
  description: "Full Stack Developer & Designer olarak modern web teknolojileri ile yaratıcı ve kullanıcı dostu dijital deneyimler tasarlıyorum.",
  metadataBase: new URL('https://haktan-portfolio.vercel.app'),
  authors: [{ name: "Haktan Yürük" }],
  creator: "Haktan Yürük",
  publisher: "Haktan Yürük",
  keywords: ["Full Stack Developer", "Web Designer", "Frontend Developer", "Backend Developer", "UI/UX Designer", "Portfolio"],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://haktan-portfolio.vercel.app",
    title: "Haktan Yürük | Portfolio",
    description: "Full Stack Developer & Designer olarak modern web teknolojileri ile yaratıcı ve kullanıcı dostu dijital deneyimler tasarlıyorum.",
    siteName: "Haktan Yürük Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haktan Yürük | Portfolio",
    description: "Full Stack Developer & Designer olarak modern web teknolojileri ile yaratıcı ve kullanıcı dostu dijital deneyimler tasarlıyorum.",
  },
  alternates: {
    canonical: "https://haktan-portfolio.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
