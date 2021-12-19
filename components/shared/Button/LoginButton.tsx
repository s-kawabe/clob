import { Button, useMediaQuery } from '@chakra-ui/react'
// import type { Dispatch, SetStateAction, VFC } from 'react'
import type { VFC } from 'react'
import { RiLoginBoxLine } from 'react-icons/ri'

import { auth0 } from '@/utils/auth0client'
// import { NEXT_PUBLIC_BASE_URL } from '@/utils/envValues'
import { isClient } from '@/utils/isClient'

// type Props = {
//   setIsLogin: Dispatch<SetStateAction<boolean>>
// }

const LoginButton: VFC = () => {
  const [isLargerThan30em] = useMediaQuery('(min-width: 30em)')
  const handleLogin = async () => {
    await auth0.loginWithRedirect({
      redirect_uri: 'http://localhost:8001'
    })
  }

  if (!isClient()) return null

  return (
    <Button
      color={'white'}
      size={isLargerThan30em ? 'md' : 'sm'}
      leftIcon={<RiLoginBoxLine />}
      onClick={handleLogin}
    >
      login
    </Button>
  )
}

export { LoginButton }
