import React, { createContext,  useState } from 'react'
import axios from '../utils/axios';

export const ProductContext= createContext();
function Context(props) {
  const [products,setProducts]=useState( JSON.parse(localStorage.getItem("products")) || null);
  
  return (
    <ProductContext.Provider value={[products,setProducts]}>
        {props.children}
    </ProductContext.Provider>
  );
};

export default Context;