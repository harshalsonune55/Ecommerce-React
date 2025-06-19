import "./cartComp.css";
import { useSelector,useDispatch } from "react-redux";
import Modal from "../model";
import { useState } from "react";
import Payment from "../payment/payment";
import { removeFromCart } from "../../features/store/storeSlice"; 

export default function CartComp() {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalAmount = cartItems.reduce((acc, item) => {
        const price = Math.floor(item.price * 86.75);
        return acc + price;
      }, 0);
      const [isOpen, setIsOpen] = useState(false);
      const dispatch = useDispatch();

      const handleDelete = (id) => {
        dispatch(removeFromCart(id));
    };
    
  return (
    <>
      <h3>Your Shopping Cart</h3>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-container">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price (₹)</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td className="product-info">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="cart-img"
                    />
                    <span>{item.title}</span>
                  </td>
                  <td>₹{Math.floor(item.price * 86.75)}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(item.id)}
                    >
                    Delete
                    </button>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-total">
            <h4>Total Amount: ₹{totalAmount}</h4>
            <button className="checkout-btn" onClick={() => setIsOpen(true)} >Proceed to Checkout</button>
          </div>
        </div>
      )}
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <Payment/>
            </Modal>
    </>
  );
}
