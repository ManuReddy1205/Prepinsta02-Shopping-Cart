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

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product.id !== productToRemove.id));
  };

  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="main">
      <h1 >Cart<FontAwesomeIcon icon={faShoppingCart}/></h1>
      <div className="div1">
        <h2>Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id} >
              {product.name}: &nbsp;${product.price}
              <button onClick={() => addToCart(product)} className="btn1">Add to cart</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="div2">
        <h2>Items</h2>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              {product.name}: &nbsp;
              ${product.price}
              <button onClick={() => removeFromCart(product)} className="btn2">Remove</button>
            </li>
          ))}
        </ul>
        <h2>Total Price: ${totalPrice}</h2>
      </div>
    </div>
  );
}

export default Cart;
