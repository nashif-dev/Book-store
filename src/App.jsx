import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './user/pages/Home'
import Books from './user/pages/Books'
import Contact from './user/pages/Contact'
import Profile from './user/pages/Profile'
import View from './user/pages/View'
import AdminHome from './admin/pages/AdminHome'
import AdminCollections from './admin/pages/AdminCollections'
import AdminProfile from './admin/pages/AdminProfile'
import Aunth from './pages/Aunth'
import Pnf from './pages/Pnf'
import Preloader from './components/Preloder'
import { useState } from 'react'

function App() {

  const [loading,setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 7500);

  return (
    <>
        <Routes>
          <Route path='/' element={loading?<Preloader/>:<Home/>} />
          <Route path='/login' element={<Aunth/>} />
          <Route path='/register' element={<Aunth insideRegister={true} />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/books' element={<Books/>} />

          <Route path='/user/profile' element={<Profile/>} />
          <Route path='/books/:id/view' element={<View/>} />

          <Route path='/admin/home' element={<AdminHome/>} />
          <Route path='/admin/profile' element={<AdminProfile/>} />
          <Route path='/admin/resources' element={<AdminCollections/>} />

          <Route path='/*' element={<Pnf/>} />
        </Routes>

    </>
  )
}

export default App