import { DeployedConfigSchema } from './deployed_config'
import * as z from 'zod'

export const DotEnvSchema = z.object({
  NETWORK_STATE_FILE: z.string().nonempty(),
  LOCAL_RPC_URL: z.string().nonempty(),
  AUTOPILOT_ADDRESS: z.string().nonempty(),
  LDO_WHALE_ADDRESS: z.string().nonempty(),
  REQUEST_BURN_MY_STETH_ROLE: z.string().nonempty(),
  INSURANCE_CONTRACT_ADDRESS: z.string().nonempty(),
})

export const ConfigSchema = z.object({
  dotEnvConfig: DotEnvSchema.required(),
  deployedConfig: DeployedConfigSchema.required(),
})

export type Config = z.infer<typeof ConfigSchema>
export type DotEnv = z.infer<typeof DotEnvSchema>
