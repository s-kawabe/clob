import { Box, Heading, Text } from '@chakra-ui/react'

const TopPageComponent = () => {
  return (
    <Box p={16}>
      <Heading fontFamily={'shout'}>これは見出し見出し見出し</Heading>
      <Text fontFamily={'text'}>
        これはテキストテキストテキストテキストテキストテキスト
      </Text>
      <Text>これはテキストテキストテキストテキストテキストテキスト</Text>
    </Box>
  )
}

export { TopPageComponent }
