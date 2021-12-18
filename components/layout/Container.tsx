import { Container as ChakraContainer } from '@chakra-ui/react'
import type { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Container: FC<Props> = (props) => {
  return <ChakraContainer py={4}>{props.children}</ChakraContainer>
}
