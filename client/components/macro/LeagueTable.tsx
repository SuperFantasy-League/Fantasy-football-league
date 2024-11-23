import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function LeagueTable({ invoices }: { invoices: Array<unknown> }) {
  return (
    <Table>
      <TableCaption>League Stats</TableCaption>
      <TableHeader>
        <TableRow className="bg-[#D5E5FC] rounded-lg text-black">
          <TableHead className="w-[100px]">Rank</TableHead>
          <TableHead>Team</TableHead>
          <TableHead>Manager</TableHead>
          <TableHead>Game week</TableHead>
          <TableHead className="text-right">Points</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={(invoice as { Rank: number }).Rank}>
            <TableCell className="font-medium">
              {(invoice as { rank: number }).rank}
            </TableCell>
            <TableCell>{(invoice as { team: string }).team}</TableCell>
            <TableCell>{(invoice as { manager: string }).manager}</TableCell>
            <TableCell>{(invoice as { gameweek: number }).gameweek}</TableCell>
            <TableCell className="text-right">
              {(invoice as { points: number }).points}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
