import bytes, { BytesStringPrefixed } from '../bytes/bytes'

export type Address = string

const DEFAULT_SPEC_ID = '0x00000001'
const CALLDATA_LENGTH_LENGTH = 4

export interface ContractCall {
  address: Address
  calldata: BytesStringPrefixed
}
export interface ParsedEvmScript {
  specId?: string
  calls: ContractCall[]
}

function serialize(evmScript: ParsedEvmScript): BytesStringPrefixed {
  const res = evmScript.calls.reduce(
    (evmScript, call) => bytes.join(evmScript, encodeEvmScriptCall(call)),
    evmScript.specId ?? DEFAULT_SPEC_ID
  )

  return res
}

function encodeEvmScriptCall(call: ContractCall) {
  return bytes.join(
    call.address,
    bytes.padStart(
      bytes.encode(bytes.length(call.calldata)),
      CALLDATA_LENGTH_LENGTH
    ),
    call.calldata
  )
}

export default {
  serialize,
}
