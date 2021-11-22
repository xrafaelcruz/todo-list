import { ReactNode } from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import store from 'store'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'

export const render = (component: ReactNode) =>
  rtlRender(
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Provider store={store}>{component}</Provider>
    </ThemeProvider>
  )
