import React, { useState } from 'react'
import './RegistrationCard.css'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../../configs/firebase/Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
// import { doc, setDoc } from 'firebase/firestore'

export default function RegistrationCard({isLogIn, setIsLogIn}) {

  // States to handle the email and password
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  // State to handle the user name
  const [ name, setName ] = useState("")
  // State to handle the confirm password logic
  const [ confirmPassword, setConfirmPassword ] = useState("")
  // state to handle the error
  const [ message, setMessage ] = useState("")
  // State to handle the message color
  const [ messageColor, setMessageColor ] = useState("")

        
  // Create the useNavigate function
  const navigate = useNavigate()

  // Initialize firestore
  // const firestore = getFirestore()

  // function to hanlde the sign Up logic
  const handleSignUp = async (e) => {
    // Prevent the default behaviour of the form
    e.preventDefault()

    // Validate If the passwords match
    if ( password !== confirmPassword) {
      // Update the message state with an error message
      setMessage("Passwords Do Not match")
      // Update the message Color
      setMessageColor("red")
    } else {
      setMessage("") // Have the setMessage function as an empty string 
    }


    // create a new user with email and password
    // using the createUserWithEmailAndPassword function
    createUserWithEmailAndPassword(auth, email, password)
      // .then is promise hander for when everything is successful
      // if the createUserWithEmailAndPassword function is successful
      // receive the userCredential object from firebase which contains the user Authentication data
      .then((userCredential) => {
        // Extract the user object uid, email, accessToken and access the user property containing these information
        const user = userCredential.user
        // console.log
        console.log(user)


        // Save the users name and other information to FireStore
        setDoc(doc(db, "users", user.uid), {
          name: name,
          email: email
        })

        // // Get the document of users from firestore
        // const storedUsers = async () => {
        //   try {
        //     // Create a document of the current user in the users collection in firestore
        //     const usersCollectionRef = doc(firestore, "users")
            
        //     // Use addDoc to create a unique id for the user
        //     await addDoc(usersCollectionRef, user.id)

        //   } catch(error) {}
        // }

        // Update the state of the message function
        setMessage(`Sign Up Successful, success`)
        setMessageColor("green")


        // Wait for a brief moment before redirecting, in order to display the message
        setTimeout(() => {
          // navigate the user to the landing page
          navigate("/")
        }, 2000) // Wait for 1,5 seconds
      })
      // Promise handler for when something goes wrong (e.g., weak password, email already in use, etc.).
      // .(error) is the promise returned when the promise is rejected
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode)
        const errorMessage = error.message

        // Update the state of the message function
        setMessage(`Error: ${errorMessage}`)
        // Update the message color
        setMessageColor('red')
      
        // The .finally() block runs after the promise is settled, whether it was successful or failed.
        // It clears the input fields by setting email and password to an empty string.
      }).finally(() => {
        setName("")
        setEmail(""); 
        setPassword("")
        setPassword("")
        setConfirmPassword("")
      })
  }

  // Handle Log In
  const handleLogIn = (e) => {

    // e.preventDefault()

    // Call the Firebase authentication function to log in a user
    signInWithEmailAndPassword(auth, email, password) // auth: This is the Firebase authentication instance. It connects the function to the authentication service in Firebase.
    // Get the userCredential object to access the user data
    .then((userCredential) => {
      // Extract the user object from  the userCredential
      const user = userCredential.user
      // console.log the user object
      console.log(user)
      
      // Update the state of the message function
      setMessage(`Log In Successful, success`)
      // Update the message color
      setMessageColor("green")

      // Naviage to the shop page after some time
      setTimeout(() => {
        navigate('/shop')
      }, 2000) // Navigate to the shop page after 2 seconds
    })
    // .catch() method handles any errors that occur during the login process (like if the user provides an incorrect email/password).
    .catch((error) => {
      const errorCode = error.code
      console.log(errorCode)
      const errorMessage = error.message
      console.log(errorMessage)
      
      // Update the state of the message function
      setMessage(`${errorMessage}, ${errorCode}`)
      // Update the message Color
      setMessageColor("red")
    })
  }


  // function to handle the log Out lgic
  const handleLogOut = () => {
    signOut(auth).then(() => {
      
      // If Sign Out is Successful Update the message state
      setMessage("You're signed Out successfully. success")
      // Update the message color
      setMessageColor("green")

      // Navigate the user to the landing page when signed Out
      setTimeout(() => {
        navigate('/')
      }, 2000) // Navigate to the landing page after 2 seconds
    }).catch((error) => {
      // An error occurred
      setMessage("Error Signing Out.")
      // Update the message color
      setMessageColor("red")
    })
    
  }
  
  
  
  return (
    <div className='registration-card'>
        <form 
          className='registration-form d-flex flex-column gap-4'
          onSubmit={(e) => {
            e.preventDefault()
            isLogIn ? handleLogIn() : handleSignUp(e)
          }}
        >
          {!isLogIn &&<div className='input-div'>
            <input 
              className='form-control' 
              placeholder='full name'
              type='text'
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>}

          <div className='input-div'>
            <input 
              className='form-control' 
              placeholder='email' 
              type='email'
              value={email}
              onChange={(event) => setEmail(event.target.value)} 
              required 
            />
          </div>

          <div className='input-div'>
            <input 
              className='form-control' 
              placeholder='password' 
              type='password'
              value={password}
              onChange={(event) => {
                setPassword(event.target.value)
                // If the password is less than 8 characters
                if (event.target.value < 8) {
                  setMessage("Password is less than 8 character")
                } else {
                  setMessage("") // Update the function to an empty string
                }
              }}
              required 
            />
          </div>

          {!isLogIn && <div className='input-div'>
            <input 
              className='form-control' 
              placeholder='confirm password' 
              type='password'
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required 
            />
          </div>}
          
          {isLogIn ?
          <input className='btn submit-btn' type='submit' value='Log In' />
          :
          <input className='btn submit-btn' type='submit' value='Register' />
          }


          {isLogIn ?
          <p className=' change text-center ' onClick={() => setIsLogIn(false)}>Dont have an account? Click Here</p>
          :
          <p className=' change text-center ' onClick={() => setIsLogIn(true)}>Already have an account? Click here</p>
          }
        </form>
        <div className='confirmSignUp'></div>
        {message && 
          <div 
            className='message position-fixed bottom-0 start-0 end-0 text-center text-white p-1'
            style={{
              zIndex: 9999,
              backgroundColor: messageColor
            }}
          >
            {message}
          </div>
        }

      <input 
        className='btn btn-warning logout-btn' 
        type='submit' 
        value='log Out' 
        onClick={() => handleLogOut()}
      />
    </div>
  )
}
