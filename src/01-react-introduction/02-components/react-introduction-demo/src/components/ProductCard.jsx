import React from 'react'

function ProductCard() {

    const productName = "Smart Watch";
    const price = 1500;

  return (
    <div>
        <h2>{productName}</h2>
        <p>${price}</p>
        <button>Buy Now</button>
      
    </div>
  )
}

export default ProductCard
