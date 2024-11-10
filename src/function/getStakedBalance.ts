export const BASE_SEPOLIA_CHAIN_ID = 84532;
export const stakeContractAddress = '0xE37D83E2D87B816C160255a5384bB686f1BC7989';
export const getStakedBalanceABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "getStakedBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
] as const;
