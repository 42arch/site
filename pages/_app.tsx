import type { AppProps } from 'next/app'
import { ThemeProvider, useTheme } from 'next-themes'
import Layout from '../components/Layout'
import 'windi.css'
import '../styles/global.css'
import '../styles/component.css'
import '../styles/prisma-atom-dark.css'
import AppContext from '../context/AppContext'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {

  const { theme, setTheme } = useTheme()
  const [curTheme, setCurTheme ] = useState(theme)

  return (
    <AppContext.Provider value={{
      curTheme,
      setCurTheme
    }}>
      <ThemeProvider attribute='class'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AppContext.Provider>

  )
}

export default MyApp
