import { useContext } from 'react'
import { TranslationContext } from '../contexts/translationContext'

export default function About(props) {
  const translation = useContext(TranslationContext)

  return (
    <section className="section" id="about">
      <div className="left-column left-column_color_dark">
        <h2 className="left-column__title">{translation.menu.about}</h2>
      </div>
      <div className="right-column right-column_type_about">
        <p className="right-column__text">{translation.about.p_1}</p>
        <p className="right-column__text">{translation.about.p_2}</p>
        <p className="right-column__text">{translation.about.p_3}</p>
        <p className="right-column__text">{translation.about.p_4}</p>
        <p className="right-column__text">{translation.about.p_5}</p>
      </div>
    </section>
  )
}
