import React from 'react'
import './Popular.css'
import Item from '../item/Item'
import data_product from './../../assets/data'
function Popular() {
  return (
    <div>
      <div className="popular">
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className='popular-item'>
          {data_product.map((item, i) => {
            return <Item key={i} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Popular
