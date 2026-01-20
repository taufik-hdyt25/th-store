import { Metadata } from "next";
import { Lobster_Two } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: {
    default: "Aplikasi Saya",
    template: "%s",
  },
  description: "Aplikasi web modern dengan fitur lengkap.",
  keywords: ["aplikasi", "web", "react", "nextjs", "shadcn"],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://example.com",
    siteName: "Aplikasi Saya",
    images: [
      {
        url: "https://example.com/og.jpg",
        width: 1200,
        height: 630,
        alt: "Aplikasi Saya OG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nama_twitter",
    title: "Aplikasi Saya",
    description: "Aplikasi web modern dengan fitur lengkap.",
    images: ["https://example.com/og.jpg"],
  },
  metadataBase: new URL("https://example.com"),
};

const Lobster = Lobster_Two({
  subsets: ["latin"],
  variable: "--font-Lobster",
  weight: ["700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        cz-shortcut-listen="true"
        className={`${Lobster.variable} chakra-ui-light`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
