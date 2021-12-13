import { render } from '@testing-library/react'
import React from 'react'
import { SWRConfig } from 'swr'

// eslint-disable-next-line react/prop-types
const Providers: React.FC = ({ children }) => {return (
  <SWRConfig value={{ dedupingInterval: 0 }}>{children}</SWRConfig>
)}

const customRender = (ui: React.ReactElement, options = {}) =>
  {return render(ui, { wrapper: Providers, ...options })}

export * from '@testing-library/react'

export { customRender as render }
