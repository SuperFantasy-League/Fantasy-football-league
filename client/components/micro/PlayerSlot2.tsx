import React from "react";
import Image from "next/image";

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
  onSelect?: () => void;
  isSelected?: boolean;
}

const PlayerSlot: React.FC<PlayerSlotProps> = ({
  player,
  onSelect,
  isSelected = false,
}) => {
  return (
    <div
      className={`
        w-full grid grid-cols-[auto,auto,1fr,auto,auto] gap-4 
        border-t-[1px] border-b-[1px] p-2 border-gray-300
        hover:bg-gray-50 cursor-pointer transition-colors duration-200
        ${isSelected ? "bg-blue-50" : ""}
      `}
      onClick={onSelect}
    >
      <div className="flex justify-center items-center">
        <Image
          src="/info-svgrepo-com.svg"
          alt="info icon"
          width={15}
          height={15}
          className="opacity-60 hover:opacity-100"
        />
      </div>

      <div className="flex items-center justify-center w-[50px] h-[50px]">
        <Image
          src={player.teamLogo}
          alt={`${player.team} logo`}
          width={50}
          height={50}
          className="object-contain"
        />
      </div>

      <div className="flex flex-col justify-center">
        <div className="font-bold px-2">{player.name}</div>
        <div className="flex gap-2">
          <div className="text-gray-500 text-sm p-1">{player.team}</div>
          <div className="text-gray-500 text-sm p-1">{player.position}</div>
        </div>
      </div>

      <div className="flex justify-center items-center p-2 border-l border-gray-300 text-gray-700">
        {player.price.toFixed(1)}
      </div>

      <div className="flex justify-center items-center p-2 border-l border-gray-300 font-medium">
        {player.points}
      </div>
    </div>
  );
};

// Example usage component with multiple players
const PlayerList: React.FC = () => {
  const [selectedPlayer, setSelectedPlayer] = React.useState<string | null>(
    null
  );

  const samplePlayers: PlayerData[] = [
    {
      name: "Virgil",
      team: "LIV",
      position: "DEF",
      price: 6.3,
      points: 56,
      teamLogo: "/celtic.png",
    },
    // Add more players as needed
  ];

  return (
    <div className="flex flex-col">
      {samplePlayers.map((player) => (
        <PlayerSlot
          key={player.name}
          player={player}
          isSelected={selectedPlayer === player.name}
          onSelect={() => setSelectedPlayer(player.name)}
        />
      ))}
    </div>
  );
};

export default PlayerSlot;
