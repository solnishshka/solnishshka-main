export default function Education(props) {
  return (
    <section className="section" id="education">
      <div className="left-column left-column_color_light">
        <h2 className="left-column__title">ОБУЧЕНИЕ</h2>
      </div>
      <div className="right-column">
        <ul className="right-column__table right-column__table_type_education">
          <li>
            <div className="right-column__circle"></div>
            <div className="right-column__line"></div>
          </li>
          <li>
            <p className="right-column__text right-column__text_type_experience">
              2020 - Настоящее время
            </p>
            <h2 className="right-column__table-title">Яндекс.Практикум</h2>
            <p className="right-column__text right-column__text_type_experience">
              Веб-разработчик
            </p>
          </li>
          <li className="right-column__text-item">
            <p className="right-column__text right-column__text_type_experience">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero.
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
            <h2 className="right-column__table-title">МАИ</h2>
            <p className="right-column__text right-column__text_type_experience">
              Прикладная математика и физика
            </p>
          </li>
          <li className="right-column__text-item">
            <p className="right-column__text right-column__text_type_experience">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
