import React from 'react'
import './Products.css'
import ProductCard from '../cards/productcard/ProductCard'

export default function Products() {

    const products = [{
        image: require("../../images/african.jpg"), 
        name: "African dress", 
        vendor: "Bru",
        description: 'Stay warm and stylish with our handmade crochet sweater, designed for comfort and elegance. Crafted with soft, breathable yarn, this sweater features an intricate crochet pattern that adds a unique, artisanal touch to your wardrobe. The relaxed fit ensures all-day comfort, while the lightweight yet warm fabric makes it perfect for layering in any season.',
        price: '$200', 
        discount: "5", 
        available_colors: ["black", "white", 'green'], 
        available_sizes: ["S", "XL", "XXL"]
    }, {
        image: require("../../images/hand_bag_for_switch.jpg"), 
        name: "Lady's Handbag", 
        vendor: "Bru",
        description: 'Stay warm and stylish with our handmade crochet sweater, designed for comfort and elegance. Crafted with soft, breathable yarn, this sweater features an intricate crochet pattern that adds a unique, artisanal touch to your wardrobe. The relaxed fit ensures all-day comfort, while the lightweight yet warm fabric makes it perfect for layering in any season.',
        price: '$300', 
        discount: "5", 
        available_colors: ["black", "white", 'green'], 
        available_sizes: ["S", "XL", "XXL"]
    },{
        image: require("../../images/shoes_for_switch.jpg"), 
        name: "Medium Top High Heels", 
        vendor: "Bru",
        description: 'Stay warm and stylish with our handmade crochet sweater, designed for comfort and elegance. Crafted with soft, breathable yarn, this sweater features an intricate crochet pattern that adds a unique, artisanal touch to your wardrobe. The relaxed fit ensures all-day comfort, while the lightweight yet warm fabric makes it perfect for layering in any season.',
        price: '$250', 
        discount: "5", 
        available_colors: ["black", "white", 'green'], 
        available_sizes: ["S", "XL", "XXL"]
    },{
      image: require("../../images/products/cloth.jpg"), 
      name: "Crochet", 
      vendor: "Bru",
      description: 'Stay warm and stylish with our handmade crochet sweater, designed for comfort and elegance. Crafted with soft, breathable yarn, this sweater features an intricate crochet pattern that adds a unique, artisanal touch to your wardrobe. The relaxed fit ensures all-day comfort, while the lightweight yet warm fabric makes it perfect for layering in any season.',
      price: '$200', 
      discount: "5", 
      available_colors: ["black", "white", 'green'], 
      available_sizes: ["S", "XL", "XXL"]
    }, {
      image: require('../../images/dress_for_switch.jpeg'), 
      name: "Night gown", 
      vendor: "Bru",
      description: 'Stay warm and stylish with our handmade crochet sweater, designed for comfort and elegance. Crafted with soft, breathable yarn, this sweater features an intricate crochet pattern that adds a unique, artisanal touch to your wardrobe. The relaxed fit ensures all-day comfort, while the lightweight yet warm fabric makes it perfect for layering in any season.',
      price: '$100', 
      discount: "5", 
      available_colors: ["black", "white", 'green'], 
      available_sizes: ["S", "XL", "XXL"]
    },{
      image: require("../../images/womens-accessories.jpg"), 
      name: "NeckLace", 
      vendor: "Bru",
      description: 'Stay warm and stylish with our handmade crochet sweater, designed for comfort and elegance. Crafted with soft, breathable yarn, this sweater features an intricate crochet pattern that adds a unique, artisanal touch to your wardrobe. The relaxed fit ensures all-day comfort, while the lightweight yet warm fabric makes it perfect for layering in any season.',
      price: '$150', 
      discount: "5", 
      available_colors: ["black", "white", 'green'], 
      available_sizes: ["S", "XL", "XXL"]
    },{
      image: require("../../images/red-heels.jpg"), 
      name: "Red High Heels", 
      vendor: "Bru",
      description: 'Stay warm and stylish with our handmade crochet sweater, designed for comfort and elegance. Crafted with soft, breathable yarn, this sweater features an intricate crochet pattern that adds a unique, artisanal touch to your wardrobe. The relaxed fit ensures all-day comfort, while the lightweight yet warm fabric makes it perfect for layering in any season.',
      price: '$500', 
      discount: "5", 
      available_colors: ["black", "white", 'green'], 
      available_sizes: ["S", "XL", "XXL"]
    }, {
      image: require('../../images/make-up.jpg'), 
      name: "Make Up kit", 
      vendor: "Bru",
      description: 'Stay warm and stylish with our handmade crochet sweater, designed for comfort and elegance. Crafted with soft, breathable yarn, this sweater features an intricate crochet pattern that adds a unique, artisanal touch to your wardrobe. The relaxed fit ensures all-day comfort, while the lightweight yet warm fabric makes it perfect for layering in any season.',
      price: '$1000', 
      discount: "5", 
      available_colors: ["black", "white", 'green'], 
      available_sizes: ["S", "XL", "XXL"]
    },{
      image: require('../../images/christian_louboutin.webp'), 
      name: "Black christian_louboutins", 
      vendor: "Bru",
      description: 'Stay warm and stylish with our handmade crochet sweater, designed for comfort and elegance. Crafted with soft, breathable yarn, this sweater features an intricate crochet pattern that adds a unique, artisanal touch to your wardrobe. The relaxed fit ensures all-day comfort, while the lightweight yet warm fabric makes it perfect for layering in any season.',
      price: '$1000', 
      discount: "5", 
      available_colors: ["black", "white", 'green'], 
      available_sizes: ["S", "XL", "XXL"]
    }, {
      image: require("../../images/hand_bag_for_switch.jpg"), 
      name: "Ladies HandBag", 
      vendor: "Bru",
      description: 'Stay warm and stylish with our handmade crochet sweater, designed for comfort and elegance. Crafted with soft, breathable yarn, this sweater features an intricate crochet pattern that adds a unique, artisanal touch to your wardrobe. The relaxed fit ensures all-day comfort, while the lightweight yet warm fabric makes it perfect for layering in any season.',
      price: '$300', 
      discount: "5", 
      available_colors: ["black", "white", 'green'], 
      available_sizes: ["S", "XL", "XXL"]
    }, {
      image: require('../../images/red-heels.jpg'), 
      name: "Red High Heels", 
      vendor: "Bru",
      description: 'Stay warm and stylish with our handmade crochet sweater, designed for comfort and elegance. Crafted with soft, breathable yarn, this sweater features an intricate crochet pattern that adds a unique, artisanal touch to your wardrobe. The relaxed fit ensures all-day comfort, while the lightweight yet warm fabric makes it perfect for layering in any season.',
      price: '$500', 
      discount: "5", 
      available_colors: ["black", "white", 'green'], 
      available_sizes: ["S", "XL", "XXL"]
    },{
      image: require('../../images/shoes_for_switch.jpg'), 
      name: "Mustard High Heels", 
      vendor: "Bru",
      description: 'Stay warm and stylish with our handmade crochet sweater, designed for comfort and elegance. Crafted with soft, breathable yarn, this sweater features an intricate crochet pattern that adds a unique, artisanal touch to your wardrobe. The relaxed fit ensures all-day comfort, while the lightweight yet warm fabric makes it perfect for layering in any season.',
      price: '$250', 
      discount: "5", 
      available_colors: ["black", "white", 'green'], 
      available_sizes: ["S", "XL", "XXL"]
    }, {
      image: require("../../images/adverts-images/bag2_robru.jpg"), 
      name: "Laptop Bag", 
      vendor: "Bru",
      description: 'Stay warm and stylish with our handmade crochet sweater, designed for comfort and elegance. Crafted with soft, breathable yarn, this sweater features an intricate crochet pattern that adds a unique, artisanal touch to your wardrobe. The relaxed fit ensures all-day comfort, while the lightweight yet warm fabric makes it perfect for layering in any season.',
      price: '$350', 
      discount: "5", 
      available_colors: ["black", "white", 'green'], 
      available_sizes: ["S", "XL", "XXL"]
    }, {
      image: require("../../images/adverts-images/full_girl_pack.jpg"), 
      name: "Full Ladies Pac", 
      vendor: "Bru",
      description: 'Stay warm and stylish with our handmade crochet sweater, designed for comfort and elegance. Crafted with soft, breathable yarn, this sweater features an intricate crochet pattern that adds a unique, artisanal touch to your wardrobe. The relaxed fit ensures all-day comfort, while the lightweight yet warm fabric makes it perfect for layering in any season.',
      price: '$2000', 
      discount: "5", 
      available_colors: ["black", "white", 'green'], 
      available_sizes: ["S", "XL", "XXL"]
    },{
      image: require("../../images/christian_louboutin.webp"), 
      name: "Black christian_louboutin",
      vendor: "Bru",
      description: 'Stay warm and stylish with our handmade crochet sweater, designed for comfort and elegance. Crafted with soft, breathable yarn, this sweater features an intricate crochet pattern that adds a unique, artisanal touch to your wardrobe. The relaxed fit ensures all-day comfort, while the lightweight yet warm fabric makes it perfect for layering in any season.',
      price: '$1000', 
      discount: "5", 
      available_colors: ["black", "white", 'green'], 
      available_sizes: ["S", "XL", "XXL"]
    }]
    
  return (
    <section className='products-section'>
        {products.map((product, index) => <ProductCard item={product} key={index} />)}
    </section>
  )
}
