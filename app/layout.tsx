import { GeistSans } from "geist/font/sans";
import { Manrope } from "next/font/google";
import "./globals.css";

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
    <html lang="en" className={`${manrope.className} `}>
      <body className=" dark:bg-black">
        <main className="">{children}</main>
      </body>
    </html>
  );
}
