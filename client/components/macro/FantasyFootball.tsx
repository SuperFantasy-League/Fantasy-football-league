"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import PlayerCard from "../micro/PlayerCard";
import { Button } from "@/components/ui/button";
import Fixtures from "./Fixtures";
import useCreateTeam from "@/hooks/contract-hooks/useCreateTeam";
import { toBigInt } from "ethers";
import { toast } from "@/hooks/use-toast";

// Main Component
const FantasyFootball = () => {
  const { sendTx, isPending, contract, prepareContractCall } = useCreateTeam();
  const [selectedPlayers, setSelectedPlayers] = useState({
    Goalkeeper: ["", ""],
    Defender: ["", "", "", "", ""],
    Midfielder: ["", "", "", "", ""],
    Attacker: ["", "", ""],
  });

  const [roster, setRoster] = useState<any>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTeamNameModalOpen, setIsTeamNameModalOpen] = useState(false); // Modal for team name input
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState<any>(null);
  const [teamName, setTeamName] = useState("");
  // const [savedTeam, setSavedTeam] = useState<any>(null);
  const [teams, setteams] = useState<any>([]);
  const [players, setplayers] = useState<any>([]);

  const handlePlayerSelection = (
    id: any,
    player: any,
    position: any,
    index: any
  ) => {
    console.log({ id, player, position, index });
    const newPlayer = { id, player };
    setSelectedPlayer(newPlayer);
    setSelectedPosition(position);
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const confirmPlayerSelection = () => {
    if (selectedPosition && selectedPlayer.id) {
      setSelectedPlayers((prev) => {
        const newPlayers = { ...prev };
        console.log({ newPlayers });
        newPlayers[selectedPosition][selectedIndex] = selectedPlayer;
        console.log({ newPlayers });
        return newPlayers;
      });
      setIsModalOpen(false);
    }
  };

  const handleSaveButtonClick = () => {
    setIsTeamNameModalOpen(true);
  };

  const uploadRoster = async (data: any) => {
    console.log("loading roster...");
    try {
      let res: any = await fetch(
        `https://node-backend-7sxv.onrender.com/api/users/upload-roster`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      console.log("done loading");

      res = await res.json();

      console.log("UPLOADED ROSTER ", res);
    } catch (error) {
      console.log("done loading");
      console.log("upload roster error ", error);
    }
  };

  const addToRoster = (data: any) => {
    let arr1: any = roster;

    arr1.push(data);

    setRoster(arr1);
  };

  /* const handleTeamNameSubmit = () => {
    if (teamName) {
      // Combine the selected players and team name and save the data

      const newTeam = {
        name: teamName,
        players: selectedPlayers,
      };

      console.log("roster ", roster);

      // Store the team data
      setSavedTeam(newTeam);

      uploadRoster({
        address: "0xfE8ca1261f853330298FF34d0ce07ca0d63Ca0a1",
        rosterName: teamName,
        roster,
      });

      // Log the selected team data to the console
      console.log("Saved Team:", newTeam);

      setIsTeamNameModalOpen(false);
      alert(`Team ${teamName} has been saved!`); // Optional: Show a confirmation message
    } else {
      alert("Please enter a team name.");
    }
  }; */

  const handleTeamNameSubmit = async () => {
    if (teamName) {
      try {
        // Extract player IDs from selectedPlayers
        console.log(selectedPlayers);

        //@ts-ignore
        const filteredPlayer = Object.values(selectedPlayers)
          .flat()
          .filter((player) => player !== "");

        console.log({ filteredPlayer });

        // Filter out empty slots
        const playerIds = filteredPlayer.map((player) => player.id); // Match and get IDs

        console.log({ playerIds });

        if (!playerIds.length) {
          alert("Please add players to your team.");
          return;
        }

        // try {
        const convertToBigInt = playerIds.map((id) => toBigInt(id));
        // console.log({ convertToBigInt });
        // createTeam(convertToBigInt);

        const transaction = prepareContractCall({
          contract,
          method: "function createTeam(uint256[] calldata _playerIds)", // Adjust this to match your actual contract function
          params: [convertToBigInt],
        });

        sendTx(transaction);
        toast({
          description: "Team created",
        });

        // await uploadRoster({
        //   address: "0xfE8ca1261f853330298FF34d0ce07ca0d63Ca0a1",
        //   rosterName: teamName,
        //   roster: playerIds, // Include player IDs
        // });

        // setIsTeamNameModalOpen(false);
        // alert(`Team ${teamName} has been saved!`);
        // } catch (err) {
        //   console.error("Blockchain transaction failed:", err);
        //   alert("Failed to save team to blockchain.");
        // }
      } catch (err) {
        console.error("Error processing team data:", err);
      }
    } else {
      alert("Please enter a team name.");
    }
  };

  const getPlayers = async (id: string) => {
    console.log("loading...");
    try {
      let res: any = await fetch(
        `https://node-backend-7sxv.onrender.com/api/teams/get-team/${id}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      );

      console.log("done loading");

      res = await res.json();

      console.log("players ", res.data.response);
      setplayers(res.data.response);
    } catch (error) {
      console.log("done loading");
      console.log("fetch players error ", error);
    }
  };

  const getTeams = async () => {
    console.log("loading...");
    try {
      let res: any = await fetch(
        `https://node-backend-7sxv.onrender.com/api/teams/get-teams`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      );

      console.log("done loading");

      res = await res.json();

      console.log("teams ", res.data.response);
      setteams(res.data.response);
    } catch (error) {
      console.log("done loading");
      console.log("get teams error ", error);
    }
  };

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <div>
      <div className="flex">
        <div id="Football Field" className="p-2">
          <div className="bg-gray-100 rounded-md relative w-full">
            <Image
              src={"/aceFantasy.png"}
              alt="football field"
              width={1080}
              height={1080}
            />

            {/* Goalkeepers */}
            <div className="absolute h-44 w-1/2 left-1/4 flex justify-center top-20 gap-16">
              {selectedPlayers.Goalkeeper.map((player, index) => (
                <div
                  key={index}
                  onClick={() =>
                    handlePlayerSelection(null, "Goalkeeper", index)
                  }
                >
                  <PlayerCard
                    role="GoalKeeper"
                    playerName={player?.player}
                    jerseyImage={""}
                  />
                </div>
              ))}
            </div>

            {/* Defenders */}
            <div className="absolute h-44 w-1/2 left-1/4 flex justify-center top-64 gap-12">
              {selectedPlayers.Defender.map((player, index) => (
                <div
                  key={index}
                  onClick={() => handlePlayerSelection(null, "Defender", index)}
                >
                  <PlayerCard
                    role="Defender"
                    playerName={player?.player}
                    jerseyImage={""}
                  />
                </div>
              ))}
            </div>

            {/* Midfielders */}
            <div className="absolute h-44 w-1/2 left-1/4 flex justify-center top-[455px] gap-12">
              {selectedPlayers.Midfielder.map((player, index) => (
                <div
                  key={index}
                  onClick={() =>
                    handlePlayerSelection(null, "Midfielder", index)
                  }
                >
                  <PlayerCard
                    role="Midfielder"
                    playerName={player?.player}
                    jerseyImage={""}
                  />
                </div>
              ))}
            </div>

            {/* Forwards */}
            <div className="absolute h-44 w-1/2 left-1/4 flex justify-center top-[648px] gap-12">
              {selectedPlayers.Attacker.map((player, index) => (
                <div
                  key={index}
                  onClick={() => handlePlayerSelection(null, "Attacker", index)}
                >
                  <PlayerCard
                    role="Attacker"
                    playerName={player?.player}
                    jerseyImage={""}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className=" flex item-center justify-center">
            <Button
              className="w-1/3 mt-12 mb-12 h-12"
              onClick={handleSaveButtonClick}
            >
              Save
            </Button>
          </div>
          <Fixtures />
        </div>

        <div
          id="Team Selection"
          className="w-80 shadow-lg border bg-white overflow-y-auto flex-shrink-0"
        >
          <div className="h-16 rounded-t-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-green-400 p-4">
            <h1 className="text-2xl font-bold text-black">
              Premier League Teams
            </h1>
          </div>
          <h2 className="text-2xl font-bold mb-4"></h2>
          {/* <Accordion type="single" collapsible className="w-full">
            {teams.map((team, teamIndex) => (
              <AccordionItem key={teamIndex} value={`item-${teamIndex}`}>
                <AccordionTrigger className="flex items-center justify-between p-4 hover:bg-gray-100 rounded-lg">
                  <span className="font-semibold">{team.name}</span>
                </AccordionTrigger>
                <AccordionContent>
                  {Object.entries(team.players).map(([position, players]) => (
                    <div key={position} className="mb-4">
                      <h3 className="font-semibold capitalize mb-2">
                        {position}
                      </h3>
                      <ul className="space-y-2">
                        {players.map((player, playerIndex) => (
                          <li
                            key={playerIndex}
                            className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                            onClick={() =>
                              handlePlayerSelection(
                                player,
                                position,
                                selectedPlayers[position].indexOf("")
                              )
                            }
                          >
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span>{player}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion> */}
          <Accordion type="single" collapsible className="w-full">
            {teams.length === 0 ? (
              <div className="flex justify-center p-4">
                <svg
                  className="animate-spin h-6 w-6 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>
            ) : (
              teams.map((cur: any, idx: number) => (
                <AccordionItem key={idx} value={cur.name}>
                  <AccordionTrigger
                    onClick={() => getPlayers(cur.team_id)}
                    className="flex items-center p-4 hover:bg-gray-100 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      {cur.logo && (
                        <div className="relative w-8 h-8 flex-shrink-0">
                          <Image
                            src={cur.logo}
                            alt={`${cur.name} logo`}
                            fill
                            className="object-contain"
                            sizes="32px"
                          />
                        </div>
                      )}
                      <span className="font-semibold">{cur.name}</span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-4">
                    {players.length === 0 ? (
                      <div className="py-2 text-gray-500">
                        Loading players...
                      </div>
                    ) : (
                      players.map((cur: any, id: number) => (
                        <div key={id} className="mb-4">
                          <div
                            className="flex items-center space-x-2 py-2 px-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                            onClick={() =>
                              handlePlayerSelection(
                                cur.player.id,
                                cur.player.name,
                                cur.statistics[0].games.position,
                                selectedPlayers[
                                  cur.statistics[0].games.position
                                ].indexOf("")
                              )
                            }
                          >
                            <span className="text-sm text-gray-500">
                              {cur.statistics[0].games.position}
                            </span>
                            <span className="font-medium">
                              {cur.player.name}
                            </span>
                          </div>
                        </div>
                      ))
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))
            )}
          </Accordion>
        </div>
        {/* Selection Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add Player</DialogTitle>
              <DialogDescription>
                Add {selectedPlayer?.player} to your team as {selectedPosition}?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="sm:justify-start">
              <Button
                type="button"
                variant="secondary"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </Button>
              <Button type="button" onClick={confirmPlayerSelection}>
                Add Player
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Team Name Modal */}
        <Dialog
          open={isTeamNameModalOpen}
          onOpenChange={setIsTeamNameModalOpen}
        >
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Enter Your Team Name</DialogTitle>
              <DialogDescription>
                Please enter a name for your team.
              </DialogDescription>
            </DialogHeader>
            <div className="p-4">
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                placeholder="Team Name"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
              />
            </div>
            <DialogFooter className="sm:justify-start">
              <Button
                type="button"
                variant="secondary"
                onClick={() => setIsTeamNameModalOpen(false)}
              >
                Cancel
              </Button>
              <Button type="button" onClick={handleTeamNameSubmit}>
                {isPending ? "Saving..." : "Save Team Name"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default FantasyFootball;
