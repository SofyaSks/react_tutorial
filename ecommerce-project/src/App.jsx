import { Routes, Route } from 'react-router'
import './App.css'
import './pages/HomePage'
import { HomePage } from './pages/HomePage'

function App() {


  return (
    <Routes>
      <Route index element={<HomePage />}/>
      <Route path='checkout' element={<div>test page</div>}/>
      
    </Routes>
    
  )
}

export default App
