"use client";
import * as React from "react";

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
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";

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
          url: "/dashboard",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Funding",
      url: "#",
      items: [
        {
          title: "Wallet",
          url: "/funding",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Playground",
      url: "#",
      items: [
        {
          title: "Fantasy",
          url: "/dashboard/fantasy",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 32.9L32.9 256 256 479.1 479.1 256 256 32.9zM88.3 255.8c2-2 11.9-12.3 96.5-97.5 41.5-41.8 86.2-43.8 119.8-18.7 24.6 18.4 62.1 58.9 62.2 59 .7 .7 1.1 2.9 .6 3.4-11.3 11.8-22.7 23.5-33.5 34.7-34.2-32.3-40.5-38.2-48.5-44-17.8-12.7-41.4-10.1-57 5.1-2.2 2.1-1.8 3.4 .1 5.4 2.9 3 28.1 28.3 35.1 35.8-12 11.6-23.7 23-35.7 34.7-12-12.5-24.5-25.5-36.5-38.1-21.4 21.1-41.7 41.1-61.9 61zm234.8 101.6c-35.5 35.4-78.1 38.1-107 20.5-22.1-13.5-39.4-32.1-72.9-66.8 12.1-12.4 23.8-24.4 35.4-36.3 33 31.9 37.1 36 44.7 42.1 18.5 14.7 42.5 13.7 59.3-1.8 3.7-3.4 3.7-3.6 .1-7.2-10.6-10.7-21.2-21.4-31.8-32.2-1.3-1.3-3-2.5-.8-4.7 10.8-10.7 21.5-21.5 32.2-32.3 .3-.3 .7-.4 1.9-1.1 12.4 12.9 24.9 25.9 37.3 38.8 21-20.7 41.2-40.7 61.3-60.4 13.7 13.4 27.1 26.6 40.9 40-20.2 20.9-81.7 82.7-100.5 101.5zM256 0L0 256l256 256 256-256L256 0zM16 256L256 16l240 240-240 240L16 256z" />
            </svg>
          ),
        },
        {
          title: "Wager",
          url: "/dashboard/wager",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zm64 32l0 64c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L96 128c-17.7 0-32 14.3-32 32zM80 320c-13.3 0-24 10.7-24 24s10.7 24 24 24l56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0zm136 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0z" />
            </svg>
          ),
        },
        {
          title: "Betting",
          url: "/dashboard/betting",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M274.9 34.3c-28.1-28.1-73.7-28.1-101.8 0L34.3 173.1c-28.1 28.1-28.1 73.7 0 101.8L173.1 413.7c28.1 28.1 73.7 28.1 101.8 0L413.7 274.9c28.1-28.1 28.1-73.7 0-101.8L274.9 34.3zM200 224a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM96 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 376a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM352 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 120a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm96 328c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-114.3 0c11.6 36 3.1 77-25.4 105.5L320 413.8l0 34.2zM480 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
            </svg>
          ),
        },
        {
          title: "Nft Marketplace",
          url: "/dashboard/marketplace",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M160 80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-352zM0 272c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 272zM368 96l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48z" />
            </svg>
          ),
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [activeItem, setActiveItem] = React.useState<string | null>("Home");

  const handleItemClick = (title: string) => {
    setActiveItem(title);
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader className="my-5">
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
                    <SidebarMenuButton
                      asChild
                      isActive={activeItem === item.title}
                      size={"lg"}
                      className={`rounded-lg ${
                        activeItem === item.title
                          ? "bg-blue-500 text-white"
                          : "text-gray-800"
                      }`}
                      onClick={() => handleItemClick(item.title)}
                    >
                      <Link
                        href={item.url}
                        className="inline-flex items-center gap-5"
                      >
                        {item.icon}
                        {item.title}
                      </Link>
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
  );
}
