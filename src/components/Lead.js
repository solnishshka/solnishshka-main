import Social from './Social'
import avatar from '../images/portrait.png'

export default function Lead(props) {
  return (
    <section className="section">
      <div className="left-column left-column_type_lead left-column_color_light">
        <img className="lead__avatar" src={avatar} alt="Аватар" />
        <button type="button" className="button button_type_lead">
          <a
            className="button__link button__link_type_lead"
            href="https://solnishshka.xyz/files/summary.pdf"
            type="application/pdf"
            target="_blank"
            rel="noreferrer"
            download
          >
            Скачать резюме
          </a>
        </button>
      </div>
      <div className="right-column right-column_type_lead">
        <h1 className="lead__title">
          Анастасия <span className="lead__title-span">Подкопаева</span>
        </h1>
        <p className="lead__description">Junior Frontend Developer</p>
        <Social type="lead" />
        <ul className="lead__contacts">
          <li className="lead__contact">
            <h2 className="lead__contact-title">Регион</h2>
            <p className="lead__contact-text">Москва</p>
          </li>
          <li className="lead__contact">
            <h2 className="lead__contact-title">Телефон</h2>
            <p className="lead__contact-text">
              <a className="lead__contact-link" href="tel:+0 (000) 000-00-00">
                +0 (000) 000-00-00
              </a>
            </p>
          </li>
          <li className="lead__contact">
            <h2 className="lead__contact-title">Email</h2>
            <p className="lead__contact-text">
              <a
                className="lead__contact-link"
                href="mailto:testsolnishshka@yandex.ru"
              >
                testsolnishshka@yandex.ru
              </a>
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
