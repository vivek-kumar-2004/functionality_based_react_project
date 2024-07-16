import React from 'react'
import Home from './components/Home'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Details from './components/Details'
import Create from './components/Create'
import Edit from './components/Edit'


function App() {
  const {search,pathname}=useLocation();

  return (
    <div className='w-full h-screen flex'>
      {(search.length>0 || pathname!="/") && (<Link className='bg-zinc-200 text-red-600 px-2 py-1 ml-12 ml-8 mt-2 rounded-md shadow absolute left-60 top-0 sticy' to='/'>Home</Link>)}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </div>
  )
}

export default App