"use client";

import FantasyFootball from "@/components/macro/FantasyFootball";
//import FootballField from "@/components/macro/FootballField";
//import FootballRoster from "@/components/macro/FootballRoster";
//import PremierLeagueTeams from "@/components/micro/PlayerAccordion";
import { TabsContent } from "@/components/ui/tabs";

const League = () => {
  return (
    <>
      <TabsContent value="overview">
        <div className="py-10 flex items-center justify-between">
          <div className="flex flex-col gap-3 text-black">
            <h2 className="text-xl text-black font-semibold">
              Pick Your Squad
            </h2>
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

        <div>
          <FantasyFootball />
          {/* <FootballField />
          <PremierLeagueTeams /> */}
        </div>
      </TabsContent>
    </>
  );
};

export default League;
