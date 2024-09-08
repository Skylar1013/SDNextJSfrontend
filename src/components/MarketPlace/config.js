import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'
const projectId = '6467c18267b081ccdb07148fff803e6f';
export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    // injected(),
    coinbaseWallet(),
    walletConnect({ projectId}),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})



// declare module 'wagmi' {
//   interface Register {
//     config: typeof config
//   }
// }
