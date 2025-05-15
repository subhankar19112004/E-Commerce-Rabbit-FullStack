import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserLayout from './components/Layout/UserLayout'
import AdminLayout from './components/Layout/AdminLayout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserLayout/>}></Route>
        <Route path='/admin' element={<AdminLayout/>}></Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default App