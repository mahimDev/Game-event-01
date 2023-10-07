import { createContext } from "react";

export const AuthContext = createContext(null)


const AuthProveider = ({ children }) => {









    const authInfo = {
        name: "mahim"
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProveider;