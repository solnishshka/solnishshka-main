import Social from './Social'
import avatar from '../images/portrait.png'

export default function Lead(props) {
  return (
    <section className="section">
      <div className="left-column left-column_type_lead">
        <img className="lead__avatar" src={avatar} alt="Аватар" />
        <button type="button" className="lead__button">
          <a className="lead__button-link" href="https://solnishshka.xyz/files/summary.pdf" type="application/pdf" target="_blank" rel="noreferrer" download>Download CV</a>
        </button>
      </div>
      <div className="right-column right-column_type_lead">
        <h1 className="lead__title">Анастасия <span className="lead__title-span">Подкопаева</span></h1>
        <p className="lead__description">Junior Frontend Developer</p>
        <Social type="lead"/>
        <ul className="lead__contacts">
          <li className="lead__contact">
            <h2 className="lead__contact-title">Регион</h2>
            <p className="lead__contact-text">Москва</p>
          </li>
          <li className="lead__contact">
            <h2 className="lead__contact-title">Телефон</h2>
            <p className="lead__contact-text">+0 (000) 000-00-00</p>
          </li>
          <li className="lead__contact">
            <h2 className="lead__contact-title">Email</h2>
            <p className="lead__contact-text">testsolnishshka@yandex.ru</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
