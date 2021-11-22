import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import store from 'store'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />

    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </ThemeProvider>
)

export default App
