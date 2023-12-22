import { Outlet } from "react-router-dom";
import Footer from "../MyComponents/Footer";
import NavBar from "../MyComponents/NavBar";

const MainLayout = () => {
    return (
       <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
       <Footer></Footer>
       </div>
    )
}

export default MainLayout;