import React from 'react'
import './ProductCard.css'

export default function ProductCard({item}) {
  return (
    <div className='product-card'>
        <div className='product-img mb-3'>
            <img src={item.image} alt="" />
        </div>
        <div className='product-card-info'>
            <p>{item.name}</p>
            <p className='fw-bold'>{item.price}</p>
            {/* <p>{item.discount}% off</p> */}
        </div>
    </div>
  )
}
