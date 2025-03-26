import { Outlet } from "react-router-dom"
import Topbar from "./component/TopBar"
const Layout=()=>{
    return(
        <>
        <Topbar/>
        <Outlet/>
        </>
    )
}

export default Layout