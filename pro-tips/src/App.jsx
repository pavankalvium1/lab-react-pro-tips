
import { BrowserRouter , Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Kalvium from './components/Kalvium';
import RegistrationForm from './components/registrationForm';
import Contacts from './components/Contacts';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to='/' className='Link'>Kalvium❤️</Link>
          <div className='links'>
          <Link to='/contacts' className='Link'>Contact</Link>
          <Link to='/registrationForm' className='Link'>Registration</Link>
          </div>
          <Routes>
            <Route path="/" element={<Kalvium />} />
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/registrationForm" element={<RegistrationForm/>} />
          </Routes>
        </nav>
      </div>
    </BrowserRouter>
  )
}

export default App;