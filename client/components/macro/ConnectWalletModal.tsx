'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import ConnectWallet from "../ConnectWallet"
import { useActiveAccount } from "thirdweb/react";

const ConnectWalletModal = () => {
    const account = useActiveAccount();

    return (
        <>
            {
                !account && <Dialog open={true}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Connect a wallet</DialogTitle>
                            <DialogDescription>
                                Connect a wallet or create one, to get the best of aceFantasy
                            </DialogDescription>
                        </DialogHeader>
                        <section className="flex justify-center items-center w-full h-full">
                            <div className="flex flex-col items-center gap-4">
                                <Image
                                    src={'/bolt.svg'}
                                    alt="bolt icon for coming soon"
                                    width={80}
                                    height={80}
                                />
                                <p className="text-3xl fo tracking-tighter">
                                    Wallet is Unavailable at this time, <br /> check out the fantasy Page
                                </p>
                                <ConnectWallet />
                            </div>
                        </section>
                    </DialogContent>
                </Dialog>
            }


        </>
    )
}

export default ConnectWalletModal