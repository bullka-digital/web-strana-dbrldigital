import type { Metadata } from "next";
import { Barlow, Montserrat, Raleway } from "next/font/google";
import CustomCursor from "@/components/ui/CustomCursor";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "dbrl digital — Digitalno. Brend. Superzvezda.",
  description: "Pomažemo brendovima i kompanijama da se istaknu u digitalnom dobu.",
  openGraph: {
    title: "dbrl digital",
    description: "Pomažemo brendovima i kompanijama da se istaknu u digitalnom dobu.",
    type: "website",
    siteName: "dbrl digital",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${barlow.variable} ${montserrat.variable} ${raleway.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
