
import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Apiconsume from './Components/Apiconsume'


function App() {
  const navigate = useNavigate()


 
  

  return (
    <div>
      <button onClick={()=>navigate('/about')}>about</button>
      
      
    

    <Routes>
      <Route path = '/' element={<Home />}/>
      <Route path = '/about' element={<About />}/>
      <Route path = '/contact' element={<Contact />}/>
    </Routes>

    <Apiconsume />
    </div>
  )
}

export default App
