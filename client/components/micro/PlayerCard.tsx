import React from "react";
import Image from "next/image";

interface PlayerCardProps {
  role: string;
  playerName: string;
  jerseyImage: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  role,
  playerName,
  jerseyImage,
}) => {
  return (
    <div className="bg-green-700 rounded-lg p-6 text-white text-center gap-3 flex flex-col justify-center items-center">
      <Image
        src={jerseyImage || "/user-svgrepo-com.svg"}
        alt="footballer"
        width={30}
        height={30}
      />
      <div className="text-white text-xs font-bold">{role}</div>
      <div className="text-sm font-bold underline overflow-hidden text-ellipsis w-full">
        {playerName || ""}
      </div>
    </div>
  );
};

export default PlayerCard;
