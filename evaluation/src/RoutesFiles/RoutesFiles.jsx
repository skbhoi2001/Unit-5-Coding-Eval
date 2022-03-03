import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home} from "../components/Home"
import {About} from "../components/About"
import {Login} from "../components/Login"
import { User } from '../components/User'
import { UserDetails } from '../components/UserDetails'
export const RoutesFiles = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="user/*" element={<User/>} >
            <Route path=":id" element={<UserDetails/>} />
        </Route>
    </Routes>
  )
}
