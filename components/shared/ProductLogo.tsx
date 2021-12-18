import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

const ProductLogo = () => {
  return (
    <Box cursor={'pointer'} _hover={{ opacity: 0.9 }} transition={'0.2s'}>
      <Link href={'/'} passHref>
        <Image
          src={'/image/logo.png'}
          alt={'アプリケーションロゴ'}
          width={'120px'}
          height={'55px'}
        />
      </Link>
    </Box>
  )
}

export { ProductLogo }
