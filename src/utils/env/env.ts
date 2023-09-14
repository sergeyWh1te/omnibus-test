import 'dotenv/config'

const DEFAULT_LOCAL_RPC_URL = 'http://127.0.0.1:8545'

export function LOCAL_RPC_URL() {
  return process.env['LOCAL_RPC_URL'] || DEFAULT_LOCAL_RPC_URL
}
export function RPC_URL() {
  return process.env['RPC_URL']
}

export function INFURA_TOKEN() {
  return process.env['INFURA_TOKEN']
}

export function ALCHEMY_TOKEN() {
  return process.env['ALCHEMY_TOKEN']
}

export function ETHERSCAN_TOKEN() {
  return process.env['ETHERSCAN_TOKEN']
}
