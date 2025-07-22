"use client";
import {
  UserPen,
  Home,
  Users,
  HandHeart,
  Settings,
  LayoutDashboard,
  LogOut,
  CalendarDays,
  CircleDollarSign,
  FilePlus2,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PrimaryLogo from "@/assets/Logo/PrimaryLogo";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Dashboard",
    url: "",
    icon: LayoutDashboard,
  },
  {
    title: "Create New Course",
    url: "create-course",
    icon: FilePlus2,
  },
  {
    title: "My Courses",
    url: "my-course",
    icon: CalendarDays,
  },
  {
    title: "My Earning",
    url: "my-earning",
    icon: CircleDollarSign,
  },
  {
    title: "Support",
    url: "support",
    icon: HandHeart,
  },
  {
    title: "Classes",
    url: "classe",
    icon: Users,
  },
  {
    title: "Profile",
    url: "profile",
    icon: UserPen,
  },
  {
    title: "Settings",
    url: "setting",
    icon: Settings,
  },
  {
    title: "LogOut",
    url: "logout",
    icon: LogOut,
  },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar className="bg-none">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* LOGO  */}
              <div className="flex items-center gap-2 p-1.5">
                <PrimaryLogo />
              </div>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={pathname.startsWith(item?.url)}
                    asChild
                  >
                    <Link href={item.url}>
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
