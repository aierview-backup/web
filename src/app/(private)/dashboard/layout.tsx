// layout.tsx
import PageTitleProvider from "@/shared/provider/DashboardProvider";
import AuthPageTitleContent from "./DashPageTitleContent";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageTitleProvider>
      <AuthPageTitleContent>{children}</AuthPageTitleContent>
    </PageTitleProvider>
  );
}
