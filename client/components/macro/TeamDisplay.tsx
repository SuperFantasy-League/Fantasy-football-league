import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface TeamDisplayProps {
  teams: Team[];
}

const TeamDisplay = ({ teams }: TeamDisplayProps) => {
  return (
    <div className="grid grid-cols-10 gap-6">
      {teams?.map((team) => (
        <Card key={team.id}>
          <div className="w-16 h-16 relative mx-auto">
            <Image
              src={team.image_path}
              alt={`${team.name} logo`}
              className="object-contain"
              fill
            />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default TeamDisplay;
