import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { StakeTab } from './components/StakeTab';
import { MintTab } from './components/MintTab';

function App() {
  const [activeTab, setActiveTab] = useState<'stake' | 'mint'>('stake');

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setActiveTab('stake')}
              className={`px-6 py-2 rounded-lg ${
                activeTab === 'stake'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Stake
            </button>
            <button
              onClick={() => setActiveTab('mint')}
              className={`px-6 py-2 rounded-lg ${
                activeTab === 'mint'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Mint
            </button>
          </div>
        </div>

        {activeTab === 'stake' ? <StakeTab /> : <MintTab />}
      </div>
    </div>
  );
}

export default App;