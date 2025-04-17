import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './components/Add'
import Adit from './components/Adit'
import Showcard from './components/Showcard'
import Login from './components/Login'
import Singin from './components/Singin'

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Add/>}/>
          <Route path='/edit' element={<Adit/>}/>
          <Route path='/show' element={<Showcard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/singin' element={<Singin/>}/>



        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App