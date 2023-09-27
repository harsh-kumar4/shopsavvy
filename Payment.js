import React, {useState,useEffect} from "react";
import {Link,useNavigate} from "react-router-dom";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutPro from "./CheckoutPro";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from './reducer';
import CurrencyFormat from "react-currency-format";
import axios from './axios'
import {db} from './firebase'


function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history=useNavigate();
  const stripe = useStripe();
   const [process,setprocess]=useState(false);
  const elements = useElements();
  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
        const response = await axios({
            method: 'post',
            // Stripe expects the total in a currencies subunits
            url: `/payments/create?total=${getBasketTotal(basket) * 100}`
        }).then(function(response){
          setClientSecret(response.data.clientSecret)
          }).catch((err) => {
            console.log(err)
        });
    }

    getClientSecret();
}, [basket])
console.log('THE SECRET IS >>>', clientSecret)
    console.log('👱', user)

  const handleSubmit = async(event) =>{
    event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }

          }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation

            db
              .collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                  basket: basket,
                  amount: paymentIntent.amount,
                  created: paymentIntent.created
              })

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
        }).catch((err) => {
          console.log(err);
          alert("invalidf card number and details");
      });
    }

  

  const handleChange= event =>{
    //listen for changes in card and siplay errors
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  }
  
  return (
    <div className="payment">
      <div className="payc">
      <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>

        {/* Payment section - delivery address */}
        <div className="pays">
          <div className="payt">
            <h3>Delivery Address</h3>
          </div>
          <div className="payarr">
            <p>{user?.email}</p>
            <p>Hostel H-8</p>
            <p>NIT Kurukshetra,136119</p>
          </div>
        </div>

        {/* Payment section - Review Items */}
        <div className="pays">
          <div className="payt">
            <h3>Review items and delivery</h3>
          </div>


          <div className="payi">
            {basket.map((item) => (
              <CheckoutPro
                title={item.title}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        </div>


        <div className="pays">
          <div className="payt">
            <h3>Payment Method</h3>
          </div>
          
          <div className="paydet">
            <form >
              <CardElement onChange={handleChange} />

                <div className='paymentpri'>
              <CurrencyFormat
                renderText={(value) => (
                <h3>Order Total: {value}</h3>
                  )}
                   decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                    />   
                       <button onClick={()=>{
                           setprocess(true);
                       }} >
                       {process?"processing":"buy now"}
                      </button>
                </div>       
                {error && <div>{error}</div>}
                                     
            </form>
            </div>
          </div>
        

      </div>
    </div>
  );
}

export default Payment;
