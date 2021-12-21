import { defaultPrismaUserValues, LocalUser } from '$/types'
import { depend } from 'velona'
import { UpsertUserBody } from '$/validators'
import { prisma } from '$/lib/prisma'

export const getUserById = (id?: number) => {
  return defaultPrismaUserValues
}

export const upsertUser = (body: LocalUser) => {
  const { email, name, name_id, image } = body
  const result = prisma.user.upsert({
    where: {
      email: body.email
    },
    update: { name, name_id, image },
    create: { email, name, name_id, image }
  })
  console.log(result)
  return result
}
