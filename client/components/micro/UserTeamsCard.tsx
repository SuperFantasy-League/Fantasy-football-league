import { useActiveAccount } from "thirdweb/react";
import UseFetchUserTeams from "@/hooks/contract-hooks/useFetchUserTeams";
import { Card } from "../ui/card";

const UserTeamsCard = () => {

    const account = useActiveAccount();

    const { teams, teamsLoading } = UseFetchUserTeams();

    return (
        <Card className="flex flex-col items-start gap-3 p-4 shadow-md">
            <p className="text-xs font-medium text-gray-600">My Teams</p>
            {
                account ? <p className="text-2xl font-medium inline-flex gap-2 items-center">
                    {teamsLoading ? "..." : `${teams?.length || 0}`}
                    <small className="bg-blue-300/50 px-2 py-1 rounded-3xl text-xs text-blue-800">10% owned</small>
                </p>
                    : <p className="text-2xl font-medium inline-flex gap-2 items-center">
                        0
                        <small className="bg-blue-300/50 px-2 py-1 rounded-3xl text-xs text-blue-800">0% owned</small>
                    </p>
            }
        </Card>
    )
}

export default UserTeamsCard