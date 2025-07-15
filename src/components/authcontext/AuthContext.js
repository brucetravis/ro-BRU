import React, { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../configs/firebase/Firebase'


// create a context
const AuthContext = createContext()

export default function AuthProvider({ children }) {


  // states to update the user state variable with the current value
  const [ currentUser, setCurrentUser ] = useState()

  useEffect(() => {
    // store the listener in a varibale so that we can clean It up later
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // If the user is logged in
      if (user) {
        // Update the currentuser
        setCurrentUser(user)
        // inform the user that they have been logged in
        console.log(`User Logged in: ${user.email}`)
      } else {
        // Update the current user to null
        setCurrentUser(null)
        // console.log and inform that the user has been logged out
        console.log(`No user Logged In`)
      }
    })

    // clean up 
    return () => unsubscribe() // clean up the listener when the component is unmounted
  }, [])

  // Return the context provider to wrap the children components
  return (
    <AuthContext.Provider value={{ currentUser }}>
      { children }
    </AuthContext.Provider>
  )
}

// create a simple Hook that you can easily use
export function useAuth() {
  return useContext(AuthContext)
}
