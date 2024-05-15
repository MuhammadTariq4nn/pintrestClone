import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"
import Explore from './Compoments/Explore.jsx'
import ProductOverview from './Compoments/ProductOverview.jsx';
import UserContextProvider from './contextapi/UserContextProvider.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
   <Route>
    <Route path="/" element={<App/>}/>
    <Route path="/Explore" element={<Explore/>}/>
    <Route path="/Explore/productOverView/:id" element={<ProductOverview/>}/>
   </Route> 
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <UserContextProvider>
       <RouterProvider router={router}/>
     </UserContextProvider>
  </React.StrictMode>
)
