import React from "react";
import Image from "next/image";

interface PlayerCardProps {
  role: string;
  playerName: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ role, playerName }) => {
  return (
    <div className="bg-green-700 rounded-lg p-6 text-white text-center gap-3 flex flex-col justify-center items-center">
      <Image
        src={"/add-user-svgrepo-com2.svg"}
        alt="footballer"
        width={20}
        height={20}
      />
      <div className="text-white text-xs font-bold">{role}</div>
      <div className="text-xs overflow-hidden text-ellipsis w-full">
        {playerName || "Empty"}
      </div>
    </div>
  );
};

export default PlayerCard;
