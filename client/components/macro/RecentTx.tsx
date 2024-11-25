import { Card, CardContent, CardHeader } from "../ui/card"

const RecentTx = () => {
    return (
        <>
            <Card>
                <CardHeader>
                    <div className="flex justify-between">
                        Recent Transactions
                        <div className="h-4 w-4 flex justify-center items-center rounded-xl">
                            ...
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-6">
                        <li>
                            <div className="flex justify-between items-center">
                                <div className="inline-flex items-center gap-4">
                                    <p className="w-16 py-1 text-center bg-green-200/40 text-green-800 text-xs rounded-2xl border border-green-500/40">Deposit</p>
                                    <div className="flex flex-col items-start gap-0.5 text-xs">
                                        0x78fghd84....uk84j68fc↗️
                                        <span>Sat 23 Nov, 3:31 PM</span>
                                    </div>
                                </div>
                                <h3 className="text-lg font-medium">$229</h3>
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-between items-center">
                                <div className="inline-flex items-center gap-4">
                                    <p className="w-16 py-1 text-center bg-blue-200/40 text-blue-800 text-xs rounded-2xl border border-blue-500/40">Stake</p>
                                    <div className="flex flex-col items-start gap-0.5 text-xs">
                                        0x78fghd84....uk84j68fc↗️
                                        <span>Sat 23 Nov, 3:31 PM</span>
                                    </div>
                                </div>
                                <h3 className="text-lg font-medium">$29</h3>
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-between items-center">
                                <div className="inline-flex items-center gap-4">
                                    <p className="w-16 py-1 text-center bg-green-200/40 text-green-800 text-xs rounded-2xl border border-green-500/40">Deposit</p>
                                    <div className="flex flex-col items-start gap-0.5 text-xs">
                                        0x78fghd84....uk84j68fc↗️
                                        <span>Sat 23 Nov, 3:31 PM</span>
                                    </div>
                                </div>
                                <h3 className="text-lg font-medium">$22</h3>
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-between items-center">
                                <div className="inline-flex items-center gap-4">
                                    <p className="w-16 py-1 text-center bg-red-200/40 text-red-800 text-xs rounded-2xl border border-red-500/40">Withdraw</p>
                                    <div className="flex flex-col items-start gap-0.5 text-xs">
                                        0x78fghd84....uk84j68fc↗️
                                        <span>Sat 23 Nov, 3:31 PM</span>
                                    </div>
                                </div>
                                <h3 className="text-lg font-medium">$30</h3>
                            </div>
                        </li>
                        <li>
                            <div className="flex justify-between items-center">
                                <div className="inline-flex items-center gap-4">
                                    <p className="px-2 py-1 bg-green-200/40 text-green-800 text-xs rounded-2xl border border-green-500/40">Deposit</p>
                                    <div className="flex flex-col items-start gap-0.5 text-xs">
                                        0x78fghd84....uk84j68fc↗️
                                        <span>Sat 23 Nov, 3:31 PM</span>
                                    </div>
                                </div>
                                <h3 className="text-lg font-medium">$9</h3>
                            </div>
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </>
    )
}

export default RecentTx