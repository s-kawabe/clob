// import { AtomKeys } from '~/recoil/key'
import { atom } from 'recoil'

import type { User } from '$prisma/client'

import { AtomKeys } from './key'

export const userAtom = atom<User>({
  key: AtomKeys.USER_ATOM,
  default: {} as User
})

export const isLoginAtom = atom<boolean>({
  key: AtomKeys.IS_LOGIN_USER,
  default: false
})
