import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { injected, metaMask } from 'wagmi/connectors'

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    injected()
    ],
  transports: {
    [mainnet.id]: http('https://mainnet.infura.io/v3/a36d0802465e413ab9464be0ac68bc80'),
    [sepolia.id]: http('https://sepolia.infura.io/v3/a36d0802465e413ab9464be0ac68bc80'),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
