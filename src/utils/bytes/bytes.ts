export type BytesStringPrefixed = string
export type BytesStringNonPrefixed = string
export type BytesString = BytesStringPrefixed | BytesStringNonPrefixed

function prefix0x(bytes: BytesString): BytesStringPrefixed {
  return bytes.startsWith('0x') ? bytes : '0x' + bytes
}
function strip0x(bytes: BytesString): BytesStringNonPrefixed {
  return bytes.startsWith('0x') ? bytes.slice(2) : bytes
}
function join(...bytes: BytesString[]): BytesStringPrefixed {
  return prefix0x(bytes.reduce((res, b) => res + strip0x(b), ''))
}

function padStart(
  bytes: BytesString,
  bytesLength: number,
  fill: BytesString = '00'
) {
  return strip0x(bytes).padStart(bytesLength * 2, fill)
}

function encode(value: number | bigint) {
  return prefix0x(value.toString(16))
}

function length(bytes: BytesString) {
  const stripped = strip0x(bytes)
  if (stripped.length % 2 !== 0) {
    throw new Error(`Invalid bytes length. ${stripped.length} % 2 !== 0`)
  }
  return stripped.length / 2
}

export default {
  join,
  padStart,
  encode,
  length,
}
