import AppProvider from "@/shared/provider/AppProvider";
import DashAppContext from "./DashAppContext";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProvider>
      <DashAppContext>{children}</DashAppContext>
    </AppProvider>
  );
}
