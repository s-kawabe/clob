import {
  ChakraProvider,
  extendTheme,
  theme as chakraTheme,
  withDefaultColorScheme
} from '@chakra-ui/react'
import type { FC } from 'react'
import type { ReactNode } from 'react'

const colors = {
  ...chakraTheme.colors,
  primary: {
    50: 'hsl(32,85%,97%)',
    300: 'hsl(32,85%,82%)',
    400: 'hsl(32,85%,77%)',
    500: 'hsl(32,85%,71%)',
    600: 'hsl(32,85%,65%)',
    700: 'hsl(32,85%,59%)'
  },
  secondary: {
    300: 'hsl(158,85%,82%)',
    400: 'hsl(158,85%,77%)',
    500: 'hsl(158,85%,71%)',
    600: 'hsl(158,85%,65%)',
    700: 'hsl(158,85%,59%)'
  },
  brown: {
    300: 'hsl(33,29%,44%)',
    400: 'hsl(33,29%,37%)',
    500: 'hsl(33,29%,31%)',
    600: 'hsl(33,29%,25%)',
    700: 'hsl(33,29%,19%)'
  }
}

const fonts = {
  text: '"Noto Sans JP", "Hiragino Kaku Gothic ProN", sans-serif',
  shout: 'Kosugi maru'
}

const globalTheme = {
  styles: {
    global: {
      body: {
        fontSize: '16px',
        lineHeight: 1,
        fontFamily: 'text'
      },
      'h1,h2,h3,h4,h5,p': {
        color: 'gray.700'
      }
    }
  }
}

const theme = extendTheme(
  {
    colors,
    fonts,
    ...globalTheme
  },
  withDefaultColorScheme({ colorScheme: 'primary' })
)

type Props = {
  children: ReactNode
}

const DesignProvider: FC<Props> = (props) => {
  return <ChakraProvider theme={theme}>{props.children}</ChakraProvider>
}

export { DesignProvider }
