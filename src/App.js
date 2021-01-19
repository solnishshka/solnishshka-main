import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import { useState } from 'react'

function App() {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    if (isActive) {
      setIsActive(false)
    } else {
      setIsActive(true)
    }
  }

  const handleCloseOverlay = (evt) => {
    if (isActive && evt.target !== document.querySelector('.header__menu-items') && evt.target !== document.querySelector('.header__menu-item')) {
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
        <Header
          isActive={isActive}
          handleClick={handleClick}
          handleEscClose={handleEscClose}
        />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App
