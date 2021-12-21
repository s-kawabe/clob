import { Button, useMediaQuery } from '@chakra-ui/react'
import type { VFC } from 'react'
import { RiLoginBoxLine } from 'react-icons/ri'

import { useAuth } from '@/utils/hooks'
import { isClient } from '@/utils/isClient'

const LoginButton: VFC = () => {
  const [isLargerThan30em] = useMediaQuery('(min-width: 30em)')
  const { login } = useAuth()

  if (!isClient()) return null

  return (
    <Button
      color={'white'}
      size={isLargerThan30em ? 'md' : 'sm'}
      leftIcon={<RiLoginBoxLine />}
      onClick={login}
    >
      login
    </Button>
  )
}

export { LoginButton }
