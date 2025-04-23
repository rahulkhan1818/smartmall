import React, { useEffect, useState } from "react";
import "../Componentscss/Productdetail.css";
import Mallspro from "./MallsProduct";
import { Link, useParams } from "react-router-dom";
import "../Componentscss/Header.css";
import { item } from "../Components/data";
import cart from "../Components/Card";
import {malls} from "../Components/Mallsdetail"
import axios from "axios";
const ProductDetail = ({ cart, setcart, item,setmallData }) => {
  const[mallss,setmallss]=useState();
  const { id } = useParams();
  // const {id}=useParams;
  const [product, setproduct] = useState({});
  const [relative, setrelative] = useState([]);
  const [productes,setproductes]=useState();
  const url = "http://localhost:4005/api";
  const filterbyCategory=(MallName)=>{
    const element =malls.filter((pro)=>pro.name===MallName)
    console.log("helloDAta");
    console.log(element);
    setmallData(element)
  }
  useEffect(() => {
    const fectchProduct = async () => {
      try {
        const api = await axios.get(`${url}/product/${id}`, {
          headers: {
            "Content-Type": "Application/json",
          },
          withCredentials: true,
        });
  
        console.log(api.data.product);
        setproductes(api.data.product)
      } catch (error) {
        console.log(error.message);
        
      }
      
    };
    fectchProduct();
  },[id]);
  useEffect(() => {
    // id.preventDefault()
    const filterProduct = item.filter((product) => product.id === id);
    setproduct(filterProduct[0]);
    const relatives = item.filter((p) => p.category === product.category
    );
    setrelative(relatives);
    // console.log(relative);
  },[id, product.category]);

  const addToCart = (id, price, title, imgSrc, description, mallName) => {
    const obj = {
      id,
      price,
      title,
      imgSrc,
      description,
      mallName,
    };
    setcart((prevCart) => [...prevCart, obj]);
  };

  return (
    <>
      <div className="container">
        <div className="imgcontianer">
          <div className="image">
            <img src={product.imgSrc} alt="img" />
            <div>
              <button>book Now</button>
              <button
                onClick={() =>
                  addToCart(
                    product.id,
                    product.price,
                    product.title,
                    product.imgSrc,
                    product.description,
                    product.mallName
                  )
                }
              >
                CART
              </button>
            </div>
          </div>
          <div className="Div">
            <h3>Name: {product?.title}</h3>
            <h4>Price: {product?.price}₹</h4>
            <h5>Category: {product?.category}₹</h5>
            <h5>{product?.description}</h5>
            <h6 onClick={()=>filterbyCategory(product.mallName)}>
              Mall Name:{" "}
              <Link to="/mallpage" Name="btn">
                {product.mallName}
              </Link>

            </h6>
            <h6>Storage: {product?.productStorage}</h6>
          </div>
        </div>
      </div>
      <div>
        <Mallspro cart={cart} setcart={setcart} item={relative} />
      </div>
    </>
  );
};

export default ProductDetail;
