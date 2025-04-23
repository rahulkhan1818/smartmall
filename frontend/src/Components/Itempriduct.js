import React, { useEffect, useState } from 'react'
import Mallspro from "./MallsProduct"
import { useParams } from 'react-router-dom';
import { item } from "./data";
const Itempriduct=(cart,setcart)=>{
    const {id} = useParams();
  const [relative, setrelative] = useState({});

useEffect(()=>{
  const relative=item.filter((product)=>product.category===product.category)
  setrelative(relative)
},[id,product.category])

  return (
    <>
    <div>
      <Mallspro cart={cart} setcart={setcart}item={relative}/>
    </div>
    </>
  )
}

export default Itempriduct;
