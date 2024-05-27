import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Footer from "@/components/footer";

import { Providers } from "./providers";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Badalu Workers Agency",
  description:
    "Badalu Workers Agency| We provide the best workers for your needs| Home Schooling, Office, and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader />
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
