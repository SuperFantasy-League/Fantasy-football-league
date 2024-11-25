"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const League = ({ children }: { children: React.ReactNode }) => {
  const [leagueName, setLeagueName] = useState("");
  const pathname = usePathname();
  const league = pathname.replace("/dashboard/fantasy/", "");

  const [selectedTab, setSelectedTab] = useState(() => {
    return localStorage.getItem("selectedTab") || "overview";
  });
  // fantasy / scp / userleagues;
  useEffect(() => {
    if (league) {
      switch (league) {
        case "ucl":
          setLeagueName("UEFA Champions League");
          break;
        case "epl":
          setLeagueName("English Premier League");
          break;
        case "scp":
          setLeagueName("Scottish Premiership");
          break;
        case "bundesliga":
          setLeagueName("Bundesliga");
          break;
        case "laliga":
          setLeagueName("La Liga");
          break;
        case "ligue1":
          setLeagueName("Ligue 1");
          break;
        default:
          break;
      }
    }

    // return () => {
    //     setLeagueName("");
    // };
  }, [league]);

  // New function to handle tab change
  const handleTabChange = (value: string) => {
    setSelectedTab(value);
    localStorage.setItem("selectedTab", value); // Save to local storage
  };

  return (
    <>
      <div className="pt-8 pb-4">
        <Link
          href={"/dashboard/fantasy"}
          className="inline-flex items-center gap-2 bg-black shadow-lg border text-white rounded-3xl text-sm px-3 py-2 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Link>
        <h1 className="text-3xl font-bold text-black">{leagueName} 24/25</h1>
        {/*   <TeamDisplay teams={teams} /> */}
      </div>

      <Tabs defaultValue={selectedTab} className="w-full">
        <TabsList className="flex items-center gap-4 py-8 w-2/4">
          <Link href={"/dashboard/fantasy/scp"}>
            <TabsTrigger
              className="py-2 px-6"
              value="overview"
              onClick={() => handleTabChange("overview")}
            >
              Overview
            </TabsTrigger>
          </Link>

          <TabsTrigger
            className="py-2 px-6"
            value="team"
            onClick={() => handleTabChange("team")}
          >
            My team
          </TabsTrigger>

          <TabsTrigger
            className="py-2 px-6"
            value="matches"
            onClick={() => handleTabChange("matches")}
          >
            Matches
          </TabsTrigger>

          <Link href={`/${pathname.split("/").slice(1).join("/")}/userleagues`}>
            <TabsTrigger
              className="py-2 px-6"
              value="leagues"
              onClick={() => handleTabChange("leagues")}
            >
              Leagues
            </TabsTrigger>
          </Link>
        </TabsList>

        {children}
      </Tabs>
    </>
  );
};

export default League;
