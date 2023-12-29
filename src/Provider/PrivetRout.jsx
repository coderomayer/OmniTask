import { useContext } from "react";
import { userAuth } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";




const PrivetRout = ({children}) => {

    const {user, loading} = useContext(userAuth);
    const location = useLocation()

    if (loading) {
        return <span>Loading....</span>
    }

    if (user) {
        return children;
    }

    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    )
}

export default PrivetRout;