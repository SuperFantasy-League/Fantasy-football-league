/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Image from "next/image";

// Fixture component to display individual fixture details
const Fixture = ({ fixture }: any) => {
  const { teams, league } = fixture;
  const { home, away } = teams;

  return (
    <div className="bg-white shadow-md rounded-lg">
      <div className="flex gap-20 p-4">
        {/* Fixture Header */}
        <div className="flex items-center  justify-center">
          <Image
            src={league.logo ? league.logo : "/placeholder.png"}
            alt={league.name}
            className="w-8 h-8"
            width={32}
            height={32}
          />
          <div>
            <h3 className="text-xs font-semibold">{league.name}</h3>
          </div>
        </div>
        <div className="grid grid-cols-[auto_auto_auto] gap-4">
          {/* Fixture Teams */}
          <div className="flex items-center space-x-1">
            <h4 className="text-base font-medium">{home.name}</h4>

            <Image
              src={home.logo ? home.logo : "/placeholder.png"}
              alt={home.name}
              className="w-8 h-8"
              width={32}
              height={32}
            />
          </div>
          <div className="text-gray-600 p-2 border-2 border-gray-300 rounded-lg m-4 text-sm">
            <p>VS</p>
          </div>

          <div className="flex items-center space-x-1">
            <Image
              src={away.logo ? away.logo : "/placeholder.png"}
              alt={away.name}
              className="w-8 h-8"
              width={32}
              height={32}
            />
            <h4 className="text-lg font-medium">{away.name}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

// FixtureList component that renders multiple fixtures
const FixtureList = ({ fixtures }: any) => {
  return (
    <div className="space-y-6">
      {fixtures.map((fixture: any) => (
        <Fixture key={fixture.id} fixture={fixture} />
      ))}
    </div>
  );
};

// Fixtures component that fetches and displays fixtures
const Fixtures = () => {
  const [fixtures, setFixtures] = useState<any>([]);

  const getFixtures = async () => {
    console.log("loading...");
    try {
      let res: any = await fetch(
        `https://node-backend-7sxv.onrender.com/api/fixtures/get-league-fixtures`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      );

      console.log("done loading");

      res = await res.json();

      console.log("fixtures ", res.data.response);
      setFixtures(res.data.response);
    } catch (error) {
      console.log("done loading");
      console.log("get fixtures error ", error);
    }
  };

  useEffect(() => {
    getFixtures();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Upcoming Fixtures</h1>
      {fixtures.length > 0 ? (
        <FixtureList fixtures={fixtures} />
      ) : (
        <p className="text-center text-gray-500">No fixtures available.</p>
      )}
    </div>
  );
};

export default Fixtures;
