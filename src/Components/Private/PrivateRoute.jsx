import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProveider";
import { Navigate, useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";


const PrivateRoute = ({ children }) => {
    const location = useLocation()
    // console.log(location)
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return (
            <div className="h-[100vh] flex items-center justify-center"><HashLoader color="#36d7b7" /></div>
        )
    }
    if (user) {
        return children
    }

    return <Navigate to="/login" state={location.pathname} >   </Navigate>

};

export default PrivateRoute;