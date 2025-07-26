import AppProvider from "@/shared/provider/AppProvider";
import InterviewAppContext from "./InterviewAppContext";

export default function AuthLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <AppProvider>
            <InterviewAppContext>{children}</InterviewAppContext>
        </AppProvider>
    );
}
