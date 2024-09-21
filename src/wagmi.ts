import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { walletConnect } from 'wagmi/connectors'

const projectId = '845dfb9d62b865d64a36a01ec336f5e3w'

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    walletConnect({ projectId }),
    ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
