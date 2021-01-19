import Lead from './Lead'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'
import Portfolio from './Portfolio'

export default function Main(props) {
  return (
    <main className="main">
      <Lead />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Portfolio />
    </main>
  )
}
