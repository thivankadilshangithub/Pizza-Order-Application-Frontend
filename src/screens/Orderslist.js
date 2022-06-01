import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllOrders } from '../actions/oderAction';

import Loading from '../components/Loading';
import Error from '../components/Error';
import Success from '../components/Success';


export default function Orderslist() {

  const dispatch = useDispatch()

  const getorderstate = useSelector(state => state.getAllOrdersReducer)
  const { orders, loading, error } = getorderstate;

  useEffect(() => {
    dispatch(getAllOrders());
  }, [])

  return (
    <div>
      {loading && (<Loading />)}
      {error && (<Error error='Something went wrong' />)}
      <table className='table table-striped table-bordered container'>
        <thead className='thead-dark'>
          <tr>
            <th>Order Id</th>
            <th>Email</th>
            <th>User Id</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders && orders.map(order=>{ return  <tr>
                <td>{order._id}</td>
                <td>{order.email}</td>
                <td>{order.userid}</td>
                <td>{order.orderAmount}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>
                  {order.isDelivered ? (<h1>Delivered</h1>) 
                  : (<button className='btn btn-danger'>Deliver</button>)}
                </td>
              </tr>
              
          })}
        </tbody>
      </table>
    </div>
  )
}
