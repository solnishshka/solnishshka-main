import img_1 from '../images/image-1.png';
import img_2 from '../images/image-2.png';
import img_4 from '../images/image_4.png';


export default function Portfolio(props) {
  return (
    <section className="section" id="portfolio">
      <div className="left-column left-column_type_dark">
        <h2 className="left-column__title">ПОРТФОЛИО</h2>
      </div>
      <div className="right-column">
        <div className="right-column__table right-column__table_type_portfolio">
            <a href="https://solnishshka.github.io/russian-travel/index.html" target="_blank"><img className="right-column__table-image" src={img_4} /></a>
            <a href="https://solnishshka.github.io/mesto-react/" target="_blank"><img className="right-column__table-image" src={img_2} /></a>
            <a href="https://solnishshka.github.io/how-to-learn/" target="_blank"><img className="right-column__table-image" src={img_1} /></a>
            <a className="right-column__link" href="https://github.com/solnishshka?tab=repositories" target="_blank">Все проекты в <i class="fa fa-github" aria-hidden="true"></i> Github</a>
        </div>
      </div>
    </section>
  )
}
