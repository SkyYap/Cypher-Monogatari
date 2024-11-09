import { useAccount } from 'wagmi';

export function StakeTab() {
  const { isConnected } = useAccount();

  const lstOptions = [
    { name: 'Lido stETH', apy: '3.8%' },
    { name: 'Rocket rETH', apy: '3.6%' },
    { name: 'Frax frxETH', apy: '3.7%' },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Stake ETH</h2>
      <div className="space-y-4">
        {lstOptions.map((option) => (
          <div key={option.name} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{option.name}</h3>
                <p className="text-sm text-gray-600">APY: {option.apy}</p>
              </div>
              <button
                disabled={!isConnected}
                className={`px-4 py-2 rounded-lg ${
                  isConnected
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Stake
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}