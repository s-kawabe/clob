import { Box, useMediaQuery } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

const ProductLogo = () => {
  const [isLargerThan30em] = useMediaQuery('(min-width: 30em)')
  return (
    <Box cursor={'pointer'} _hover={{ opacity: 0.9 }} transition={'0.2s'}>
      <Link href={'/'} passHref>
        {isLargerThan30em ? (
          <Image
            src={'/image/logo.png'}
            alt={'アプリケーションロゴ'}
            width={'120px'}
            height={'55px'}
          />
        ) : (
          <Image
            src={'/image/small-logo.png'}
            alt={'アプリケーションロゴ'}
            width={'30px'}
            height={'30px'}
          />
        )}
      </Link>
    </Box>
  )
}

export { ProductLogo }
