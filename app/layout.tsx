import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/contexts/UserContext";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CMV Dialogue",
  description: "Discuss your opinion with an LLM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex justify-center">
      <body
        className={`${inter.className} antialiased w-full max-w-[1280px]`}
      >
        <UserProvider>
            {children}
        </UserProvider>
      </body>
    </html>
  );
}
