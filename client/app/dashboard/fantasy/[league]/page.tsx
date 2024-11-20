"use client";

import FootballField from "@/components/macro/FootballField";
import FootballRoster from "@/components/macro/FootballRoster";

import { ArrowRight } from "lucide-react";
import { TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import CreateLeagueModal from "@/components/macro/CreateLeagueModal";

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

        <div className="flex justify-between gap-4 pb-10">
          <FootballField />
          <FootballRoster />
        </div>
      </TabsContent>

      <TabsContent value="leagues" className="">

        <h2 className="text-3xl tracking-tighter font-medium py-7">Leagues 🚀</h2>

        <div className="grid grid-cols-2 gap-6">

          <Card className="flex flex-col justify-between items-start">
            <CardHeader>
              <CardTitle>Private Leagues ✍️</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-light">You aren’t in any private leagues yet. Create or join one and wager with friends</p>
            </CardContent>
            <CardFooter className="grid grid-cols-2 gap-5">
              <CreateLeagueModal />
              <Button>Join a League</Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col justify-between items-start">
            <CardHeader>
              <CardTitle>Public Leagues 🛜</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-light">Join a public league to play against a small, randomly selected group of other acefantasy game players</p>
            </CardContent>
            <CardFooter className="">
              {/* <Button variant="outline">Cancel</Button> */}
              <Button>Join Public League</Button>
            </CardFooter>
          </Card>

          <Card>
            <div className="flex justify-between items-center p-5">
              <h3 className="h3 text-3xl tracking-tighter font-medium">
                Fire Nation
              </h3>
              <div className="inline-flex items-center gap-3">
                View League
                <ArrowRight />
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex justify-between items-center p-5">
              <h3 className="h3 text-3xl tracking-tighter font-medium">
                Beyond the wall
              </h3>
              <div className="inline-flex items-center gap-3">
                View League
                <ArrowRight />
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex justify-between items-center p-5">
              <h3 className="h3 text-3xl tracking-tighter font-medium">
                Valhalla
              </h3>
              <div className="inline-flex items-center gap-3">
                View League
                <ArrowRight />
              </div>
            </div>
          </Card>

        </div>

      </TabsContent>
    </>
  );
};

export default League;