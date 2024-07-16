import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {ProductContext} from '../utils/Context'
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

function Create() {
  const[products,setProducts]= useContext(ProductContext); 

  const navigate=useNavigate();
  const [image,setImage]=useState("");
  const [title,setTitle]=useState("");
  const [category,setCategory]=useState("");
  const [price,setPrice]=useState("");
  const [description,setDescription]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate('/');
   
  const newProduct={
    id: nanoid(),
    image,
    title,
    category,
    price,
    description,
  };

  setProducts([...products,newProduct]);
  localStorage.setItem("products", JSON.stringify([...products,newProduct]));
  toast.success("Product added successfully");
  
  }
  return (
    <div className='flex items-center mx-auto '>
        <form className='w-[40vw] h-[65vh]' action="" onSubmit={handleSubmit}>
            <h1 className='font-semibold text-2xl mb-5'>Add New Product</h1>
            <input className='outline-sky-600  bg-zinc-200 w-full h-10 p-3 mb-3' type="url" placeholder='image link' onChange={(e)=>setImage(e.target.value)} value={image} required/>
            <input className='outline-sky-600  bg-zinc-200 w-full h-10 p-3 mb-3' type="text" placeholder='title' onChange={(e)=>setTitle(e.target.value)} value={title} required/>
            <div className='flex justify-between mb-3'>
              <input className='outline-sky-600  bg-zinc-200 w-[19vw] h-10 p-3' type="text" placeholder='category' onChange={(e)=>setCategory(e.target.value)} value={category} required/>
              <input className='outline-sky-600  bg-zinc-200 w-[19vw] h-10 p-3' type="number" placeholder='price' onChange={(e)=>setPrice(e.target.value)} value={price} required/>
            </div>
            <textarea className='w-full outline-sky-600  bg-zinc-200 p-3' rows="10" placeholder='Enter product description here..' onChange={(e)=>setDescription(e.target.value)} value={description} required></textarea>
            <button className='py-1 px-3 border-2 border-sky-600 shadow rounded-md text-blue-300 ml-4 mt-2' >Add New Product</button>
        </form>
    </div>
  )
}

export default Create