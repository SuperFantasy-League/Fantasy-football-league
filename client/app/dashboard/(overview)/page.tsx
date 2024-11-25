'use client'
import { PointsChart } from "@/components/macro/PointsChart";
import RecentTx from "@/components/macro/RecentTx";
import GameBreakdown from "@/components/micro/GameBreakdown";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useActiveAccount } from "thirdweb/react";

export default function Page() {
  const account = useActiveAccount();
  return (
    <main className="space-y-8">
      <div className="w-full mt-5 pt-4 pb-9 border-b">
        <div className="grid grid-cols-3 gap-5 items-center w-full">
          <Card className="flex flex-col items-start gap-3 p-4 shadow-md">
            <p className="text-xs font-medium text-gray-600">My Leagues</p>
            {
              account ? <p className="text-2xl font-medium inline-flex gap-2 items-center">
                12
                <small className="bg-blue-300/50 px-2 py-1 rounded-3xl text-xs text-blue-800">30% owned</small>
              </p>
                : <p className="text-2xl font-medium inline-flex gap-2 items-center">
                  0
                  <small className="bg-blue-300/50 px-2 py-1 rounded-3xl text-xs text-blue-800">0% owned</small>
                </p>
            }

          </Card>
          <Card className="flex flex-col items-start gap-3 p-4 shadow-md">
            <p className="text-xs font-medium text-gray-600">Current Season Points</p>
            {
              account ?
                <p className="text-2xl font-medium inline-flex items-center gap-2">
                  1,200
                  <small className="text-xs text-muted-foreground">
                    <span className="text-green-600 font-semibold pr-1">
                      +2.5%
                    </span>
                    vs last season
                  </small>
                </p>
                :
                <p className="text-2xl font-medium inline-flex items-center gap-2">
                  0
                  <small className="text-xs text-muted-foreground">
                    <span className="text-green-600 font-semibold pr-1">
                      --%
                    </span>
                    vs last season
                  </small>
                </p>
            }
          </Card>

          <Card className="flex flex-col items-start gap-3 p-4 shadow-md">
            <p className="text-sm">Season position</p>
            <p className="text-2xl font-medium">3rd</p>
          </Card>

        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">

        <div className="flex flex-col items-start gap-2 p-4 mt-4">
          <p className="text-xs font-medium text-gray-600">Wallet Balance 💳</p>
          {
            account ?
              <p className="text-4xl font-semibold inline-flex items-center gap-2">
                $638
                <small className="text-xs text-muted-foreground">
                  <span className="bg-green-200/30 px-2 py-1 rounded-3xl text-xs text-green-800 mr-1 font-normal">
                    +2.5%
                  </span>
                  vs last week
                </small>
              </p>
              :
              <p className="text-4xl font-semibold inline-flex items-center gap-2">
                $0
                <small className="text-xs text-muted-foreground">
                  <span className="bg-green-200/30 px-2 py-1 rounded-3xl text-xs text-green-800 mr-1 font-normal">
                    --%
                  </span>
                  vs last week
                </small>
              </p>
          }
        </div>

        {
          account ?

            <Card className="p-4 space-y-4 shadow-md">
              <p className="text-sm font-medium text-gray-600">Season Statistics</p>
              <div className="">
                <GameBreakdown />
              </div>
            </Card>

            :

            <div className="aspect-video rounded-xl bg-muted/50" />
        }

        {
          account ?

            <Card className="p-4 space-y-4 shadow-md">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-600">Next game</p>
                <p className="text-xs font-semibold text-cyan-600">View Calendar</p>
              </div>

              <div className="flex justify-center items-center divide-x text-xs">
                <div className="pr-2">
                  ⛓ Series A
                </div>
                <p className="pl-2">21:00 28 November 2024</p>
              </div>

              <div className="flex justify-center items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <p>Arsenal</p>
                  <div className="h-12 w-12 rounded-lg flex justify-center items-center bg-zinc-200/60 border shadow">
                    <Image
                      src="/arsenal.png"
                      alt="Arsenal"
                      width={27}
                      height={10}
                    />
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full flex justify-center items-center bg-rose-600 shadow-lg">
                  <p className="text-md text-white font-medium">VS</p>
                </div>

                <div className="flex items-center gap-1.5">
                  <p>RMA</p>
                  <div className="h-12 w-12 rounded-lg flex justify-center items-center bg-zinc-200/60 border shadow">
                    <Image
                      src="/realmadrid.png"
                      alt="Arsenal"
                      width={27}
                      height={10}
                    />
                  </div>
                </div>
              </div>

            </Card>

            :

            <div className="aspect-video rounded-xl bg-muted/50" />
        }


        {/* <Card className="p-4 space-y-4 shadow-md">
          <p className="text-sm font-medium text-gray-600">Season Statistics</p>
          <div className="">
            <GameBreakdown />
          </div>
        </Card> */}

        {/* <Card className="p-4 space-y-4 shadow-md">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-600">Next game</p>
            <p className="text-xs font-semibold text-cyan-600">View Calendar</p>
          </div>

          <div className="flex justify-center items-center divide-x text-xs">
            <div className="pr-2">
              ⛓ Series A
            </div>
            <p className="pl-2">21:00 28 November 2024</p>
          </div>

          <div className="flex justify-center items-center gap-4">
            <div className="flex items-center gap-1.5">
              <p>Arsenal</p>
              <div className="h-12 w-12 rounded-lg flex justify-center items-center bg-zinc-200/60 border shadow">
                <Image
                  src="/arsenal.png"
                  alt="Arsenal"
                  width={27}
                  height={10}
                />
              </div>
            </div>

            <div className="w-10 h-10 rounded-full flex justify-center items-center bg-rose-600 shadow-lg">
              <p className="text-md text-white font-medium">VS</p>
            </div>

            <div className="flex items-center gap-1.5">
              <p>RMA</p>
              <div className="h-12 w-12 rounded-lg flex justify-center items-center bg-zinc-200/60 border shadow">
                <Image
                  src="/realmadrid.png"
                  alt="Arsenal"
                  width={27}
                  height={10}
                />
              </div>
            </div>
          </div>

        </Card> */}
      </div>

      {
        account ?

          <div className="grid grid-cols-2 gap-10">
            <PointsChart />
            <RecentTx />
          </div>

          :

          <div className="min-h-[50vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      }



    </main>
  );
}