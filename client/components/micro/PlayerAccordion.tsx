import React from "react";
import { ChevronDown } from "lucide-react";
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
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const PremierLeagueTeams = () => {
  const [selectedPlayer, setSelectedPlayer] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const teams = [
    {
      name: "Arsenal",
      players: [
        "Bukayo Saka",
        "Martin Ødegaard",
        "Gabriel Jesus",
        "Declan Rice",
        "Gabriel Martinelli",
      ],
    },
    {
      name: "Manchester City",
      players: [
        "Erling Haaland",
        "Kevin De Bruyne",
        "Phil Foden",
        "Rodri",
        "Bernardo Silva",
      ],
    },
    {
      name: "Liverpool",
      players: [
        "Mohamed Salah",
        "Virgil van Dijk",
        "Darwin Núñez",
        "Trent Alexander-Arnold",
        "Luis Díaz",
      ],
    },
    {
      name: "Aston Villa",
      players: [
        "Ollie Watkins",
        "Emiliano Martínez",
        "John McGinn",
        "Douglas Luiz",
        "Leon Bailey",
      ],
    },
    {
      name: "Tottenham Hotspur",
      players: [
        "Son Heung-min",
        "James Maddison",
        "Cristian Romero",
        "Dejan Kulusevski",
        "Pedro Porro",
      ],
    },
  ];

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
    setIsModalOpen(true);
  };

  return (
    <div className="w-1/2 max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Premier League Teams</h2>
      <Accordion type="single" collapsible className="w-full">
        {teams.map((team, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="flex items-center justify-between p-4 hover:bg-gray-100 rounded-lg">
              <span className="font-semibold">{team.name}</span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 p-4">
                {team.players.map((player, playerIndex) => (
                  <li
                    key={playerIndex}
                    className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                    onClick={() => handlePlayerClick(player)}
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>{player}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Player</DialogTitle>
            <DialogDescription>
              Add {selectedPlayer} to your team?
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
            <Button
              type="button"
              onClick={() => {
                // Add player logic would go here
                setIsModalOpen(false);
              }}
            >
              Add Player
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PremierLeagueTeams;
