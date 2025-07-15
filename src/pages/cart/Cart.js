import React, { useState } from 'react'
import './Cart.css'
import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Cart() {

    // State to control which page will be seen when a product is added
    const [ isAdded, setIsAdded ] = useState(true)

    // We will need a state to update the Number of products on the cart


  return (
    <section className='cart-page'>
        {isAdded && (
            <div className='d-flex flex-column align-items-center mb-5 mt-5'>
                <div className='shopping-cart d-flex align-items-center justify-content-center mb-3'>
                    <ShoppingCart size={50} />
                </div>
                <p className='fw-bold'>Your Cart is Empty!</p>
                <p>Browse Our Categories and discover our best deals!</p>
                <Link
                    className='button text-white'
                    to='/shop'
                >
                    Start Shopping
                </Link>
            </div>
        )}
    </section>
  )
}
