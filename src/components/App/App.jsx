import AppContent from "../AppContent/AppContent";
import AppFooter from "../AppFooter/AppFooter";
import AppHeader from "../AppHeader/AppHeader";
import { useEffect } from "react";
import { HashRouter as Router } from "react-router-dom";
import { RainbowKitProvider, getDefaultWallets, connectorsForWallets } from '@rainbow-me/rainbowkit';
import { darkTheme } from "@rainbow-me/rainbowkit";
import { argentWallet, trustWallet, ledgerWallet } from '@rainbow-me/rainbowkit/wallets';
import { ChakraProvider } from "@chakra-ui/react";
import { configureChains, WagmiConfig } from 'wagmi';
import { createConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { extendTheme } from '@chakra-ui/react'
import { publicProvider } from 'wagmi/providers/public';
import Aos from "aos";
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    Aos.init();
  }, [])

  const theme = extendTheme({
    fonts: {
      body: 'Poppins, system-ui, sans-serif',
      heading: 'Poppins, system-ui, sans-serif',
    },
  })
  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [
      mainnet
    ],
    [publicProvider()]
  );

  const projectId = 'fee764c7c0bbd687ee44d58665e6ddf8';

  const { wallets } = getDefaultWallets({
    appName: 'oxMiner',
    projectId,
    chains,
  });

  const connectors = connectorsForWallets([
    ...wallets,
    {
      groupName: 'Other',
      wallets: [
        argentWallet({ projectId, chains }),
        trustWallet({ projectId, chains }),
        ledgerWallet({ projectId, chains }),
      ],
    },
  ]);


  const config = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
    webSocketPublicClient,
  });

  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider
        coolMode
        theme={darkTheme({
          accentColor: "#48b7cb",
          borderRadius: "large",
          overlayBlur: "small",
          fontStack: "system",
        })}
        chains={chains}
      >
        <ChakraProvider theme={theme}>
          <Router >
            <AppHeader />
            <AppContent />
            <AppFooter />
          </Router>
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default App;
