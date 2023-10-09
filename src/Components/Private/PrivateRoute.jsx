import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProveider";
import { Navigate } from "react-router-dom";
import { HashLoader } from "react-spinners";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return (
            <div className="h-[100vh] flex items-center justify-center"><HashLoader color="#36d7b7" /></div>
        )
    }
    if (user) {
        return children
    }

    return <Navigate to="/login">  </Navigate>

};

export default PrivateRoute;