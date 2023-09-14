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

export interface InsuranceFundInterface extends Interface {
  getFunction(
    nameOrSignature:
      | 'owner'
      | 'renounceOwnership'
      | 'transferERC1155'
      | 'transferERC20'
      | 'transferERC721'
      | 'transferEther'
      | 'transferOwnership'
  ): FunctionFragment

  getEvent(
    nameOrSignatureOrTopic:
      | 'ERC1155Transferred'
      | 'ERC20Transferred'
      | 'ERC721Transferred'
      | 'EtherTransferred'
      | 'OwnershipTransferred'
  ): EventFragment

  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'transferERC1155',
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'transferERC20',
    values: [AddressLike, AddressLike, BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'transferERC721',
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'transferEther',
    values: [AddressLike, BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [AddressLike]
  ): string

  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'transferERC1155',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'transferERC20',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'transferERC721',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'transferEther',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike
  ): Result
}

export namespace ERC1155TransferredEvent {
  export type InputTuple = [
    _token: AddressLike,
    _recipient: AddressLike,
    _tokenId: BigNumberish,
    _amount: BigNumberish,
    _data: BytesLike
  ]
  export type OutputTuple = [
    _token: string,
    _recipient: string,
    _tokenId: bigint,
    _amount: bigint,
    _data: string
  ]
  export interface OutputObject {
    _token: string
    _recipient: string
    _tokenId: bigint
    _amount: bigint
    _data: string
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
  export type Filter = TypedDeferredTopicFilter<Event>
  export type Log = TypedEventLog<Event>
  export type LogDescription = TypedLogDescription<Event>
}

export namespace ERC20TransferredEvent {
  export type InputTuple = [
    _token: AddressLike,
    _recipient: AddressLike,
    _amount: BigNumberish
  ]
  export type OutputTuple = [
    _token: string,
    _recipient: string,
    _amount: bigint
  ]
  export interface OutputObject {
    _token: string
    _recipient: string
    _amount: bigint
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
  export type Filter = TypedDeferredTopicFilter<Event>
  export type Log = TypedEventLog<Event>
  export type LogDescription = TypedLogDescription<Event>
}

export namespace ERC721TransferredEvent {
  export type InputTuple = [
    _token: AddressLike,
    _recipient: AddressLike,
    _tokenId: BigNumberish,
    _data: BytesLike
  ]
  export type OutputTuple = [
    _token: string,
    _recipient: string,
    _tokenId: bigint,
    _data: string
  ]
  export interface OutputObject {
    _token: string
    _recipient: string
    _tokenId: bigint
    _data: string
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
  export type Filter = TypedDeferredTopicFilter<Event>
  export type Log = TypedEventLog<Event>
  export type LogDescription = TypedLogDescription<Event>
}

export namespace EtherTransferredEvent {
  export type InputTuple = [_recipient: AddressLike, _amount: BigNumberish]
  export type OutputTuple = [_recipient: string, _amount: bigint]
  export interface OutputObject {
    _recipient: string
    _amount: bigint
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
  export type Filter = TypedDeferredTopicFilter<Event>
  export type Log = TypedEventLog<Event>
  export type LogDescription = TypedLogDescription<Event>
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike]
  export type OutputTuple = [previousOwner: string, newOwner: string]
  export interface OutputObject {
    previousOwner: string
    newOwner: string
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
  export type Filter = TypedDeferredTopicFilter<Event>
  export type Log = TypedEventLog<Event>
  export type LogDescription = TypedLogDescription<Event>
}

export interface InsuranceFund extends BaseContract {
  connect(runner?: ContractRunner | null): InsuranceFund
  waitForDeployment(): Promise<this>

  interface: InsuranceFundInterface

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

  owner: TypedContractMethod<[], [string], 'view'>

  renounceOwnership: TypedContractMethod<[], [void], 'view'>

  transferERC1155: TypedContractMethod<
    [
      _token: AddressLike,
      _recipient: AddressLike,
      _tokenId: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike
    ],
    [void],
    'nonpayable'
  >

  transferERC20: TypedContractMethod<
    [_token: AddressLike, _recipient: AddressLike, _amount: BigNumberish],
    [void],
    'nonpayable'
  >

  transferERC721: TypedContractMethod<
    [
      _token: AddressLike,
      _recipient: AddressLike,
      _tokenId: BigNumberish,
      _data: BytesLike
    ],
    [void],
    'nonpayable'
  >

