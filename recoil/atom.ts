import { atom } from 'recoil'

import type { PrismaUser } from '$/types'
import { defaultPrismaUserValues } from '$/types'

import { AtomKeys } from './key'

export const userAtom = atom<PrismaUser>({
  key: AtomKeys.USER_ATOM,
  default: defaultPrismaUserValues
})

export const isLoginAtom = atom<boolean>({
  key: AtomKeys.IS_LOGIN_USER,
  default: false
})
