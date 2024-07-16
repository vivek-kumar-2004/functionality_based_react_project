import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {ProductContext} from '../utils/Context'

function Nav() {
  const[products]= useContext(ProductContext); 
  let distinct_category= products.reduce((acc,cv)=>[...acc,cv.category],[])
  distinct_category=[...new Set(distinct_category)];
  const color=()=>{
    return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.4)`;
  }
  return (
    <nav className='w-72 h-full p-4 bg-zinc-100 '>
        <Link to="/create"><button className='py-1 px-3 border-2 border-sky-600 shadow rounded-md text-blue-300 ml-4 mt-2' >Add New Product</button></Link>
        < hr className='mt-5 border border-zinc-300 ' />
        <h1 className='font-bold text-lg mt-2 mb-2'>Category Filter</h1>
        <div>
          {distinct_category.map((c,i)=>(
            <Link key={i} className='flex gap-1 mt-1' to={`?category=${c}`}><span style={{backgroundColor:color()}} className='w-4 h-4 rounded-full mt-1 mb-2'></span>{c}</Link>
          ))
          }
        </div>
    </nav>
  )
}

export default Nav