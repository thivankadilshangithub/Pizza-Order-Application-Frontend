import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Userlist from './Userlist';
import Orderslist from './Orderslist';
import Pizzaslist from './Pizzaslist';
import AddNewPizzalist from './AddNewPizzalist';
//import { BrowserRouter, Link, Routes, Router } from 'react-router-dom';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom'; 
// import { Switch } from 'react';
import { Tab, Tabs, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import Editpizza from './Editpizza';




export default function Adminscreen() {

    const userstate = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userstate;
    const dispatch = useDispatch()

    useEffect(() => {

        if (!currentUser.isAdmin) // Admin == Asmin
        {
            window.location.href = '/'
        }

    }, []);

    return (
        <div>

            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <h2 style={{ fontSize: '50px' }}>Admin Panel</h2>
                    {/* <ul className='adminfunctions'>
                        <li><Link to={'/admin/userslist'} style={{color:"white"}}>Users List</Link></li>
                        <li><Link to={'/admin/orderslist'} style={{color:"white"}}>Orders List</Link></li> 
                        <li><Link to={'/admin/pizzaslist'} style={{color:"white"}}>Pizzas List</Link></li> 
                        <li><Link to={'/admin/addnewpizza'} style={{color:"white"}}>Add Pizza</Link></li>  
                    </ul> */}
                    {/* <ul className='adminfunction'>
                        <li> <a href="/admin/userslist"> Users List </a></li>
                        <li> <a href="/admin/pizzaslist">Pizzas List</a></li>
                        <li> <a href="/admin/addnewpizza">Add New List</a></li>
                        <li> <a href="/admin/orderslist">Orders List</a></li>
                    </ul> */}
                     <Toolbar className='adminfun'>
                        <Tabs className='adminfuntabs'>
                        {/* <Tab className='adminfuntab' LinkComponent={Link} to="/admin/userslist" label="Users List" /> */}
                        <Tab className='adminfuntab' LinkComponent={Link} to="/admin/pizzaslist" label="Pizzas List" />
                        <Tab className='adminfuntab' LinkComponent={Link} to="/admin/addnewpizza" label="Add New Pizza" />
                        {/* <Tab className='adminfuntab' LinkComponent={Link} to="/admin/orderslist" label="Orders List" /> */}
                         {/* <Tab className='adminfuntab' LinkComponent={Link} to="/admin/editpizza/:pizzaid"label="" />  */}
                        </Tabs>
                    </Toolbar> 
                </div>
                <div>

                <Routes>
                <Route path="/" element={<Pizzaslist />} exact />
                    <Route path="/userslist" element={<Userlist />} exact />
                    {/* <Route path="/orderslist" element={<Orderslist />} exact /> */}
                    <Route path="/pizzaslist" element={<Pizzaslist />} exact />
                    <Route path="/addnewpizza" element={<AddNewPizzalist />} exact />
                     <Route path="/editpizza/:pizzaid" element={<Editpizza />} exact />
                </Routes>

                </div>
            </div>
        </div>
    )
}
