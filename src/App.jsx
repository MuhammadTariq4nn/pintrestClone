import Navbar from './Compoments/Navbar'
import './App.css'
import AnimatingCntnt from './Compoments/AnimatingCntnt'
import ExplorePageNav from './Compoments/ExplorePageNav'
import Explore from './Compoments/Explore'
import ProductOverview from './Compoments/ProductOverview'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <Navbar/>
    <Outlet/>
    <AnimatingCntnt/>
    {/* <ExplorePageNav/> */}
    {/* <Explore/> */}
    {/* <ProductOverview/> */}
    </>
  )
}

export default App
