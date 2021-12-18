import { Button } from '@chakra-ui/react'
import type { VFC } from 'react'
import { AiOutlineGoogle } from 'react-icons/ai'

const LoginButton: VFC = () => {
  const handleLogin = async () => {
    console.log('login')
  }

  return (
    <Button
      color={'white'}
      leftIcon={<AiOutlineGoogle />}
      onClick={handleLogin}
    >
      ログイン
    </Button>
  )
}

export { LoginButton }
