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

// Main Component
const FantasyFootball = () => {
  const [selectedPlayers, setSelectedPlayers] = useState({
    Goalkeeper: ["", ""],
    Defender: ["", "", "", "", ""],
    Midfielder: ["", "", "", "", ""],
    Attacker: ["", "", ""],
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTeamNameModalOpen, setIsTeamNameModalOpen] = useState(false); // Modal for team name input
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState<any>(null);
  const [teamName, setTeamName] = useState("");
  const [savedTeam, setSavedTeam] = useState<any>(null);
  const [teamz, setTeamz] = useState<any>([])
  const [playerz, setPlayerz] = useState<any>([])

  const teams = [
    {
      name: "Arsenal",
      players: {
        goalkeepers: ["Aaron Ramsdale", "David Raya"],
        defenders: [
          "Ben White",
          "William Saliba",
          "Gabriel",
          "Oleksandr Zinchenko",
          "Takehiro Tomiyasu",
        ],
        midfielders: [
          "Bukayo Saka",
          "Martin Ødegaard",
          "Declan Rice",
          "Kai Havertz",
          "Jorginho",
        ],
        forwards: ["Gabriel Jesus", "Gabriel Martinelli", "Eddie Nketiah"],
      },
    },
    {
      name: "Manchester City",
      players: {
        goalkeepers: ["Ederson", "Stefan Ortega"],
        defenders: [
          "Kyle Walker",
          "Ruben Dias",
          "John Stones",
          "Nathan Ake",
          "Josko Gvardiol",
        ],
        midfielders: [
          "Kevin De Bruyne",
          "Rodri",
          "Bernardo Silva",
          "Phil Foden",
          "Matheus Nunes",
        ],
        forwards: ["Erling Haaland", "Julian Alvarez", "Jeremy Doku"],
      },
    },
    {
      name: "Manchester United",
      players: {
        goalkeepers: ["David de Gea", "Andre Onana"],
        defenders: [
          "Aaron Wan-Bissaka",
          "Raphaël Varane",
          "Lisandro Martínez",
          "Luke Shaw",
          "Tyrell Malacia",
          "Victor Lindelöf",
          "Harry Maguire",
        ],
        midfielders: [
          "Casemiro",
          "Bruno Fernandes",
          "Christian Eriksen",
          "Jadon Sancho",
          "Scott McTominay",
          "Donny van de Beek",
        ],
        forwards: [
          "Marcus Rashford",
          "Antony",
          "Rasmus Højlund",
          "Wout Weghorst",
        ],
      },
    },
    {
      name: "Chelsea",
      players: {
        goalkeepers: ["Kepa Arrizabalaga", "Benoît Badiashile"],
        defenders: [
          "Reece James",
          "Thiago Silva",
          "Ben Chilwell",
          "Levi Colwill",
          "Kalidou Koulibaly",
          "Marc Cucurella",
        ],
        midfielders: [
          "Enzo Fernández",
          "Mason Mount",
          "Conor Gallagher",
          "Raheem Sterling",
          "Ruben Loftus-Cheek",
          "Mateo Kovačić",
        ],
        forwards: [
          "Noni Madueke",
          "Christopher Nkunku",
          "Mykhailo Mudryk",
          "Pierre-Emerick Aubameyang",
        ],
      },
    },
    {
      name: "Tottenham Hotspur",
      players: {
        goalkeepers: ["Hugo Lloris", "Guglielmo Vicario"],
        defenders: [
          "Pedro Porro",
          "Cristian Romero",
          "Eric Dier",
          "Ben Davies",
          "Destiny Udogie",
          "Micky van de Ven",
        ],
        midfielders: [
          "James Maddison",
          "Yves Bissouma",
          "Pape Matar Sarr",
          "Giovani Lo Celso",
          "Oliver Skipp",
        ],
        forwards: [
          "Son Heung-min",
          "Richarlison",
          "Dejan Kulusevski",
          "Harry Kane",
          "Manor Solomon",
        ],
      },
    },
    {
      name: "Newcastle United",
      players: {
        goalkeepers: ["Nick Pope", "Martin Dúbravka"],
        defenders: [
          "Kieran Trippier",
          "Sven Botman",
          "Fabian Schär",
          "Dan Burn",
          "Matt Targett",
          "Jamaal Lascelles",
        ],
        midfielders: [
          "Bruno Guimarães",
          "Sean Longstaff",
          "Joe Willock",
          "Anthony Gordon",
          "Miguel Almirón",
          "Jonjo Shelvey",
        ],
        forwards: [
          "Alexander Isak",
          "Callum Wilson",
          "Anthony Gordon",
          "Harvey Barnes",
        ],
      },
    },

    // Add more teams as needed
  ];

  const handlePlayerSelection = (player:any, position:any, index:any) => {
    console.log({player, position, index})
    setSelectedPlayer(player);
    setSelectedPosition(position);
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const confirmPlayerSelection = () => {
    if (selectedPosition && selectedPlayer) {
      setSelectedPlayers((prev) => {
        const newPlayers = { ...prev };
        newPlayers[selectedPosition][selectedIndex] = selectedPlayer;
        return newPlayers;
      });
      setIsModalOpen(false);
    }
  };

  const handleSaveButtonClick = () => {
    setIsTeamNameModalOpen(true);
  };

  const handleTeamNameSubmit = () => {
    if (teamName) {
      // Combine the selected players and team name and save the data
      const newTeam = {
        name: teamName,
        players: selectedPlayers,
      };

      // Store the team data
      setSavedTeam(newTeam);

      // Log the selected team data to the console
      console.log("Saved Team:", newTeam);

      setIsTeamNameModalOpen(false);
      alert(`Team ${teamName} has been saved!`); // Optional: Show a confirmation message
    } else {
      alert("Please enter a team name.");
    }
  };

  const getPlayers = async(id:string) => {
    console.log("loading...")
    try {
      let res:any = await fetch(
        `https://node-backend-7sxv.onrender.com/api/teams/get-team/${id}`,
        {
          method: "GET",
          headers:{
            "content-type": "application/json"
          }
        }
      )

      console.log("done loading")

      res = await res.json()

      console.log("team ", res.data.response)
      setPlayerz(res.data.response)
    } catch (error) {
      console.log("done loading")
      console.log("fetch team error ", error)
    }
  }

  const getTeams = async() => {
    console.log("loading...")
    try {
      let res:any = await fetch(
        `https://node-backend-7sxv.onrender.com/api/teams/get-teams`,
        {
          method: "GET",
          headers:{
            "content-type": "application/json"
          }
        }
      )

      console.log("done loading")

      res = await res.json()

      console.log("teams ", res.data.response)
      setTeamz(res.data.response)
    } catch (error) {
      console.log("done loading")
      console.log("get teams error ", error)
    }
  }

  useEffect(() => {
    getTeams()
  }, [])

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
                  <PlayerCard role="GoalKeeper" playerName={player} />
                </div>
              ))}
            </div>

            {/* Defenders */}
            <div className="absolute h-44 w-1/2 left-1/4 flex justify-center top-64 gap-12">
              {selectedPlayers.Defender.map((player, index) => (
                <div
                  key={index}
                  onClick={() =>
                    handlePlayerSelection(null, "Defender", index)
                  }
                >
                  <PlayerCard role="Defender" playerName={player} />
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
                  <PlayerCard role="Midfielder" playerName={player} />
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
                  <PlayerCard role="Attacker" playerName={player} />
                </div>
              ))}
            </div>
          </div>
          <div className=" flex item-center justify-center">
            <Button className="w-1/3 mt-5 h-12" onClick={handleSaveButtonClick}>
              Save
            </Button>
          </div>
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
            {
              teamz.length === 0 ? (
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                </svg>
              ) : (
                teamz.map((cur:any, idx:number) => (
                  <AccordionItem key={idx} value={cur.name}>

                    <AccordionTrigger onClick={() => getPlayers(cur.team_id)} className="flex items-center justify-between p-4 hover:bg-gray-100 rounded-lg">
                      <span className="font-semibold">{cur.name}</span>
                    </AccordionTrigger>

                    <AccordionContent>
                      {
                        playerz.length === 0 ? (
                          null
                        ) : (
                          playerz.map((cur:any, id:number) => (
                            <div key={id} className="mb-4 pl-4">
                              <h3 
                                className="font-semibold capitalize mb-2 cursor-pointer"
                                onClick={() =>
                                  handlePlayerSelection(
                                    cur.player.name,
                                    cur.statistics[0].games.position,
                                    selectedPlayers[cur.statistics[0].games.position].indexOf("")
                                  )
                                }
                              >
                                {cur.statistics[0].games.position}

                                <span className="ml-4">{cur.player.name}</span>
                              </h3>

                            </div>
                          ))
                        )
                      }
                    </AccordionContent>

                  </AccordionItem>
                )
              ))
            }
          </Accordion>
        </div>
        {/* Selection Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add Player</DialogTitle>
              <DialogDescription>
                Add {selectedPlayer} to your team as {selectedPosition}?
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
                Save Team Name
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default FantasyFootball;
