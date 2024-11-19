import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const TeamDisplay = ({ teams }) => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Football Teams</h1>
      <div className="grid grid-cols-10 gap-6">
        {teams?.map((team) => (
          <Card
            key={team.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
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
    </div>
  );
};

export default TeamDisplay;
