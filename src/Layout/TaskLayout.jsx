import NavBar from "@/MyComponents/NavBar";
import { Outlet } from "react-router-dom";

const TaskLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    )
}

export default TaskLayout;