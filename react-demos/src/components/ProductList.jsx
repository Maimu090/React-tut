import React from 'react'

const ProductList = () => {
    const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
    ];
  return (
    <div>
        {products.map((product) => (
            <div key={product.id}>
                <h1>Name: {product.name}</h1>
                <p>Price: {product.price}</p>
            </div>
        ))}
    </div>
  )
}

export default ProductList