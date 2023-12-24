import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './Pages/Home'
import YogaTeacherTraining from './Pages/YogaTeacherTraining'
import Navigation from './Components/Navigation'
import Footer from './Components/Footer'


function App() {

  return (
    <>
      {/* <Navigation />
    <Home />
    <Footer /> */}

      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
