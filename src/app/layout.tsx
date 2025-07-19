import { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: {
    default: "Aplikasi Saya",
    template: "%s | Aplikasi Saya",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body cz-shortcut-listen="true">{children}</body>
    </html>
  );
}
