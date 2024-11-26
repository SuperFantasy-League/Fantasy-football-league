import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, lisk, liskSepolia } from 'wagmi/chains'

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})