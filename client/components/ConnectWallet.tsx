import { ConnectButton } from "thirdweb/react"
import { client } from "@/lib/client"
import { defineChain } from "thirdweb";

const liskSepolia = defineChain(4202);

const ConnectWallet = ({ theme = "dark" as "dark" | "light" }) => {
    return (
        <>
            <ConnectButton client={client} chain={liskSepolia} theme={theme} />
        </>
    )
}

export default ConnectWallet