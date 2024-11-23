import React from "react";
//import Image from "next/image";
import { Search } from "lucide-react";
import PlayerSlot from "../micro/PlayerSlot";

const FootballRoster = () => {
  /* const players = [
    {
      name: "Onana",
      team: "MUN",
      position: "GKP",
      cost: 5.1,
      points: 53,
    },
    {
      name: "Sels",
      team: "NFO",
      position: "GKP",
      cost: 4.7,
      points: 50,
    }, 
  ];*/

  return (
    <>
      {/* Right Sidebar */}
      <div className="w-96 shadow-lg border bg-white overflow-y-auto flex-shrink-0">
        {/* Header with gradient */}
        <div className="h-16 rounded-t-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-green-400 p-4">
          <h1 className="text-2xl font-bold text-black">Player Selection</h1>
        </div>

        {/* Filters Section */}
        <div className="p-6 space-y-6">
          {/* View Filter */}
          <div className="space-y-2">
            <label className="text-sm text-purple-900">View</label>
            <div className="relative">
              <select className="w-full p-3 bg-white border font-bold border-gray-200 rounded-lg appearance-none cursor-pointer">
                <option>All players</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Sort Filter */}
          <div className="space-y-2">
            <label className="text-sm text-purple-900">Sorted by</label>
            <div className="relative">
              <select className="w-full p-3 bg-white border font-bold border-gray-200 rounded-lg appearance-none cursor-pointer">
                <option>Total points</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Max Cost Filter */}
          <div className="space-y-2">
            <label className="text-sm text-purple-900">
              Max cost Between 3.9 and 15.2
            </label>
            <div className="relative">
              <select className="w-full p-3 bg-white border font-bold border-gray-200 rounded-lg appearance-none cursor-pointer">
                <option>15.2</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search for player..."
              className="w-full p-3 pr-12 bg-white border border-gray-200 rounded-lg focus:border-purple-900 focus:outline-none"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-900">
              <Search size={20} />
            </button>
          </div>

          {/* Players Count */}
          <div className="relative">
            <div className="h-8 bg-gradient-to-r from-green-400 to-cyan-400 rounded-2xl text-sm flex items-center justify-center">
              <span className="text-black">
                {" "}
                <span className="font-bold">600</span> players shown
              </span>
            </div>
          </div>

          {/* Goalkeeper Position Filter */}
          <div>
            <div className="h-10 bg-purple-900 rounded-lg flex items-center text-white px-2 py-2">
              <div className="flex-1">
                <span className="text-white">Goalkeepers</span>
              </div>
              <div className="w-16 text-right">£</div>
              <div className="w-16 text-right">**</div>
            </div>
            <PlayerSlot />
            <PlayerSlot />
          </div>

          {/* Defender Position Filter */}
          <div>
            <div className="h-10 bg-purple-900 rounded-lg flex items-center text-white px-2 py-2">
              <div className="flex-1">
                <span className="text-white">Defender</span>
              </div>
              <div className="w-16 text-right">£</div>
              <div className="w-16 text-right">**</div>
            </div>
            <PlayerSlot />
            <PlayerSlot />
            <PlayerSlot />
            <PlayerSlot />
          </div>

          {/* Midfielder Position Filter */}
          <div>
            <div className="h-10 bg-purple-900 rounded-lg flex items-center text-white px-2 py-2">
              <div className="flex-1">
                <span className="text-white">Defender</span>
              </div>
              <div className="w-16 text-right">£</div>
              <div className="w-16 text-right">**</div>
            </div>
            <PlayerSlot />
            <PlayerSlot />
            <PlayerSlot />
            <PlayerSlot />
            <PlayerSlot />
            <PlayerSlot />
            <PlayerSlot />
            <PlayerSlot />
            <PlayerSlot />
            <PlayerSlot />
            <PlayerSlot />
            <PlayerSlot />
            <PlayerSlot />
            <PlayerSlot />
            <PlayerSlot />
          </div>

          {/* Midfielder Position Filter */}
          <div>
            <div className="h-10 bg-purple-900 rounded-lg flex items-center text-white px-2 py-2">
              <div className="flex-1">
                <span className="text-white">Defender</span>
              </div>
              <div className="w-16 text-right">£</div>
              <div className="w-16 text-right">**</div>
            </div>
            <PlayerSlot />
            <PlayerSlot />
            <PlayerSlot />
            <PlayerSlot />
            <PlayerSlot />
            <PlayerSlot />
            <PlayerSlot />
            <PlayerSlot />
            <PlayerSlot />
          </div>

          {/* Players List */}
          {/*   <div>
            Player Items 
            {players.map((player) => (
              <div
                key={player.name}
                className="flex items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
              >
                <div className="w-8 text-gray-400"></div>
                <div className="flex items-center flex-1">
                  <div>
                    <div className="font-semibold text-purple-900">
                      {player.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {player.team} {player.position}
                    </div>
                  </div>
                </div>
                <div className="w-16 text-right">{player.cost}</div>
                <div className="w-16 text-right">{player.points}</div>
              </div>
            ))}
          </div>
          */}
        </div>
      </div>
    </>
  );
};

export default FootballRoster;
