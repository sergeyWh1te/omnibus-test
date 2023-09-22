/* Manually generated file https://app.quicktype.io/.
 *
 * * In case when deployed config has changed:
 * Copy file into https://app.quicktype.io/ and generate zod+ts
 * */
import * as z from 'zod'

export const HoldersSchema = z.object({
  '0xb4124cEB3451635DAcedd11767f004d8a28c6eE7': z.string(),
  '0x8401Eb5ff34cc943f096A32EF3d5113FEbE8D4Eb': z.string(),
  '0x306469457266CBBe7c0505e8Aad358622235e768': z.string(),
  '0xd873F6DC68e3057e4B7da74c6b304d0eF0B484C7': z.string(),
  '0xDcC5dD922fb1D0fd0c450a0636a8cE827521f0eD': z.string(),
  '0x27E9727FD9b8CdDdd0854F56712AD9DF647FaB74': z.string(),
  '0x9766D2e7FFde358AD0A40BB87c4B88D9FAC3F4dd': z.string(),
  '0xBd7055AB500cD1b0b0B14c82BdBe83ADCc2e8D06': z.string(),
  '0xe8898A4E589457D979Da4d1BDc35eC2aaf5a3f8E': z.string(),
})
export type Holders = z.infer<typeof HoldersSchema>

export const VestingParamsSchema = z.object({
  unvestedTokensAmount: z.string(),
  holders: HoldersSchema,
  start: z.number(),
  cliff: z.number(),
  end: z.number(),
  revokable: z.boolean(),
})
export type VestingParams = z.infer<typeof VestingParamsSchema>

export const ValidatorsExitBusOracleParametersSchema = z.object({
  consensusVersion: z.number(),
})
export type ValidatorsExitBusOracleParameters = z.infer<
  typeof ValidatorsExitBusOracleParametersSchema
>

export const ValidatorsExitBusOracleSchema = z.object({
  parameters: ValidatorsExitBusOracleParametersSchema,
  contract: z.string(),
  implementation: z.string(),
  address: z.string(),
  constructorArgs: z.array(z.union([z.number(), z.string()])),
})
export type ValidatorsExitBusOracle = z.infer<
  typeof ValidatorsExitBusOracleSchema
>

export const NodeOperatorsRegistryParametersSchema = z.object({
  stakingModuleTypeId: z.string(),
  stuckPenaltyDelay: z.string(),
})
export type NodeOperatorsRegistryParameters = z.infer<
  typeof NodeOperatorsRegistryParametersSchema
>

export const NodeOperatorsRegistrySchema = z.object({
  parameters: NodeOperatorsRegistryParametersSchema,
})
export type NodeOperatorsRegistry = z.infer<typeof NodeOperatorsRegistrySchema>

export const LegacyOracleParametersSchema = z.object({
  lastCompletedEpochId: z.number(),
})
export type LegacyOracleParameters = z.infer<
  typeof LegacyOracleParametersSchema
>

export const LegacyOracleSchema = z.object({
  parameters: LegacyOracleParametersSchema,
})
export type LegacyOracle = z.infer<typeof LegacyOracleSchema>

export const VotingSchema = z.object({
  minSupportRequired: z.string(),
  minAcceptanceQuorum: z.string(),
  voteDuration: z.number(),
  objectionPhaseDuration: z.number(),
})
export type Voting = z.infer<typeof VotingSchema>

export const TokenSchema = z.object({
  name: z.string(),
  symbol: z.string(),
})
export type Token = z.infer<typeof TokenSchema>

export const FeeSchema = z.object({
  totalPercent: z.number(),
  treasuryPercent: z.number(),
  insurancePercent: z.number(),
  nodeOperatorsPercent: z.number(),
})
export type Fee = z.infer<typeof FeeSchema>

export const DaoInitialSettingsSchema = z.object({
  voting: VotingSchema,
  fee: FeeSchema,
  token: TokenSchema,
})
export type DaoInitialSettings = z.infer<typeof DaoInitialSettingsSchema>

export const ChainSpecSchema = z.object({
  slotsPerEpoch: z.number(),
  secondsPerSlot: z.number(),
  genesisTime: z.string(),
  depositContract: z.string(),
})
export type ChainSpec = z.infer<typeof ChainSpecSchema>

export const AppSchema = z.object({
  contract: z.string(),
  implementation: z.string(),
  constructorArgs: z.array(z.any()),
  name: z.string(),
  fullName: z.string(),
  id: z.string(),
  proxyAddress: z.string(),
})
export type App = z.infer<typeof AppSchema>

export const BurnerParametersSchema = z.object({
  totalCoverSharesBurnt: z.union([z.null(), z.string()]).optional(),
  totalNonCoverSharesBurnt: z.union([z.null(), z.string()]).optional(),
  maxDepositsPerBlock: z.union([z.number(), z.null()]).optional(),
  minDepositBlockDistance: z.union([z.number(), z.null()]).optional(),
  pauseIntentValidityPeriodBlocks: z.union([z.number(), z.null()]).optional(),
  fastLaneLengthSlots: z.union([z.number(), z.null()]).optional(),
  epochsPerFrame: z.union([z.number(), z.null()]).optional(),
  churnValidatorsPerDayLimit: z.union([z.number(), z.null()]).optional(),
  oneOffCLBalanceDecreaseBPLimit: z.union([z.number(), z.null()]).optional(),
  annualBalanceIncreaseBPLimit: z.union([z.number(), z.null()]).optional(),
  simulatedShareRateDeviationBPLimit: z
    .union([z.number(), z.null()])
    .optional(),
  maxValidatorExitRequestsPerReport: z.union([z.number(), z.null()]).optional(),
  maxAccountingExtraDataListItemsCount: z
    .union([z.number(), z.null()])
    .optional(),
  maxNodeOperatorsPerExtraDataItemCount: z
    .union([z.number(), z.null()])
    .optional(),
  requestTimestampMargin: z.union([z.number(), z.null()]).optional(),
  maxPositiveTokenRebase: z.union([z.number(), z.null()]).optional(),
  name: z.union([z.null(), z.string()]).optional(),
  symbol: z.union([z.null(), z.string()]).optional(),
})
export type BurnerParameters = z.infer<typeof BurnerParametersSchema>

