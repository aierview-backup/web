import LoadingListener from "@/shared/hooks/loading-listener";
import GlobalLoading from "@/shared/ui/components/GlobalLoading";
import "@/shared/ui/styles/globals.css";
import { GOOGLE_CLIENT_ID } from "@/shared/utils/lib";
import { GoogleOAuthProvider } from "@react-oauth/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Aierview - Tech Interview Simulator for Devs.",
  description: "Tech Interview Simulator for Devs",
  icons: {
    icon: "/logos/aierview/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
          <GlobalLoading />
          <LoadingListener />
          <div id="modal"></div>
          {children}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
