import { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, } from "firebase/auth";
import { useEffect } from 'react';
import initializeAuthentication from '../Firebase/Firebase.init';



initializeAuthentication();
const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, provider)
            .then((result) => {

                setUser(result.user);

            }).catch((error) => {


                setError(error.message);

            })

            .finally(() => setIsLoading(false))

    }
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log("ok", user);
                setUser(user)
            }
            setIsLoading(false)
        })
    }, [])
    return {
        user,
        error,
        isLoading,
        signInUsingGoogle,
        logOut
    }
};

export default UseFirebase;