import React, { useState } from 'react'
import './ProductsUpload.css'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { storage } from '../../components/configs/firebase/Firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'

export default function ProductsUpload() {

    // An array of categories
    const categories = ["clothes", "shoes", "bags", "accessories"]

    // States to handle the form submit
    const [ selectedCategory, setSelectedCategory ] = useState("") // Initial state is an empty string for flexibility
    const [ name, setName ] = useState("") // Initial state is an empty string for flexibility
    const [ vendor, setVendor ] = useState("") // Initial state is an empty string for flexibility
    const [ price, setPrice ] = useState("") // Initial state is an empty string for flexibility
    const [ discountPrice, setDiscountPrice ] = useState("") // Initial state is an empty string for flexibility
    const [ finalPrice, setFinalPrice ] = useState("") // Initial state is an empty string for flexibility
    const [ color, setColor ] = useState("") // Initial state is an empty string for flexibility
    const [ description, setDescription ] = useState("") // Initial state is an empty string for flexibility
    const [ shoeSize, setShoeSize ] = useState("") // Initial state is an empty string for flexibility
    const [ imageUpload, setImageUpload ] = useState(null) // State to handle the image upload
    const [ imageURL, setImageURL ] = useState("") // State to handle the image upload
    const [ message, setMessage ] = useState("")
    const [ messageColor, setMessageColor ] = useState("")
    const [ selectedSizes, setSelectedSizes ] = useState([]) // Initial state is an empty array



    // function to handle the image upload
    const handleImageUpload = async  () => {
        if (!imageUpload) return null

        // Track the image using ref
        const imageRef = ref(storage, `products/${imageUpload.name + v4()}`) // v4 is a random unique Id to avoind clashes among images
        
        // Waiting for an image to upload by using await which can only be used using async
        // This is where the actual upload to Firebase happens.
        const snapShot = await uploadBytes(imageRef, imageUpload)
        // Get the url of the video so that It can be dispalyed in the browser
        const url = await getDownloadURL(snapShot.ref)
        setImageURL(url) // Upload the url of the image
        return url
    }

    // handle the checkbox check
    const handleCheckBox = (e) => {
        // get the value from the array
        const value = e.target.value

        // function to update the state size
        setSelectedSizes((prev) => 
            prev.includes(value)
                ? prev.filter(size => size !== value) // If the size is not the unchecked value kwwp It
                : [...prev, value] // If te value does not exist add it to the empty array
        )
    }
    



    // function to update the price of a product
    const updatePrice = (initialPrice, discountedPrice) => {
        const finalPriceTotal = initialPrice - discountedPrice
        // Update the final Price state
        setFinalPrice(finalPriceTotal >= 0 ? finalPriceTotal.toFixed(2) : "0.00")
    }

    // function to handle the InitialPriceChange
    const handleInitialPrice = (e) => {
        // Update the Initial price state with the initial price value
        setPrice(e.target.value)
        // call the update price function
        updatePrice(e.target.value, discountPrice)
    }

    // function to handle the change in the discount
    const handleDiscountPrice = (e) => {
        // Update the discount Price state with the discount Price value
        setDiscountPrice(e.target.value)
        // Call the update Price function
        updatePrice(price, e.target.value)
    }



    // Initiaize firestore
    const firestore = getFirestore()

    // Function to handle the form when submitted
    const handleSubmit = async  (e) => {

        // Prevent the form from reloading on submission
        e.preventDefault()

        // Upoad the iage on form submission
        const uploadImageURL = await handleImageUpload()

        if (!uploadImageURL) {
            setMessage("imageUpload Failed")
            setMessageColor("red")
            return
        }


        const productData = {
            category: selectedCategory,
            name,
            vendor,
            price: finalPrice,
            discount: discountPrice,
            color,
            description,
            shoeSize,
            imageURL,
        }

        try {
            // Use addDoc to create a unique Id for a product
            await addDoc(collection(firestore, "products"), productData)

            // Update the message state with a new message
            setMessage("New Product added to Database")
            setMessageColor("green")

            // Clear the message after 2 seconds
            setTimeout(() => {
                setMessage('') //clear the message after 2 seconds
            }, 3000)
        } catch (error) {
            console.error("Error adding Product")
            setMessage("Error adding Product")
            setMessageColor("red")

            // Clear the message after 2 seconds
            setTimeout(() => {
                setMessage('') //clear the message after 2 seconds
            }, 3000)
        }
        
    }

  return (
    <section className='upload-section d-flex align-items-center justify-content-center'>
        <div className=''>
            <h2>Ro&BRU</h2>
            <p className='upload-page-motto'>Styling Your Elegance</p>
            <h3>Steps To Sell a Product</h3>
            <div>
                <div>
                    <p>1. Enter a product according to the availabel categories</p>
                    <ul>
                        {categories.map((category, index) => (
                            <li key={index}>{category}</li>
                        ))}
                    </ul>
                </div>
                <p>2. Enter a product Your choice</p>
                <p>3. Include a vendor or vendor Store</p>
                <p>4. Enter the product price and discount If any </p>
                <p>5. Enter the product color</p>
                <p>6. Enter the product size</p>
                <p>7. Enter the product description</p>
                <p>8. Include the product Image</p>
            </div>
            <p>&copy; 2025 Ro&BRU. All rights Reserved</p>
        </div>

        <div className='filling-form'>
            <form className='upload-form' onSubmit={handleSubmit}>
                <h2 className='mb-4 fs-3'>Upload Product</h2>

                <input 
                    type='text'
                    placeholder='Product Category'
                    className='form-control mb-2'
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    required
                    
                />

                <input 
                    type='text'
                    placeholder='Product Name'
                    className='form-control mb-2'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <input 
                    type='text'
                    placeholder='Product Vendor'
                    className='form-control mb-2'
                    value={vendor}
                    onChange={(e) => setVendor(e.target.value)}
                    required
                />

                <input 
                    type='number'
                    placeholder='Product Price'
                    className='form-control mb-2'
                    value={price}
                    onChange={handleInitialPrice}
                    required
                />

                <input 
                    type='number'
                    step="any"
                    placeholder='discount (if any)'
                    className='form-control mb-3'
                    value={discountPrice}
                    onChange={handleDiscountPrice}
                />

                {discountPrice && (
                    <input 
                        type='number'
                        step="any"
                        placeholder='Final Price'
                        className='form-control mb-3'
                        value={finalPrice}
                        disabled
                    />
                )}

                
                
                <input 
                    type='text'
                    placeholder='color'
                    className='form-control mb-3'
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    required
                />

                {selectedCategory === categories[0] && (
                    <div className='mb-3 d-flex'>
                        <label className='form-label me-1'>Availabel Sizes:</label>
                        <div className='form-check form-check-inline'>
                            <input
                                className='form-check-input'
                                type='checkbox'
                                value='S'
                                checked={selectedSizes.includes('S')}
                                onChange={handleCheckBox}
                            />
                            <label className='form-label me-1' htmlFor="sizeS">S</label>
                        </div>
                        <div className='form-check form-check-inline'>
                            <input
                                className='form-check-input'
                                type='checkbox'
                                value='M'
                                checked={selectedSizes.includes('M')}
                                onChange={handleCheckBox}
                            />
                            <label className='form-label me-1' htmlFor="sizeS">M</label>
                        </div>
                        <div className='form-check form-check-inline'>
                            <input
                                className='form-check-input'
                                type='checkbox'
                                value='L'
                                checked={selectedSizes.includes('L')}
                                onChange={handleCheckBox}

                            />
                            <label className='form-label me-1' htmlFor="sizeS">L</label>
                        </div>
                        <div className='form-check form-check-inline'>
                            <input
                                className='form-check-input'
                                type='checkbox'
                                value='XL'
                                checked={selectedSizes.includes('XL')}
                                onChange={handleCheckBox}
                            />
                            <label className='form-label me-1' htmlFor="sizeS">XL</label>
                        </div>
                        <div className='form-check form-check-inline'>
                            <input
                                className='form-check-input'
                                type='checkbox'
                                value='XXL'
                                checked={selectedSizes.includes('XXL')}
                                onChange={handleCheckBox}
                            />
                            <label className='form-label me-1' htmlFor="sizeS">XXL</label>
                        </div>
                    </div>
                )}

                {selectedCategory === categories[1] && (
                    <input 
                        type='number'
                        placeholder='Shoe Size'
                        className='form-control mb-3'
                        value={shoeSize}
                        onChange={(e) => setShoeSize(e.target.value)}
                    />
                )}

                <textarea
                    placeholder='Product Description'
                    className='form-control mb-3'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />

                <input 
                    type='file'
                    className='form-control mb-3'
                    onChange={(e) => setImageUpload(e.target.files[0])}
                    required
                />

                {selectedCategory && (
                    <button 
                        type='submit'
                        className='btn btn-primary text-white px-4 py-2'
                        disabled={!selectedCategory}
                    >
                        Upload Product
                    </button>
                )}
            </form>
        </div>
        {message && (
            <div
                className='message position-fixed bottom-0 start-0 end-0 text-center text-white p-1'
                style={{
                    zIndex: 9999,
                    backgroundColor: messageColor
                }}
            >
                {message}
            </div>
        )}
    </section>
  )
}
