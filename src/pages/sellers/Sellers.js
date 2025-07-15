import React, { useState } from 'react'
import './Sellers.css'
import { auth } from '../../components/configs/firebase/Firebase';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

export default function Sellers() {

    const instructions = [
        "Log In as a seller",
        "Upload a Product",
        "Provide clear, high-quality product images (at least 3 angles)",
        "Write a detailed and honest product description including size, color, material, and use",
        "Set competitive and clear pricing with any applicable taxes or shipping costs",
        "Update stock levels daily and mark products as out of stock when unavailabel",
        "Ship orders within [X] business days using reliable and trackable shipping methods",
        "Respond to customer inquiries within 24 hours with professional language",
        "Process returns and refunds within [X] days if products are defective or incorrect",
        "Encourage customers to leave honest reviews but avoid incentivizing positive reviews",
        "Check and update store descriptions, banners, and promotions regularly",
        "Ensure all products listed comply with legal standards and intellectual property rights",
        "Maintain a high customer satisfaction rating for continued selling privileges"
    ];

    // state to update the store name
    const [ storeName, setStoreName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ messageColor, setMessageColor ] = useState('')

    const navigate = useNavigate()
    
    const firestore = getFirestore()

    const handleSubmit = async (e) => {
        // Prevent the default function of a form which is (loading an entire page)
        e.preventDefault()


        if (auth.currentUser) {
            const uid = auth.currentUser.uid

            // Create a reference path to the document you want to write the new seller details
            const sellerRef = doc(firestore, 'sellers', uid)

            // Check If the seller already exists
            const docSnap = await getDoc(sellerRef) // wait to return a promise
            
            // If they exist
            if (docSnap.exists()) {
                // If the document exists, Update the user
                setMessage("Seller already exists.")
                setMessageColor('red')

                setTimeout(() => {
                    setMessage('') //clear the essage after 2 seconds
                }, 2000)
            } else {
                // If the document does not exist create It
                // create a document for the seller
                await setDoc(sellerRef, {
                    name: auth.currentUser.displayName,
                    email: auth.currentUser.email,
                    store: storeName,
                    joinedAt: new Date(),
                    isActive: true
                })
                
                setMessage('Seller Added')
                setMessageColor('green')

                // Navigate to the products Upload page after some time
                setTimeout(() => {
                    setMessage('') //clear the essage after 2 seconds
                    navigate('/productsupload')
                }, 2000)
            }


        } else {
            // create a new user
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password)
                const newUserAsSeller = userCredential.user


                // Create a reference to a document path
                // "I'm pointing to a document inside the 'sellers' collection, and its ID will be the user's UID."
                const newUserAsSellerSellerRef = doc(firestore, 'sellers', newUserAsSeller.uid)

                // Check if the seller exists
                const docSnap = await getDoc(newUserAsSellerSellerRef)

                // If they exists
                if (docSnap.exists()) {
                    // Inform the user that the seller already exists
                    setMessage('Seller Already Exists')
                    setMessageColor('red')
                    
                    // clear the message after some time
                    setTimeout(() => {
                        setMessage('') // clear the message after 2 seconds
                    }, 2000)
                } else {
                    // Create a document for the new seller
                    await setDoc(newUserAsSellerSellerRef, {
                        name: newUserAsSeller.displayName || 'New Seller',
                        email: newUserAsSeller.email,
                        store: storeName,
                        joinedAt: new Date(),
                        isActive: true
                    })

                    setMessage('New seller account created and stored in Firestore.')
                    setMessageColor('green')

                    // Nvaigate to the productsupload page after some time
                    setTimeout(() => {
                        setMessage('') // Clear the message after 2 seconds
                        navigate('/productsupload')
                    }, 2000)
                }
                
            } catch (error) {
                setMessage({error})
                setMessageColor('red')
            }
        }
    }
    
    
  return (
    <section className=''>
        <div className='row d-flex align-items-center justify-content-center gap-3'>
            <div className='instructions col-12 col-md-6 col-lg-4'>
                <h3>Welcome to the Ro&BRU Sellers Page</h3>
                <h4>Steps to sell on Ro&BRU</h4>
                {instructions.map((instruction, index) => (
                    <div  key={instruction.id} className='d-flex gap-5'>
                        <p>
                            {index + 1}. {instruction}
                        </p>
                    </div>
                ))}
            </div>
            <div className='sellers-form col-12 col-md-6 col-lg-4'>
                <form className='form d-flex flex-column p-5' onSubmit={handleSubmit}>
                    <h4>Ro&BRU sellers form</h4>
                    <input 
                        type='text'
                        className='form-control mb-2'
                        placeholder='Store Name'
                        value={storeName}
                        onChange={(e) => setStoreName(e.target.value)} // Updating the tsore name value with onChange
                        required
                    />
                    <input 
                        type='email'
                        className='form-control mb-2'
                        placeholder='Sellers email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input 
                        type='password'
                        className='form-control mb-2'
                        placeholder='Sellers Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button
                        className='btn btn-primary text-white px-4 py-2 rounded hover-shadow'
                    >
                        sign Up
                    </button>
                    
                    <Link
                        to='/productsupload'
                        className='text-primary mt-2'
                    >
                        Already signed Up? click here to Upload Product
                    </Link>
                </form>
            </div>
        </div>
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
    </section>
  )
}
