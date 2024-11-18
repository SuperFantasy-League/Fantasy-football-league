"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FootballField from "@/components/macro/FootballField";
import PlayerSelections from "@/components/macro/PlayerSelections";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const League = () => {

  const pathname = usePathname();
  const league = pathname.replace("/fantasy/", "");

  console.log(league);

  return (
    <>
      <div className="pt-8 pb-4">
        <Link href={'/dashboard/fantasy'} className="inline-flex items-center gap-2 bg-black shadow-lg border text-white rounded-3xl text-sm px-3 py-2 mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
        </Link>
        <h1 className="text-3xl font-bold text-black">
          League of Legends season 1
        </h1>
      </div>

      <Tabs defaultValue="overview" className="w-full">

        <TabsList className="flex items-center gap-4 py-8 w-2/4">
          <TabsTrigger className="py-2 px-6" value="overview">Overview</TabsTrigger>
          <TabsTrigger className="py-2 px-6" value="team">My team</TabsTrigger>
          <TabsTrigger className="py-2 px-6" value="matches">Matches</TabsTrigger>
          <TabsTrigger className="py-2 px-6" value="leagues">Leagues</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="py-10 flex items-center justify-between">
            <div className="flex flex-col gap-3 text-black">
              <h2 className="text-xl text-black font-semibold">Pick Your Squad</h2>
              <p>
                {" "}
                Select a minimum of 3 players from a single team or &apos;Auto
                Pick&apos; if you&apos;re short of time
              </p>
            </div>

            <button className="px-10 py-2 backdrop-blur-sm border bg-[#6AEE96]/30 border-emerald-500/20 text-green-900 text-center rounded-full relative">
              <span>Auto Pick</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
          </div>
          
          <div className="flex justify-between gap-4 pb-10">
            <FootballField />
            <PlayerSelections />
          </div>
        </TabsContent>
        <TabsContent value="team">

        </TabsContent>
      </Tabs>

    </>
  );
};

export default League;
