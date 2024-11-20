import React from "react";
import Image from "next/image";
import PlayerCard from "../micro/PlayerCard";
const FootballField = () => {
  return (
    <>
      <div className="relative w-full">
        <div className="bg-gray-100 rounded-md relative w-full">
          <Image
            src={"/aceFantasy.png"}
            alt="football"
            width={1080}
            height={1080}
            className="object-contain"
          />
          <div className="absolute h-44 w-1/2 left-1/4 flex justify-center top-24 gap-16">
            <PlayerCard role={"GoalKeeper"} />
            <PlayerCard role={"GoalKeeper"} />
          </div>
          <div className="absolute h-44 w-1/2 left-1/4 flex justify-center top-64 gap-12">
            <PlayerCard role={"Defender"} />
            <PlayerCard role={"Defender"} />
            <PlayerCard role={"Defender"} />
            <PlayerCard role={"Defender"} />
            <PlayerCard role={"Defender"} />
          </div>

          <div className="absolute h-44 w-1/2 left-1/4 flex justify-center top-[416px] gap-12">
            <PlayerCard role={"Midfielder"} />
            <PlayerCard role={"Midfielder"} />
            <PlayerCard role={"Midfielder"} />
            <PlayerCard role={"Midfielder"} />
            <PlayerCard role={"Midfielder"} />
          </div>
          <div className="absolute h-44 w-1/2 left-1/4 flex justify-center top-[576px] gap-12">
            <PlayerCard role={"Forward"} />
            <PlayerCard role={"Forward"} />
            <PlayerCard role={"Forward"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FootballField;
