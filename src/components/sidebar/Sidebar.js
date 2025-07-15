import React, { useCallback, useEffect, useState } from 'react'
import './Sidebar.css'
import { collection, getDocs, getFirestore, query } from 'firebase/firestore'

export default function Sidebar({filters, setFilters}) {
  

  // function to handle the filtering logic
  const handleFilterChange = (e) => {

    // Destructuring to access the value and the checked verification
    const { value, checked } = e.target

    // Update the filters state which contains the initial states of empty arrays
    setFilters((prevFilters) => {
      // function to update the categories checkbox
      const updateCategories = checked 
        ? [...prevFilters.categories, value] // Take th actual array and update with the latest value
        : prevFilters.categories.filter(category => category !== value) // keep the category that does not match the value

      // function to update the sizes
      const updateSizes = checked 
        ? [...prevFilters.sizes, value] // Take the actual array and update with the latest value
        : prevFilters.sizes.filter(size => size !== value) // keep the size that does not match the value
      
      // Function to update the colors
      const updateColors = checked
        ? [...prevFilters.colors, value] // Take the actual array and update with the latest value
        : prevFilters.colors.filter(color => color !== value) // Keep the color that does not match the value

      // Function to update the vendors
      const updateVendors = checked
        ? [...prevFilters.vendors, value] // Take the actual array and update with the latest value
        : prevFilters.vendors.filter(vendor => vendor !== value) // Keep the color that does not match the value

      // return It updating the setter
      return{
        ...prevFilters, // return all the previous filters
        categories: updateCategories,
        sizes: updateSizes,
        colors: updateColors,
        vendors: updateVendors
      }
    })
  }

  // Initial states of colors and vendors
  const [ colors, setColors ] = useState([]) // Initial state of a colors
  const [ vendors, setVendors] = useState([]) //Initila state of vendors

  // function to get all unique colors and vendors
  const getAllProductColorsAndVendors = useCallback(async () => {
    // initialize filtestore
    const firestore = getFirestore()
    // query the products collection form firestore
    let q = query(collection(firestore, "products"))
    // Get the documents from the products collection
    const productSnapShot = await getDocs(q)
    // Get the products from the product docs/documents
    const products = productSnapShot.docs.map(productDoc => productDoc.data())


    // if the length of the categories array is greater than 0
    const filteredProducts = filters.categories.length > 0
      ? products.filter(product => filters.categories.includes(product.category))
      : products

    
    // get unique colors
    const uniqueColors = [...new Set(filteredProducts.map(product => product.color).filter(Boolean))] // filter out any faly values
    // Get unique vendors
    const uniqueVendors = [...new Set(filteredProducts.map(product => product.vendor).filter(Boolean))]

    // Update the colors and vendor states
    setColors(uniqueColors)
    setVendors(uniqueVendors)

  }, [filters.categories]) // lIsten for category changes from the user

  // UseEffect to listen If the getAllProductsAndVendors function is recreated if a user clices on another category
  useEffect(() => {
    getAllProductColorsAndVendors()
  }, [getAllProductColorsAndVendors])

  
  
  return (
    <section className='sidebar'>
      <div className='category mb-3'>
        <h4>Filter By Category</h4>
        <div className='d-flex gap-1'>
          <input 
            type='checkbox'
            name='clothes'
            value='clothes'
            checked={filters.categories.includes('clothes')}
            onChange={handleFilterChange}
          />
          <label htmlFor='clothes'>Clothes</label>
        </div>
        <div className='d-flex gap-1'>
          <input 
            type='checkbox'
            name='shoes'
            value='shoes'
            checked={filters.categories.includes('shoes')}
            onChange={handleFilterChange}
          />
          <label htmlFor='shoes'>Shoes</label>
        </div>
        <div className='d-flex gap-1'>
          <input 
            type='checkbox'
            name='accessories'
            value='accessories'
            checked={filters.categories.includes('accessories')}
            onChange={handleFilterChange}
          />
          <label htmlFor='accessories'>Accessories</label>
        </div>
        <div className='d-flex gap-1'>
          <input 
            type='checkbox'
            name='bags'
            value='bags'
            checked={filters.categories.includes('bags')}
            onChange={handleFilterChange}
          />
          <label htmlFor='bags'>Bags</label>
        </div>
      </div>
      <div className='mb-3'>
        <h4>Filter By Vendor</h4>
        <div className='d-flex gap-2'>
          {vendors.map((vendor, index) =>
            <div key={index} className='d-flex gap-1'>
              <input 
                type='checkbox'
                name='vendor'
                value={`${vendor}`}
                checked = {filters.vendors.includes(vendor)}
                onChange={handleFilterChange}
              />
              <label htmlFor={`${vendor}`}>{vendor}</label>
            </div>
          )}
        </div>
      </div>
      <div className='category mb-3'>
        <h4>Filter By Size</h4>
        <div className='d-flex gap-1'>
          <input 
            type='checkbox'
            name='XXL'
            value='XXL'
            checked={filters.sizes.includes('XXL')}
            onChange={handleFilterChange}
          />
          <label htmlFor='XXL'>XXL</label>
        </div>
        <div className='d-flex gap-1'>
          <input 
            type='checkbox'
            name='XL'
            value='XL'
            checked={filters.sizes.includes('XL')}
            onChange={handleFilterChange}
          />
          <label htmlFor='XL'>XL</label>
        </div>
        <div className='d-flex gap-1'>
          <input 
            type='checkbox'
            name='L'
            value='L'
            checked={filters.sizes.includes('L')}
            onChange={handleFilterChange}
          />
          <label htmlFor='L'>L</label>
        </div>
        <div className='d-flex gap-1'>
          <input 
            type='checkbox'
            name='M'
            value='M'
            checked={filters.sizes.includes('M')}
            onChange={handleFilterChange}
          />
          <label htmlFor='M'>M</label>
        </div>
        <div className='d-flex gap-1'>
          <input 
            type='checkbox'
            name='S'
            value='S'
            checked={filters.sizes.includes('S')}
            onChange={handleFilterChange}
          />
          <label htmlFor='S'>S</label>
        </div>
      </div>
      <div className='mb-3'>
        <h4>Filter By Color</h4>
        <div className='d-flex gap-2'>
          {colors.map((color, index) => (
            <div key={index}>
              <input 
                type='checkbox'
                name={`${color}`}
                value={color}
                checked={filters.colors.includes(color)}
                onChange={handleFilterChange}
              />
              <label htmlFor={`${color}`}>{color}</label>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
