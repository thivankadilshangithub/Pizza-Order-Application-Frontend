import React from 'react'
import { useState, useEffect } from 'react'
import {useDispatch , useSelector} from 'react-redux';

import { loginUser } from '../actions/userActions';

import { loginUserReducer } from '../reducers/userReducer';

import Error from '../components/Error';
import Loading from '../components/Loading';

export default function Loginscreen() {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const loginstate = useSelector(state=>state.loginUserReducer)
  const {loading , error} = loginstate

  const dispatch = useDispatch()

    function Login(){
        const user={email , password}
        dispatch(loginUser(user))
    }

    useEffect(()=>{

        if(localStorage.getItem('currentUser'))
        {
            window.location.href='/'
        }

    } , [])

  return (
    <div>
            <div className='row justify-content-center mt-5'>
                <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
                    <h2 className='text-center m-3' style={{ fontSize: '35px' }} >Login</h2>

                    {loading && (<Loading />)}
                    {error && (<Error error='Invalid Credintials'/>)}

                    <div>
                        <input required type="text" placeholder='email' className='form-control' value={email} onChange={(e)=>{setemail(e.target.value)}} />
                        <input required type={'password'} placeholder='password' className='form-control' value={password} onChange={(e)=>{setpassword(e.target.value)}} />
                        <button onClick={Login} className='btn btn-danger mt-3'>LOGIN</button>
                        <br/>
                        <br/>
                        <a style={{color:'black',textDecoration:'none'}} href="/register" className="mt-3">Click Here To Register</a>
                    </div>

                </div>

            </div>
        </div>
  )
}
