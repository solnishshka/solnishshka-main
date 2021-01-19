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
              В рамках обучения в Практикуме научилась качественно верстать
              (адаптивная верстка с применением различных технологий), освоила
              принципы БЭМ, обучалась разработке на нативном JavaScript
              (взаимодействие с Api, асинхронные операции, ОПП, замыкания
              функций и тп), а также освоила React (React Context, React
              Router).
            </p>
            <p className="right-column__text right-column__text_type_experience">
              В настоящее время изучаю основы бекенда для фронтед-разработчика -
              Node.JS, Express, создание REST Api, а также принципы работы с
              Mongo DB.
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
              Изучала основы программирования и информационных технологий,
              математический анализ, дискретную математику и линейную алгебру.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
