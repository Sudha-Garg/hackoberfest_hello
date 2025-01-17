import React from 'react'
import ProductInfo from './ProductInfo'
export default function Products({product,className}) {
  return (
    <div className={`bg-red-500 ${className}`}>
        {product.map(function (item)
        {
            return (
                <ProductInfo  
                    title={item.title}
                    price={item.price}
                    url={item.imgUrl}
                    category={item.category}
                />
            )
        })}
    </div>
  )
}
