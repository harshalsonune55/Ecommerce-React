import "./payment.css";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const stripePromise = loadStripe("pk_test_51Rd979QDamHYr4F917Jia60HQrFkl701EBPribhDUHNFnjzVh4YPNHEvKVhiKhjj9nG9GLquPXX7CIDW2IAhciHf00h3ETvzTI");

export default function Payment() {
  const [loading, setLoading] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8080/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        toast.error("Failed to initiate Stripe checkout");
        setLoading(false);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Something went wrong.");
      setLoading(false);
    }
  }
  return (
    <div className="payment-wrapper">
      <button className="ruk" onClick={handleCheckout} disabled={loading}>
        {loading ? "Redirecting..." : "Pay with Stripe"}
      </button>

      {loading && (
        <div className="spinner-overlay">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
}
