"use client";

import SidebarLayout, { SidebarItem } from "@/components/sidebar-layout";
import { SelectedTeamSwitcher, useUser } from "@stackframe/stack";
import {
  Columns3,
  Globe,
  Locate,
  Settings2,
  Users,
  Microscope,
  Cpu,
  Database,
  ActivityIcon,
  Microwave,
  Combine
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";

const navigationItems: SidebarItem[] = [
  {
    name: "Overview",
    href: "/",
    icon: Globe,
    type: "item"
  },
  {
    type: "label",
    name: "Management"
  },
  {
    name: "Devices",
    href: "/devices",
    icon: Cpu,
    type: "item"
  },
  {
    name: "Data",
    href: "/data",
    icon: Database,
    type: "item"
  },
  {
    name: "Actions",
    href: "/actions",
    icon: Combine,
    type: "item"
  },
  // {
  //   name: "Regions",
  //   href: "/regions",
  //   icon: Locate,
  //   type: "item"
  // },
  // {
  //   type: "label",
  //   name: "Monetization"
  // },
  // {
  //   name: "Revenue",
  //   href: "/revenue",
  //   icon: BarChart4,
  //   type: "item"
  // },
  // {
  //   name: "Orders",
  //   href: "/orders",
  //   icon: ShoppingCart,
  //   type: "item"
  // },
  // {
  //   name: "Discounts",
  //   href: "/discounts",
  //   icon: BadgePercent,
  //   type: "item"
  // },
  {
    type: "label",
    name: "Settings"
  },
  {
    name: "Configuration",
    href: "/configuration",
    icon: Settings2,
    type: "item"
  }
];

export default function Layout(props: { children: React.ReactNode }) {
  const params = useParams<{ teamId: string }>();
  const user = useUser({ or: "redirect" });
  const team = user.useTeam(params.teamId);
  const router = useRouter();

  if (!team) {
    router.push("/dashboard");
    return null;
  }

  return (
    <SidebarLayout
      items={navigationItems}
      basePath={`/dashboard/${team.id}`}
      sidebarTop={
        <SelectedTeamSwitcher
          selectedTeam={team}
          urlMap={(team) => `/dashboard/${team.id}`}
        />
      }
      baseBreadcrumb={[
        {
          title: team.displayName,
          href: `/dashboard/${team.id}`
        }
      ]}>
      {props.children}
    </SidebarLayout>
  );
}
