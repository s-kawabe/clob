import { Button, useMediaQuery } from '@chakra-ui/react'
import type { VFC } from 'react'
import { AiOutlineGoogle } from 'react-icons/ai'

import { isClient } from '@/utils/isClient'

const LoginButton: VFC = () => {
  const [isLargerThan30em] = useMediaQuery('(min-width: 30em)')
  const handleLogin = async () => {
    console.log('login')
  }

  if (!isClient()) return null

  return (
    <Button
      color={'white'}
      size={isLargerThan30em ? 'md' : 'sm'}
      leftIcon={<AiOutlineGoogle />}
      onClick={handleLogin}
    >
      login
    </Button>
  )
}

export { LoginButton }
