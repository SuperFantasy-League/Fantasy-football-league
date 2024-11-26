import React, { useEffect, useState } from "react";
import Image from "next/image";

// Fixture component to display individual fixture details
const Fixture = ({ fixture }: any) => {
  const { teams, score, league, date } = fixture;
  const { home, away } = teams;
  const { home: homeScore, away: awayScore } = score.fulltime;

  return (
    <div className="bg-white shadow-md rounded-lg p-10 flex flex-col space-y-4">
      {/* Fixture Header */}
      <div className="flex items-center  justify-center space-x-3">
        <Image
          src={league.logo ? league.logo : "/placeholder.png"}
          alt={league.name}
          className="w-8 h-8"
          width={32}
          height={32}
        />
        <div>
          <h3 className="text-xl font-semibold">{league.name}</h3>
        </div>
      </div>

      {/* Fixture Teams */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image
            src={home.logo ? home.logo : "/placeholder.png"}
            alt={home.name}
            className="w-12 h-12"
            width={48}
            height={48}
          />
          <h4 className="text-lg font-medium">{home.name}</h4>
        </div>
        <div className="text-2xl font-bold">
          <span>
            {homeScore} - {awayScore}
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <Image
            src={away.logo ? away.logo : "/placeholder.png"}
            alt={away.name}
            className="w-12 h-12"
            width={48}
            height={48}
          />
          <h4 className="text-lg font-medium">{away.name}</h4>
        </div>
      </div>

      {/* Fixture Footer */}
      <div className="text-gray-600 flex justify-center text-sm">
        <p>{new Date(date).toLocaleString()}</p>
        <p>Referee: {fixture.referee}</p>
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
