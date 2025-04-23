import Header from "./Components/Header";
import Malls from "./Components/Malls";
import "tailwindcss";
import "./App.css";
import Footer from "./Components/Footer";
import MallsProduct from "./Components/MallsProduct";
import Card from "./Components/Card";
import ProductDetail from "./Components/ProductDetail";
import Serchitem from "./Components/Seachitem";
import Malllist from "./Components/MallListpage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
// import {items} from "./Components/data"
import {item }from "./Components/data"
import About from "./Components/About"
import Login from "./Components/Login";
import SignUp from './Components/SignUP'
import MallListPage from './Components/MallListpage'
import ShowMall from "./Components/ShowMall";
import {malls} from './Components/Mallsdetail'
function App() {
  const [data,setdata]=useState([...item])
  const [mallData,setmallData]=useState([...malls])
  console.log("mallDAta");
  console.log(mallData);
  const[cart, setcart]=useState([])
  return (
    <>
      <Router>
        <div>
          <Header cart={cart}setdata={setdata}/>
        </div>
        <div>
          <div>
            <Malls setdata={setdata}/>
          </div>
          <Routes>
            <Route path="/"element={ <div>
            <MallsProduct cart={cart} setcart={setcart} item={data}/>
          </div>}/>
          <Route path="/card" element={<Card cart={cart} setcart={setcart}/>}/>
          <Route path="/product/:id" element={<ProductDetail cart={cart} setcart={setcart} item={data} setmallData={setmallData}/>}/>
          <Route path="/search/:term" element={<Serchitem cart={cart} setcart={setcart} item={data}/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/mallList" element={<Malllist/>}/>
          <Route path="/mallpage" element={<MallListPage mallData={mallData}/>}/>
          <Route path="/ShowMall" element={<ShowMall/>}/>
          
          </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
