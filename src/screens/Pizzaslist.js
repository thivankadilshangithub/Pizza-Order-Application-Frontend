import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';

import { getAllPizzas } from '../actions/pizzzaActions';
 import { Link } from 'react-router-dom';
 import { deletePizza } from '../actions/pizzzaActions';
// import { Tab, Tabs } from '@mui/material';

export default function Pizzaslist() {
  const dispatch = useDispatch()

  const pizzasstate = useSelector(state => state.getAllPizzasReducer)

  const { pizzas, error, loading } = pizzasstate;
  useEffect(() => {
    dispatch(getAllPizzas())
  }, [])

  return (
    <div className='container'>
      <br/>
      {loading && (<Loading />)}
      {error && (<Error error='Something went wrong' />) }
      <table className='table table-border'>

        <thead className='thead thead-dark'>
          <th>Name</th>
          <th>Prices</th>
          <th>Category</th>
          <th>Actions</th>
        </thead> 
      <tbody>
      {pizzas && pizzas.map(pizza=>{

        return(
         <tr>
          <td>{pizza.name}</td>
          <td>
            Small : {pizza.prices[0]['small']}<br/>
            Medium : {pizza.prices[0]['median']}<br/>
            Large : {pizza.prices[0]['large']}
          </td>
          <td>{pizza.category}</td>
          <td>
            <i className='fa fa-trash m-2' onClick={()=>{dispatch(deletePizza(pizza._id))}}></i>
            
            <Link to={`/admin/editpizza/${pizza._id}`}><i className='fa fa-edit m-2'></i></Link>
           
            {/* <Tab style={{color:"black"}} LinkComponent={Link} to={`admin/editpizza/${pizza._id}`} lable="edit" /> */}
          

          </td>
        </tr>)
      })}
       </tbody>
       </table>
    </div>
  )
}
