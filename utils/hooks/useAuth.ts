import type { User } from '@auth0/auth0-spa-js'
import { useCallback, useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'

import { isLoginAtom, userAtom } from '@/recoil/atom'
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
  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom)
  const setUser = useSetRecoilState(userAtom)

  const login = useCallback(async () => {
    setIsLogin(true)
    await auth0.loginWithRedirect({
      redirect_uri: NEXT_PUBLIC_BASE_URL
    })
  }, [])

  const logout = useCallback(async () => {
    setIsLogin(false)
    await auth0.logout({
      returnTo: NEXT_PUBLIC_BASE_URL
    })
  }, [])

  const getToken = useCallback(async () => {
    const token = await auth0.getTokenSilently(auth0Options)
    return token
  }, [])

  const getUser = useCallback(async () => {
    const user = await auth0.getUser(auth0Options)
    return user
  }, [])

  useEffect(() => {
    if (isLogin) {
      ;(async () => {
        const user = await getUser()
        if (user) {
          console.log(user)
          // - prismaのUser型にしてrecoilにセット
          // - backendに問い合わせて、DBに入っていなければ入れる
          // - 初めてのログインかどうかを確かめる手段が必要
        }
      })()
    }
  }, [isLogin])

  return { login, logout, getToken, getUser }
}

export { useAuth }
