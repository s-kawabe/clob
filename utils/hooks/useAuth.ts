import type { User } from '@auth0/auth0-spa-js'

import { auth0 } from '@/utils/auth0client'
import {
  NEXT_PUBLIC_AUTH0_AUDIENCE,
  NEXT_PUBLIC_BASE_URL
} from '@/utils/envValues'

const auth0Options = {
  audience: NEXT_PUBLIC_AUTH0_AUDIENCE
}

type ReturnType = {
  login: () => Promise<void>
  logout: () => Promise<void>
  getToken: () => Promise<string>
  getUser: () => Promise<User | undefined>
}

const useAuth = (): ReturnType => {
  const login = async () => {
    await auth0.loginWithRedirect({
      redirect_uri: NEXT_PUBLIC_BASE_URL
    })
  }

  const logout = async () => {
    await auth0.logout({
      returnTo: NEXT_PUBLIC_BASE_URL
    })
  }

  const getToken = async () => {
    const token = await auth0.getTokenSilently(auth0Options)
    return token
  }

  const getUser = async () => {
    const user = await auth0.getUser(auth0Options)
    return user
  }

  return { login, logout, getToken, getUser }
}

export { useAuth }
