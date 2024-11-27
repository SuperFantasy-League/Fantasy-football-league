import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export function PastWinnersTable({ winners }: { winners: Array<unknown> }) {
  return (
    <Table>
      <TableCaption>League Stats</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Game Week</TableHead>
          <TableHead className="text-right">Team Name</TableHead>
          <TableHead className="text-right">Manager</TableHead>
          <TableHead className="text-right">Points</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {(
          winners as Array<{
            gameweek: number;
            team: string;
            manager: string;
            points: number;
            claimStatus: boolean;
          }>
        ).map((winner) => (
          <TableRow key={winner.gameweek}>
            <TableCell className="font-medium">{winner.gameweek}</TableCell>
            <TableCell className="text-right">{winner.team}</TableCell>
            <TableCell className="text-right">{winner.manager}</TableCell>
            <TableCell className="text-right">{winner.points}</TableCell>
            <TableCell className="text-right">
              <Badge
                className={winner.claimStatus ? "bg-green-500" : "bg-red-500"}
              >
                {winner.claimStatus ? "Claimed" : "Not Claimed"}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
