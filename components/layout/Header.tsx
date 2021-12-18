import { HStack, Spacer } from '@chakra-ui/react'

import { LoginButton, ProductLogo } from '@/components/shared'

const Header = () => {
  return (
    <HStack
      px={10}
      py={2}
      borderRadius={'full'}
      bgColor={'white'}
      border={'2px'}
      borderColor={'brown.500'}
      boxShadow={'md'}
    >
      <ProductLogo />
      <Spacer />
      <LoginButton />
    </HStack>
  )
}

export { Header }
