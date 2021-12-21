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
import {
  NEXT_PUBLIC_AUTH0_AUDIENCE,
  NEXT_PUBLIC_BASE_URL
} from '@/utils/envValues'

const Header = () => {
  const handleLogin = async () => {
    await auth0.loginWithRedirect({
      redirect_uri: NEXT_PUBLIC_BASE_URL
    })
  }

  const handleLogout = async () => {
    await auth0.logout({
      returnTo: NEXT_PUBLIC_BASE_URL
    })
  }

  const handleGetUser = async () => {
    const accessToken = await auth0.getTokenSilently({
      audience: NEXT_PUBLIC_AUTH0_AUDIENCE
    })
    console.log('accessToken: ', accessToken)

    const user = await auth0.getUser({
      audience: NEXT_PUBLIC_AUTH0_AUDIENCE
    })
    console.log('user: ', user)

    const claims = await auth0.getIdTokenClaims({
      audience: NEXT_PUBLIC_AUTH0_AUDIENCE
    })
    console.log('claims: ', claims)
    console.log(claims?.__raw)
  }

  const handleLoginCheck = async () => {
    const isLogin = await auth0.isAuthenticated()
    console.log(isLogin)
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
      <button onClick={handleLoginCheck}>check</button>
    </HStack>
  )
}

export { Header }
