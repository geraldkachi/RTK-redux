import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Missing from '../components/posts/Missing'
import Layout from './Layout'

const AppRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
            {/* public routes */}
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='linkpage' element={<Linkpage />} />
            <Route path='unauthorized' element={<Unauthorized />} />

            {/* we want to protect these routes */}
            <Route path="home" element={<Home />} />
            <Route path="editor" element={<Editor />} />
            <Route path="admin" element={<Admin />} />
            <Route path="lounge" element={<Lounge />} />
            {/* catch all */}
            <Route path="*" element={<Missing />} />
        </Route>
    </Routes>
  )
}

export default AppRoute