import { PastWinnersTable } from "@/components/macro/PastWinnersTable"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const page = () => {

    const winners = [
        {
            gameweek: 1,
            team: "Flame Hashira",
            manager: "blaze.eth",
            points: 256,
            claimStatus: true,
        },
        {
            gameweek: 2,
            team: "Flame Hashira",
            manager: "blaze.eth",
            points: 256,
            claimStatus: true,
        },
        {
            gameweek: 3,
            team: "Flame Hashira",
            manager: "blaze.eth",
            points: 256,
            claimStatus: false,
        },
    ]

    return (
        <>
            <div className="grid grid-cols-3 gap-4 mb-10">
                <Card className="flex flex-col items-start bg-[#F1F6FE] border border-[#A0C2F8] p-4 gap-4">
                    <p>Pool Balance</p>
                    <h3 className="font-medium text-xl">$400</h3>
                </Card>
                <Card className="flex flex-col items-start bg-[#FFFCF0] border border-[#FFEB99] p-4 gap-4">
                    <p>Wagwer Amount</p>
                    <h3 className="font-medium text-xl">$125</h3>
                </Card>
                <Card className="flex flex-col items-start bg-[#FEF1F8] border border-[#F8A0CF] p-4 gap-4">
                    <p>Total rewards claimed</p>
                    <h3 className="font-medium text-xl">$100</h3>
                </Card>
            </div>

            <Card className="p-7 space-y-6">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col items-start gap-5">
                        <h3 className="font-semibold tracking-tighter text-2xl">Highest Points</h3>
                        <div className="flex items-center gap-10">
                            <div className="flex flex-col gap-1.5 items-start">
                                <p className="text-sm font-light">Team Name</p>
                                <p className="text-md font-medium">Ghost Rider</p>
                            </div>
                            <div className="flex flex-col gap-1.5 items-start">
                                <p className="text-sm font-light">Manager</p>
                                <p className="text-md font-medium">Jhonny.eth</p>
                            </div>
                            <div className="flex flex-col gap-1.5 items-start">
                                <p className="text-sm font-light">Points</p>
                                <p className="text-md font-medium">97</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-7">
                        <p className="">Game week: <span className="font-medium">12</span></p>
                        <Button>
                            Claim Rewards
                        </Button>
                    </div>
                </div>
                <hr />
                <PastWinnersTable winners={winners} />
            </Card>
        </>
    )
}

export default page