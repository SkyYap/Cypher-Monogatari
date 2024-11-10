import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import {
  sepolia,
  bscTestnet,
  optimismSepolia,
  arbitrumSepolia,
  baseSepolia,
} from 'wagmi/chains';
import App from './App';
import './index.css';
import '@rainbow-me/rainbowkit/styles.css'; 
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';

// const config = createConfig({
//   chains: [mainnet],
//   connectors: [injected()],
//   transports: {
//     [mainnet.id]: http(),
//   },
// });

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    sepolia,
    bscTestnet,
    optimismSepolia,
    arbitrumSepolia,
    baseSepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>
);