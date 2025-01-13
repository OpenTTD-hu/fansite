import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "@/styles/global.module.css";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Magyar OpenTTD Közösségi Portál",
  description: "Magyar OpenTTD Közösségi Portál",
};

export default function RootLayout({
  authn,
  content,
  basic,
  message,
  nav,
  top,
}: Readonly<{
  authn: React.ReactNode;
  content: React.ReactNode;
  basic: React.ReactNode;
  message: React.ReactNode;
  nav: React.ReactNode;
  top: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <div className={styles.container}>
          <div className={styles.container__left}>
            <div className={styles.container__top}>{top}</div>
          </div>
          <div className={styles.container__main}>
            <div className={styles.container__basic}>{basic}</div>
            <div className={styles.container__content}>{content}</div>
          </div>
          <div className={styles.container__right}>
            <div className={styles.container__nav}>{nav}</div>
            <div className={styles.container__auth}>{authn}</div>
            <div className={styles.container__message}>{message}</div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
