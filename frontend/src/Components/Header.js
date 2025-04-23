import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import "../Componentscss/Header.css";
import { item } from "../Components/data";

import "tailwindcss";

export default function Header({ setdata, cart }) {
  const { term } = useParams();
  const [classlist, setclasslist] = useState(true);
  const [searchterm, setsearchterm] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const handlericon = () => {};
  const showOption = () => {
    setclasslist(!classlist);
  };

  // const[reset,setreset]=
  const filterdata = (category) => {
    const element = item.filter((product) => product.category === category);
    console.log(element);
    setdata(element);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchterm}`);
    setsearchterm("");
  };

  const handlelogin = () => {
    const btn = document.querySelector("#loginbtn");
    showOption();
    console.log("hellos");
  };
  const handlechange = () => {};
  const handleLogout = () => {
  };
  return (
    <div className="headerfs">
      <header className="d-flex justify-content-between align-items-center  text-white p-3 shadow">
        <div className="d-flex align-items-center gap-2 fs-3 fw-bold">
          {/* <span className="text-warning">★</span>
          <span className="text-primary">☾</span> */}
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
            alt=""
            className="indiaflag"
          />
          <span>Smart Mall</span>
        </div>

        <nav className="d-none d-md-flex gap-4 fs-5 content">
          <Link to="/" className="text-light text-decoration-none">
            Home
          </Link>
          <Link to="/About" className="text-light text-decoration-none">
            About Us
          </Link>
          <Link to="/" className="text-light text-decoration-none">
            Products
          </Link>
          {/* <Link to="/" className="text-light text-decoration-none">
            Contact
          </Link> */}
          <div>
            <div className="Account" onClick={showOption}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>{" "}
              <h4>Account</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </div>
            {location.pathname == "/" && (
              <div>
                <div
                  className={classlist ? "displaynone" : "logAccount"}
                  id="loginbtn"
                >
                  <div className="profileImage">
                    <h4>Profile</h4>
                    <img
                      src="https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="img"
                      srcset=""
                    />
                  </div>
                  <h4>Coming Soon...Order</h4>
                  <h4>Coming Soon...Wishlist</h4>
                  <div className="Notification">
                    <h4>Coming Soon...Notification</h4>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-bell-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                    </svg>
                  </div>

                  {/* <button className="Logout" onClick={handleLogout}>
                    Logout
                  </button> */}

                  {/* <Link to="/login">
                    <button className="Login">Login</button>
                  </Link> */}

                  <h4></h4>
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="d-flex align-items-center gap-3">
          <form onSubmit={handleSubmit} className="position-relative">
            <input
              type="text"
              value={searchterm}
              onChange={(e) => setsearchterm(e.target.value)}
              placeholder="Search..."
              className="form-control ps-4 inputbox"
            />
          </form>
          {/* <button className="btn btn-warning ">
            <i className="bi bi-filter"></i>
            Search
          </button> */}
          <Link to="/card" className="cart" >
            <p>{cart.length}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart4 booticon"
              viewBox="0 0 16 16"
              onClick={handlericon}
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
            </svg>
          </Link>
          {/* <div>
          <i class="fa-solid fa-list"></i>
          </div> */}
        </div>
      </header>
      {location.pathname == "/" && (
        <div className="containersec">
          <div className="buttonsec">
            {/* <button onClick={() => filterdata("/")}>Home👩🏻‍💼</button> */}
            <button onClick={() => filterdata("Mens")}>Men👩🏻‍💼</button>
            <button onClick={() => filterdata("Womens")}>Women🙋🏻‍♀️</button>
            <button onClick={() => filterdata("Kids")}>kids🙎🏻‍♀️</button>
            <button onClick={() => filterdata("Cloth")}>Clothes👚</button>
            <button onClick={() => filterdata("Shoes")}>Shoes👟</button>
            <button onClick={() => filterdata("Electric")}>
              Electrical ⚡︎
            </button>
            <button onClick={() => filterdata("Phone")}>Phones📱</button>
            <button onClick={() => filterdata("Toys")}>toys🧸</button>
            <button onClick={() => setdata(item)}>More</button>
          </div>
        </div>
      )}
    </div>
  );
}
