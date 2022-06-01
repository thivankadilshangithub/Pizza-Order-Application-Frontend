import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../actions/userActions';


const Navbar = () => {

    const cartstate = useSelector(state => state.cartReducer)
    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate
    const dispatch = useDispatch()
    return (
        <div>
            <nav class="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
                <div>
                {/* <img className='imagenav' src="https://image.similarpng.com/very-thumbnail/2020/05/Pizza-logo-design-template-Vector-PNG.png"/> */}
                <img className='imagenav' src="pizza.png" alt="pizza"  />
                </div>
                <a className="navbar-brand ml-3" href="/">  SHEY PIZZA </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">

                        {currentUser ? (
                            <div className="dropdown mt-2 mr-2">
                            <a className=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              {currentUser.name}
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a className="dropdown-item" href="/orders">Orders</a>
                              <a className="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser())}} ><li>Logout</li></a>
                            </div>
                          </div>

                        ) : (
                            <li className="nav-item ">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                        )}

                        <li className="nav-item">
                            <a className="nav-link" href="/cart">
                                Cart {cartstate.cartItems.length} </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
