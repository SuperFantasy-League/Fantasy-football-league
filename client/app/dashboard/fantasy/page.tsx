"use client";
import React from "react";
import { ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

const CompetitionSelector = () => {
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
      <div className="max-w-full">
        <div className="py-8">
          <h1 className="text-3xl font-bold text-black">Fantasy Football</h1>
        </div>

        {/* Competition List */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xl text-black font-semibold">
            Pick a competition
          </h2>

          {competitions.map((competition) => (
            <Link
              href={`/dashboard/fantasy/${competition.id}`}
              key={competition.id}
              className="w-full bg-[#6AEE96] hover:bg-[#6AEE96]/80 backdrop-blur-sm text-black p-6 rounded-lg flex justify-between items-center transition-all duration-200 ease-in-out group"
            >
              <span className="text-lg">{competition.name}</span>
              <ChevronRight className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity duration-20" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CompetitionSelector;
