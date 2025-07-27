import {AppProvider} from "@/shared/provider/AppProvider";
import "@/shared/ui/styles/globals.css";
import {GOOGLE_CLIENT_ID} from "@/shared/utils/lib.";
import {GoogleOAuthProvider} from "@react-oauth/google";
import type {Metadata} from "next";
import {Inter} from "next/font/google";

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
            <AppProvider>
                <div id="modal"></div>
                {children}
            </AppProvider>
        </GoogleOAuthProvider>
        </body>
        </html>
    );
}
