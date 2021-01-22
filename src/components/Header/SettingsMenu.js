import styled from 'styled-components'
import { Menu } from './HeaderMenu'
import { useContext } from 'react'
import { TranslationContext } from '../../contexts/translationContext'
import { Button } from '../Button'
import { lightTheme } from '../Themes'

const LangMenu = styled(Menu)`
  margin-bottom: 20px;
  align-self: start;
`

const MainMenu = styled(Menu)`
  ${(props) => (props.open ? 'display: flex;' : 'display: none;')}
  flex-direction: column;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.textColorLight};
  position: absolute;
  top: 70px;
  right: 10px;
  min-width: 135px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 0 3px;

  @media screen and (max-width: 767px) {
    min-width: 100px;
    right: 10px;
  }

  @media screen and (min-width: 1280px) {
    right: 5%;
  }
  @media screen and (min-width: 1600px) {
    right: 10%;
  }
`
const LangButton = styled(Button)`
  margin-left: 8px;
  font-size: 16px;
  color: ${(props) => props.theme.colors.textColorLight};
  margin: 0;

  ${(props) =>
    props.active &&
    `color: ${props.theme.colors.yellow}; text-decoration: underline;`}

  @media screen and (max-width: 1023px) {
    font-size: 12px;
  }
`

const ThemeButton = styled(Button)`
  font-size: 14px;
  color: ${(props) => props.theme.colors.textColorLight};
  text-align: start;

  &:hover {
    color: ${(props) => props.theme.colors.yellow};
  }
`

export default function SettingsMenu(props) {
  const translation = useContext(TranslationContext)
  function handleLang(evt) {
    if (evt.target.textContent === 'RU') {
      props.setLang('ru')
      sessionStorage.setItem('lang', 'ru')
    } else {
      props.setLang('en')
      sessionStorage.setItem('lang', 'en')
    }
  }

  return (
    <MainMenu open={props.open}>
      <LangMenu>
        <li>
          <LangButton active={props.lang === 'ru' && true} onClick={handleLang}>
            RU
          </LangButton>
        </li>
        <li>
          <LangButton active={props.lang === 'en' && true} onClick={handleLang}>
            EN
          </LangButton>
        </li>
      </LangMenu>
      <ThemeButton onClick={props.toggleTheme}>
        {props.currentTheme === lightTheme
          ? translation.themeButton.light
          : translation.themeButton.dark}
      </ThemeButton>
    </MainMenu>
  )
}
