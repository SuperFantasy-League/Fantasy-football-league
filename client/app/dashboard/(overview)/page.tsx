"use client";
import { PointsChart } from "@/components/macro/PointsChart";
import RecentTx from "@/components/macro/RecentTx";
import GameBreakdown from "@/components/micro/GameBreakdown";
import UserBalanceCard from "@/components/micro/UserBalanceCard";
import UserLeaguesCard from "@/components/micro/UserLeaguesCard";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useActiveAccount } from "thirdweb/react";
import { useFixtures } from "@/contexts/FixtureContext";

export default function Page() {
  const account = useActiveAccount();
  const { nextFixture } = useFixtures();
  return (
    <main className="space-y-8">
      <div className="w-full mt-5 pt-4 pb-9 border-b">
        <div className="grid grid-cols-3 gap-5 items-center w-full">
          <UserLeaguesCard />
          <Card className="flex flex-col items-start gap-3 p-4 shadow-md">
            <p className="text-xs font-medium text-gray-600">
              Current Season Points
            </p>
            {account ? (
              <p className="text-2xl font-medium inline-flex items-center gap-2">
                1,200
                <small className="text-xs text-muted-foreground">
                  <span className="text-green-600 font-semibold pr-1">
                    +2.5%
                  </span>
                  vs last season
                </small>
              </p>
            ) : (
              <p className="text-2xl font-medium inline-flex items-center gap-2">
                0
                <small className="text-xs text-muted-foreground">
                  <span className="text-green-600 font-semibold pr-1">--%</span>
                  vs last season
                </small>
              </p>
            )}
          </Card>

          <Card className="flex flex-col items-start gap-3 p-4 shadow-md">
            <p className="text-sm">Season position</p>
            <p className="text-2xl font-medium">3rd</p>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <UserBalanceCard />

        {account ? (
          <Card className="p-4 space-y-4 shadow-md">
            <p className="text-sm font-medium text-gray-600">
              Season Statistics
            </p>
            <div className="">
              <GameBreakdown />
            </div>
          </Card>
        ) : (
          <div className="aspect-video rounded-xl bg-muted/50" />
        )}

        {account ? (
          <Card className="p-4 space-y-4 shadow-md">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-600">Next game</p>
              <p className="text-xs font-semibold text-cyan-600">
                View Fixtures
              </p>
            </div>

            <div className="flex justify-center items-center divide-x text-xs">
              <div className="pr-2 flex items-center gap-2">
                <Image
                  src={nextFixture?.league.logo || "/placeholder.png"}
                  alt={"EPL"}
                  className="w-8 h-8"
                  width={32}
                  height={32}
                />
                {nextFixture?.league?.name || "League"}
              </div>
              <p className="pl-2">
                {nextFixture?.date
                  ? new Date(nextFixture.date).toLocaleString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  : "Date Not Available"}
              </p>
            </div>

            <div className="flex justify-center items-center gap-4">
              <div className="flex items-center gap-1.5">
                <p>{nextFixture?.teams?.home?.name || "Home Team"}</p>
                <div className="h-12 w-12 rounded-lg flex justify-center items-center bg-zinc-200/60 border shadow">
                  <Image
                    src={nextFixture?.teams?.home?.logo || "/placeholder.png"}
                    alt={nextFixture?.teams?.home?.name || "Home Team"}
                    width={27}
                    height={10}
                  />
                </div>
              </div>

              <div className="w-10 h-10 rounded-full flex justify-center items-center bg-rose-600 shadow-lg">
                <p className="text-md text-white font-medium">VS</p>
              </div>

              <div className="flex items-center gap-1.5">
                <p>{nextFixture?.teams?.away?.name || "Away Team"}</p>
                <div className="h-12 w-12 rounded-lg flex justify-center items-center bg-zinc-200/60 border shadow">
                  <Image
                    src={nextFixture?.teams?.away?.logo || "/placeholder.png"}
                    alt={nextFixture?.teams?.away?.name || "Away Team"}
                    width={27}
                    height={10}
                  />
                </div>
              </div>
            </div>
          </Card>
        ) : (
          <div className="aspect-video rounded-xl bg-muted/50" />
        )}
      </div>

      {account ? (
        <div className="grid grid-cols-2 gap-10">
          <PointsChart />
          <RecentTx />
        </div>
      ) : (
        <div className="min-h-[50vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      )}
    </main>
  );
}
