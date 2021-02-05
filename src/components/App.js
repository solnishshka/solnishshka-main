import Header from './Header/Header'
import Footer from './Footer'
import Main from './Main'
import { useState } from 'react'
import { TranslationContext, translations } from '../contexts/translationContext'
import { lightTheme, darkTheme } from './Themes'
import styled, { ThemeProvider } from 'styled-components'

const AppContainer = styled.div`
  background-color: ${(props) => props.theme.colors.bgColor};
`

const Content = styled.div`
  font-family: 'Roboto', Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  min-width: 320px;
  max-width: 1440px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.bgColor};
  color: ${(props) => props.theme.colors.textColorLight};
  margin: 0 auto;
  margin-top: 85px;
`

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') !== 'dark' ? lightTheme : darkTheme
  )
  const [lang, setLang] = useState(sessionStorage.getItem('lang') || 'ru')
  const [isOpenMainMenu, setIsOpenMainMenu] = useState(false)
  const [isOpenSettingsMenu, setIsOpenSettingsMenu] = useState(false)
  const toggleTheme = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme)
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme(lightTheme)
      localStorage.setItem('theme', 'light')
    }
  }

  const handleOpenMainMenu = () => {
    if (isOpenMainMenu) {
      setIsOpenMainMenu(false)
    } else {
      setIsOpenMainMenu(true)
    }
  }

  const handleOpenSettingsMenu = () => {
    if (isOpenSettingsMenu) {
      setIsOpenSettingsMenu(false)
    } else {
      setIsOpenSettingsMenu(true)
    }
  }

  const handleCloseAllPopups = () => {
    setIsOpenSettingsMenu(false)
    setIsOpenMainMenu(false)
  }

  const handleCloseOverlay = (evt) => {
    if (evt.target === document.querySelector('.overlay')) {
      handleCloseAllPopups()
    }
  }

  const handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      handleCloseAllPopups()
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <AppContainer className="App" onClick={handleCloseOverlay}>
        <Content onKeyPress={handleEscClose}>
          <TranslationContext.Provider value={translations[lang]}>
            <Header
              isOpenMainMenu={isOpenMainMenu}
              isOpenSettings={isOpenSettingsMenu}
              handleClick={handleOpenMainMenu}
              handleOpenSetting={handleOpenSettingsMenu}
              setLang={setLang}
              lang={lang}
              closeMenu={handleCloseAllPopups}
              handleEscClose={handleEscClose}
              toggleTheme={toggleTheme}
              currentTheme={theme}
            />
            <Main />
            <Footer />
          </TranslationContext.Provider>
        </Content>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
