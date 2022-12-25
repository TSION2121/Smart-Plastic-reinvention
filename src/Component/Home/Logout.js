import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Login/Login'

const Logout = () => {
  return (
    <div>
        

        <Routes>
            <Route path="/" element={<Login /> } />
        </Routes>



    </div>
  )
}

export default Logout