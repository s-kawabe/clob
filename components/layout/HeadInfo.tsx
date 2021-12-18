import Head from 'next/head'
import type { VFC } from 'react'

type Props = {
  title: string
}

export const HeadInfo: VFC<Props> = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
    </Head>
  )
}
