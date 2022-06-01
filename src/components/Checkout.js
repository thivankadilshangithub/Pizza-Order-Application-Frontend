import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../actions/oderAction';
import Success from '../components/Success';
import Loading from '../components/Loading';
import Error from '../components/Error';


export default function Checkout({ subtotal }) {

  const orderstate = useSelector((state) => state.placeOrderReducer)
  const { loading, error, success } = orderstate
  const dispatch = useDispatch()

  function tokenHander(token) {
    console.log(token);
    dispatch(placeOrder(token, subtotal))
  }

  return (
    <div>
      
      {loading && (<Loading />)}
      {success && (<Success success='Your order placed Successfully' />)}
      {error && (<Error error='Something went wrong' />)} 

      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHander}
        currency='LKR'
        stripeKey='pk_test_51KtzGrCvWtSfvFdiCvRgpK3QlPEfBIPAKJIC1DV8gJe3Tkx7BwPupnK0jv0FFQjeVqEv0027I4J3C6XCywG464Kl008ASKQ3XN'>
        <button className="btn btn-danger">Pay Now</button>
      </StripeCheckout>
    </div>
  )
}
