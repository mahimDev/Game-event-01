import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase.config";

export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider()

const AuthProveider = ({ children }) => {

    const [user, setUser] = useState(null)

    // google Login

    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }


    // create a account
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login account

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sing out

    const logOut = () => {
        return signOut(auth)
    }

    //  user name 
    const userName = (updateData) => {
        return updateProfile(auth, user, updateData)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        signIn,
        googleLogin,
        logOut,
        userName

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProveider;