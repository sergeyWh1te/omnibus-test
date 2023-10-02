import * as dotenv from 'dotenv'
import * as E from 'fp-ts/Either'
import { ZodError } from 'zod'
import fs from 'fs'
import { Config, DotEnvSchema } from './entity/config'
import { DeployedConfig, DeployedConfigSchema } from './entity/deployed_config'
import { DotenvConfigOutput } from 'dotenv'

function loadDeployedConfig(
  relativePathToFile: string
): E.Either<Error | ZodError, DeployedConfig> {
  let fileContent: string

  try {
    fileContent = fs.readFileSync(relativePathToFile, 'utf-8')
  } catch (e: any) {
    return E.left(e.message)
  }

  const p = DeployedConfigSchema.safeParse(JSON.parse(fileContent))
  if (p.success === false) {
    return E.left(p.error)
  }

  return E.right(p.data)
}

export function getConfig(): E.Either<Error | ZodError, Config> {
  let cfg: DotenvConfigOutput

  try {
    cfg = dotenv.config()
  } catch (e: any) {
    return E.left(e.message)
  }

  const dotEnvCfg = DotEnvSchema.safeParse(cfg.parsed)
  if (dotEnvCfg.success === false) {
    return E.left(dotEnvCfg.error)
  }

  const deployedConfig = loadDeployedConfig(dotEnvCfg.data.NETWORK_STATE_FILE)
  if (E.isLeft(deployedConfig)) {
    return E.left(deployedConfig.left)
  }

  const out: Config = {
    dotEnvConfig: dotEnvCfg.data,
    deployedConfig: deployedConfig.right,
  }

  return E.right(out)
}
