import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Mallspro from './MallsProduct'
import {item} from '../Components/data'
import { all } from 'axios';

function Seachitem({cart,setcart,item}) {
  const {term} =useParams();
const[searchdata,setsearchdata]=useState([])
  useEffect(()=>{
   const data=item.filter((pro)=>pro.title.toLowerCase().includes(term.toLowerCase()));
   if(data){
    setsearchdata(data)
   }
   else{
    alert("this data is no valid this time")
   }
   
  },[term])
  return (
    <div>
      <Mallspro cart={cart} setcart={setcart} item={searchdata}/>
    </div>
  )
}

export default Seachitem
