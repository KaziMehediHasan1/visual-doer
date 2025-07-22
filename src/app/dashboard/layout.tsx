import { DashboardSidebar } from "@/components/dashboard/DashboardSideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="w-full bg-blue-950/30">
        <SidebarTrigger  className="hover:bg-gray-200 hover:rounded-lg text-white "/>
        <div className="">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
