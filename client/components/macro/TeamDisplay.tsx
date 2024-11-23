import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

// Define the Team type
interface Team {
  id: number; // Or string, depending on your data
  name: string;
  image_path: string; // Path or URL to the image
}

// Define the props type for the TeamDisplay component
interface TeamDisplayProps {
  teams?: Team[]; // teams is optional and is an array of Team objects
}

const TeamDisplay: React.FC<TeamDisplayProps> = ({ teams }) => {
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
