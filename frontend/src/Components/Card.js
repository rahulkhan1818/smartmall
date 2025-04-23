import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Componentscss/cart.css";
function Card({ cart, setcart }) {
  const location = useLocation();
  const removeFromCart = (id) => {
    setcart(cart.filter((cart) => cart.id !== id));
    console.log(cart.length);
  };
  const getTotalPrice = () => {
    return cart
      .reduce((total, item) => total + Number(item.price), 0)
      .toFixed(2);
  };
  return (
    <>
        {location.pathname == "/card" && (
          <div className="cart-container">
            <h2>Your Shopping Cart 🛒</h2>
            {cart.length === 0 ? (
              <h3 className="empty-cart">Your cart is empty 😔</h3>
            ) : (
              <div className="cart-items">
                {cart.map((cart) => (
                  <div key={cart.id} className="cart-item">
                    <img
                      src={cart?.imgSrc}
                      alt={cart.title}
                      className="cart-img"
                    />
                    <div className="cart-details">
                      <h4>{cart.title}</h4>
                      {/* <p>{cart.description}</p> */}
                      <p className="price">Price:₹{cart.price}</p>
                      <p className="price">MallName:{cart.mallName}</p>
                      <button remove-btn className="remove-btn">
                        Book NOW
                      </button>
                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(cart.id)}
                      >
                        Remove❌
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {cart.length > 0 && (
              <div className="cart-footer">
                <h3>Total: ₹{getTotalPrice()}</h3>
                <button className="checkout-btn">Proceed to Checkout ✅</button>
                <Link to="/" className="continue-shopping">
                  ← Continue Shopping
                </Link>
              </div>
            )}
          </div>
        )}
    
    
    </>
  );
}

export default Card;
