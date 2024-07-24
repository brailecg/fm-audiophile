import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "FM - Audiophile",
  description: "Best place for all your audio needs.",
};

const manrope = Manrope({ subsets: ["cyrillic"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.className}  `}>
      <body className="mx-auto flex  flex-col ">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
