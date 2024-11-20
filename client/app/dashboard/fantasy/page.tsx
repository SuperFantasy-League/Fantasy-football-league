"use client";
import React from "react";
import Image from "next/image";
import ProceedButton from "@/components/micro/ProceedButton";

const CompetitionSelector = () => {
  const competitions = [
    {
      name: "English Premier League",
      id: "epl",
      image: "/england.jpg",
    },
    {
      name: "UEFA Champions League",
      id: "ucl",
      image: "/uefa.jpg",
    },
    {
      name: "Scottish Premiership",
      id: "scp",
      image: "/scotland.jpg",
    },
    {
      name: "Bundesliga",
      id: "bundesliga",
      image: "/bundesliga.jpg",
    },
    {
      name: "La Liga",
      id: "laliga",
      image: "/laliga.jpg",
    },
    {
      name: "Ligue 1",
      id: "ligue1",
      image: "/ligue1.jpg",
    },
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

          <div className="grid grid-cols-3 gap-2">
            {competitions.map((competition) => (
              <div className="relative" key={competition.id}>
                <Image
                  src={competition.image}
                  alt={competition.name}
                  width={300}
                  height={300}
                  className="w-full h-64 backdrop-blur-sm rounded-xl"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/50 rounded-xl flex flex-col p-4 justify-between">
                  <h3 className="font-medium text-3xl text-white tracking-tighter font-[family-name:var(--font-geist-sans)]">
                    {competition.name}
                  </h3>
                  <div className="w-2/4">
                    <ProceedButton
                      path={`/dashboard/fantasy/${competition.id}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompetitionSelector;
