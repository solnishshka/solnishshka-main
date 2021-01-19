import { useContext } from 'react'
import { TranslationContext } from '../contexts/translationContext'

export default function Skills(props) {
  const translation = useContext(TranslationContext)

  return (
    <section className="section" id="skills">
      <div className="left-column left-column_color_light">
        <h2 className="left-column__title">{translation.menu.skills}</h2>
      </div>
      <div className="right-column">
        <h2 className="right-column__title">HARD SKILLS</h2>
        <ul className="right-column__table right-column__table_type_hard">
          <li className="right-column__table-item">
            <p className="right-column__text">JavaScript</p>
            <div className="right-column__loading-bar loading"></div>
          </li>
          <li className="right-column__table-item">
            <p className="right-column__text">React</p>
            <div className="right-column__loading-bar loading_type_75"></div>
          </li>
          <li className="right-column__table-item">
            <p className="right-column__text">HTML5</p>
            <div className="right-column__loading-bar loading"></div>
          </li>
          <li className="right-column__table-item">
            <p className="right-column__text">CSS</p>
            <div className="right-column__loading-bar loading"></div>
          </li>
          <li className="right-column__table-item">
            <p className="right-column__text">{translation.skills.oop}</p>
            <div className="right-column__loading-bar loading"></div>
          </li>
          <li className="right-column__table-item">
            <p className="right-column__text">Git</p>
            <div className="right-column__loading-bar loading_type_75"></div>
          </li>
          <li className="right-column__table-item">
            <p className="right-column__text">Webpack</p>
            <div className="right-column__loading-bar loading"></div>
          </li>
          <li className="right-column__table-item">
            <p className="right-column__text">{translation.skills.bem}</p>
            <div className="right-column__loading-bar loading"></div>
          </li>
          <li className="right-column__table-item">
            <p className="right-column__text">REST API</p>
            <div className="right-column__loading-bar loading_type_75"></div>
          </li>
          <li className="right-column__table-item">
            <p className="right-column__text">Node.js</p>
            <div className="right-column__loading-bar loading_type_50"></div>
          </li>
        </ul>
        <h2 className="right-column__title">ADVANCED SKILLS</h2>
        <ul className="right-column__table right-column__table_type_advanced">
          <li className="right-column__table-item">
            <p className="right-column__text">Scrum</p>
            <div className="right-column__loading-bar loading"></div>
          </li>
          <li className="right-column__table-item">
            <p className="right-column__text">Figma</p>
            <div className="right-column__loading-bar loading_type_75"></div>
          </li>
          <li className="right-column__table-item">
            <p className="right-column__text">Photoshop</p>
            <div className="right-column__loading-bar loading_type_50"></div>
          </li>
          <li className="right-column__table-item">
            <p className="right-column__text">Linux</p>
            <div className="right-column__loading-bar loading_type_50"></div>
          </li>
          <li className="right-column__table-item">
            <p className="right-column__text">PHP</p>
            <div className="right-column__loading-bar loading_type_50"></div>
          </li>
          <li className="right-column__table-item">
            <p className="right-column__text">CMS ModX, Wordpress</p>
            <div className="right-column__loading-bar loading_type_75"></div>
          </li>
        </ul>
        <h2 className="right-column__title">SOFT SKILLS</h2>
        <ul className="right-column__table">
          <li className="right-column__table-item">
            <p className="right-column__text">
              {translation.skills.self_managment}
            </p>
          </li>
          <li className="right-column__table-item">
            <p className="right-column__text">{translation.skills.teamwork}</p>
          </li>
          <li className="right-column__table-item">
            <p className="right-column__text">
              {translation.skills.communication}
            </p>
          </li>
          <li className="right-column__table-item">
            <p className="right-column__text">
              {translation.skills.self_dependence}
            </p>
          </li>
          <li className="right-column__table-item">
            <p className="right-column__text">{translation.skills.problems}</p>
          </li>
          <li className="right-column__table-item">
            <p className="right-column__text">{translation.skills.stress}</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
