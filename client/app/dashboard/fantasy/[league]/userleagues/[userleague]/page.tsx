"use client";
import { LeagueTable } from "@/components/macro/LeagueTable";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const invoices = [
  {
    rank: "1",
    team: "Flame Hashira",
    manager: "blaze.eth",
    gameweek: "80",
    points: "256",
  },
  {
    rank: "2",
    team: "Human Torch",
    manager: "powram.eth",
    gameweek: "64",
    points: "248",
  },
  {
    rank: "3",
    team: "Fire Benders",
    manager: "0xd5hd7...ujhf78j",
    gameweek: "56",
    points: "210",
  },
  {
    rank: "4",
    team: "Ghost Riders",
    manager: "shimmer.eth",
    gameweek: "97",
    points: "165",
  },
];

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname();

  return (
    <>
      <div className="w-full flex justify-between items-center mb-12">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">
                Building Your Application
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Data Fetching</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="inline-flex items-center gap-3">
          <Link href={`/${pathname.split("/").slice(1).join("/")}/leaguepool`}>
            <Button className="bg-[#F9A8D4] text-black">
              View league pool
            </Button>
          </Link>
          <Button>Copy invite code</Button>
          <Button variant={"secondary"}>Copy invite link</Button>
        </div>
      </div>
      <LeagueTable invoices={invoices} />
    </>
  );
};

export default page;
