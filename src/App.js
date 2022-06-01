import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';

import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Orderscreen from './screens/Orderscreen';
import Adminscreen from './screens/Adminscreen';



function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Homescreen />} />
          <Route path='/cart' exact element={<Cartscreen />} />
          <Route path='/register' exact element={<Registerscreen />} />
          <Route path='/login' exact element={<Loginscreen />} />
          <Route path='/orders' exact element={<Orderscreen />} />
          <Route path='/admin/*' element={<Adminscreen />} /> 
          {/* /admin/* */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
