import React from 'react'
import Home from '../pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pricing from '../pages/home/Pricing';
import SignIn from '../pages/home/SignIn'
import SignUp from '../pages/home/SignUp'
import PrivateRoutes from '../utils/PrivateRoutes';
import Dashboard from '../pages/client/Dashboard';
import { AuthProvider } from '../utils/AuthContext';
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>

          <Route exact path='/' element={<Home />} />
          {/* <Route path='/courses' element={<Courses />} /> */}
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/sign_in' element={<SignIn />} />
          <Route path='/sign_up' element={<SignUp />} />
          <Route element={<PrivateRoutes />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/account_info' />
          </Route>
        </Routes>
      </AuthProvider>

    </BrowserRouter>
  )
}


