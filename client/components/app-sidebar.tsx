import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"
import Image from "next/image"

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Overview",
      url: "#",
      items: [
        {
          title: "Home",
          url: "#",
        },
      ],
    },
    {
      title: "Funding",
      url: "#",
      items: [
        {
          title: "Wallet",
          url: "#",
        },
      ],
    },
    {
      title: "Playground",
      url: "#",
      items: [
        {
          title: "Fantasy",
          url: "#",
        },
        {
          title: "Wager",
          url: "#",
          isActive: true,
        },
        {
          title: "Betting",
          url: "#",
        },
        {
          title: "Nft Marketplace",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>

      <SidebarHeader>
        <Image src={"/logo1.png"} alt={"Logo"} width={170} height={100} />
      </SidebarHeader>

      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title} className="px-4">
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive} size={'lg'} className="rounded-lg">
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}
