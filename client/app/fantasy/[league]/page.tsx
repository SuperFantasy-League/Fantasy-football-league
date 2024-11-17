"use client";

import Navbar from "@/components/macro/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FootballField from "@/components/macro/FootballField";
import PlayerSelections from "@/components/macro/PlayerSelections";

const League = () => {
  const pathname = usePathname();
  const league = pathname.replace("/fantasy/", "");
  console.log(league);
  return (
    <>
      <Navbar />
      {/* Header */}
      <div className="pt-8 pb-4">
        <button className="flex items-center text-black/80 hover:text-gray-600 mb-6">
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span>Home</span>
        </button>
        <h1 className="text-3xl font-bold text-black">
          League of Legends season 1
        </h1>
      </div>
      <div>
        <nav className="bg-[#ecefec] py-8 px-16 inline-flex items-center w-full  left-0">
          <div className="pr-3">
            <Link
              href={"/"}
              className="px-5 py-2 text-base hover:underline hover:underline-offset-8"
            >
              Overview
            </Link>
          </div>
          <div className="px-3">
            <Link
              href={"/"}
              className="px-5 py-2  text-base hover:underline hover:scale-105 hover:underline-offset-8"
            >
              My Team
            </Link>
          </div>
          <div className="px-3">
            <Link
              href={"/"}
              className="px-5 py-2   text-base hover:underline hover:scale-105 hover:underline-offset-8"
            >
              Matches
            </Link>
          </div>
          <div className="pl-3">
            <Link
              href={"/"}
              className="px-5 py-2 rounded-3xl  text-base hover:underline hover:scale-105 hover:underline-offset-8"
            >
              Leagues
            </Link>
          </div>
        </nav>
      </div>

      <div className="mt-6 mb-10 flex items-center justify-between">
        <div className="flex flex-col gap-3 text-black">
          <h2 className="text-xl text-black font-semibold">Pick Your Squad</h2>
          <p>
            {" "}
            Select a minimum of 3 players from a single team or &apos;Auto
            Pick&apos; if you&apos;re short of time
          </p>
        </div>
        <Button className="bg-[#6AEE96] text-black rounded-md w-52 px-6 py-6 text-md">
          Auto Pick
        </Button>
      </div>
      <div className="flex justify-between">
        <FootballField />
        <PlayerSelections />
      </div>
    </>
  );
};

export default League;
