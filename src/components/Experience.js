import { useContext } from 'react'
import { TranslationContext } from '../contexts/translationContext'

export default function Experience(props) {
  const translation = useContext(TranslationContext)

  return (
    <section className="section" id="experience">
      <div className="left-column left-column_color_dark">
        <h2 className="left-column__title">{translation.menu.experience}</h2>
      </div>
      <div className="right-column">
        <ul className="right-column__table right-column__table_type_experience">
          <li>
            <div className="right-column__circle"></div>
            <div className="right-column__line"></div>
          </li>
          <li>
            <p className="right-column__text right-column__text_type_experience">
              2020 - {translation.experience.praktikum.present}
            </p>
            <h2 className="right-column__table-title">
              {translation.experience.praktikum.title}
            </h2>
            <p className="right-column__text right-column__text_type_experience">
              {translation.experience.praktikum.job}
            </p>
          </li>
          <li className="right-column__text-item">
            <p className="right-column__text right-column__text_type_experience">
              {translation.experience.praktikum.description_3}
            </p>
            <p className="right-column__text right-column__text_type_experience">
              {translation.experience.praktikum.description_4}
            </p>
          </li>
          <li>
            <div className="right-column__circle"></div>
            <div className="right-column__line"></div>
          </li>
          <li>
            <p className="right-column__text right-column__text_type_experience">
              2018 - 2020
            </p>
            <h2 className="right-column__table-title">
              {translation.experience.yandex.title}
            </h2>
            <p className="right-column__text right-column__text_type_experience">
              {translation.experience.yandex.job}
            </p>
          </li>
          <li className="right-column__text-item">
            <p className="right-column__text right-column__text_type_experience">
              {translation.experience.yandex.description_1}
            </p>
            <p className="right-column__text right-column__text_type_experience">
              {translation.experience.yandex.description_2}
            </p>
          </li>
          <li>
            <div className="right-column__circle"></div>
            <div className="right-column__line"></div>
          </li>
          <li>
            <p className="right-column__text right-column__text_type_experience">
              2011 - 2018
            </p>
            <h2 className="right-column__table-title">
              {translation.experience.pkk.title}
            </h2>
            <p className="right-column__text right-column__text_type_experience">
              {translation.experience.pkk.job}
            </p>
          </li>
          <li className="right-column__text-item">
            <p className="right-column__text right-column__text_type_experience">
              {translation.experience.pkk.description}
            </p>
          </li>
          <li>
            <div className="right-column__circle"></div>
            <div className="right-column__line"></div>
          </li>
          <li>
            <p className="right-column__text right-column__text_type_experience">
              2009 - 2011
            </p>
            <h2 className="right-column__table-title">
              {translation.experience.nyanushka.title}
            </h2>
            <p className="right-column__text right-column__text_type_experience">
              {translation.experience.nyanushka.job}
            </p>
          </li>
          <li className="right-column__text-item">
            <p className="right-column__text right-column__text_type_experience">
              {translation.experience.nyanushka.description}
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
