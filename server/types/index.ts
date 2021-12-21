import type { User as PrismaUser } from '$prisma/client'
import type { User as Auth0User } from '@auth0/auth0-spa-js'

export const defaultPrismaUserValues: PrismaUser = {
  id: 0,
  email: '',
  name: '',
  name_id: '',
  image: null,
  created_at: new Date(),
  updated_at: new Date()
}

// dbのinsertに必要な型
export type LocalUser = Omit<PrismaUser, 'id' | 'created_at' | 'updated_at'>
export type { PrismaUser }
export type { Auth0User }

export type AuthHeader = {
  authorization: string
}
