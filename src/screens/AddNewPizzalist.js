import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { addPizza } from "../actions/pizzzaActions";

// import { addPizzaReducer } from "../reducers/pizzaReducers"

import Loading from '../components/Loading';
import Error from '../components/Error';
import Success from '../components/Success';


export default function AddNewPizzalist(){

  const[name,setname] = useState('');
  const[smallprice,setsmallprice] = useState('');
  const[mediumprice,setmediumprice] = useState('');
  const[largeprice,setlargeprice] = useState('');
  const[image,setimage] = useState('');
  const[description,setdescription] = useState('');
  const[category,setcategory]=useState('');
  
  const dispatch = useDispatch()

  const addstate = useSelector(state=>state.addPizzasReducer)
  const {success , error , loading } = addstate

  function formHandler(e){
    e.preventDefault();
    
    const pizza = {
      name,
      image,
      description,
      category,
      prices:{
        small : smallprice,
        median: mediumprice,
        large : largeprice
      }
    }
    console.log(pizza);
    dispatch(addPizza(pizza));
  }

  return (
    <div className='container'>
        <div className='text-left'>
          <br />
          {loading && (<Loading/>)}
          {error && (<Error error='Something went wrong'/>) } 
          {success && (<Success  success='New Pizza added successfully'/>)} 

          <form onSubmit={formHandler}>
            <input className='form-control' type="text" placeholder='name' value={name} onChange={(e)=>{setname(e.target.value)}} />
            <input className='form-control' type="text" placeholder='small varient price' value={smallprice} onChange={(e)=>{setsmallprice(e.target.value)}} />
            <input className='form-control' type="text" placeholder='medium varient price' value={mediumprice} onChange={(e)=>{setmediumprice(e.target.value)}} />
            <input className='form-control' type="text" placeholder='large varient price' value={largeprice} onChange={(e)=>{setlargeprice(e.target.value)}} />
            <input className='form-control' type="text" placeholder='category' value={category} onChange={(e)=>{setcategory(e.target.value)}} />
            <input className='form-control' type="text" placeholder='description' value={description} onChange={(e)=>{setdescription(e.target.value)}} />
            <input className='form-control' type="text" placeholder='imageurl' value={image} onChange={(e)=>{setimage(e.target.value)}} />
           
            <button className='btn btn-danger mt-3' type='submit' >Add Pizza</button>
          </form>
        </div>
    </div>
  )
}

