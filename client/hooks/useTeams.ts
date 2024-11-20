"use client";
import { useState, useEffect } from "react";
import type { AllTeams, TeamResponse } from "../types/team";

export function useTeams(page: number = 2) {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch(
          `https://node-backend-7sxv.onrender.com/api/teams/get-teams?page=1`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: TeamResponse = await response.json();
        const teamsData = data?.data?.response?.data;

        if (!teamsData) {
          throw new Error("Teams data not found in response");
        }

        setTeams(teamsData);
      } catch (error) {
        console.error("Error fetching teams:", error);
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, [page]);

  return { teams, loading, error };
}
