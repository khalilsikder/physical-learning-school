import { useEffect, useState } from "react";
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword,signInWithPopup,signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";
export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()
    const createUser = (email,password) =>{
        setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUserProfile=(name,photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const resetPassword = email =>{
        setLoading(true)
        return sendPasswordResetEmail(auth,email)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('current user', currentUser.email);

            // get and set token
            if(currentUser){
                axios.post('http://localhost:5000/jwt',{email:currentUser.email})
                .then(data =>{
                    console.log(data.data.token)
                    localStorage.setItem('access.token',data.data.token)
                })
            }
            else{
                localStorage.removeItem('access.token')
            }

            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,loading,createUser,updateUserProfile,signIn,logOut,signInWithGoogle,resetPassword
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;