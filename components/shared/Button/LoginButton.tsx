import { Button } from '@chakra-ui/react'
import type { VFC } from 'react'
import { AiOutlineGoogle } from 'react-icons/ai'

const LoginButton: VFC = () => {
  return <Button leftIcon={<AiOutlineGoogle />}>ログイン</Button>
}

export { LoginButton }
