import React from "react";
import PlayerSlot from "./PlayerSlot";

// Define the type for player data
interface PlayerData {
  name: string;
  team: string;
  position: string;
  price: number;
  points: number;
  teamLogo: string;
}

const PlayerList: React.FC = () => {
  // State to keep track of which player is selected
  const [selectedPlayer, setSelectedPlayer] = React.useState<string | null>(
    null
  );

  // Sample data - you can replace this with real data later
  const samplePlayers: PlayerData[] = [
    {
      name: "Virgil",
      team: "LIV",
      position: "DEF",
      price: 6.3,
      points: 56,
      teamLogo: "/celtic.png",
    },
    // You can add more players here
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

export default PlayerList;
