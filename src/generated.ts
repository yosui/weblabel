import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Counter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const counterAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'decrement',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'increment',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'number',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'setNumber',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMulticall3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMulticall3Abi = [
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'returnData', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3Value[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3Value',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'blockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBasefee',
    outputs: [{ name: 'basefee', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'blockNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'getBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlockNumber',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getChainId',
    outputs: [{ name: 'chainid', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockCoinbase',
    outputs: [{ name: 'coinbase', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockDifficulty',
    outputs: [{ name: 'difficulty', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockGasLimit',
    outputs: [{ name: 'gaslimit', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'getEthBalance',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLastBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryAggregate',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryBlockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NameStore
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const nameStoreAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [
      { name: '_contributor', internalType: 'address', type: 'address' },
    ],
    name: 'getName',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'names',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_name', internalType: 'string', type: 'string' }],
    name: 'storeName',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'contributor',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'name', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'NameStored',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Withdrawn',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link counterAbi}__
 */
export const useReadCounter = /*#__PURE__*/ createUseReadContract({
  abi: counterAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"number"`
 */
export const useReadCounterNumber = /*#__PURE__*/ createUseReadContract({
  abi: counterAbi,
  functionName: 'number',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link counterAbi}__
 */
export const useWriteCounter = /*#__PURE__*/ createUseWriteContract({
  abi: counterAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"decrement"`
 */
export const useWriteCounterDecrement = /*#__PURE__*/ createUseWriteContract({
  abi: counterAbi,
  functionName: 'decrement',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"increment"`
 */
export const useWriteCounterIncrement = /*#__PURE__*/ createUseWriteContract({
  abi: counterAbi,
  functionName: 'increment',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"setNumber"`
 */
export const useWriteCounterSetNumber = /*#__PURE__*/ createUseWriteContract({
  abi: counterAbi,
  functionName: 'setNumber',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link counterAbi}__
 */
export const useSimulateCounter = /*#__PURE__*/ createUseSimulateContract({
  abi: counterAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"decrement"`
 */
export const useSimulateCounterDecrement =
  /*#__PURE__*/ createUseSimulateContract({
    abi: counterAbi,
    functionName: 'decrement',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"increment"`
 */
export const useSimulateCounterIncrement =
  /*#__PURE__*/ createUseSimulateContract({
    abi: counterAbi,
    functionName: 'increment',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"setNumber"`
 */
export const useSimulateCounterSetNumber =
  /*#__PURE__*/ createUseSimulateContract({
    abi: counterAbi,
    functionName: 'setNumber',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useReadIMulticall3 = /*#__PURE__*/ createUseReadContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBasefee"`
 */
export const useReadIMulticall3GetBasefee = /*#__PURE__*/ createUseReadContract(
  { abi: iMulticall3Abi, functionName: 'getBasefee' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockHash"`
 */
export const useReadIMulticall3GetBlockHash =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getBlockHash',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockNumber"`
 */
export const useReadIMulticall3GetBlockNumber =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getBlockNumber',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getChainId"`
 */
export const useReadIMulticall3GetChainId = /*#__PURE__*/ createUseReadContract(
  { abi: iMulticall3Abi, functionName: 'getChainId' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockCoinbase"`
 */
export const useReadIMulticall3GetCurrentBlockCoinbase =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockCoinbase',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockDifficulty"`
 */
export const useReadIMulticall3GetCurrentBlockDifficulty =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockDifficulty',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockGasLimit"`
 */
export const useReadIMulticall3GetCurrentBlockGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockGasLimit',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockTimestamp"`
 */
export const useReadIMulticall3GetCurrentBlockTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getEthBalance"`
 */
export const useReadIMulticall3GetEthBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getEthBalance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getLastBlockHash"`
 */
export const useReadIMulticall3GetLastBlockHash =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getLastBlockHash',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useWriteIMulticall3 = /*#__PURE__*/ createUseWriteContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const useWriteIMulticall3Aggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const useWriteIMulticall3Aggregate3 =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const useWriteIMulticall3Aggregate3Value =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3Value',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useWriteIMulticall3BlockAndAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useWriteIMulticall3TryAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'tryAggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useWriteIMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useSimulateIMulticall3 = /*#__PURE__*/ createUseSimulateContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const useSimulateIMulticall3Aggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const useSimulateIMulticall3Aggregate3 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const useSimulateIMulticall3Aggregate3Value =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3Value',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useSimulateIMulticall3BlockAndAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useSimulateIMulticall3TryAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'tryAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useSimulateIMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nameStoreAbi}__
 */
export const useReadNameStore = /*#__PURE__*/ createUseReadContract({
  abi: nameStoreAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nameStoreAbi}__ and `functionName` set to `"getName"`
 */
export const useReadNameStoreGetName = /*#__PURE__*/ createUseReadContract({
  abi: nameStoreAbi,
  functionName: 'getName',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nameStoreAbi}__ and `functionName` set to `"names"`
 */
export const useReadNameStoreNames = /*#__PURE__*/ createUseReadContract({
  abi: nameStoreAbi,
  functionName: 'names',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nameStoreAbi}__ and `functionName` set to `"owner"`
 */
export const useReadNameStoreOwner = /*#__PURE__*/ createUseReadContract({
  abi: nameStoreAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nameStoreAbi}__
 */
export const useWriteNameStore = /*#__PURE__*/ createUseWriteContract({
  abi: nameStoreAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nameStoreAbi}__ and `functionName` set to `"storeName"`
 */
export const useWriteNameStoreStoreName = /*#__PURE__*/ createUseWriteContract({
  abi: nameStoreAbi,
  functionName: 'storeName',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nameStoreAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteNameStoreWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: nameStoreAbi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nameStoreAbi}__
 */
export const useSimulateNameStore = /*#__PURE__*/ createUseSimulateContract({
  abi: nameStoreAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nameStoreAbi}__ and `functionName` set to `"storeName"`
 */
export const useSimulateNameStoreStoreName =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nameStoreAbi,
    functionName: 'storeName',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nameStoreAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateNameStoreWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nameStoreAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nameStoreAbi}__
 */
export const useWatchNameStoreEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: nameStoreAbi },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nameStoreAbi}__ and `eventName` set to `"NameStored"`
 */
export const useWatchNameStoreNameStoredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nameStoreAbi,
    eventName: 'NameStored',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nameStoreAbi}__ and `eventName` set to `"Withdrawn"`
 */
export const useWatchNameStoreWithdrawnEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nameStoreAbi,
    eventName: 'Withdrawn',
  })
