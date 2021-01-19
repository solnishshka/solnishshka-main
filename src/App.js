import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import { useState } from 'react'
import { TranslationContext, translations } from './contexts/translationContext'

function App() {
  const [lang, setLang] = useState(sessionStorage.getItem('lang') || 'ru');
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    if (isActive) {
      setIsActive(false)
    } else {
      setIsActive(true)
    }
  }

  const handleCloseOverlay = (evt) => {
    if (
      isActive &&
      evt.target !== document.querySelector('.header__menu-items') &&
      evt.target !== document.querySelector('.header__menu-item')
    ) {
      setIsActive(false)
    }
  }

  const handleEscClose = (evt) => {
    if (evt.key) {
      setIsActive(false)
    }
  }

  return (
    <div className="App" onClick={handleCloseOverlay}>
      <div className="content">
        <TranslationContext.Provider value={translations[lang]}>
          <Header
            isActive={isActive}
            handleClick={handleClick}
            handleEscClose={handleEscClose}
            setLang={setLang}
            lang={lang}
          />
          <Main />
          <Footer />
        </TranslationContext.Provider>
      </div>
    </div>
  )
}

export default App
