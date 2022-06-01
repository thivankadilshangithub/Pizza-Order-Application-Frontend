import React from 'react';
import Pizza from '../components/Pizza';
import pizzas from '../pizzazdata';
import { getAllPizzas } from '../actions/pizzzaActions';

import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Filter from '../components/Filter';

export default function Homescreen() {

  const dispatch = useDispatch()

  const pizzasstate = useSelector(state => state.getAllPizzasReducer)

  const { pizzas, error, loading } = pizzasstate

  useEffect(() => {
    dispatch(getAllPizzas())
  }, [])

  return (
    <div>
        <Filter />
      <div class="row justify-content-center">
        {loading ? <Loading/> : error ? <Error error='Something went wrong' /> : (
          pizzas.map(pizza => {
            return (
              <div className='col-md-3 m-3' key={pizza._id}>
                <div>
                <Pizza pizza={pizza} />
                </div>
                
              </div>
            )
          })
        )}


      </div>
    </div>
  )
}

