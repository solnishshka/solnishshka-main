import styled from 'styled-components'
import SettingsMenu from './SettingsMenu'
import HeaderMenu from './HeaderMenu'
import CloseButtonImage from '../../images/menu-close.png'
import { Button } from '../Button'
import { useEffect } from 'react'

const Popup = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const CloseButton = styled(Button)`
  background-image: url(${CloseButtonImage});
  position: absolute;
  top: 37px;
  right: 10px;
  width: 17px;
  height: 17px;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 100;

  @media screen and (min-width: 768px) {
    ${(props) => props.isOpenMainMenu && 'display: none;'}
  }
  @media screen and (min-width: 1280px) {
    right: 5%;
  }
  @media screen and (min-width: 1600px) {
    right: 10%;
  }
`

export default function HeaderPopup({
  lang,
  isOpenSettings,
  setLang,
  isOpenMainMenu,
  onClick,
  handleEscClose,
  toggleTheme,
  currentTheme
}) {
  useEffect(() => {
    document.addEventListener('keydown', handleEscClose)
    return () => {
      document.removeEventListener('keydown', handleEscClose)
    }
  })
  return (
    <Popup className="overlay">
      <CloseButton
        isOpenMainMenu={isOpenMainMenu}
        onClick={onClick}
      ></CloseButton>
      {isOpenMainMenu && (
        <HeaderMenu
          isPopupMenu={true}
          isOpenMainMenu={isOpenMainMenu}
        ></HeaderMenu>
      )}
      {isOpenSettings && (
        <SettingsMenu
          lang={lang}
          open={isOpenSettings}
          setLang={setLang}
          currentTheme={currentTheme}
          toggleTheme={toggleTheme}
        ></SettingsMenu>
      )}
    </Popup>
  )
}
