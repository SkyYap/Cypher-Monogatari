import { useAccount } from 'wagmi';

export function MintTab() {
  const { isConnected } = useAccount();

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Mint NFT</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">
            Mint your Staking Position as NFT
          </h3>
          <p className="text-gray-600 mb-6">
            Transform your staking position into a unique NFT that represents your
            contribution to the Ethereum network.
          </p>
          <button
            disabled={!isConnected}
            className={`px-6 py-3 rounded-lg ${
              isConnected
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Mint NFT
          </button>
          {!isConnected && (
            <p className="text-sm text-red-500 mt-4">
              Please connect your wallet to mint NFT
            </p>
          )}
        </div>
      </div>
    </div>
  );
}