import './App.css';
import NavBar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AboutCompany from './pages/AboutCompany';
import AboutMe from './pages/AboutMe';
import Member from './pages/Member';
import Members from './pages/Members';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/members' element={<Members/>}>
          <Route path=':memberName' element={<Member/>}/>
        </Route>
        <Route path='/about' element={<About/>}>
            <Route path='company' element={<AboutCompany/>}/>
            <Route path='me' element={<AboutMe/>}/>
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
