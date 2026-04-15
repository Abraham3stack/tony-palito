import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tony Palito Ojeabulu | Football Coach & Player Development Specialist",
  description: "Professional football coach with international experience in youth development, talent identification, and competitive team building.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary">
        {children}
      </body>
    </html>
  );
}