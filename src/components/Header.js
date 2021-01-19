import cn from 'classnames';

export default function Header(props) {

  return (
    <div className="header-container">
      <header className="header">
        <a className="logo" href="#">
          <span className="logo__span">SOLN</span>ishshka
        </a>
        <nav>
          <ul className={cn("header__menu-items", {"header__menu-items_active": props.isActive})}>
            <li className="header__menu-item">
              <a className="header__link" href="#about">
                ОБО МНЕ
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__link" href="#skills">
                НАВЫКИ
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__link" href="#experience">
                ОПЫТ РАБОТЫ
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__link" href="#education">
                ОБУЧЕНИЕ
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__link" href="#portfolio">
                ПОРТФОЛИО
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
            Скачать резюме
          </a>
        </button>
        <ul className="header__links">
          <li className="header__link-item header__link-item_active">RU</li>
          <li className="header__link-item">EN</li>
        </ul>
        <button className={cn("header__menu", {"header__menu_inactive": props.isActive})} onClick={props.handleClick} onKeyUp={props.handleEscClose}></button>
      </header>
    </div>
  )
}
