// layout.tsx
import AppProvider from "@/shared/provider/AppProvider";
import AuthAppContext from "./AuthAppContext";

export default function AuthLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <AppProvider>
            <AuthAppContext>{children}</AuthAppContext>
        </AppProvider>
    );
}
