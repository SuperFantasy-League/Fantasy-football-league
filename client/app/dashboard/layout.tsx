import { AppSidebar } from "@/components/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { ConnectButton } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";


export default function Page({ children }: { children: React.ReactNode }) {
    const client = createThirdwebClient({ clientId: '878e3e25d922335d83501b9ee66582aa' });
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex justify-between items-center w-full">
                    <div className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="#">
                                        Building Your Application
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                    {/* <Button className="bg-black rounded-3xl px-6 py-6 text-md">
                        Connect wallet
                    </Button> */}
                    <ConnectButton client={client} theme="dark" />
                </header>

                {children}

            </SidebarInset>
        </SidebarProvider>
    )
}
