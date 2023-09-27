import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutPro"

function Checkout() {
  const [{ basket,user },dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className='checkl'>
            {/* <img className='cha' src='https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/GWUnrec_BOB/WA3000._CB592962828_.jpg'/> */}
            <div>
                <h3>Hie,{user?user.email:""}</h3>
                <h2 className='checkt'>Your Shopping Basket
                </h2>

                {basket.map(item => (
                  <CheckoutProduct
                   
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    
                  />
                     ))}
             </div>

        <div className='checkr'>
            <Subtotal/>
        </div>

        </div>
        
      
    </div>
  )
}

export default Checkout 