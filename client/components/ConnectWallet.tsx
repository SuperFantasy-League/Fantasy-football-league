import { ConnectButton } from "thirdweb/react"
import { client } from "@/lib/client"

const ConnectWallet = () => {
    return (
        <>
            <ConnectButton client={client} theme="dark" />
            
        </>
    )
}

export default ConnectWallet