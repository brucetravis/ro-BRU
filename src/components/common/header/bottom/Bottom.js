import React from 'react'
import './Bottom.css'
// Anything imported from react router dom is not exported as default, so include curly braces
import { Link } from 'react-router-dom'

export default function Bottom() {
  return (
    <section className='header-two container-fluid'>
        <div className='container'>
            <div className='dresses-dropdown'>
                <div className='dresses-column'>
                    <Link to='/shop' className='text-black text-decoration-none fs-6'>Dresses</Link>
                    <div className='dresses-dropdown-content'>
                        <div className='d-flex flex-column'>
                            <h3 className='fs-6 mb-1'>Women's Dresses</h3>
                            <Link>All Dresses</Link>
                            <Link>Casual Dresses</Link>
                            <Link>Official Dresses</Link>
                            <Link>PE Dresses</Link>
                            <Link>Evening Gowns</Link>
                            <Link>Ball Gowns</Link>
                            <Link>Formal Dresses</Link>
                            <Link>Cocktail Dresses</Link>
                            <Link>More.........</Link>
                        </div>
                        <div className="picture">
                            <img
                                src={require('../../../../images/african.jpg')} alt="African Style dress"
                            />
                        </div>
                    </div>
                </div>
            </div>        
            <div className='bags-dropdown'>
                <div className='bags-column'>
                    <Link to='/shop' className='text-black text-decoration-none fs-6'>Bags</Link>
                    <div className='bags-dropdown-content'>
                        <div className="everyday-bags d-flex flex-column">
                            <h3 className='fs-6 mb-1'>Everyday Bags</h3>
                            <Link>Satchels</Link>
                            <Link>Hobo Bags</Link>
                            <Link>Handbags</Link>
                            <Link>Bucket Bags</Link>
                            <Link>Shoulder Bags</Link>
                            <Link>Crossbody Bags</Link>
                        </div>
                        
                        <div className="special-occasion-bags d-flex flex-column">
                            <h3 className='fs-6 mb-1'>Special Occasion Bags</h3>
                            <Link>Wristlets</Link>
                            <Link>Clutches</Link>
                            <Link>Belt Bags</Link>
                            <Link>Evening Bags</Link>
                            <Link>Mini Backpacks</Link>
                        </div>
                        
                        <div className="travel-bags d-flex flex-column">
                            <h3 className='fs-6 mb-1'>Travel Bags</h3>
                            <Link>Travel Bags</Link>
                            <Link>Duffel Bags</Link>
                            <Link>Cosmetic Bags</Link>
                            <Link>Rolling Luggage</Link>
                            <Link>Weekender Bags</Link>
                        </div>
                        
                        <div className="functional-bags d-flex flex-column">
                            <h3 className='fs-6 mb-1'>Functional Bags</h3>
                            <Link>Gym Bags</Link>
                            <Link>Diaper Bags</Link>
                            <Link>Fanny Packs</Link>
                            <Link>Laptop Bags</Link>
                            <Link>Camera Bags</Link>
                            <Link>Messenger Bags</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shoes-dropdown">
                <Link to="/shop" className='text-black text-decoration-none fs-6'>Shoes</Link>
                <div className="shoes-dropdown-content">
                    <div className="casual-shoes d-flex flex-column">
                        <h3 className='fs-6 mb-1'>Casual Shoes</h3>
                        <Link>Sneakers</Link>
                        <Link>Loafers</Link>
                        <Link>Slip-Ons</Link>
                        <Link>Espadrilles</Link>
                        <Link>Boat Shoes</Link>
                    </div>
                    
                    <div className="formal-shoes d-flex flex-column">
                        <h3 className='fs-6 mb-1'>Formal Shoes</h3>
                        <Link>Heels</Link>
                        <Link>Pumps</Link>
                        <Link>Stilettos</Link>
                        <Link>Oxfords</Link>
                        <Link>Mary Janes</Link>
                    </div>
                    
                    <div className="athletic-shoes d-flex flex-column">
                        <h3 className='fs-6 mb-1'>Athletic Shoes</h3>
                        <Link>Running Shoes</Link>
                        <Link>Training Shoes</Link>
                        <Link>Walking Shoes</Link>
                        <Link>Basketball Shoes</Link>
                        <Link>Hiking Boots</Link>
                    </div>
                    
                    <div className="special-occasion-shoes d-flex flex-column">
                        <h3 className='fs-6 mb-1'>Special Occasion Shoes</h3>
                        <Link>Evening Sandals</Link>
                        <Link>Strappy Heels</Link>
                        <Link>Glitter Pumps</Link>
                        <Link>Peep-Toe Heels</Link>
                        <Link>Kitten Heels</Link>
                    </div>
                    
                    <div className="boots d-flex flex-column">
                        <h3 className='fs-6 mb-1'>Boots</h3>
                        <Link>Ankle Boots</Link>
                        <Link>Combat Boots</Link>
                        <Link>Chelsea Boots</Link>
                        <Link>Knee-High Boots</Link>
                        <Link>Over-the-Knee Boots</Link>
                    </div> 
                </div>
            </div>

            <div className="accessories-dropdown">
                <Link to='/shop' className='text-black text-decoration-none fs-6'>Accessories</Link>
                <div className="accessories-dropdown-content">
                    <div className="womens-accessories d-flex flex-column">
                        <h3 className='fs-6 mb-1'>Women's Accessories</h3>
                        <Link>Jewelry</Link>
                        <Link>Sunglasses</Link>
                        <Link>Scarves</Link>
                        <Link>Hats</Link>
                        <Link>Belts</Link>
                        <Link>Hair Accessories</Link>
                        <Link>Watches</Link>
                        <Link>Handbags & Purses</Link>
                    </div>
                    <div className="picture">
                        <img 
                            src={require('../../../../images/womens-accessories.jpg')} alt="Fashion Accessories"
                        />
                    </div>
            
                </div>
            </div>
        </div>  
    </section>
  )
}
