import menuImage from '../images/burger-menu.png'

export default function Header(props) {
  return (
    <div className="header-container">
      <header className="header">
        <a className="logo" href="#">
          <span className="logo__span">SOLN</span>ishshka
        </a>
        <nav>
          <ul className="header__menu-items">
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
        <img className="header__menu" src={menuImage} alt="Меню" />
      </header>
    </div>
  )
}
