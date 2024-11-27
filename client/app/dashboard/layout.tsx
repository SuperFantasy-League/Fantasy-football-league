import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import ConnectWallet from "@/components/ConnectWallet";
import ConnectWalletModal from "@/components/macro/ConnectWalletModal";
import { FixtureProvider } from "../../contexts/FixtureContext";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <FixtureProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex justify-between items-center w-full border-b pb-3">
            <div className="flex h-16 shrink-0 items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
            </div>
            <ConnectWallet />
          </header>

          {children}

          <ConnectWalletModal />
        </SidebarInset>
      </SidebarProvider>
    </FixtureProvider>
  );
}
