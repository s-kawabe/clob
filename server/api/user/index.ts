import type { AuthHeader, PrismaUser } from '$/types'
import { UpsertUserBody } from '$/validators'

export type Methods = {
  get: {
    reqHeaders: AuthHeader
    query?: {
      id?: number
    }
    resBody: PrismaUser
  }

  post: {
    reqHeaders: AuthHeader
    reqBody: UpsertUserBody
    resBody: PrismaUser
  }
}
