import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Favicon from "/public/favicon.ico";
import { ModalProvider } from "@/components/modal-provider";
import { ToasterProvider } from "@/components/toaster-provider";
import { dark } from '@clerk/themes';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Canvas of Smart Creations - artivoAI",
  description: "AI Platform for content creators",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark
    }}
    >
      <html lang="en">
        <body className={inter.className}>
          <ModalProvider />
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
