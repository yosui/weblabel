import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

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
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'contributors',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAllNames',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
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
// NameStoreTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const nameStoreTestAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [
      {
        name: 'excludedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [
      {
        name: 'excludedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSelectors',
    outputs: [
      {
        name: 'excludedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [
      {
        name: 'excludedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nameStore',
    outputs: [
      { name: '', internalType: 'contract NameStore', type: 'address' },
    ],
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
    inputs: [],
    name: 'setUp',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzArtifactSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'artifact', internalType: 'string', type: 'string' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [
      {
        name: 'targetedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [
      {
        name: 'targetedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetInterfaces',
    outputs: [
      {
        name: 'targetedInterfaces_',
        internalType: 'struct StdInvariant.FuzzInterface[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'artifacts', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [
      {
        name: 'targetedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'testFail_WithdrawByNonOwner',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'test_StoreName',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'test_WithdrawByOwner',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'user',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'logs',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nameStoreAbi}__ and `functionName` set to `"contributors"`
 */
export const useReadNameStoreContributors = /*#__PURE__*/ createUseReadContract(
  { abi: nameStoreAbi, functionName: 'contributors' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nameStoreAbi}__ and `functionName` set to `"getAllNames"`
 */
export const useReadNameStoreGetAllNames = /*#__PURE__*/ createUseReadContract({
  abi: nameStoreAbi,
  functionName: 'getAllNames',
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

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nameStoreTestAbi}__
 */
export const useReadNameStoreTest = /*#__PURE__*/ createUseReadContract({
  abi: nameStoreTestAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nameStoreTestAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const useReadNameStoreTestIsTest = /*#__PURE__*/ createUseReadContract({
  abi: nameStoreTestAbi,
  functionName: 'IS_TEST',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nameStoreTestAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const useReadNameStoreTestExcludeArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: nameStoreTestAbi,
    functionName: 'excludeArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nameStoreTestAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const useReadNameStoreTestExcludeContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: nameStoreTestAbi,
    functionName: 'excludeContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nameStoreTestAbi}__ and `functionName` set to `"excludeSelectors"`
 */
export const useReadNameStoreTestExcludeSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: nameStoreTestAbi,
    functionName: 'excludeSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nameStoreTestAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const useReadNameStoreTestExcludeSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: nameStoreTestAbi,
    functionName: 'excludeSenders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nameStoreTestAbi}__ and `functionName` set to `"failed"`
 */
export const useReadNameStoreTestFailed = /*#__PURE__*/ createUseReadContract({
  abi: nameStoreTestAbi,
  functionName: 'failed',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nameStoreTestAbi}__ and `functionName` set to `"nameStore"`
 */
export const useReadNameStoreTestNameStore =
  /*#__PURE__*/ createUseReadContract({
    abi: nameStoreTestAbi,
    functionName: 'nameStore',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nameStoreTestAbi}__ and `functionName` set to `"owner"`
 */
export const useReadNameStoreTestOwner = /*#__PURE__*/ createUseReadContract({
  abi: nameStoreTestAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nameStoreTestAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const useReadNameStoreTestTargetArtifactSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: nameStoreTestAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nameStoreTestAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const useReadNameStoreTestTargetArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: nameStoreTestAbi,
    functionName: 'targetArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nameStoreTestAbi}__ and `functionName` set to `"targetContracts"`
 */
export const useReadNameStoreTestTargetContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: nameStoreTestAbi,
    functionName: 'targetContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nameStoreTestAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const useReadNameStoreTestTargetInterfaces =
  /*#__PURE__*/ createUseReadContract({
    abi: nameStoreTestAbi,
    functionName: 'targetInterfaces',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nameStoreTestAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const useReadNameStoreTestTargetSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: nameStoreTestAbi,
    functionName: 'targetSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nameStoreTestAbi}__ and `functionName` set to `"targetSenders"`
 */
export const useReadNameStoreTestTargetSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: nameStoreTestAbi,
    functionName: 'targetSenders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nameStoreTestAbi}__ and `functionName` set to `"user"`
 */
export const useReadNameStoreTestUser = /*#__PURE__*/ createUseReadContract({
  abi: nameStoreTestAbi,
  functionName: 'user',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nameStoreTestAbi}__
 */
export const useWriteNameStoreTest = /*#__PURE__*/ createUseWriteContract({
  abi: nameStoreTestAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nameStoreTestAbi}__ and `functionName` set to `"setUp"`
 */
export const useWriteNameStoreTestSetUp = /*#__PURE__*/ createUseWriteContract({
  abi: nameStoreTestAbi,
  functionName: 'setUp',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nameStoreTestAbi}__ and `functionName` set to `"testFail_WithdrawByNonOwner"`
 */
export const useWriteNameStoreTestTestFailWithdrawByNonOwner =
  /*#__PURE__*/ createUseWriteContract({
    abi: nameStoreTestAbi,
    functionName: 'testFail_WithdrawByNonOwner',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nameStoreTestAbi}__ and `functionName` set to `"test_StoreName"`
 */
export const useWriteNameStoreTestTestStoreName =
  /*#__PURE__*/ createUseWriteContract({
    abi: nameStoreTestAbi,
    functionName: 'test_StoreName',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nameStoreTestAbi}__ and `functionName` set to `"test_WithdrawByOwner"`
 */
export const useWriteNameStoreTestTestWithdrawByOwner =
  /*#__PURE__*/ createUseWriteContract({
    abi: nameStoreTestAbi,
    functionName: 'test_WithdrawByOwner',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nameStoreTestAbi}__
 */
export const useSimulateNameStoreTest = /*#__PURE__*/ createUseSimulateContract(
  { abi: nameStoreTestAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nameStoreTestAbi}__ and `functionName` set to `"setUp"`
 */
export const useSimulateNameStoreTestSetUp =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nameStoreTestAbi,
    functionName: 'setUp',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nameStoreTestAbi}__ and `functionName` set to `"testFail_WithdrawByNonOwner"`
 */
export const useSimulateNameStoreTestTestFailWithdrawByNonOwner =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nameStoreTestAbi,
    functionName: 'testFail_WithdrawByNonOwner',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nameStoreTestAbi}__ and `functionName` set to `"test_StoreName"`
 */
export const useSimulateNameStoreTestTestStoreName =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nameStoreTestAbi,
    functionName: 'test_StoreName',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nameStoreTestAbi}__ and `functionName` set to `"test_WithdrawByOwner"`
 */
export const useSimulateNameStoreTestTestWithdrawByOwner =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nameStoreTestAbi,
    functionName: 'test_WithdrawByOwner',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nameStoreTestAbi}__
 */
export const useWatchNameStoreTestEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: nameStoreTestAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nameStoreTestAbi}__ and `eventName` set to `"log"`
 */
export const useWatchNameStoreTestLogEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nameStoreTestAbi,
    eventName: 'log',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nameStoreTestAbi}__ and `eventName` set to `"log_address"`
 */
export const useWatchNameStoreTestLogAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nameStoreTestAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nameStoreTestAbi}__ and `eventName` set to `"log_array"`
 */
export const useWatchNameStoreTestLogArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nameStoreTestAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nameStoreTestAbi}__ and `eventName` set to `"log_bytes"`
 */
export const useWatchNameStoreTestLogBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nameStoreTestAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nameStoreTestAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const useWatchNameStoreTestLogBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nameStoreTestAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nameStoreTestAbi}__ and `eventName` set to `"log_int"`
 */
export const useWatchNameStoreTestLogIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nameStoreTestAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nameStoreTestAbi}__ and `eventName` set to `"log_named_address"`
 */
export const useWatchNameStoreTestLogNamedAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nameStoreTestAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nameStoreTestAbi}__ and `eventName` set to `"log_named_array"`
 */
export const useWatchNameStoreTestLogNamedArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nameStoreTestAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nameStoreTestAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const useWatchNameStoreTestLogNamedBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nameStoreTestAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nameStoreTestAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const useWatchNameStoreTestLogNamedBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nameStoreTestAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nameStoreTestAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const useWatchNameStoreTestLogNamedDecimalIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nameStoreTestAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nameStoreTestAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const useWatchNameStoreTestLogNamedDecimalUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nameStoreTestAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nameStoreTestAbi}__ and `eventName` set to `"log_named_int"`
 */
export const useWatchNameStoreTestLogNamedIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nameStoreTestAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nameStoreTestAbi}__ and `eventName` set to `"log_named_string"`
 */
export const useWatchNameStoreTestLogNamedStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nameStoreTestAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nameStoreTestAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const useWatchNameStoreTestLogNamedUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nameStoreTestAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nameStoreTestAbi}__ and `eventName` set to `"log_string"`
 */
export const useWatchNameStoreTestLogStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nameStoreTestAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nameStoreTestAbi}__ and `eventName` set to `"log_uint"`
 */
export const useWatchNameStoreTestLogUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nameStoreTestAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nameStoreTestAbi}__ and `eventName` set to `"logs"`
 */
export const useWatchNameStoreTestLogsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nameStoreTestAbi,
    eventName: 'logs',
  })
