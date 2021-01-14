import Lead from './Lead';
import About from './About';
import Skills from './Skills';

export default function Main(props){
    return(
        <main className="main">
            <Lead />
            <About />
            <Skills />
        </main>
    );
}