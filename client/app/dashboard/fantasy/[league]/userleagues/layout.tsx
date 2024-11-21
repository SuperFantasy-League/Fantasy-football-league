import { TabsContent } from "@/components/ui/tabs";

const League = ({ children }: { children: React.ReactNode }) => {

    return (
        <>
            <TabsContent value="leagues" className="">

                <h2 className="text-3xl tracking-tighter font-medium py-7">Leagues 🚀</h2>

                {children}

            </TabsContent>
        </>
    );
};

export default League;
