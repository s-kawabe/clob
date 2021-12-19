import { Box, Heading, Text } from '@chakra-ui/react'

import { HeadInfo } from '@/components/layout'
import { Loading } from '@/components/shared'

const TopPageComponent = () => {
  return (
    <>
      <HeadInfo title={'clob | トップ'} />
      <Box p={16}>
        <Heading fontFamily={'shout'}>これは見出し見出し見出し</Heading>
        <Text fontFamily={'text'}>
          これはテキストテキストテキストテキストテキストテキスト
        </Text>
        <Text>これはテキストテキストテキストテキストテキストテキスト</Text>
        <Loading />
      </Box>
    </>
  )
}

export { TopPageComponent }
