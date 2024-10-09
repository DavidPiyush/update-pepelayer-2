"use client";

// import ethereumSvg from "@/public/chain/ethereum.svg";
// import baseSvg from "@/public/chain/base.svg";
// import polygonSvg from "@/public/chain/polygon.svg";
// import arbitrumSvg from "@/public/chain/arbitrum.svg";
// import optimseSvg from "@/public/chain/optimse.svg";
// import ethereum from "@/public/chain/etthereum.svg"
const projectId = process.env.PROJECT_ID;
// Rainbowkit import
import "@rainbow-me/rainbowkit/styles.css";
import {
  RainbowKitProvider,
  connectorsForWallets,
  darkTheme,
} from "@rainbow-me/rainbowkit";

// reactquery
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// importing wallet
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
  binanceWallet,
  bitgetWallet,
  rainbowWallet,
  metaMaskWallet,
  walletConnectWallet,
  coinbaseWallet,
} from "@rainbow-me/rainbowkit/wallets";

import { http, createConfig, WagmiProvider } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  sepolia,
} from "wagmi/chains";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Popular",
      wallets: [
        rainbowWallet,
        metaMaskWallet,
        coinbaseWallet,
        walletConnectWallet,
      ],
    },
    {
      groupName: "More",
      wallets: [
        argentWallet,
        trustWallet,
        ledgerWallet,
        binanceWallet,
        bitgetWallet,
      ],
    },
  ],
  { appName: "RainbowKit App", projectId: "YOUR_PROJECT_ID" }
);

/* iconUrl: ethereumSvg
 iconUrl: ethereumSvg
iconUrl: optimseSvg
iconUrl: polygonSvg
iconUrl: arbitrumSvg
iconUrl: baseSvg 
*/
export const config = createConfig({
  appName: "RainbowKit demo",
  projectId,
  connectors,
  chains: [
    { ...mainnet },
    { ...sepolia },
    { ...polygon  },
    { ...optimism  },
    { ...arbitrum },
    { ...base },
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
  },
});

const queryClient = new QueryClient();
// we can more wallet from here

// wagmi import
const Providers = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          modalSize="wide"
          chains
          theme={darkTheme()}
          showRecentTransactions={true}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Providers;
