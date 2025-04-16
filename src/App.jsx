import React from 'react'
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'

const App = () => {
  return (
  <>
   <BrowserRouter>
   <Routes>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/cart' element={<CartPage/>}/>
    </Routes>
   </BrowserRouter>
  </>
  )
}

export default App
