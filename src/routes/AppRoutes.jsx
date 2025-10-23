import React from 'react'
import Home from '../pages/home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Pricing from '../pages/home/Pricing';
import SignIn from '../pages/home/SignIn'
import SignUp from '../pages/home/SignUp'
import PrivateRoutes from '../utils/PrivateRoutes';
import Dashboard from '../pages/client/Dashboard/Dashboard';
import ErrorPage from '../pages/home/ErrorPage';
import Courses from '../pages/client/Courses';
import { AuthProvider } from '../utils/AuthContext';
import ViewCourses from '../pages/client/Courses/View_Courses';

const router = createBrowserRouter([
  // Public website pages
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/sign_in',
    element: <SignIn />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/sign_up',
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },

  // Protected dashboard pages
  {
    path: '/dashboard',
    element: <PrivateRoutes />,
    errorElement: <ErrorPage />,
    children: [
      {
        // Default dashboard page
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'view_courses/:id',
        element: <ViewCourses />
      },
      {
        path: 'courses',
        element: <Courses />,
      },
      {
        path: 'tasks',
        element: <Dashboard />, // Replace with Tasks component when available
      },
      {
        path: 'todo',
        element: <Dashboard />, // Replace with Todo component when available
      },
      {
        path: 'projects',
        element: <Dashboard />, // Replace with Projects component when available
      },
      {
        path: 'calendar',
        element: <Dashboard />, // Replace with Calendar component when available
      }
    ]
  }
])

export default function AppRoutes() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

//  <BrowserRouter>
//       <AuthProvider>
//         <Routes>

//           <Route exact path='/' element={<Home />} />
//           {/* <Route path='/courses' element={<Courses />} /> */}
//           <Route path='/pricing' element={<Pricing />} />
//           <Route path='/sign_in' element={<SignIn />} />
//           <Route path='/sign_up' element={<SignUp />} />
//           <Route path='/error' element={<ErrorPage />} />
//           <Route element={<PrivateRoutes />}>
//             <Route path='/dashboard' element={<Dashboard />} />
//             <Route path='/account_info' />
//           </Route>
//         </Routes>
//       </AuthProvider>

//     </BrowserRouter>
