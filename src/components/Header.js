import cn from 'classnames'
import { useContext } from 'react'
import { TranslationContext } from '../contexts/translationContext'

export default function Header(props) {
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
    <div className="header-container">
      <header className="header">
        <a className="logo" href="#">
          <span className="logo__span">SOLN</span>ishshka
        </a>
        <nav>
          <ul
            className={cn('header__menu-items', {
              'header__menu-items_active': props.isActive,
            })}
          >
            <li className="header__menu-item">
              <a className="header__link" href="#about">
                {translation.menu.about}
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__link" href="#skills">
                {translation.menu.skills}
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__link" href="#experience">
                {translation.menu.experience}
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__link" href="#education">
                {translation.menu.education}
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__link" href="#portfolio">
                {translation.menu.portfolio}
              </a>
            </li>
          </ul>
        </nav>
        <button type="button" className="button button_type_header">
          <a
            className="button__link"
            href="https://solnishshka.xyz/files/summary.pdf"
            type="application/pdf"
            target="_blank"
            rel="noreferrer"
            download
          >
            {translation.download}
          </a>
        </button>
        <ul className="header__links">
          <li
            className={cn('header__link-item', {
              'header__link-item_active': props.lang === 'ru',
            })}
            onClick={handleLang}
          >
            RU
          </li>
          <li
            className={cn('header__link-item', {
              'header__link-item_active': props.lang === 'en',
            })}
            onClick={handleLang}
          >
            EN
          </li>
        </ul>
        <button
          className={cn('header__menu', {
            header__menu_inactive: props.isActive,
          })}
          onClick={props.handleClick}
          onKeyUp={props.handleEscClose}
        ></button>
      </header>
    </div>
  )
}
