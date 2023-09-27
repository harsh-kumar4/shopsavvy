import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';


function Subtotal() {
    const navigate = useNavigate();

     const [{ basket },dispatch] = useStateValue();

  return (
    <div className='subt'>
        <CurrencyFormat renderText={(value) =>(
            <>
                <p>
                    Subtotal({basket.length} items):
                    <strong>{value}</strong>
                </p>
                <small className='subgift'>
                    <input type='checkbox'/>Gift present
                </small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={"₹"}
        />   
        <button onClick={e => navigate('/payment')}>Procced to checkout</button> 
    </div>
  )
}

export default Subtotal