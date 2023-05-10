import { BrowserRouter} from 'react-router-dom';
import './App.css';
import 'boxicons/css/boxicons.min.css';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact'; 

function App() {
  return (
    <>
      <Nav/>
      <BrowserRouter>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </BrowserRouter>
    </>
  );
}

export default App;
