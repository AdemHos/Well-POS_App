import React from 'react'
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import InvoicesPage from './pages/InvoicesPage'
import CustomersPage from './pages/CustomersPage'
import StatisticPage from './pages/StatisticPage'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'

const App = () => {
  return (
  <>
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/invoices' element={<InvoicesPage/>}/>
      <Route path='/customers' element={<CustomersPage/>}/>
      <Route path='/statistic' element={<StatisticPage/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      
    </Routes>
   </BrowserRouter>
  </>
  )
}

export default App
