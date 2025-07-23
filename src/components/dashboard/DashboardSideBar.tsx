"use client";
import {
  UserPen,
  Home,
  Users,
  HandHeart,

  LayoutDashboard,

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
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Blog",
    url: "/dashboard/blog",
    icon: FilePlus2,
  },
  {
    title: "Review",
    url: "/dashboard/review",
    icon: CalendarDays,
  },
  {
    title: "Project",
    url: "/dashboard/projects",
    icon: CircleDollarSign,
  },
  {
    title: "Faq",
    url: "/dashboard/faq",
    icon: HandHeart,
  },
  {
    title: "Skill",
    url: "/dashboard/skills",
    icon: Users,
  },
  {
    title: "Team",
    url: "/dashboard/Team",
    icon: UserPen,
  },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar className="h-screen border-none bg-gray-900 text-white p-4">
      <SidebarContent className=" bg-gray-900">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* LOGO  */}
              <div className="flex items-center gap-2 p-1.5 mb-2">
                <PrimaryLogo />
              </div>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton isActive={pathname == item.url} asChild>
                    <Link href={item?.url ? item?.url : "/dashboard"}>
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
