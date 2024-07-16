import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from '../utils/axios';
import Loading from '../components/Loading';
import {ProductContext} from '../utils/Context'

function Details() {
  const navigate =useNavigate(); 
  const [products,setProducts]= useContext(ProductContext); 

  const[product,setProduct]=useState(null);
  const {id} =useParams();
  useEffect(()=> 
    {   
      if(product===null){
       setProduct(products.filter((p)=> p.id==id)[0]);
      }
    }, []);
    

  const handleProductDelete=(id)=>{
    alert("are you sure to delete this product?");
    const filteredProducts=products.filter((p)=> p.id!==id);
    setProducts(filteredProducts);
    localStorage.setItem("products",JSON.stringify(filteredProducts));
    navigate('/');
  }

  return product?(
      <div className='w-4/5 h-Screen p-10 flex items-center justify-center gap-10 mx-auto'>
          <div className='w-64'>
              <img className='object-cover' src={product.image} alt="" />
          </div>
          <div className='content w-[30vw] flex flex-col pt-8'>
              <h1 className='font-semibold text-2xl mb-2'>{product.title}</h1>
              <h2 className='text-zinc-400 mb-1'>{product.category}</h2>
              <h3 className='text-red-300 mb-2'>$ {product.price}</h3>
              <h4 className='font-semibold text-justify leading-5 tracking-tight mb-4'>{product.description}</h4>
              <div className='flex gap-3'>
                <Link to={`/edit/${product.id}`} className='py-1 px-3 border-2 text-blue-300 rounded-md '>Edit</Link>
                <button onClick={()=>handleProductDelete(product.id)} className='py-1 px-3 border-2 text-red-300 rounded-md' >Delete</button>
              </div>
          </div>
        </div>): (<Loading/>);
}

export default Details