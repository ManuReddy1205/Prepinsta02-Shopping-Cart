import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  const products = [
    { id: 1, name: "iphone", price: 300 },
    { id: 2, name: "Realme", price: 200 },
    { id: 3, name: "Samsung", price: 100 },
  ];

  const [cart, setCart] = useState([]);

  // Add a unique item to the cart (product + unique id)
  const addToCart = (product) => {
    const newProduct = { ...product, uniqueId: Date.now() }; // Add a unique identifier
    setCart([...cart, newProduct]);
  };

  // Remove an item by its unique identifier
  const removeFromCart = (uniqueId) => {
    setCart(cart.filter((item) => item.uniqueId !== uniqueId));
  };

  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="main">
      <h1>
        Cart 
        <FontAwesomeIcon icon={faShoppingCart} />
        {/* Display the number of items in the cart */}
        <span className="cart-count"> {cart.length} </span>
      </h1>
      <div className="div1">
        <h2>Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name}: &nbsp;${product.price}
              <button onClick={() => addToCart(product)} className="btn1">
                Add to cart
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="div2">
        <h2>Items</h2>
        <ul>
          {cart.map((product) => (
            <li key={product.uniqueId}>
              {product.name}: &nbsp;${product.price}
              <button
                onClick={() => removeFromCart(product.uniqueId)}
                className="btn2"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <h2>Total Price: ${totalPrice}</h2>
      </div>
    </div>
  );
}

export default Cart;
