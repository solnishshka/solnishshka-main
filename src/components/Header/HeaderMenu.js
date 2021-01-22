import styled from 'styled-components'
import { useContext } from 'react'
import { TranslationContext } from '../../contexts/translationContext'

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  background-color: ${(props) => props.theme.colors.bgColor};
`

const MainMenu = styled(Menu)`
  ${(props) => props.isPopupMenu && 'display:none;'}
  @media screen and (max-width: 767px) {
    ${(props) =>
      props.isMain &&
      `flex-direction: column;
    position: absolute;
    top: 65px;
    right: 10px;
    width: 100px;
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-shadow: 0 0 3px;
    padding: 10px;
    display: ${props.isOpen ? 'flex;' : 'none;'}`}
  }
`
const MenuItem = styled.li`
  margin-left: 18px;

  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
    margin-left: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin-left: 10px;
    margin-bottom: 0;
  }
`
const MenuLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.textColorLight};
  transition: color 1s linear;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.yellow};
  }

  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    font-size: 14px;
  }
`

export default function HeaderMenu(props) {
  const translation = useContext(TranslationContext)
  return (
    <nav>
      <MainMenu
        isOpen={props.isOpenMainMenu}
        isMain={true}
        isPopupMenu={props.isPopupMenu}
      >
        <MenuItem>
          <MenuLink href="#about">{translation.menu.about}</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#skills">{translation.menu.skills}</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#experience">{translation.menu.experience}</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#education">{translation.menu.education}</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#portfolio">{translation.menu.portfolio}</MenuLink>
        </MenuItem>
      </MainMenu>
    </nav>
  )
}
