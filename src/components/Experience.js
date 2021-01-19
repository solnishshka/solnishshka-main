export default function Experience(props) {
  return (
    <section className="section" id="experience">
      <div className="left-column left-column_color_dark">
        <h2 className="left-column__title">ОПЫТ РАБОТЫ</h2>
      </div>
      <div className="right-column">
        <ul className="right-column__table right-column__table_type_experience">
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
              Верстка (адаптивная по макету с применением flexbox и grid-layot)
              и разработка веб-приложений с применением нативного JavaScript, а
              также с использованием фреймворка React JS. В проектах
              использовала принципы ООП, асинхронные запросы и их обработку,
              React Context для поднятия глобального стейта. Также разрабатывала
              бекенд с REST Api для одного из проектов на Express в связке с
              Mongo DB.
            </p>
            <p className="right-column__text right-column__text_type_experience">
              Стек технологий: HTML5, CSS (flex, grid, медиа-запросы),
              JavaScript, React JS, асинхронные операции, ООП, REST Api,
              WebPack, БЭМ, основы Node.Js, Express, Mongo DB.
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
            <h2 className="right-column__table-title">Яндекс</h2>
            <p className="right-column__text right-column__text_type_experience">
              Старший специалист технической поддержки в группе поддержки почты
              и околопочтовых сервисов
            </p>
          </li>
          <li className="right-column__text-item">
            <p className="right-column__text right-column__text_type_experience">
              Начинала в outstaff с поддержки пользователей (решение проблем и
              ответы пользователям, баг-репорты сервису), затем перешла в штат,
              где занималась организацией и выстраиванием процессов поддержки,
              настройкой автоматизаций.
            </p>
            <p className="right-column__text right-column__text_type_experience">
              Функциональные навыки: HTML, CSS, Groovy, JS, Python, SQL, Git
              (bitbacket), Scrum, Yandex DataLens
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
              Первая Климатическая Компания
            </h2>
            <p className="right-column__text right-column__text_type_experience">
              Оператор базы данных
            </p>
          </li>
          <li className="right-column__text-item">
            <p className="right-column__text right-column__text_type_experience">
              Работала с 1С - занималась заведением новых позиций, выдавала
              разрешения на отгрузку, а также составляла финансовые отчеты.
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
              Кадровое агенство Нянюшка
            </h2>
            <p className="right-column__text right-column__text_type_experience">
              Специалист IT отдела
            </p>
          </li>
          <li className="right-column__text-item">
            <p className="right-column__text right-column__text_type_experience">
              Занималась поддержкой пользователей, обслуживанием компьютеров, а
              также поддержкой корпоративного сайта.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
