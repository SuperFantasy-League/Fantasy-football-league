export interface AllTeams {
  id: string;
  // Add other team properties based on your API response
  // For example:
  name?: string;
  members?: number;
  // ... other properties
}

export interface TeamResponse {
  data: {
    response: {
      data: AllTeams[];
    };
  };
}

// hooks/useTeams.ts
