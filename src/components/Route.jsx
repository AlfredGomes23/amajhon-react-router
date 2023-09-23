import { createBrowserRouter } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Products from './Products'
import About from './About'
import ProductDetails from './ProductDetails'
import Dashboard from './Dashboard'
import DashboardHome from './DashboardHome'
import Profile from './Profile'
import EditProfile from './EditProfile'



const myRoute = createBrowserRouter([
    {
        path: '/',
        element: <Header></Header>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/products',
                element: <Products></Products>,
                loader: () => fetch('https://dummyjson.com/products')
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/products/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`)  
            },
            {
                path:'/dashboard',
                element: <DashboardHome></DashboardHome>,
                children:[
                    {
                        path:'/dashboard/dashboard',
                        element:<Dashboard></Dashboard>
                    },
                    {
                        path:'/dashboard/profile',
                        element:<Profile></Profile>
                    },
                    {
                        path:'/dashboard/editProfile',
                        element:<EditProfile></EditProfile>
                    }
                ]
            }
        ]
    },

])

export default myRoute;