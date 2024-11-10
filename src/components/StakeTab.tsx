import { useAccount, useWriteContract } from 'wagmi';
import { useState, useEffect } from 'react';
import { stakeContractAddress, stakeABI } from '../function/stake';
import { getStakedBalanceABI } from '../function/getStakedBalance';
// import { ethers, parseEther } from 'ethers';
import { useReadContract } from 'wagmi';
import { type UseReadContractParameters } from 'wagmi'
import { ethers } from 'ethers';

export function StakeTab() {
  const { isConnected } = useAccount();
  const [selectedOption, setSelectedOption] = useState('ETH');
  const [stakedAmount, setStakedAmount] = useState<number | null>(null);
  const [stakeAmount, setStakeAmount] = useState<number | null>(null);
  const { writeContract } = useWriteContract()

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

  const { data: stakedBalanceData } = useReadContract({
    address: stakeContractAddress,
    abi: getStakedBalanceABI,
    functionName: 'getStakedBalance',
    args: ['0xd60e2F289ff4E54eAC21e30C2bDD78C47aa466E7'],
  });

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
      <div className="mb-4">
        <label htmlFor="stakeAmount" className="block mb-2">Enter Amount to Stake (min 1 ETH)</label>
        <input
          id="stakeAmount"
          type="number"
          // min="1"
          value={stakeAmount || '1'}
          onChange={(e) => setStakeAmount(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
      </div>
      {stakedBalanceData !== undefined && (
        <p className="mb-4">You have staked: {ethers.formatEther(stakedBalanceData.toString())} ETH</p>
      )}
      <button
        onClick={async () => {
          try {
            await writeContract({
              abi: stakeABI,
              address: stakeContractAddress,
              functionName: 'stake',
              args: [],
              // overrides: {
              //   value: parseEther('0.1') // specify your desired msg.value in ETH here
              // }
            });
          } catch (error) {
            console.error("Error staking:", error);
          }
        }}
        disabled={!isConnected || stakedAmount === null || (stakeAmount !== null && stakeAmount < 1)}
        className={`px-4 py-2 rounded-lg ${
          isConnected && stakedAmount !== null
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Stake {selectedOption}
      </button>
    </div>
  );
}