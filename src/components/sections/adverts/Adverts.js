import React, { useEffect, useState } from 'react'
import './Adverts.css'
import { AnimatePresence, motion } from 'framer-motion'

export default function Adverts() {

  const images = [
    require('../../../images/adverts-images/bag2_robru.jpg'),
    require('../../../images/adverts-images/bags_robru.jpg'),
    require('../../../images/adverts-images/best_price.jpg'),
    require('../../../images/adverts-images/elegance.jpg'),
    require('../../../images/adverts-images/full_girl_pack.jpg'),
    require('../../../images/adverts-images/best_price.jpg'),
    require('../../../images/adverts-images/christmas-sale.jpg'),
    require('../../../images/adverts-images/robru_louboutin.jpg'),
    require('../../../images/adverts-images/shoes_robru.jpg')
  ].map(img => img.default || img)
  

  // state to control which image is being mounted on the screen
  const [ index, setIndex ] = useState(0) // state the initial state to the first image

  // Jandle the change of state in the images
  useEffect(() => {
    // setInterval to execute a function after centein intervals
    const imageIntervalChange = setInterval(() => {
      // Function to execute
      setIndex((prevIndex) => (prevIndex + 1 ) % images.length)
    }, 5000) //Change will happen after 5 seconds

    // Stop execution of the function when page unmounts
    return () => clearInterval(imageIntervalChange)
  }, []) // Empty Dependency array. No need to do something each time the state changes


  return (
    <section 
      className='advert-section position-relative w-100'
    >
      <AnimatePresence>
        <motion.img
          key={images[index]} // Keep track of all the images and which image is being displayed on the screen
          src={images[index]} // Keep track of each image path by Its index in order to know which image to display
          alt={`Slide ${index + 1}`} // What readers see If an image refuses to load
          initial={{ opacity: 0, x: 100 }} // Initially, the image is hidden(opacity: 0) on the right (x: 100)
          animate={{ opacity: 1, x: 0 }} // Display the image(opacity: 1) and center It (x: 0)
          exit={{ opacity: 0, x: -100 }} // Remove the image/Unmount the image to the eft side 
          transition={{ duration: 1.5, ease: "easeInOut"}} // Image stays for 8 seconds and is removes smoothly as another comes in smoothly
          className='position-absolute top-0 start-0 w-100 h-100 object-fit-conevr' // image is on top of the container at the top left corner
        >

        </motion.img>
      </AnimatePresence>

      <div className='position-absolute bottom-0 start-50 translate-middle-x d-flex gap-2 mb-3'>
        {/* Map the images */}
        {images.map((_, i) => (
          <button
            key={i} // Keep track of each image by the index
            onClick={() => setIndex(i)} // When clicked update the state to the next index
            className={`advert-button rounded-circle border-0 p-1 ${
              i === index ? "bg-white shadow": "bg-secondary" // If the current button is selected It gets a white background and shadow otherwise It is dull gray and transparent
            }`}

            style={{
              width: "12px",
              height: "12px",
              opacity: i === index ? 1 : 0.4, // If the button index matches the images index show the button If not don't show the button
              transition: "all 0.3s ease"
            }}
          ></button>
        ))}
      </div>
    </section>
  )
}
