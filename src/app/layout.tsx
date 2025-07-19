import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "@/shared/styles/globals.css";
import Header from "@/shared/components/Header";
import Footer from "@/shared/components/Footer";

const robotoMono = Roboto_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aierview - Tech Interview Simulator for Devs.",
  description: "Tech Interview Simulator for Devs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
