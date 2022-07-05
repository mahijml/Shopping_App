import { createContext, useContext, useState , useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import {auth} from"../firebase";

const userAuthContext = createContext();
export function UserAuthContextProvider({children}){
    const [user , setUser] = useState();
    function logIn (email , password){
        return signInWithEmailAndPassword(auth, email, password)
    }
    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email,password);        
    }
    function logOut(){
        setUser('');
        return signOut(auth);
    }
    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider()
        return signInWithPopup(auth , googleAuthProvider); 
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged( auth , (currentuser) =>{
            if(currentuser){
                console.log("Auth" , currentuser.email);
                setUser(currentuser.email);
            }
        });

        return unsubscribe
    } ,[]);
    return (
        <userAuthContext.Provider value={{user , logIn , signUp , logOut , googleSignIn}}>
            { children}
        </userAuthContext.Provider>
    )
}
export function useUserAuth(){
    return useContext(userAuthContext);
}