import styled from 'styled-components'
import DownloadButton, { Button } from '../Button'
import Logo from '../Logo'
import MenuBurger from '../../images/Vector.svg'
import SettingsButtonImage from '../../images/settingsButton.svg'
import HeaderMenu, { Menu } from './HeaderMenu'
import HeaderPopup from './HeaderPopup'

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors.bgColor};
  width: 100%;
  z-index: 2;
`

const HeaderElement = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  max-width: 1440px;
  min-width: 320px;
  min-height: 85px;
  position: relative;
  @media screen and (max-width: 767px) {
    margin: auto 20px;
    min-width: 280px;
    justify-content: space-between;
  }
`

const ButtonMenu = styled(Menu)`
  @media screen and (max-width: 767px) {
    min-width: 70px;
    position: relative;
  }
`

const MenuButton = styled(Button)`
  display: none;
  background-image: url(${MenuBurger});
  background-position: center;
  background-repeat: no-repeat;
  width: 28px;
  height: 20px;
  transition: opacity 1s linear;

  &:hover {
    opacity: 0.5;
  }

  @media screen and (max-width: 767px) {
    ${(props) => (props.open ? 'display: none;' : 'display: block;')}
  }
`

const SettingsButton = styled(Button)`
  color: inherit;
  background-position: center;
  background-repeat: no-repeat;
  width: ${(props) => (props.open ? `17px;` : `20px;`)}
  height: ${(props) => (props.open ? `17px;` : `20px;`)}
  background-image: url(${SettingsButtonImage});}
  ${(props) => props.open && 'display: none;'}
`

const MainMenu = styled(HeaderMenu)`
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export default function Header({
  isOpenMainMenu,
  handleEscClose,
  isOpenSettings,
  handleClick,
  handleOpenSetting,
  closeMenu,
  lang,
  setLang,
  toggleTheme,
  currentTheme,
}) {
  return (
    <Container>
      <HeaderElement>
        <Logo />
        <MainMenu />
        <DownloadButton type="header" />
        <ButtonMenu>
          <MenuButton
            open={isOpenSettings || isOpenMainMenu}
            onClick={handleClick}
          ></MenuButton>
          <SettingsButton
            open={isOpenSettings || isOpenMainMenu}
            onClick={handleOpenSetting}
          ></SettingsButton>
        </ButtonMenu>
        {(isOpenSettings || isOpenMainMenu) && (
          <HeaderPopup
            lang={lang}
            isOpenSettings={isOpenSettings}
            setLang={setLang}
            isOpenMainMenu={isOpenMainMenu}
            onClick={closeMenu}
            open={isOpenSettings || isOpenMainMenu}
            handleEscClose={handleEscClose}
            toggleTheme={toggleTheme}
            currentTheme={currentTheme}
          />
        )}
      </HeaderElement>
    </Container>
  )
}
