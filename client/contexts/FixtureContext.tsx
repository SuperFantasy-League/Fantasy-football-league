// contexts/FixtureContext.tsx
"use client";
import React, { createContext, useState, useContext, useEffect } from "react";

// Define the type for fixture data
interface Fixture {
  id: string;
  date: string;
  league: {
    name: string;
    logo: string;
  };
  teams: {
    home: {
      name: string;
      logo: string;
    };
    away: {
      name: string;
      logo: string;
    };
  };
}

// Context type
interface FixtureContextType {
  nextFixture: Fixture | null;
  fixtures: Fixture[];
  loading: boolean;
  error: Error | null;
  fetchFixtures: () => Promise<void>;
}

// Create context
const FixtureContext = createContext<FixtureContextType>({
  nextFixture: null,
  fixtures: [],
  loading: false,
  error: null,
  fetchFixtures: async () => {},
});

// Provider component
export const FixtureProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [fixtures, setFixtures] = useState<Fixture[]>([]);
  const [nextFixture, setNextFixture] = useState<Fixture | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchFixtures = async () => {
    setLoading(true);
    console.log("loading...");
    try {
      let res: any = await fetch(
        `https://node-backend-7sxv.onrender.com/api/fixtures/get-team-fixtures/33`,
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
      const fetchedFixtures = res.data.response;

      setFixtures(fetchedFixtures);

      // Set the first fixture as the next fixture
      if (fetchedFixtures.length > 0) {
        // Optional: Add logic to find the next upcoming fixture
        const upcomingFixture =
          fetchedFixtures.find(
            (fixture: Fixture) => new Date(fixture.date) > new Date()
          ) || fetchedFixtures[0];

        setNextFixture(upcomingFixture);
      }
    } catch (error) {
      console.log("done loading");
      console.log("get fixtures error ", error);
      setError(
        error instanceof Error ? error : new Error("Failed to fetch fixtures")
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFixtures();
  }, []);

  return (
    <FixtureContext.Provider
      value={{
        nextFixture,
        fixtures,
        loading,
        error,
        fetchFixtures,
      }}
    >
      {children}
    </FixtureContext.Provider>
  );
};

// Custom hook to use the fixture context
export const useFixtures = () => {
  const context = useContext(FixtureContext);

  if (!context) {
    throw new Error("useFixtures must be used within a FixtureProvider");
  }

  return context;
};
