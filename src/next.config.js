module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    CONTRACT_ABI: [
      {
        anonymous: false,
        inputs: [],
        name: 'DrainWishes',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'bytes32',
            name: 'wish',
            type: 'bytes32',
          },
        ],
        name: 'WishMade',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        name: 'allWishes',
        outputs: [
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true,
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: '_wish',
            type: 'bytes32',
          },
        ],
        name: 'hashWish',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'drainWishes',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getWishes',
        outputs: [
          {
            internalType: 'bytes32[]',
            name: '_userWishes',
            type: 'bytes32[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true,
      },
    ],
    CONTRACT_ADDRESS: '0xb0dD599957fbF41b228dF67D72BeC66613198f4d',
  },
};
