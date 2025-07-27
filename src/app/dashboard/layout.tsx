import { DashboardSidebar } from "@/components/dashboard/DashboardSideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="w-full bg-blue-950/30 font-normal">
      <SidebarTrigger className="hover:bg-gray-200 hover:rounded-lg text-white"/>
          {children}
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
