import React, { useEffect, useState } from 'react'
import Header from './components/Header'

function App () {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Header theme={theme} handleThemeSwitch={handleThemeSwitch} />
  )
}

export default App
