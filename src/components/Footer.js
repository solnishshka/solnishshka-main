import Social from './Social'

export default function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__contacts">
        <p className="footer__contact">Email: testsolnishshka@yandex.ru</p>
        <Social type="footer" />
      </div>
      <p className="footer__copyright">
        ©<span className="footer__copyright-span">SOLN</span>ishshka
      </p>
    </footer>
  )
}
