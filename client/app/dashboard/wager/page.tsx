import Image from "next/image";
import React from "react";

function PlayerCard({ name, team, position, price, points }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center">
        <Image
          src={`https://crests.football-data.org/${team}.svg`}
          alt={team}
          width={48}
          height={48}
          className="w-12 h-12 mr-4"
        />
        <div>
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-sm text-gray-500">
            {team} - {position}
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div className="text-lg font-bold">£{price}</div>
        <div className="text-lg font-bold">{points}</div>
      </div>
    </div>
  );
}

export default function PlayerList() {
  const players = [
    { name: "Onana", team: "MUN", position: "GKP", price: 5.1, points: 53 },
    { name: "Sels", team: "NFO", position: "GKP", price: 4.7, points: 50 },
    // ...other players
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Goalkeepers</h1>
      <div className="grid grid-cols-2 gap-4">
        {players.map((player) => (
          <PlayerCard key={player.name} {...player} />
        ))}
      </div>
    </div>
  );
}
