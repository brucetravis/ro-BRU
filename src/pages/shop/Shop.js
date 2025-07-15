import React, { useEffect, useState } from 'react'
import './Shop.css'
import Adverts from '../../components/sections/adverts/Adverts'
import Sidebar from '../../components/sidebar/Sidebar'
// import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import Products from '../../components/products/Products'

export default function Shop() {
  
  // state to manage the filters/filtering state
  const [ filters, setFilters ] = useState({
    // Initial states are empty array so that they can be filled with the users choices
    categories: [],
    sizes: [],
    colors: [],
    vendors: [],
    priceRange: {
      min: 0,
      max: null
    }
  })

  // const [ filteredProducts, setFilteredProducts ] = useState([])

  // // UseEffect to watch out for changes/ If the user has checked any boxes
  // useEffect(() => {
  //   // fetch products from firestore
  //   const fetchFilteredProducts = async () => { // Use async to return a promise

  //     // Initialize firestore
  //     const firestore = getFirestore() 

  //     // Get the collection of products from fireStore
  //     let q = query(collection(firestore, 'products'))

  //     // Conditions to apply the filters

  //     // If the length of the category filter array is more than 0
  //     if (filters.categories.length > 0) {
  //       // get all the products from the database
  //       q = query(q, where('category', 'in', filters.categories))
  //     }

  //     // If the length of the size filter array is greater than 0
  //     if (filters.sizes.length > 0) {
  //       // get all the products from the database
  //       q = query(q, where('size', 'in', filters.sizes))
  //     }

  //     if (filters.vendors.length > 0) {
  //       q = query(q, where('vendor', 'in', filters.vendors))
  //     }

  //     if (filters.priceRange !== null) {
  //       q = query(q, where('priceRange', '>=', filters.priceRange.min))
  //       q = query(q, where('priceRange', '<=', filters.priceRange.max))
  //     }


  //     // Fetch all product documents
  //     const snapShot = await getDocs(q)
  //     // Get all products
  //     const products = snapShot.docs.map(doc => ({ id: doc.id, ...doc.data() }))

  //     // Update the filtered Products state with the products
  //     setFilteredProducts(products)
  //   }

  //   // Call the fetch filtered products function
  //   fetchFilteredProducts()

  // }, [filters]) // Changes in useEffect will happen when the filters changes/ Re-run whenever filters changes

  return (
    <section className='shop-page'>
      {/* Adverts */}
      <Adverts />
      <div className='d-flex align-items-center h-100'>
        <div>
          {/* <Sidebar /> */}
          <Sidebar setFilters={setFilters} filters={filters} />
        </div>
        <div className='shop-products'>
          {/* {filteredProducts.map((product) => (
            <div key={product.id}>{product.name}</div>
          ))} */}
          <Products />
        </div>
      </div>
    </section>
  )
}
