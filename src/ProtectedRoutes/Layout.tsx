import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main>
        <Outlet />
        {/* the outlet represent all the children of the layout componets */}
    </main>
  )
}

export default Layout