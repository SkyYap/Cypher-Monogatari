import { Coins } from 'lucide-react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Coins className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold">LST Aggregator</span>
          </div>

          <div className="flex items-center space-x-4">
            <ConnectButton />
          </div>
        </div>
      </div>
    </nav>
  );
}