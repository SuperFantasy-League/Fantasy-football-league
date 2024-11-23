"use client";
import { useState, useEffect } from "react";
import type { Team, TeamResponse } from "../types/team"; // Ensure Team and TeamResponse are imported correctly

export function useTeams(page: number = 2) {
  const [teams, setTeams] = useState<Team[]>([]); // Teams state should hold an array of Team objects
  const [loading, setLoading] = useState<boolean>(true); // Loading state to track API request
  const [error, setError] = useState<string | null>(null); // Error state to handle errors during fetching

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        // Use the page parameter for pagination
        const response = await fetch(
          `https://node-backend-7sxv.onrender.com/api/teams/get-teams?page=${page}`
        );

        if (!response.ok) {
          // If response status is not OK (not in the 2xx range), throw an error
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON response into TeamResponse type
        const data: TeamResponse = await response.json();

        // Ensure that we have data in the correct format
        const teamsData = data?.data?.response?.data;

        if (!teamsData || !Array.isArray(teamsData)) {
          // If the teams data is missing or not an array, throw an error
          throw new Error("Teams data not found or malformed in response");
        }

        // Update the state with the fetched teams
        setTeams(teamsData);
      } catch (error) {
        console.error("Error fetching teams:", error);
        // Set error state to display the error message
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
      } finally {
        // Set loading to false when the request is done (either success or failure)
        setLoading(false);
      }
    };

    // Fetch teams when the component mounts or when the page changes
    fetchTeams();
  }, [page]); // Dependency array to re-fetch when the page changes

  return { teams, loading, error }; // Return the teams, loading, and error states
}
