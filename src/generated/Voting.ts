/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from 'ethers'
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from './common'

export interface VotingInterface extends Interface {
  getFunction(
    nameOrSignature:
      | 'hasInitialized'
      | 'unsafelyChangeObjectionPhaseTime'
      | 'initialize'
      | 'UNSAFELY_MODIFY_VOTE_TIME_ROLE'
      | 'unsafelyChangeVoteTime'
      | 'getEVMScriptExecutor'
      | 'getRecoveryVault'
      | 'MODIFY_QUORUM_ROLE'
      | 'objectionPhaseTime'
      | 'getVoterState'
      | 'getVote'
      | 'changeMinAcceptQuorumPct'
      | 'MODIFY_SUPPORT_ROLE'
      | 'changeSupportRequiredPct'
      | 'allowRecoverability'
      | 'appId'
      | 'getInitializationBlock'
      | 'transferToVault'
      | 'canPerform'
      | 'getEVMScriptRegistry'
      | 'voteTime'
      | 'CREATE_VOTES_ROLE'
      | 'canForward'
      | 'canExecute'
      | 'canVote'
      | 'kernel'
      | 'newVote(bytes,string)'
      | 'newVote(bytes,string,bool,bool)'
      | 'forward'
      | 'minAcceptQuorumPct'
      | 'isPetrified'
      | 'votesLength'
      | 'vote'
      | 'getVotePhase'
      | 'executeVote'
      | 'supportRequiredPct'
      | 'token'
      | 'PCT_BASE'
      | 'isForwarder'
  ): FunctionFragment

  getEvent(
    nameOrSignatureOrTopic:
      | 'StartVote'
      | 'CastVote'
      | 'CastObjection'
      | 'ExecuteVote'
      | 'ChangeSupportRequired'
      | 'ChangeMinQuorum'
      | 'ChangeVoteTime'
      | 'ChangeObjectionPhaseTime'
      | 'ScriptResult'
      | 'RecoverToVault'
  ): EventFragment

