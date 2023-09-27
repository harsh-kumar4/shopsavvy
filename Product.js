import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({title,image,price}) {
    const [{basket},dispatch] =useStateValue();

    console.log("this is basket>>",basket);

    const addtocart=() =>{
      //dispatch item in data layer
      dispatch({
        type:"ADD_TO_CART",
        item:{
          title:title,
          image:image,
          price:price,
        },
      });
    };

  return (
    <div className='product'>
        <div className='productin'>
            <p>{title}</p>
            <p className='propri'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
           
        </div>
        <img src={image}/>
        <button className='custom-btn btn-6' onClick={addtocart}>Add to cart</button>
        
        </div>
  )
}

export default Product