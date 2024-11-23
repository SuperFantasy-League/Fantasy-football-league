// ../types/team.ts
export interface Team {
  id: string;
  name: string;
  // Other properties related to the team
}

export interface TeamResponse {
  data: {
    response: {
      data: Team[]; // Array of Team objects
    };
  };
}
