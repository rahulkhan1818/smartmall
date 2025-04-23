import React, { useEffect } from "react";
import "../Componentscss/MallsProducts.css";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { easeIn } from "framer-motion";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
const MallsProduct = ({item,cart, setcart}) => {
  const{products}=useContext(AuthContext)
  const addToCart = (id, price, title, imageSrc, description, mallName) => {
    setcart((prevCart) => {
      // Check if the item already exists in the cart
      const existingItem = prevCart.find((item) => item.id === id);
  
      if (existingItem) {
        // If item already exists, update its quantity instead of adding a duplicate
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
  
      // Add new item with initial quantity 1
      return [...prevCart, { id, price, title, imageSrc, description, mallName, quantity: 1 }];
    });
      };
      
      useEffect(() => {
        console.log("Updated Cart:", cart);
      }, [cart]);
      
      
  return (
    <>
      <div  className="col-md-4 mb-4" id="imagebox">
        {
        item?.map((product) => {
          return (
            <>
              <div key={product.id} className="imagecontainer">
                <div  className=" imageContainer">
                <Link to={`/product/${product.id}`
                //  product.id

                }style={{
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center'
                }}>
                <img src={product.imgSrc} alt="img"  />
                </Link>
                  <div className="main">
                    <h4>{product.title}</h4>
                    <h6>Price : ${product.price}</h6>
                    <h6>{product.description}</h6>
                    <div>
                      <button onClick={()=> addToCart(product.id, 
                        product.price, 
                        product.title, 
                        product.imageSrc,
                         product.description,
                          <Link to="/mallpage">{product.mallName}</Link>
                         )}className="btn" >
                        ADD TO CART
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      </>
  );
};
export default MallsProduct;
