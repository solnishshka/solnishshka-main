import { useContext } from 'react'
import { TranslationContext } from '../contexts/translationContext'

export default function Education(props) {
  const translation = useContext(TranslationContext)

  return (
    <section className="section" id="education">
      <div className="left-column left-column_color_light">
        <h2 className="left-column__title">{translation.menu.education}</h2>
      </div>
      <div className="right-column">
        <ul className="right-column__table right-column__table_type_education">
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
              {translation.experience.praktikum.description_1}
            </p>
            <p className="right-column__text right-column__text_type_experience">
              {translation.experience.praktikum.description_2}
            </p>
          </li>
          <li>
            <div className="right-column__circle"></div>
            <div className="right-column__line"></div>
          </li>
          <li>
            <p className="right-column__text right-column__text_type_experience">
              2006 - 2008
            </p>
            <h2 className="right-column__table-title">{translation.experience.mai.title}</h2>
            <p className="right-column__text right-column__text_type_experience">
            {translation.experience.mai.job}
            </p>
          </li>
          <li className="right-column__text-item">
            <p className="right-column__text right-column__text_type_experience">
            {translation.experience.mai.description}
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