  transferEther: TypedContractMethod<
    [_recipient: AddressLike, _amount: BigNumberish],
    [void],
    'nonpayable'
  >

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    'nonpayable'
  >

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T

  getFunction(
    nameOrSignature: 'owner'
  ): TypedContractMethod<[], [string], 'view'>
  getFunction(
    nameOrSignature: 'renounceOwnership'
  ): TypedContractMethod<[], [void], 'view'>
  getFunction(
    nameOrSignature: 'transferERC1155'
  ): TypedContractMethod<
    [
      _token: AddressLike,
      _recipient: AddressLike,
      _tokenId: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike
    ],
    [void],
    'nonpayable'
  >
  getFunction(
    nameOrSignature: 'transferERC20'
  ): TypedContractMethod<
    [_token: AddressLike, _recipient: AddressLike, _amount: BigNumberish],
    [void],
    'nonpayable'
  >
  getFunction(
    nameOrSignature: 'transferERC721'
  ): TypedContractMethod<
    [
      _token: AddressLike,
      _recipient: AddressLike,
      _tokenId: BigNumberish,
      _data: BytesLike
    ],
    [void],
    'nonpayable'
  >
  getFunction(
    nameOrSignature: 'transferEther'
  ): TypedContractMethod<
    [_recipient: AddressLike, _amount: BigNumberish],
    [void],
    'nonpayable'
  >
  getFunction(
    nameOrSignature: 'transferOwnership'
  ): TypedContractMethod<[newOwner: AddressLike], [void], 'nonpayable'>

  getEvent(
    key: 'ERC1155Transferred'
  ): TypedContractEvent<
    ERC1155TransferredEvent.InputTuple,
    ERC1155TransferredEvent.OutputTuple,
    ERC1155TransferredEvent.OutputObject
  >
  getEvent(
    key: 'ERC20Transferred'
  ): TypedContractEvent<
    ERC20TransferredEvent.InputTuple,
    ERC20TransferredEvent.OutputTuple,
    ERC20TransferredEvent.OutputObject
  >
  getEvent(
    key: 'ERC721Transferred'
  ): TypedContractEvent<
    ERC721TransferredEvent.InputTuple,
    ERC721TransferredEvent.OutputTuple,
    ERC721TransferredEvent.OutputObject
  >
  getEvent(
    key: 'EtherTransferred'
  ): TypedContractEvent<
    EtherTransferredEvent.InputTuple,
    EtherTransferredEvent.OutputTuple,
    EtherTransferredEvent.OutputObject
  >
  getEvent(
    key: 'OwnershipTransferred'
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >

  filters: {
    'ERC1155Transferred(address,address,uint256,uint256,bytes)': TypedContractEvent<
      ERC1155TransferredEvent.InputTuple,
      ERC1155TransferredEvent.OutputTuple,
      ERC1155TransferredEvent.OutputObject
    >
    ERC1155Transferred: TypedContractEvent<
      ERC1155TransferredEvent.InputTuple,
      ERC1155TransferredEvent.OutputTuple,
      ERC1155TransferredEvent.OutputObject
    >

    'ERC20Transferred(address,address,uint256)': TypedContractEvent<
      ERC20TransferredEvent.InputTuple,
      ERC20TransferredEvent.OutputTuple,
      ERC20TransferredEvent.OutputObject
    >
    ERC20Transferred: TypedContractEvent<
      ERC20TransferredEvent.InputTuple,
      ERC20TransferredEvent.OutputTuple,
      ERC20TransferredEvent.OutputObject
    >

    'ERC721Transferred(address,address,uint256,bytes)': TypedContractEvent<
      ERC721TransferredEvent.InputTuple,
      ERC721TransferredEvent.OutputTuple,
      ERC721TransferredEvent.OutputObject
    >
    ERC721Transferred: TypedContractEvent<
      ERC721TransferredEvent.InputTuple,
      ERC721TransferredEvent.OutputTuple,
      ERC721TransferredEvent.OutputObject
    >

    'EtherTransferred(address,uint256)': TypedContractEvent<
      EtherTransferredEvent.InputTuple,
      EtherTransferredEvent.OutputTuple,
      EtherTransferredEvent.OutputObject
    >
    EtherTransferred: TypedContractEvent<
      EtherTransferredEvent.InputTuple,
      EtherTransferredEvent.OutputTuple,
      EtherTransferredEvent.OutputObject
    >

    'OwnershipTransferred(address,address)': TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >
  }
}
