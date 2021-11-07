import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,updateProfile,getIdToken} from "firebase/auth";
import initializeFirebaseApp from "../Pages/Login/Login/Firebase/firebase.init";


initializeFirebaseApp();

const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [isLoading,setIsLoading]=useState(true);
    const [authError,setAuthError]=useState('');
    const [admin,setAdmin]=useState(false);
    const [token,setToken]=useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();




    //GOOGLE AUTHENTICATION

    const googleLogin=(location,history)=>{
      setIsLoading(true);
      signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user=result.user;
    
    saveUser(user.email,user.displayName,'PUT');
  const destination = location?.state?.from || '/';
         history.replace(destination);
   setUser(result.user) 
   setAuthError('');
    // ...
  }).catch((error) => {
   
    setAuthError(error.message)
   
  }).finally(()=>setIsLoading(false));

    }


    //register email authentication Part

    const registerUser =(email,password,history,name)=>{
      setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setAuthError('');
    const newUser={email,displayName:name};
    setUser(newUser);

// save user to the database
saveUser(email,name,'POST');

    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
    history.replace('/')
    // ...
  })
  .catch((error) => {
    setAuthError(error.message) ;
    // ..
  }).finally(()=>setIsLoading(false));

    }


    //loginuser with email and password part 

    const loginUser=(email,password,location,history) => {
      setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {

    const destination=location?.state.from || '/';
    history.replace(destination);
    
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
              setUser(user);
              getIdToken(user)
              .then(idToken=>{
                setToken(idToken);
              })
              // ...
            } else {
              setUser({})
            }
            setIsLoading(false);
          });
          return ()=>unsubscribe;

    },[]);

    useEffect(()=>{
      fetch(`http://localhost:5000/users/${user.email}`)
      .then(res=>res.json())
      .then(data=>setAdmin(data.admin))

    },[user.email])


const saveUser=(email,displayName,method)=>{

  const user={email,displayName};
  fetch('http://localhost:5000/users',{
    method: method,
    headers:{'content-type': 'application/json'},
    body: JSON.stringify(user)
    // .then(res=>res.json())
    // .then (data=>console.log(data))
  })

}
return {
    user,
    isLoading,
    admin,
    authError,
    registerUser,
    loginUser,
    logOut,
    token,
    googleLogin
}
}
export default useFirebase;