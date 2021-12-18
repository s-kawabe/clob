import Image from 'next/image'
import type { VFC } from 'react'

export const Loading: VFC = () => {
  return (
    <Image
      src={'https://s2.svgbox.net/loaders.svg?ic=puff'}
      alt={'ローディング中'}
      width={'60px'}
      height={'60px'}
    />
  )
}
