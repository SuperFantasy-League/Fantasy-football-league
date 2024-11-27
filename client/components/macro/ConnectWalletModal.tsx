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
                                Connect a wallet or create one, to get the best of AceFantasy
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
                                <p className="text-3xl text-center tracking-tighter">
                                    Wallet not detected, <br /> please connect a wallet to continue enjoying AceFantasy
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