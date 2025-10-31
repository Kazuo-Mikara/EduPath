import React from 'react'
import Home from '../pages/home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Pricing from '../pages/home/Pricing';
import SignIn from '../pages/home/SignIn'
import SignUp from '../pages/home/SignUp'
import PrivateRoutes from '../utils/PrivateRoutes';
import DashboardLayout from '../pages/client/Dashboard/DashboardLayout'; // New component
import HomeErrorPage from '../pages/home/HomeErrorPage';
import DashboardErrorPage from '../pages/home/DashboardErrorPage';
import CourseLists from '../pages/client/Courses/CourseLists';
import Tasks from '../pages/client/Tasks'; // Create these components
import Todo from '../pages/client/Todo';
import Projects from '../pages/client/Projects';
import Calendar from '../pages/client/Calendar';
import DashboardHome from '../pages/client/Home/DashboardHome'
import { AuthProvider } from '../utils/AuthContext';
import ViewCourses from '../pages/client/Courses/View_Courses';

const router = createBrowserRouter([
  // Public website pages
  {
    path: '/',
    element: <Home />,
    errorElement: <HomeErrorPage />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
    errorElement: <HomeErrorPage />,
  },
  {
    path: '/sign_in',
    element: <SignIn />,
    errorElement: <HomeErrorPage />,
  },
  {
    path: '/sign_up',
    element: <SignUp />,
    errorElement: <HomeErrorPage />,
  },

  // Protected dashboard pages with nested routing
  {
    path: '/dashboard',
    element: <PrivateRoutes />,
    errorElement: <DashboardErrorPage />,
    children: [
      {
        // Dashboard layout wrapper for all dashboard routes
        path: '',
        element: <DashboardLayout />,
        errorElement: <DashboardErrorPage />,
        children: [
          {
            // Default dashboard home page
            index: true,
            element: <DashboardHome />,
            errorElement: <DashboardErrorPage />,
          },
          {
            // Courses section with nested routes
            path: 'courses',
            children: [
              {
                index: true,
                element: <CourseLists />,
                errorElement: <DashboardErrorPage />,
              },
              {
                path: 'view_course/:id',
                element: <ViewCourses />
              }
            ]
          },
          {
            path: 'tasks',
            element: <Tasks />,
            errorElement: <DashboardErrorPage />,
          },
          {
            path: 'todo',
            element: <Todo />,
            errorElement: <DashboardErrorPage />,
          },
          {
            path: 'projects',
            element: <Projects />,
            errorElement: <DashboardErrorPage />,
          },
          {
            path: 'calendar',
            element: <Calendar />,
            errorElement: <DashboardErrorPage />,
          }
        ]
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