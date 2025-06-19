import "./payment.css";
import { useState } from "react";

export default function Payment() {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (<>
<h1>Please make the payment!</h1>
    <div className="payment-container">
      <h2>Payment Details</h2>

      {submitted ? (
        <div className="success-message">
          ✅ Payment successful! Thank you for shopping.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="payment-form">
          <label>
            Name on Card
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Card Number
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              maxLength="16"
              required
            />
          </label>

          <div className="payment-row">
            <label>
              Expiry Date
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={formData.expiry}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              CVV
              <input
                type="password"
                name="cvv"
                maxLength="3"
                value={formData.cvv}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <button type="submit">Pay Now</button>
        </form>
      )}
    </div>
    </>);
}
