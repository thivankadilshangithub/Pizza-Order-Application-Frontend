import React from 'react'
import { useEffect ,useState} from 'react';
import { useDispatch } from 'react-redux';
import { getPizzaById } from '../actions/pizzzaActions';
import { editPizza } from '../actions/pizzzaActions';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
 
import Loading from '../components/Loading';
import Error from '../components/Error';
import Success from '../components/Success';



export default function Editpizza() {

  const { pizzaid } = useParams();

  const dispatch = useDispatch();
  const[name,setname] = useState('');
  const[smallprice,setsmallprice] = useState('');
  const[mediumprice,setmediumprice] = useState('');
  const[largeprice,setlargeprice] = useState('');
  const[image,setimage] = useState('');
  const[description,setdescription] = useState('');
  const[category,setcategory]=useState('');

  const getpizzabyidstate = useSelector(state => state.getAllPizzasByIdReducer)

  const {pizza , error , loading , success} = getpizzabyidstate


  const editpizzastate = useSelector((state) => state.editPizzasReducer)
  const {editloading , editerror , editsuccess} = editpizzastate;

  useEffect(() => {

    if(pizza)
    {
      if(pizza._id==pizzaid)
      {
        setname(pizza.name)
        setdescription(pizza.description)
        setcategory(pizza.category)
        setsmallprice(pizza.prices[0]['small'])
        setmediumprice(pizza.prices[0]['median'])
        setlargeprice(pizza.prices[0]['large'])
        setimage(pizza.image)
      }
      else
      {
        dispatch(getPizzaById(pizzaid))
      }
     
    }
    else
    {
      dispatch(getPizzaById(pizzaid))
    }

    
  }, [pizza , dispatch]);

  function formHandler(e){
    e.preventDefault();
    
    const editedpizza = {
      _id : pizza._id,
      name,
      image,
      description,
      category,
      prices:{
        small : smallprice,
        median: mediumprice,
        large : largeprice
      }
    };
    
    dispatch(editPizza(editedpizza));

  }   

  return ( 
     
    <div className="container">
     <br />

      <div className='text-left'>

          {loading && (<Loading/>)}
          {error && (<Error error='Something went wrong'/>) } 
         {editsuccess && (<Success success='Pizza details edited successfully' />)}
         {editloading && (<Loading/>)}
         {editerror && (<Error error='Something went wrong'/>) } 


          <form onSubmit={formHandler}>
            <input className='form-control' type="text" placeholder='name' value={name} onChange={(e)=>{setname(e.target.value)}} />
            <input className='form-control' type="text" placeholder='small varient price' value={smallprice} onChange={(e)=>{setsmallprice(e.target.value)}} />
            <input className='form-control' type="text" placeholder='medium varient price' value={mediumprice} onChange={(e)=>{setmediumprice(e.target.value)}} />
            <input className='form-control' type="text" placeholder='large varient price' value={largeprice} onChange={(e)=>{setlargeprice(e.target.value)}} />
            <input className='form-control' type="text" placeholder='category' value={category} onChange={(e)=>{setcategory(e.target.value)}} />
            <input className='form-control' type="text" placeholder='description' value={description} onChange={(e)=>{setdescription(e.target.value)}} />
            <input className='form-control' type="text" placeholder='imageurl' value={image} onChange={(e)=>{setimage(e.target.value)}} />
           
            <button className='btn btn-danger mt-3' type='submit' >Edit Pizza</button>
          </form>
        </div>
      
    </div>
  )

}
