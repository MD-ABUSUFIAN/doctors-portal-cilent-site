import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword} from "firebase/auth";
import initializeFirebaseApp from "../Pages/Login/Login/Firebase/firebase.init";


initializeFirebaseApp();

const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [isLoading,setIsLoading]=useState(true);
    const [authError,setAuthError]=useState('');
    const auth = getAuth();


    //register email authentication Part

    const registerUser =(email,password)=>{
      setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setAuthError('');
    // ...
  })
  .catch((error) => {
    setAuthError(error.message) ;
    // ..
  }).finally(()=>setIsLoading(false));

    }


    //loginuser with email and password part 

    const loginUser=(email,password) => {
      setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setAuthError('')
    // ...
  })
  .catch((error) => {
    setAuthError(error.message) ;
  }).finally(()=>setIsLoading(false));
    }


//    signout Authentication part


    const logOut=()=>{
      setIsLoading(true);
    
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        }).finally(()=>setIsLoading(false));

    };


    //On state change Part

    useEffect(()=>{

        const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              // ...
            } else {
              setUser({})
            }
            setIsLoading(false);
          });
          return ()=>unsubscribe;

    },[])











return {
    user,
    isLoading,
    authError,
    registerUser,
    loginUser,
    logOut,
}
}
export default useFirebase;