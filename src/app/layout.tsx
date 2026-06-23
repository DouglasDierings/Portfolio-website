import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Douglas Vinicius Dierings | Portfolio",
  description: "Personal portfolio website for Douglas Vinicius Dierings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
