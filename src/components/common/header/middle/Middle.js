import { Heart, Search, ShoppingBagIcon, User2, UserCheck2 } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Middle.css'
// import { auth } from '../../../configs/firebase/Firebase'
// import { onAuthStateChanged } from 'firebase/auth'
import { useAuth } from '../../../authcontext/AuthContext'

export default function Middle() {

  // state to control the search bar display
  const [ show, setShow ] = useState(false)

  // // states to update the current user variable
  // const [ isCurrentUser, setIsCurrentUser ] = useState(null)

  // useEffect(() => {
  //   // Hold the onAuth state in a variable so that we can clean It Up later
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     // Update the current user state with the latest value
  //     setIsCurrentUser(user)
  //   })

  //   return () => unsubscribe() // clean up the onAuth state function when the component is unmounted
  // })

  const { currentUser } = useAuth()

  return (
    <header>
      <div className='shop-now'>
        <Link to='/shop'>Shop Now</Link>
      </div>
      <div className='logo'>
        <Link to='/'>Ro&BRU</Link>
      </div>
      <div>
        <nav className='nav-bar d-flex align-items-center'>
          <div className={`search-container ${ show ? "expanded" : ""}`}>
            <form>
              <input 
                type='text'
                placeholder='search'
                className='search-input'
              />
              <Search 
                size={28}
                id='searchIcon'
                onClick={() => setShow(!show)}
              />
            </form>
          </div>
          <Link to='/registration'>
            { currentUser ? <UserCheck2 size={30}/> : <User2 size={30}/> }
          </Link>

          <Link to='/wishlist'>
            <Heart size={30}/>
          </Link>
          <Link to='/cart'>
            <ShoppingBagIcon size={25}/>
          </Link>
        </nav>
      </div>
    </header>
  )
}
