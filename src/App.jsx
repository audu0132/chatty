import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate'
import Chat from './pages/Chat/Chat'
import Login from './pages/Login/Login'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/profile' element={<ProfileUpdate />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </>
  )
}

export default App
