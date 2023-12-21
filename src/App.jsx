// import { Routes, Route}  from 'react-router-dom'
import './App.css'

import Home from './Pages/Home'
import Navigation from './Components/Navigation'
import Footer from './Components/Footer'


function App() {

  return (
    <>
    <Navigation />
    <Home />
    <Footer />
    

    {/* <Home/> */}
      {/* <Route path='/home' element={<Home />}/> 
     <Routes>
      <Route path='/home' element={<Home />}/> 
     </Routes> */}
    </>
  )
}

export default App
