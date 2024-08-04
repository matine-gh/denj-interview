import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/app/clientWrapper";
import ReduxProvider from "@/app/reduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "استدیو دنج",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <meta name="theme-color" content="#000000"/>
      <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
      <link rel="icon" href="/favicon.ico"/>
      <link rel="manifest" href="/manifest.webmanifest"/>
    </head>

      <body className={inter.className}>
        <ReduxProvider>
          <ClientWrapper>
            {children}
          </ClientWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
