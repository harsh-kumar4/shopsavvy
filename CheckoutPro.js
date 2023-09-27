import React from 'react'
import './CheckoutPro.css'
import { useStateValue } from './StateProvider';

function CheckoutPro({image,title,price,hideButton}) {
    const [{ basket }, dispatch] = useStateValue();

    const remove = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE',
            price: price,
        })
    }
  return (
    <div className='checkp'>
        <img className='cpi' src={image}/>

        <div className='cpif'>
            <p className='cpt'>{title}</p>
            <p className='cpp'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            {!hideButton &&(
            <button onClick={remove}>remove from Cart</button>
                 )}

        </div>

    </div>
  )
}

export default CheckoutPro  