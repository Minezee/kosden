import type { Metadata } from "next";
import { Outfit, Rubik } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});
const rubik = Rubik({
  subsets: ["cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Kostden",
  description: "Kostden Website",
  applicationName: "Kostden",
  creator: "Kostden",
  generator: "Next.js",
  icons: {
    icon: ["/logo.png"],
    apple: ["/logo.png"],
    shortcut: ["/logo.png"],
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_MAIN_URL}`),
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kostden",
    description: "Kostden Website",
    creator: "Kostden",
    images: [`${process.env.NEXT_PUBLIC_MAIN_URL}/banner.jpeg`],
  },
  openGraph: {
    title: "Kostden",
    description: "Kostden Website",
    url: `${process.env.NEXT_PUBLIC_MAIN_URL}`,
    siteName: "Kostden",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_MAIN_URL}/banner.jpeg`,
        width: 1500,
        height: 300,
      },
    ],
    locale: "en_UK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${rubik.variable}`}>
        {children}
      </body>
    </html>
  );
}
