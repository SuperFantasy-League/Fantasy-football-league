import React from "react";
import Image from "next/image";

interface PlayerCardProps {
  role: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ role }) => {
  return (
    <div className="bg-green-700 w-[87px] h-[117px] rounded-md p-8 gap-3 flex flex-col justify-center items-center">
      <Image
        src={"/add-user-svgrepo-com2.svg"}
        alt="footballer"
        width={20}
        height={20}
      />
      <div className="text-white text-xs font-bold">{role}</div>
    </div>
  );
};

export default PlayerCard;
