import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const myRoute = createBrowserRouter([
  {
    path:'/',
    element: <div className='text-5xl'>This is my first route.</div>
  },
  {
    path:'/products',
    element:<div className='text-4xl'>This is products Page.</div>
  },
  {
    path:'/about',
    element:<div className='text-4xl'>About this Page.</div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myRoute}></RouterProvider>
  </React.StrictMode>,
)
