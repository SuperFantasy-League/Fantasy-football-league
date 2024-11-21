'use client'
import { ArrowRight } from "lucide-react";
import { TabsContent } from "@/components/ui/tabs";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import CreateLeagueModal from "@/components/macro/CreateLeagueModal";
import { usePathname } from 'next/navigation';
import Link from "next/link";

const League = () => {

    const pathname = usePathname();

    const usersLeagues = [
        {
            name: "Fire Nation",
            address: "firn",
        },
        {
            name: "Beyond the wall",
            address: "btw",
        },
        {
            name: "Valhalla",
            address: "vlhl",
        },
    ];

    return (
        <>

            <div className="grid grid-cols-2 gap-6">

                <Card className="flex flex-col justify-between items-start">
                    <CardHeader>
                        <CardTitle>Private Leagues ✍️</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg font-light">You aren’t in any private leagues yet. Create or join one and wager with friends</p>
                    </CardContent>
                    <CardFooter className="grid grid-cols-2 gap-5">
                        <CreateLeagueModal />
                        <Button>Join a League</Button>
                    </CardFooter>
                </Card>

                <Card className="flex flex-col justify-between items-start">
                    <CardHeader>
                        <CardTitle>Public Leagues 🛜</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg font-light">Join a public league to play against a small, randomly selected group of other acefantasy game players</p>
                    </CardContent>
                    <CardFooter className="">
                        {/* <Button variant="outline">Cancel</Button> */}
                        <Button>Join Public League</Button>
                    </CardFooter>
                </Card>

                {usersLeagues.map((league, index) => (
                    <Card key={index}>
                        <div className="flex justify-between items-center p-5">
                            <h3 className="h3 text-3xl tracking-tighter font-medium">
                                {league.name}
                            </h3>
                            <Link href={`/${pathname.split('/').slice(1).join('/')}/${league.address}`} className="inline-flex items-center gap-3">
                                View League
                                <ArrowRight />
                            </Link>
                        </div>
                    </Card>
                ))}

            </div>
            
        </>
    );
};

export default League;
