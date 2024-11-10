import { useAccount } from 'wagmi';
import { useState, useEffect } from 'react';

export function StakeTab() {
  const { isConnected } = useAccount();
  const [selectedOption, setSelectedOption] = useState('ETH');
  const [stakedAmount, setStakedAmount] = useState<number | null>(null);

  const lstOptions = [
    { name: 'Ethereum ETH'},
    { name: 'Lido stETH'},
    { name: 'Rocket rETH'},
    { name: 'Frax frxETH'},
  ];

  useEffect(() => {
    const fetchStakedAmount = async () => {
      if (isConnected) {
        const amount = await fetchUserStakedAmount();
        setStakedAmount(amount);
      }
    };

    fetchStakedAmount();
  }, [isConnected]);

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Stake ETH</h2>
      <div className="mb-4">
        <label htmlFor="stakingOptions" className="block mb-2">Select Staking Option</label>
        <select
          id="stakingOptions"
          value={selectedOption}
          onChange={handleOptionChange}
          className="w-full p-2 border rounded"
        >
          {lstOptions.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      {stakedAmount !== null && (
        <p className="mb-4">You have staked: {stakedAmount} ETH</p>
      )}
      <button
        disabled={!isConnected}
        className={`px-4 py-2 rounded-lg ${
          isConnected
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Stake {selectedOption}
      </button>
    </div>
  );
}

const fetchUserStakedAmount = async () => {
  return 0;
};