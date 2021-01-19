import img_1 from '../images/image-1.png'
import img_2 from '../images/image-2.png'
import img_4 from '../images/image_4.png'
import { useContext } from 'react'
import { TranslationContext } from '../contexts/translationContext'

export default function Portfolio(props) {
  const translation = useContext(TranslationContext)

  return (
    <section className="section" id="portfolio">
      <div className="left-column left-column_color_dark">
        <h2 className="left-column__title">{translation.menu.portfolio}</h2>
      </div>
      <div className="right-column">
        <div className="right-column__table right-column__table_type_portfolio">
          <a
            className="right-column__link"
            href="https://github.com/solnishshka?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github fa-4x" aria-hidden="true"></i>
            <br />
            {translation.portfolio}
          </a>
          <a
            href="https://solnishshka.github.io/russian-travel/index.html"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="right-column__table-image"
              src={img_4}
              alt="Превью проекта Путешествия по России"
            />
          </a>
          <a
            href="https://solnishshka.github.io/mesto-react/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="right-column__table-image"
              src={img_2}
              alt="Превью проекта Место"
            />
          </a>
          <a
            href="https://solnishshka.github.io/how-to-learn/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="right-column__table-image"
              src={img_1}
              alt="Превью проекта Научиться учиться"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
