import Social from './Social'

export default function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__contacts">
        <p className="footer__contact">+0 (000) 000-00-00</p>
        <p className="footer__contact">testsolnishshka@yandex.ru</p>
      </div>
      <Social type="footer" />
      <p className="footer__copyright">
        ©<span className="footer__copyright-span">SOLN</span>ishshka
      </p>
    </footer>
  )
}