export const BurnerSchema = z.object({
  contract: z.string(),
  address: z.string(),
  constructorArgs: z.array(
    z.union([
      z.array(z.union([z.array(z.any()), z.number(), z.string()])),
      z.number(),
      z.string(),
    ])
  ),
  parameters: z.union([BurnerParametersSchema, z.null()]).optional(),
  implementation: z.union([z.null(), z.string()]).optional(),
})
export type Burner = z.infer<typeof BurnerSchema>

export const AppAragonSchema = z.object({
  implementation: BurnerSchema,
  name: z.string(),
  fullName: z.string(),
  id: z.string(),
  proxyAddress: z.string(),
})
export type AppAragon = z.infer<typeof AppAragonSchema>

export const AccountingOracleParametersSchema = z.object({
  maxExitedValidatorsPerDay: z.number(),
  maxExtraDataListItemsCount: z.number(),
  consensusVersion: z.number(),
})
export type AccountingOracleParameters = z.infer<
  typeof AccountingOracleParametersSchema
>

export const AccountingOracleSchema = z.object({
  parameters: AccountingOracleParametersSchema,
  contract: z.string(),
  implementation: z.string(),
  address: z.string(),
  constructorArgs: z.array(z.union([z.number(), z.string()])),
})
export type AccountingOracle = z.infer<typeof AccountingOracleSchema>

export const DeployedConfigSchema = z.object({
  ipfsAPI: z.string(),
  multisigAddress: z.string(),
  owner: z.string(),
  gateSealAddress: z.string(),
  lidoApmEnsName: z.string(),
  lidoApmEnsRegDurationSec: z.number(),
  daoAragonId: z.string(),
  chainSpec: ChainSpecSchema,
  daoInitialSettings: DaoInitialSettingsSchema,
  vestingParams: VestingParamsSchema,
  burner: BurnerSchema,
  legacyOracle: LegacyOracleSchema,
  hashConsensusForAccounting: BurnerSchema,
  accountingOracle: AccountingOracleSchema,
  hashConsensusForValidatorsExitBus: BurnerSchema,
  validatorsExitBusOracle: ValidatorsExitBusOracleSchema,
  depositSecurityModule: BurnerSchema,
  oracleReportSanityChecker: BurnerSchema,
  nodeOperatorsRegistry: NodeOperatorsRegistrySchema,
  withdrawalQueueERC721: BurnerSchema,
  networkId: z.number(),
  chainId: z.string(),
  aragonEnsLabelName: z.string(),
  ensAddress: z.string(),
  ensFactoryAddress: z.string(),
  ensFactoryConstructorArgs: z.array(z.any()),
  kernelBaseAddress: z.string(),
  kernelBaseConstructorArgs: z.array(z.boolean()),
  aclBaseAddress: z.string(),
  aclBaseConstructorArgs: z.array(z.any()),
  evmScriptRegistryFactoryAddress: z.string(),
  evmScriptRegistryFactoryConstructorArgs: z.array(z.any()),
  daoFactoryAddress: z.string(),
  daoFactoryConstructorArgs: z.array(z.string()),
  apmRegistryBaseAddress: z.string(),
  apmRepoBaseAddress: z.string(),
  ensSubdomainRegistrarBaseAddress: z.string(),
  apmRegistryFactoryAddress: z.string(),
  apmRegistryFactoryConstructorArgs: z.array(z.string()),
  aragonApmRegistryAddress: z.string(),
  aragonEnsNodeName: z.string(),
  aragonEnsNode: z.string(),
  miniMeTokenFactoryAddress: z.string(),
  miniMeTokenFactoryConstructorArgs: z.array(z.any()),
  aragonIDAddress: z.string(),
  aragonIDConstructorArgs: z.array(z.string()),
  aragonIDEnsNodeName: z.string(),
  aragonIDEnsNode: z.string(),
  'app:aragon-agent': AppAragonSchema,
  'app:aragon-finance': AppAragonSchema,
  'app:aragon-token-manager': AppAragonSchema,
  'app:aragon-voting': AppAragonSchema,
  lidoTemplate: BurnerSchema,
  'app:lido': AppSchema,
  'app:oracle': AppSchema,
  'app:node-operators-registry': AppSchema,
  daoTemplateDeployBlock: z.number(),
  lidoApmDeployArguments: z.array(z.string()),
  lidoApmDeployTx: z.string(),
  lidoApmAddress: z.string(),
  createAppReposTx: z.string(),
  newDaoTx: z.string(),
  daoAddress: z.string(),
  daoTokenAddress: z.string(),
  oracleDaemonConfig: BurnerSchema,
  lidoLocator: BurnerSchema,
  eip712StETH: BurnerSchema,
  wstETH: BurnerSchema,
  withdrawalVault: BurnerSchema,
  executionLayerRewardsVault: BurnerSchema,
  stakingRouter: BurnerSchema,
})
export type DeployedConfig = z.infer<typeof DeployedConfigSchema>
