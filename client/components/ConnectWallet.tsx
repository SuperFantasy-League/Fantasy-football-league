import { ConnectButton } from "thirdweb/react"
import { client } from "@/lib/client"
import { defineChain } from "thirdweb";

const liskSepolia = defineChain(4202);

const ConnectWallet = () => {
    return (
        <>
            <ConnectButton client={client} chain={liskSepolia} theme="dark" />
        </>
    )
}

export default ConnectWallet