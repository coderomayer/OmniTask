import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import About from './Pages/About';
import Explore from './Pages/Explore';
import AuthProvider from './Provider/AuthProvider.jsx';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import Task from './Pages/Task/Task';
import TaskLayout from './Layout/TaskLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PrivetRout from './Provider/PrivetRout';

const queryClient = new QueryClient()



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        index: true,
        element: <Home></Home>
      },

      {
        path: '/about',
        element: <About></About>
      },

      {
        path: '/explore',
        element: <Explore></Explore>
      },

      {
        path: '/registration',
        element: <Registration></Registration>
      },

      {
        path: '/login',
        element: <Login></Login>
      },
    ]
  },

  {
    path: '/task',
    element: <TaskLayout></TaskLayout>,

    children: [

      {
        index: true,
        element: <Task></Task>
      }

    ]

  }

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
