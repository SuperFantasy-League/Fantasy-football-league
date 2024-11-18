"use client";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import { LeagueBtn } from "../ui/button";
import CreateLeagueModal from "../micro/CreateLeagueModal";
import JoinLeagueModal from "../micro/JoinLeague";

function Team() {
  const [createModal, setCreateModal] = useState(false);
  const [joinMadal, setJoinModal] = useState(false);
  const handleCreate = () => setCreateModal(!createModal);
  const handleJoin = () => setJoinModal(!joinMadal);
  return (
    <div>
      <div className="pt-8 pb-4">
        <button className="flex items-center text-black/80 hover:text-gray-600 mb-3">
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span>Home</span>
        </button>
        <h1 className="text-2xl font-bold text-black">
          English Premier League
        </h1>
      </div>
      {/* <nav className="bg-[#ecefec] py-8 px-16 inline-flex items-center w-full absolute left-0">
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
      </nav> */}
      <div className="component-container">
        <div className="">
          <div className="">
            <p className="w-full py-3 border-b-2 text-lg font-medium text-black">
              league
            </p>
          </div>
          <div className="w-full flex justify-center items-center flex-col">
            <div className="m-5 mt-10">
              <p className="text-lg font-bold text-black">Private League</p>
              <p className="mt-10 text-[18px] font-medium text-black">
                Compete with your friend
              </p>
              <p className="mt-5 text-sm font-normal">
                You aren’t in any private leagues yet. Create or join one and
                wager with friends
              </p>
              <div className="flex flex-col gap-7 mt-7">
                <LeagueBtn
                  text="Create a league"
                  handler={() => handleCreate()}
                />
                <LeagueBtn text="Join a league" handler={() => handleJoin()} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {createModal && <CreateLeagueModal close={() => handleCreate()} />}
      {joinMadal && <JoinLeagueModal close={() => handleJoin()} />}
    </div>
  );
}

export default Team;
