import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import CreateNotePage from './pages/CreateNotePage'
import NoteDetailsPage from './pages/NoteDetailsPage'
import toast from 'react-hot-toast'


const App = () => {
  return (
    <div>
      <button onClick={() => toast.success("Congrats")}>Click Me</button>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<CreateNotePage/>}/>
          <Route path='/note/:id' element={<NoteDetailsPage/>}/>
      </Routes>
    </div>
    
    
  )
}

export default App