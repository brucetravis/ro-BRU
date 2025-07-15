import React, {useState, useEffect}  from 'react'
import './TopFooter.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  // cookie banner
  // show: variable to update the display sate of the cookie banner
  // setShow: function used to update the variable of the show variable of the cookie banner
  const[isShow, setShow] = useState(true) // Initial state of the banner
  
  const images = [
    require('../../../../images/adverts-images/best_price.jpg'),
    require('../../../../images/red-heels.jpg'),
    require('../../../../images/make-up.jpg'),
    require('../../../../images/adverts-images/bag2_robru.jpg'),
    require('../../../../images/adverts-images/bags_robru.jpg'),
  ]

  // footer image swap
  // index: variable holding he initial index to update
  // setIndex function to update the initial Index of the image
  const[index, setIndex] = useState(0)

  // useEffect to swap the images aftyer a set amount of time
  useEffect(() => {
    // console.log(`Images: ${images[index]}`)
    // store the setIniterval in a variable so that we can clean It up later
    // setInterval(): function to execute a function after a set amount of time
    const imageSlider = setInterval(() => {
      // setIndex to swap the intervals after a set amount of time
      setIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 2000) // Execute after 2 seconds

    // Clean the function after unmounting each image/component
    return () => clearInterval(imageSlider)
  }, []) // Run only once after mounting 


  return (
    <footer className='container-fluid pt-5'>
      <div>
        <div className='row px-4'>
          <div  className='col-12 col-md-6 col-lg-2 mb-4'>
            <h5>SHOP</h5>
            <div className='d-flex flex-column'>
              <Link>Dresses</Link>
              <Link>Bags</Link>
              <Link>Shoes</Link>
              <Link>Accessories</Link>
            </div>
          </div>

          <div className='col-12 col-md-6 col-lg-2 mb-4'>
            <h5>HELP</h5>
            <div className='d-flex flex-column'>
              <Link>Place an Order</Link>
              <Link>Track an order</Link>
              <Link>Order Cancellation</Link>
              <Link>Payments and refunds</Link>
              <Link>Returns and Exchanges</Link>
            </div>
          </div>

          <div className='col-12 col-md-6 col-lg-2 mb-4'>
            <h5>Our Policies</h5>
            <div className='d-flex flex-column'>
              <Link>Our Mission</Link>
              <Link>Privacy Policy</Link>
              <Link>Shipping Policy</Link>
              <Link>Terms And Conditions</Link>
              <Link>Return Policy</Link>
            </div>
          </div>

          <div className='col-12 col-md-6 col-lg-2'>
            <h5>Customer Service</h5>
            <div className='d-flex flex-column'>
              <Link>Live Chat</Link>
              <Link>Contact Us</Link>
              <Link>FAQs</Link>
              <Link>Track Your Order</Link>
            </div>
          </div>


          <div className='col-12 col-lg-4 d-flex justify-content-center mb-4'>
            <Link to="/shop">
              <img
                src={images[index]}
                alt=""
                className="img-fluid rounded shadow"
                style={{ maxHeight: "300px", objectFit: "cover" }}
              />
            </Link>
          </div> 
        </div>
      </div>

      {isShow && (
        <div 
          id="cookie-banner" 
          className="d-flex flex-wrap justify-content-center align-items-center p-2"
        >
          <span className="text-white ">
            This website uses cookies to ensure you get the best experience on our website.
            <Link to="/privacy-policy" className="text-warning ms-1">Learn more</Link>.
          </span>
          <button className="btn btn-warning ms-3 mt-2 mt-md-0" onClick={() => setShow(false)}>
            Got it!
          </button>
        </div>
      )}
    </footer>
  )
}
