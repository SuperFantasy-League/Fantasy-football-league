import React from "react";
import Image from "next/image";

// Define the type for player data
interface PlayerData {
  name: string;
  team: string;
  position: string;
  price: number;
  points: number;
  teamLogo: string;
}

interface PlayerSlotProps {
  player: PlayerData;
  isSelected?: boolean;
  onSelect?: () => void;
}

const PlayerSlot: React.FC<PlayerSlotProps> = ({
  player,
  isSelected = false,
  onSelect,
}) => {
  return (
    <div
      onClick={onSelect}
      className={`
        w-full grid grid-cols-[auto,auto,1fr,auto,auto] gap-4 
        border-t-[1px] border-b-[1px] p-2 border-gray-300
        hover:bg-gray-50 cursor-pointer
        ${isSelected ? "bg-blue-50" : "bg-white"}
      `}
    >
      {/* Info Icon */}
      <div className="flex justify-center">
        <Image
          src="/info-svgrepo-com.svg"
          alt="info"
          width={15}
          height={15}
          className="opacity-60"
        />
      </div>

      {/* Team Logo */}
      <div>
        <Image
          src={player.teamLogo}
          alt={`${player.team} logo`}
          width={50}
          height={50}
          className="object-contain"
        />
      </div>

      {/* Player Info */}
      <div className="flex-1 flex-col justify-center">
        <div className="font-bold px-2">{player.name}</div>
        <div className="flex gap-2">
          <div className="text-gray-500 text-sm p-1">{player.team}</div>
          <div className="text-gray-500 text-sm p-1">{player.position}</div>
        </div>
      </div>

      {/* Price */}
      <div className="flex justify-center items-center p-2 border-l border-gray-300">
        {player.price.toFixed(1)}
      </div>

      {/* Points */}
      <div className="flex justify-center items-center p-2 border-l border-gray-300">
        {player.points}
      </div>
    </div>
  );
};

export default PlayerSlot;
