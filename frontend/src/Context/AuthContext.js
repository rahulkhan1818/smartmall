import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [products,setproduct]=useState([]);
  const url = "http://localhost:4005/api";
  useEffect(() => {

    
    const fectchProduct = async () => {
      try {
        const api = await axios.get(`${url}/product/all`, {
          headers: {
            "Content-Type": "Application/json",
          },
          withCredentials: true,
        });
  
        // console.log(api.data.product);
        setproduct(api.data.product)
      } catch (error) {
        console.log(error.message);
        
      }
      
    };
    fectchProduct();
  });
  return <AuthContext.Provider value={{products}}>{children}</AuthContext.Provider>;
};