  encodeFunctionData(
    functionFragment: 'hasInitialized',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'unsafelyChangeObjectionPhaseTime',
    values: [BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'UNSAFELY_MODIFY_VOTE_TIME_ROLE',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'unsafelyChangeVoteTime',
    values: [BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'getEVMScriptExecutor',
    values: [BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'getRecoveryVault',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'MODIFY_QUORUM_ROLE',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'objectionPhaseTime',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'getVoterState',
    values: [BigNumberish, AddressLike]
  ): string
  encodeFunctionData(
    functionFragment: 'getVote',
    values: [BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'changeMinAcceptQuorumPct',
    values: [BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'MODIFY_SUPPORT_ROLE',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'changeSupportRequiredPct',
    values: [BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'allowRecoverability',
    values: [AddressLike]
  ): string
  encodeFunctionData(functionFragment: 'appId', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'getInitializationBlock',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'transferToVault',
    values: [AddressLike]
  ): string
  encodeFunctionData(
    functionFragment: 'canPerform',
    values: [AddressLike, BytesLike, BigNumberish[]]
  ): string
  encodeFunctionData(
    functionFragment: 'getEVMScriptRegistry',
    values?: undefined
  ): string
  encodeFunctionData(functionFragment: 'voteTime', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'CREATE_VOTES_ROLE',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'canForward',
    values: [AddressLike, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'canExecute',
    values: [BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'canVote',
    values: [BigNumberish, AddressLike]
  ): string
  encodeFunctionData(functionFragment: 'kernel', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'newVote(bytes,string)',
    values: [BytesLike, string]
  ): string
  encodeFunctionData(
    functionFragment: 'newVote(bytes,string,bool,bool)',
    values: [BytesLike, string, boolean, boolean]
  ): string
  encodeFunctionData(functionFragment: 'forward', values: [BytesLike]): string
  encodeFunctionData(
    functionFragment: 'minAcceptQuorumPct',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'isPetrified',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'votesLength',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'vote',
    values: [BigNumberish, boolean, boolean]
  ): string
  encodeFunctionData(
    functionFragment: 'getVotePhase',
    values: [BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'executeVote',
    values: [BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'supportRequiredPct',
    values?: undefined
  ): string
  encodeFunctionData(functionFragment: 'token', values?: undefined): string
  encodeFunctionData(functionFragment: 'PCT_BASE', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'isForwarder',
    values?: undefined
  ): string

  decodeFunctionResult(
    functionFragment: 'hasInitialized',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'unsafelyChangeObjectionPhaseTime',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'UNSAFELY_MODIFY_VOTE_TIME_ROLE',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'unsafelyChangeVoteTime',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'getEVMScriptExecutor',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'getRecoveryVault',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'MODIFY_QUORUM_ROLE',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'objectionPhaseTime',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'getVoterState',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'getVote', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'changeMinAcceptQuorumPct',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'MODIFY_SUPPORT_ROLE',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'changeSupportRequiredPct',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'allowRecoverability',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'appId', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'getInitializationBlock',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'transferToVault',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'canPerform', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'getEVMScriptRegistry',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'voteTime', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'CREATE_VOTES_ROLE',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'canForward', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'canExecute', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'canVote', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'kernel', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'newVote(bytes,string)',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'newVote(bytes,string,bool,bool)',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'forward', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'minAcceptQuorumPct',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'isPetrified', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'votesLength', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'vote', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'getVotePhase',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'executeVote', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'supportRequiredPct',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'token', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'PCT_BASE', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'isForwarder', data: BytesLike): Result
}

export namespace StartVoteEvent {
  export type InputTuple = [
    voteId: BigNumberish,
    creator: AddressLike,
    metadata: string
  ]
  export type OutputTuple = [voteId: bigint, creator: string, metadata: string]
  export interface OutputObject {
    voteId: bigint
    creator: string
    metadata: string
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
  export type Filter = TypedDeferredTopicFilter<Event>
  export type Log = TypedEventLog<Event>
  export type LogDescription = TypedLogDescription<Event>
}

export namespace CastVoteEvent {
  export type InputTuple = [
    voteId: BigNumberish,
    voter: AddressLike,
    supports: boolean,
    stake: BigNumberish
  ]
  export type OutputTuple = [
    voteId: bigint,
    voter: string,
    supports: boolean,
    stake: bigint
  ]
  export interface OutputObject {
    voteId: bigint
    voter: string
    supports: boolean
    stake: bigint
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
  export type Filter = TypedDeferredTopicFilter<Event>
  export type Log = TypedEventLog<Event>
  export type LogDescription = TypedLogDescription<Event>
}

export namespace CastObjectionEvent {
  export type InputTuple = [
    voteId: BigNumberish,
    voter: AddressLike,
    stake: BigNumberish
  ]
  export type OutputTuple = [voteId: bigint, voter: string, stake: bigint]
  export interface OutputObject {
    voteId: bigint
    voter: string
    stake: bigint
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
  export type Filter = TypedDeferredTopicFilter<Event>
  export type Log = TypedEventLog<Event>
  export type LogDescription = TypedLogDescription<Event>
}

export namespace ExecuteVoteEvent {
  export type InputTuple = [voteId: BigNumberish]
  export type OutputTuple = [voteId: bigint]
  export interface OutputObject {
    voteId: bigint
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
  export type Filter = TypedDeferredTopicFilter<Event>
  export type Log = TypedEventLog<Event>
  export type LogDescription = TypedLogDescription<Event>
}

export namespace ChangeSupportRequiredEvent {
  export type InputTuple = [supportRequiredPct: BigNumberish]
  export type OutputTuple = [supportRequiredPct: bigint]
  export interface OutputObject {
    supportRequiredPct: bigint
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
  export type Filter = TypedDeferredTopicFilter<Event>
  export type Log = TypedEventLog<Event>
  export type LogDescription = TypedLogDescription<Event>
}

export namespace ChangeMinQuorumEvent {
  export type InputTuple = [minAcceptQuorumPct: BigNumberish]
  export type OutputTuple = [minAcceptQuorumPct: bigint]
  export interface OutputObject {
    minAcceptQuorumPct: bigint
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
  export type Filter = TypedDeferredTopicFilter<Event>
  export type Log = TypedEventLog<Event>
  export type LogDescription = TypedLogDescription<Event>
}

export namespace ChangeVoteTimeEvent {
  export type InputTuple = [voteTime: BigNumberish]
  export type OutputTuple = [voteTime: bigint]
  export interface OutputObject {
    voteTime: bigint
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
  export type Filter = TypedDeferredTopicFilter<Event>
  export type Log = TypedEventLog<Event>
  export type LogDescription = TypedLogDescription<Event>
}

export namespace ChangeObjectionPhaseTimeEvent {
  export type InputTuple = [objectionPhaseTime: BigNumberish]
  export type OutputTuple = [objectionPhaseTime: bigint]
  export interface OutputObject {
    objectionPhaseTime: bigint
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
  export type Filter = TypedDeferredTopicFilter<Event>
  export type Log = TypedEventLog<Event>
  export type LogDescription = TypedLogDescription<Event>
}

export namespace ScriptResultEvent {
  export type InputTuple = [
    executor: AddressLike,
    script: BytesLike,
    input: BytesLike,
    returnData: BytesLike
  ]
  export type OutputTuple = [
    executor: string,
    script: string,
    input: string,
    returnData: string
  ]
  export interface OutputObject {
    executor: string
    script: string
    input: string
    returnData: string
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
  export type Filter = TypedDeferredTopicFilter<Event>
  export type Log = TypedEventLog<Event>
  export type LogDescription = TypedLogDescription<Event>
}

export namespace RecoverToVaultEvent {
  export type InputTuple = [
    vault: AddressLike,
    token: AddressLike,
    amount: BigNumberish
  ]
  export type OutputTuple = [vault: string, token: string, amount: bigint]
  export interface OutputObject {
    vault: string
    token: string
    amount: bigint
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
  export type Filter = TypedDeferredTopicFilter<Event>
  export type Log = TypedEventLog<Event>
  export type LogDescription = TypedLogDescription<Event>
}

export interface Voting extends BaseContract {
  connect(runner?: ContractRunner | null): Voting
  waitForDeployment(): Promise<this>

  interface: VotingInterface

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>
  listeners(eventName?: string): Promise<Array<Listener>>
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>

  hasInitialized: TypedContractMethod<[], [boolean], 'view'>

  unsafelyChangeObjectionPhaseTime: TypedContractMethod<
    [_objectionPhaseTime: BigNumberish],
    [void],
    'nonpayable'
  >

  initialize: TypedContractMethod<
    [
      _token: AddressLike,
      _supportRequiredPct: BigNumberish,
      _minAcceptQuorumPct: BigNumberish,
      _voteTime: BigNumberish,
      _objectionPhaseTime: BigNumberish
    ],
    [void],
    'nonpayable'
  >

  UNSAFELY_MODIFY_VOTE_TIME_ROLE: TypedContractMethod<[], [string], 'view'>

  unsafelyChangeVoteTime: TypedContractMethod<
    [_voteTime: BigNumberish],
    [void],
    'nonpayable'
  >

  getEVMScriptExecutor: TypedContractMethod<
    [_script: BytesLike],
    [string],
    'view'
  >

  getRecoveryVault: TypedContractMethod<[], [string], 'view'>

  MODIFY_QUORUM_ROLE: TypedContractMethod<[], [string], 'view'>

  objectionPhaseTime: TypedContractMethod<[], [bigint], 'view'>

  getVoterState: TypedContractMethod<
    [_voteId: BigNumberish, _voter: AddressLike],
    [bigint],
    'view'
  >

  getVote: TypedContractMethod<
    [_voteId: BigNumberish],
    [
      [
        boolean,
        boolean,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        string,
        bigint
      ] & {
        open: boolean
        executed: boolean
        startDate: bigint
        snapshotBlock: bigint
        supportRequired: bigint
        minAcceptQuorum: bigint
        yea: bigint
        nay: bigint
        votingPower: bigint
        script: string
        phase: bigint
      }
    ],
    'view'
  >

  changeMinAcceptQuorumPct: TypedContractMethod<
    [_minAcceptQuorumPct: BigNumberish],
    [void],
    'nonpayable'
  >

  MODIFY_SUPPORT_ROLE: TypedContractMethod<[], [string], 'view'>

  changeSupportRequiredPct: TypedContractMethod<
    [_supportRequiredPct: BigNumberish],
    [void],
    'nonpayable'
  >

  allowRecoverability: TypedContractMethod<
    [token: AddressLike],
    [boolean],
    'view'
  >

  appId: TypedContractMethod<[], [string], 'view'>

  getInitializationBlock: TypedContractMethod<[], [bigint], 'view'>

  transferToVault: TypedContractMethod<
    [_token: AddressLike],
    [void],
    'nonpayable'
  >

  canPerform: TypedContractMethod<
    [_sender: AddressLike, _role: BytesLike, _params: BigNumberish[]],
    [boolean],
    'view'
  >

  getEVMScriptRegistry: TypedContractMethod<[], [string], 'view'>

  voteTime: TypedContractMethod<[], [bigint], 'view'>

  CREATE_VOTES_ROLE: TypedContractMethod<[], [string], 'view'>

  canForward: TypedContractMethod<
    [_sender: AddressLike, arg1: BytesLike],
    [boolean],
    'view'
  >

  canExecute: TypedContractMethod<[_voteId: BigNumberish], [boolean], 'view'>

  canVote: TypedContractMethod<
    [_voteId: BigNumberish, _voter: AddressLike],
    [boolean],
    'view'
  >

  kernel: TypedContractMethod<[], [string], 'view'>

  'newVote(bytes,string)': TypedContractMethod<
    [_executionScript: BytesLike, _metadata: string],
    [bigint],
    'nonpayable'
  >

  'newVote(bytes,string,bool,bool)': TypedContractMethod<
    [
      _executionScript: BytesLike,
      _metadata: string,
      _castVote: boolean,
      _executesIfDecided_deprecated: boolean
    ],
    [bigint],
    'nonpayable'
  >

  forward: TypedContractMethod<[_evmScript: BytesLike], [void], 'nonpayable'>

  minAcceptQuorumPct: TypedContractMethod<[], [bigint], 'view'>

  isPetrified: TypedContractMethod<[], [boolean], 'view'>

  votesLength: TypedContractMethod<[], [bigint], 'view'>

  vote: TypedContractMethod<
    [
      _voteId: BigNumberish,
      _supports: boolean,
      _executesIfDecided_deprecated: boolean
    ],
    [void],
    'nonpayable'
  >

  getVotePhase: TypedContractMethod<[_voteId: BigNumberish], [bigint], 'view'>

  executeVote: TypedContractMethod<
    [_voteId: BigNumberish],
    [void],
    'nonpayable'
  >

  supportRequiredPct: TypedContractMethod<[], [bigint], 'view'>

  token: TypedContractMethod<[], [string], 'view'>

  PCT_BASE: TypedContractMethod<[], [bigint], 'view'>

  isForwarder: TypedContractMethod<[], [boolean], 'view'>

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T

  getFunction(
    nameOrSignature: 'hasInitialized'
  ): TypedContractMethod<[], [boolean], 'view'>
  getFunction(
    nameOrSignature: 'unsafelyChangeObjectionPhaseTime'
  ): TypedContractMethod<
    [_objectionPhaseTime: BigNumberish],
    [void],
    'nonpayable'
  >
  getFunction(
    nameOrSignature: 'initialize'
  ): TypedContractMethod<
    [
      _token: AddressLike,
      _supportRequiredPct: BigNumberish,
      _minAcceptQuorumPct: BigNumberish,
      _voteTime: BigNumberish,
      _objectionPhaseTime: BigNumberish
    ],
    [void],
    'nonpayable'
  >
  getFunction(
    nameOrSignature: 'UNSAFELY_MODIFY_VOTE_TIME_ROLE'
  ): TypedContractMethod<[], [string], 'view'>
  getFunction(
    nameOrSignature: 'unsafelyChangeVoteTime'
  ): TypedContractMethod<[_voteTime: BigNumberish], [void], 'nonpayable'>
  getFunction(
    nameOrSignature: 'getEVMScriptExecutor'
  ): TypedContractMethod<[_script: BytesLike], [string], 'view'>
  getFunction(
    nameOrSignature: 'getRecoveryVault'
  ): TypedContractMethod<[], [string], 'view'>
  getFunction(
    nameOrSignature: 'MODIFY_QUORUM_ROLE'
  ): TypedContractMethod<[], [string], 'view'>
  getFunction(
    nameOrSignature: 'objectionPhaseTime'
  ): TypedContractMethod<[], [bigint], 'view'>
  getFunction(
    nameOrSignature: 'getVoterState'
  ): TypedContractMethod<
    [_voteId: BigNumberish, _voter: AddressLike],
    [bigint],
    'view'
  >
  getFunction(nameOrSignature: 'getVote'): TypedContractMethod<
    [_voteId: BigNumberish],
    [
      [
        boolean,
        boolean,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        string,
        bigint
      ] & {
        open: boolean
        executed: boolean
        startDate: bigint
        snapshotBlock: bigint
        supportRequired: bigint
        minAcceptQuorum: bigint
        yea: bigint
        nay: bigint
        votingPower: bigint
        script: string
        phase: bigint
      }
    ],
    'view'
  >
  getFunction(
    nameOrSignature: 'changeMinAcceptQuorumPct'
  ): TypedContractMethod<
    [_minAcceptQuorumPct: BigNumberish],
    [void],
    'nonpayable'
  >
  getFunction(
    nameOrSignature: 'MODIFY_SUPPORT_ROLE'
  ): TypedContractMethod<[], [string], 'view'>
  getFunction(
    nameOrSignature: 'changeSupportRequiredPct'
  ): TypedContractMethod<
    [_supportRequiredPct: BigNumberish],
    [void],
    'nonpayable'
  >
  getFunction(
    nameOrSignature: 'allowRecoverability'
  ): TypedContractMethod<[token: AddressLike], [boolean], 'view'>
  getFunction(
    nameOrSignature: 'appId'
  ): TypedContractMethod<[], [string], 'view'>
  getFunction(
    nameOrSignature: 'getInitializationBlock'
  ): TypedContractMethod<[], [bigint], 'view'>
  getFunction(
    nameOrSignature: 'transferToVault'
  ): TypedContractMethod<[_token: AddressLike], [void], 'nonpayable'>
  getFunction(
    nameOrSignature: 'canPerform'
  ): TypedContractMethod<
    [_sender: AddressLike, _role: BytesLike, _params: BigNumberish[]],
    [boolean],
    'view'
  >
  getFunction(
    nameOrSignature: 'getEVMScriptRegistry'
  ): TypedContractMethod<[], [string], 'view'>
  getFunction(
    nameOrSignature: 'voteTime'
  ): TypedContractMethod<[], [bigint], 'view'>
  getFunction(
    nameOrSignature: 'CREATE_VOTES_ROLE'
  ): TypedContractMethod<[], [string], 'view'>
  getFunction(
    nameOrSignature: 'canForward'
  ): TypedContractMethod<
    [_sender: AddressLike, arg1: BytesLike],
    [boolean],
    'view'
  >
  getFunction(
    nameOrSignature: 'canExecute'
  ): TypedContractMethod<[_voteId: BigNumberish], [boolean], 'view'>
  getFunction(
    nameOrSignature: 'canVote'
  ): TypedContractMethod<
    [_voteId: BigNumberish, _voter: AddressLike],
    [boolean],
    'view'
  >
  getFunction(
    nameOrSignature: 'kernel'
  ): TypedContractMethod<[], [string], 'view'>
  getFunction(
    nameOrSignature: 'newVote(bytes,string)'
  ): TypedContractMethod<
    [_executionScript: BytesLike, _metadata: string],
    [bigint],
    'nonpayable'
  >
  getFunction(
    nameOrSignature: 'newVote(bytes,string,bool,bool)'
  ): TypedContractMethod<
    [
      _executionScript: BytesLike,
      _metadata: string,
      _castVote: boolean,
      _executesIfDecided_deprecated: boolean
    ],
    [bigint],
    'nonpayable'
  >
  getFunction(
    nameOrSignature: 'forward'
  ): TypedContractMethod<[_evmScript: BytesLike], [void], 'nonpayable'>
  getFunction(
    nameOrSignature: 'minAcceptQuorumPct'
  ): TypedContractMethod<[], [bigint], 'view'>
  getFunction(
    nameOrSignature: 'isPetrified'
  ): TypedContractMethod<[], [boolean], 'view'>
  getFunction(
    nameOrSignature: 'votesLength'
  ): TypedContractMethod<[], [bigint], 'view'>
  getFunction(
    nameOrSignature: 'vote'
  ): TypedContractMethod<
    [
      _voteId: BigNumberish,
      _supports: boolean,
      _executesIfDecided_deprecated: boolean
    ],
    [void],
    'nonpayable'
  >
  getFunction(
    nameOrSignature: 'getVotePhase'
  ): TypedContractMethod<[_voteId: BigNumberish], [bigint], 'view'>
  getFunction(
    nameOrSignature: 'executeVote'
  ): TypedContractMethod<[_voteId: BigNumberish], [void], 'nonpayable'>
  getFunction(
    nameOrSignature: 'supportRequiredPct'
  ): TypedContractMethod<[], [bigint], 'view'>
  getFunction(
    nameOrSignature: 'token'
  ): TypedContractMethod<[], [string], 'view'>
  getFunction(
    nameOrSignature: 'PCT_BASE'
  ): TypedContractMethod<[], [bigint], 'view'>
  getFunction(
    nameOrSignature: 'isForwarder'
  ): TypedContractMethod<[], [boolean], 'view'>

  getEvent(
    key: 'StartVote'
  ): TypedContractEvent<
    StartVoteEvent.InputTuple,
    StartVoteEvent.OutputTuple,
    StartVoteEvent.OutputObject
  >
  getEvent(
    key: 'CastVote'
  ): TypedContractEvent<
    CastVoteEvent.InputTuple,
    CastVoteEvent.OutputTuple,
    CastVoteEvent.OutputObject
  >
  getEvent(
    key: 'CastObjection'
  ): TypedContractEvent<
    CastObjectionEvent.InputTuple,
    CastObjectionEvent.OutputTuple,
    CastObjectionEvent.OutputObject
  >
  getEvent(
    key: 'ExecuteVote'
  ): TypedContractEvent<
    ExecuteVoteEvent.InputTuple,
    ExecuteVoteEvent.OutputTuple,
    ExecuteVoteEvent.OutputObject
  >
  getEvent(
    key: 'ChangeSupportRequired'
  ): TypedContractEvent<
    ChangeSupportRequiredEvent.InputTuple,
    ChangeSupportRequiredEvent.OutputTuple,
    ChangeSupportRequiredEvent.OutputObject
  >
  getEvent(
    key: 'ChangeMinQuorum'
  ): TypedContractEvent<
    ChangeMinQuorumEvent.InputTuple,
    ChangeMinQuorumEvent.OutputTuple,
    ChangeMinQuorumEvent.OutputObject
  >
  getEvent(
    key: 'ChangeVoteTime'
  ): TypedContractEvent<
    ChangeVoteTimeEvent.InputTuple,
    ChangeVoteTimeEvent.OutputTuple,
    ChangeVoteTimeEvent.OutputObject
  >
  getEvent(
    key: 'ChangeObjectionPhaseTime'
  ): TypedContractEvent<
    ChangeObjectionPhaseTimeEvent.InputTuple,
    ChangeObjectionPhaseTimeEvent.OutputTuple,
    ChangeObjectionPhaseTimeEvent.OutputObject
  >
  getEvent(
    key: 'ScriptResult'
  ): TypedContractEvent<
    ScriptResultEvent.InputTuple,
    ScriptResultEvent.OutputTuple,
    ScriptResultEvent.OutputObject
  >
  getEvent(
    key: 'RecoverToVault'
  ): TypedContractEvent<
    RecoverToVaultEvent.InputTuple,
    RecoverToVaultEvent.OutputTuple,
    RecoverToVaultEvent.OutputObject
  >

  filters: {
    'StartVote(uint256,address,string)': TypedContractEvent<
      StartVoteEvent.InputTuple,
      StartVoteEvent.OutputTuple,
      StartVoteEvent.OutputObject
    >
    StartVote: TypedContractEvent<
      StartVoteEvent.InputTuple,
      StartVoteEvent.OutputTuple,
      StartVoteEvent.OutputObject
    >

    'CastVote(uint256,address,bool,uint256)': TypedContractEvent<
      CastVoteEvent.InputTuple,
      CastVoteEvent.OutputTuple,
      CastVoteEvent.OutputObject
    >
    CastVote: TypedContractEvent<
      CastVoteEvent.InputTuple,
      CastVoteEvent.OutputTuple,
      CastVoteEvent.OutputObject
    >

    'CastObjection(uint256,address,uint256)': TypedContractEvent<
      CastObjectionEvent.InputTuple,
      CastObjectionEvent.OutputTuple,
      CastObjectionEvent.OutputObject
    >
    CastObjection: TypedContractEvent<
      CastObjectionEvent.InputTuple,
      CastObjectionEvent.OutputTuple,
      CastObjectionEvent.OutputObject
    >

    'ExecuteVote(uint256)': TypedContractEvent<
      ExecuteVoteEvent.InputTuple,
      ExecuteVoteEvent.OutputTuple,
      ExecuteVoteEvent.OutputObject
    >
    ExecuteVote: TypedContractEvent<
      ExecuteVoteEvent.InputTuple,
      ExecuteVoteEvent.OutputTuple,
      ExecuteVoteEvent.OutputObject
    >

    'ChangeSupportRequired(uint64)': TypedContractEvent<
      ChangeSupportRequiredEvent.InputTuple,
      ChangeSupportRequiredEvent.OutputTuple,
      ChangeSupportRequiredEvent.OutputObject
    >
    ChangeSupportRequired: TypedContractEvent<
      ChangeSupportRequiredEvent.InputTuple,
      ChangeSupportRequiredEvent.OutputTuple,
      ChangeSupportRequiredEvent.OutputObject
    >

    'ChangeMinQuorum(uint64)': TypedContractEvent<
      ChangeMinQuorumEvent.InputTuple,
      ChangeMinQuorumEvent.OutputTuple,
      ChangeMinQuorumEvent.OutputObject
    >
    ChangeMinQuorum: TypedContractEvent<
      ChangeMinQuorumEvent.InputTuple,
      ChangeMinQuorumEvent.OutputTuple,
      ChangeMinQuorumEvent.OutputObject
    >

    'ChangeVoteTime(uint64)': TypedContractEvent<
      ChangeVoteTimeEvent.InputTuple,
      ChangeVoteTimeEvent.OutputTuple,
      ChangeVoteTimeEvent.OutputObject
    >
    ChangeVoteTime: TypedContractEvent<
      ChangeVoteTimeEvent.InputTuple,
      ChangeVoteTimeEvent.OutputTuple,
      ChangeVoteTimeEvent.OutputObject
    >

    'ChangeObjectionPhaseTime(uint64)': TypedContractEvent<
      ChangeObjectionPhaseTimeEvent.InputTuple,
      ChangeObjectionPhaseTimeEvent.OutputTuple,
      ChangeObjectionPhaseTimeEvent.OutputObject
    >
    ChangeObjectionPhaseTime: TypedContractEvent<
      ChangeObjectionPhaseTimeEvent.InputTuple,
      ChangeObjectionPhaseTimeEvent.OutputTuple,
      ChangeObjectionPhaseTimeEvent.OutputObject
    >

    'ScriptResult(address,bytes,bytes,bytes)': TypedContractEvent<
      ScriptResultEvent.InputTuple,
      ScriptResultEvent.OutputTuple,
      ScriptResultEvent.OutputObject
    >
    ScriptResult: TypedContractEvent<
      ScriptResultEvent.InputTuple,
      ScriptResultEvent.OutputTuple,
      ScriptResultEvent.OutputObject
    >

    'RecoverToVault(address,address,uint256)': TypedContractEvent<
      RecoverToVaultEvent.InputTuple,
      RecoverToVaultEvent.OutputTuple,
      RecoverToVaultEvent.OutputObject
    >
    RecoverToVault: TypedContractEvent<
      RecoverToVaultEvent.InputTuple,
      RecoverToVaultEvent.OutputTuple,
      RecoverToVaultEvent.OutputObject
    >
  }
}
