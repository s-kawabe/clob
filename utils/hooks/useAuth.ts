import { useEffect, useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'

import { isLoginAtom, userAtom } from '@/recoil/atom'
import { apiClient } from '@/utils/apiClient'
import { auth0 } from '@/utils/auth0Client'
import {
  NEXT_PUBLIC_AUTH0_AUDIENCE,
  NEXT_PUBLIC_BASE_URL
} from '@/utils/envValues'
import type { Auth0User, LocalUser } from '$/types'

const auth0Audience = {
  audience: NEXT_PUBLIC_AUTH0_AUDIENCE
}

// auth0から取得したユーザーをPrismaの型に変換する
const toPrismaUserObject = (auth0User: Auth0User): LocalUser | null => {
  if (!auth0User.email || !auth0User.nickname) return null

  return {
    email: auth0User.email,
    name: auth0User.name || auth0User.nickname,
    name_id: auth0User.nickname,
    image: auth0User.picture ?? null
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useAuth = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom)
  const setUser = useSetRecoilState(userAtom)
  const [token, setToken] = useState<string>('')

  const login = async () => {
    await auth0.loginWithRedirect({
      redirect_uri: NEXT_PUBLIC_BASE_URL,
      ...auth0Audience
    })
  }

  const logout = async () => {
    await auth0.logout({
      returnTo: NEXT_PUBLIC_BASE_URL
    })
    setIsLogin(false)
  }

  const getToken = async () => {
    const token = await auth0.getTokenSilently(auth0Audience)
    return token
  }

  const getUser = async () => {
    const user = await auth0.getUser(auth0Audience)
    return user
  }

  useEffect(() => {
    ;(async () => {
      try {
        const token = await getToken()
        if (token) {
          setToken(token)
          setIsLogin(true)
        }
      } catch (err) {
        console.error(err)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (isLogin) {
      ;(async () => {
        try {
          const auth0User = await getUser()
          if (!auth0User) {
            throw Error('ユーザ情報の取得に失敗しました。')
          }

          const localUser = toPrismaUserObject(auth0User)
          if (!localUser) {
            throw Error('ユーザ情報の取得に失敗しました。')
          }

          const { email, name, name_id, image } = localUser
          const prismaUser = await apiClient.user.$post({
            headers: {
              authorization: `Bearer ${token}`
            },
            body: { email, name, name_id, image }
          })
          setUser(prismaUser)
        } catch (err) {
          console.error(err)
        }
      })()
    }
  }, [isLogin])

  return {
    login,
    logout,
    token,
    getUser,
    getToken
  }
}

export { useAuth }
