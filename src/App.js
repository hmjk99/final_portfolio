import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'boxicons/css/boxicons.min.css';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
