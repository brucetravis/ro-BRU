import React, { useState, useEffect } from 'react'
import './Top.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../authcontext/AuthContext'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
// import { auth, db } from '../../../configs/firebase/Firebase'

export default function Top() {
  
  // Array of words to cycle thorugh
  const texts = [
    "Empowered Elegance | Ladies in Their Prime", 
    "Free Shipping on Orders Over $200 | Hassle-Free Returns Within 3 Days",
    "Mens Collection COming Soon",
    "Explore Our Men's Collection | Strength & Style Redefined"
  ]


  // State to Update the indices of the words
  const [ index, setIndex ] = useState(0) // set the initial index to 0


  // funcction to cycle thorugh the words
  useEffect(() => {
    // use setInterval to cycle through the words at set Intervals
    const textInterval = setInterval(() => {
      // Update the index using the function setIndex
      setIndex((prevIndex) => (prevIndex + 1) % texts.length) // cycle through the words in the array

    }, 1500) // Change after 1.5 seconds

    // Clear tthe interval when the component unmounts
    return () => clearInterval(textInterval) // clearing the textInterval

  }, [])

  const { currentUser } = useAuth()
  // states to update the name fetched from the database
  const [ userName, setUserName ] = useState(null) // Initial state  is a string to make It flexible

  // Initialize firestore
  const firestore = getFirestore()

  // useEffect to listen and Update the current user name
  useEffect(() => {
    // Check if the current user exists
    if (currentUser) {
      // Get the user document containing the user information
      const getUserInfo = async () => {
        try{
          // Create a reference to the users document
          const userRef = doc(firestore, "users", currentUser.uid)

          // fetch the users document
          const userSnapShot = await getDoc(userRef)


          // If the document exists
          if (userSnapShot.exists()) {
            // Get the username
            const userNameData = userSnapShot.data().name
            // Update the username state then return
            setUserName(userNameData)
          } else {
            console.log("No such Document exists")
            // Set the username to null
            setUserName(null)
          }


        } catch(error) {
          console.error("Error in getting the user document.")
        }
      }
      
      // Call the getUserInfor function
      getUserInfo()
    }

  }, [currentUser]) // Dependecy array ensures that this runs when the current user changes
  
  return (
    <div className='top-header container-fluid d-flex justify-content-between justify-between'>
      {/* Empowered Elegance | Ladies in Their Prime */}
      {/* Explore Our Men's Collection | Strength & Style Redefined */}
      {/* Free Shipping on Orders Over $200 + Hassle-Free Returns Within 3 Days */}
      <Link
        to='/sellers'
      >
        Sell on Ro&BRU
      </Link>
      <p className='top-ads mt-1 '>{texts[index]}</p>
      { userName ? <p className='text-black'>Welcome {userName}</p> : <p className='text-black'>User not signed In ...</p>}
    </div>
  )
}
