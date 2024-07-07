import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
// import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Shopping Cart",
  description:
    "An intuitive and efficient shopping cart application built with Next.js and TypeScript. Seamlessly manage your online purchases with user-friendly features and a responsive design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
