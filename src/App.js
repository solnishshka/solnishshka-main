import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
