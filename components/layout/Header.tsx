// import type { User } from '@auth0/auth0-spa-js'
import {
  HStack,
  // Menu,
  // MenuButton,
  // MenuItem,
  // MenuList,
  Spacer
} from '@chakra-ui/react'

// import { useEffect, useState } from 'react'
// import { UserAvatar } from '@/components/model/user'
// import { LoginButton, ProductLogo } from '@/components/shared'
import { ProductLogo } from '@/components/shared'
import { auth0 } from '@/utils/auth0client'
import { NEXT_PUBLIC_BASE_URL } from '@/utils/envValues'

const Header = () => {
  // const [isLogin, setIsLogin] = useState(false)
  // const [userInfo, setUserInfo] = useState<User | null>(null)
  const handleLogin = async () => {
    await auth0.loginWithRedirect({
      redirect_uri: NEXT_PUBLIC_BASE_URL,
      audience: 'http://localhost:48964/'
    })
  }

  const handleLogout = async () => {
    await auth0.logout({
      returnTo: NEXT_PUBLIC_BASE_URL
    })
  }

  const handleGetUser = async () => {
    const accessToken = await auth0.getTokenSilently({
      audience: 'http://localhost:48964/'
    })
    console.log('accessToken: ', accessToken)

    const user = await auth0.getUser()
    console.log('user: ', user)

    const claims = await auth0.getIdTokenClaims()
    console.log('claims: ', claims)
    console.log(claims?.__raw)
  }

  // console.log({ isLogin })
  // console.log({ userInfo })

  // useEffect(() => {
  //   if (isLogin) {
  //     ;(async () => {
  //       const getUserInfo = await auth0.getUser()
  //       if (getUserInfo) {
  //         setUserInfo(getUserInfo)
  //       }
  //     })()
  //   }
  // }, [isLogin])

  return (
    <HStack
      px={[5, 10]}
      py={2}
      borderRadius={'full'}
      bgColor={'white'}
      border={'2px'}
      borderColor={'brown.500'}
      boxShadow={'md'}
    >
      <ProductLogo />
      <Spacer />
      {/* {isLogin && userInfo !== null ? (
        <Menu>
          <MenuButton>
            <UserAvatar name={userInfo.name || 'guest user'} src={userInfo.picture} />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </MenuList>
        </Menu>
      ) : ( */}
      {/* <LoginButton /> */}
      {/* )} */}
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
      <button onClick={handleGetUser}>getUser</button>
    </HStack>
  )
}

export { Header }
