import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../utils/Context';

function Edit() {
    const[products,setProducts]= useContext(ProductContext); 
    const {id}=useParams();
    const navigate=useNavigate();
    const [product,setProduct]=useState(
        {
            image: '',
            title: '',
            category: '',
            price: '',
            description: '',
        }
    );

    const handleChange=(e) => {
        setProduct({...product,[e.target.name]: e.target.value})
    }
    useEffect(()=>{
        setProduct(products.filter((p)=> p.id==id)[0]);
    },[id])

  
    const handleEditProduct=(e)=>{
      e.preventDefault();
    const pi=products.findIndex((p)=> p.id==id);
    const copyData=[...products];
    copyData[pi]={...products[pi],...product}
  
    setProducts(copyData);

    localStorage.setItem("products", JSON.stringify(copyData));
    navigate(-1);
    
    }
    return (
      <div className='flex items-center mx-auto '>
          <form className='w-[40vw] h-[65vh]' action="" onSubmit={handleEditProduct}>
              <h1 className='font-semibold text-2xl mb-5'>Edit Product</h1>
              <input className='outline-sky-600  bg-zinc-200 w-full h-10 p-3 mb-3' type="url" placeholder='image link' onChange={handleChange} value={product && product.image} name="image" required/>
              <input className='outline-sky-600  bg-zinc-200 w-full h-10 p-3 mb-3' type="text" placeholder='title' onChange={handleChange} value={product && product.title} name="title" required/>
              <div className='flex justify-between mb-3'>
                <input className='outline-sky-600  bg-zinc-200 w-[19vw] h-10 p-3' type="text" placeholder='category' onChange={handleChange} value={product && product.category} name="category" required/>
                <input className='outline-sky-600  bg-zinc-200 w-[19vw] h-10 p-3' type="number" placeholder='price' onChange={handleChange} value={product && product.price} name="price" required/>
              </div>
              <textarea className='w-full outline-sky-600  bg-zinc-200 p-3' rows="10" placeholder='Enter product description here..' onChange={handleChange} value={product && product.description} name="description" required></textarea>
              <button className='py-1 px-3 border-2 border-sky-600 shadow rounded-md text-blue-300 ml-4 mt-2' >Edit Product</button>
          </form>
      </div>
  )
}

export default Edit