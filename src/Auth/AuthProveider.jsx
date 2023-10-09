import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase.config";

export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider()

const AuthProveider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // google Login

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }


    // create a account
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login account

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sing out

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    //  user name 
    const userName = (updateData) => {
        return updateProfile(auth, user, updateData)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)

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
        userName,
        loading

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProveider;