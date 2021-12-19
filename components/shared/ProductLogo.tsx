import { Box, useMediaQuery } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

import { isClient } from '@/utils/isClient'

const ProductLogo = () => {
  const [isLargerThan30em] = useMediaQuery('(min-width: 30em)')

  return (
    <Box cursor={'pointer'} _hover={{ opacity: 0.9 }} transition={'0.2s'}>
      {isClient() && (
        <Link href={'/'} passHref>
          <Image
            src={'/image/logo.png'}
            alt={'アプリケーションロゴ'}
            width={isLargerThan30em ? '110px' : '65px'}
            height={isLargerThan30em ? '50px' : '32px'}
          />
        </Link>
      )}
    </Box>
  )
}

export { ProductLogo }
