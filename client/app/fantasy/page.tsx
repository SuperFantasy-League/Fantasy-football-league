"use client";
import React from "react";
import Navbar from "@/components/macro/Navbar";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const CompetitionSelector = () => {
  const router = useRouter();
  const competitions = [
    { name: "English Premier League", id: "epl" },
    { name: "UEFA Champions League", id: "ucl" },
    { name: "Scottish Premiership", id: "scp" },
    { name: "Bundesliga", id: "bundesliga" },
    { name: "La Liga", id: "laliga" },
    { name: "Ligue 1", id: "ligue1" },
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-full">
        {/* Header */}
        <div className="py-8">
          <button className="flex items-center text-black/80 hover:text-gray-600 mb-6">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>Home</span>
          </button>
          <h1 className="text-3xl font-bold text-black">Fantasy Football</h1>
        </div>

        {/* Competition List */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xl text-black font-semibold">
            Pick a competition
          </h2>

          {competitions.map((competition) => (
            <button
              key={competition.id}
              onClick={() => router.push(`/fantasy/${competition.id}`)}
              className="w-full bg-[#6AEE96] hover:bg-[#6AEE96]/80 backdrop-blur-sm text-black p-6 rounded-lg flex justify-between items-center transition-all duration-200 ease-in-out group"
            >
              <span className="text-lg">{competition.name}</span>
              <ChevronRight
                className="w-5 h-5 opacity-50 group-hover:opacity-100 
                                    transition-opacity duration-20"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Background Decoration */}
      {/*    <div
        className="fixed top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='800' height='800' viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='400' cy='400' r='300' fill='none' stroke='%234B5563' stroke-width='2'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundSize: "contain",
        }}
      /> */}
    </>
  );
};

export default CompetitionSelector;
