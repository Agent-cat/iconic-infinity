import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import SignIn from '../Pages/Signin'
import SignUp from '../Pages/Signup'
import Aboutus from '../Pages/Aboutus'
import Services from '../Pages/Services'
import Portfolio from '../Pages/Portfolio'
import Innovation from '../Pages/Innovation'
import Contact from '../Pages/Contact'
import JobDetails from '../Pages/JobDetails'
import AdminPanel from '../Pages/AdminPanel'
import GetStarted from '../Pages/GetStarted'


const Navroutes = ({ onLogin, user }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn onLogin={onLogin} />} />
      <Route path="/signup" element={<SignUp onLogin={onLogin} />} />
      <Route path="/about-us" element={<Aboutus/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
      <Route path="/innovation" element={<Innovation/>} />
      <Route path="/careers" element={<Contact/>} />
      <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/contact" element={<GetStarted/>} />
      \
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  )
}

export default Navroutes