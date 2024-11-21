import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


export function LeagueTable({invoices} : {invoices: Array<any>}) {
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
                    <TableRow key={invoice.Rank}>
                        <TableCell className="font-medium">{invoice.rank}</TableCell>
                        <TableCell>{invoice.team}</TableCell>
                        <TableCell>{invoice.manager}</TableCell>
                        <TableCell>{invoice.gameweek}</TableCell>
                        <TableCell className="text-right">{invoice.points}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
