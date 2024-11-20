"use client";
import { useState, useEffect } from "react";
import TeamDisplay from "@/components/macro/TeamDisplay";

export default function TeamsPage() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch(
          "https://node-backend-7sxv.onrender.com/api/teams/get-teams?page=2"
        );
        const data = await response.json();
        console.log(data?.data?.response?.data);
        if (!data?.data?.response?.data) return;
        setTeams(data?.data?.response?.data);
      } catch (error) {
        console.error("Error fetching teams:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <TeamDisplay teams={teams} />;
}
