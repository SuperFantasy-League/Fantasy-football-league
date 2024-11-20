
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

const League = () => {

    return (
        <>
            <TabsContent value="leagues" className="">

                <h2 className="text-3xl tracking-tighter font-medium py-7">Leagues 🚀</h2>

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

                    <Card>
                        <div className="flex justify-between items-center p-5">
                            <h3 className="h3 text-3xl tracking-tighter font-medium">
                                Fire Nation
                            </h3>
                            <div className="inline-flex items-center gap-3">
                                View League
                                <ArrowRight />
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <div className="flex justify-between items-center p-5">
                            <h3 className="h3 text-3xl tracking-tighter font-medium">
                                Beyond the wall
                            </h3>
                            <div className="inline-flex items-center gap-3">
                                View League
                                <ArrowRight />
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <div className="flex justify-between items-center p-5">
                            <h3 className="h3 text-3xl tracking-tighter font-medium">
                                Valhalla
                            </h3>
                            <div className="inline-flex items-center gap-3">
                                View League
                                <ArrowRight />
                            </div>
                        </div>
                    </Card>

                </div>

            </TabsContent>
        </>
    );
};

export default League;
