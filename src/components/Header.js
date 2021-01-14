import logo from '../images/solnishshka.svg'

export default function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} />
      <nav className="header__menu">
        <ul className="header__menu-items">
          <li className="header__menu-item">
            <a className="header__link" href="#about">ОБО МНЕ</a>
          </li>
          <li className="header__menu-item">
            <a className="header__link" href="#skills">НАВЫКИ</a>
          </li>
          <li className="header__menu-item">
            <a className="header__link" href="#experience">ОПЫТ РАБОТЫ</a>
          </li>
          <li className="header__menu-item">
            <a className="header__link" href="#education">ОБУЧЕНИЕ</a>
          </li>
          <li className="header__menu-item">
            <a className="header__link" href="#portfolio">ПОРТФОЛИО</a>
          </li>
        </ul>
      </nav>
      <ul className="header__links">
        <li className="header__link-item header__link-item_active">RU</li>
        <li className="header__link-item">EN</li>
      </ul>
    </header>
  )
}
