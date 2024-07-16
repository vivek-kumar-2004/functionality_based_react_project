import { useContext, useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { Link, useLocation } from 'react-router-dom'
import {ProductContext} from '../utils/Context'
import Loading from '../components/Loading';

function Home() {
  const[products]= useContext(ProductContext); 
  const[filterProduct,setfilterProduct]=useState([]);
  const {search}=useLocation();
  const category = decodeURI(search.split("=")[1]);
  const filteredProducts=products.filter((p)=>p.category===category);
  useEffect(()=> {
    if(category==="undefined"){
    setfilterProduct(products);
    }
    else{
      setfilterProduct(filteredProducts);
    }
  },[products,category])
  return products?(
    <>
      <Nav/>
      
      <div className='w-full h-full p-10 pt-14 flex flex-wrap gap-5 overflow-x-hidden overflow-y-auto '>
          {filterProduct.map((p,index)=>(
            <Link key={index} className='w-[14.5vw] h-[42vh] p-3 flex flex-col items-center justify-between border shadow hover:scale-110 ' to={`/details/${p.id}`}>
              <div className='w-full h-[70%] mb-2'>
              <img className='w-[100%] h-full object-contain' src={`${p.image}`} alt="" />
              </div>
              <h1 className='font-semibold tracking-tight leading-5 '>{p.title}</h1>
            </Link>
          ))}
      </div>
    </>):(<Loading/>)

}

export default Home