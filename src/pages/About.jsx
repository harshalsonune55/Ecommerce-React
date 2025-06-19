import Navber from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import "./About.css";
export default function About() {
    return (
        <>
        <Navber/>
        <section class="about">
    <div class="about-container">
      <h2>About Us</h2>
      <p>
        Welcome to <strong>Mart</strong>, your one-stop destination for everything you love — from fashion to electronics, home essentials to lifestyle upgrades.
      </p>
      <p>
        At <strong>Mart</strong>, we’re committed to making your online shopping experience easy, enjoyable, and affordable. Whether you’re chasing trends or everyday essentials, we deliver the best — straight to your door.
      </p>
      <ul class="about-features">
        <li>✔ Wide range of high-quality products</li>
        <li>✔ Exclusive deals and seasonal offers</li>
        <li>✔ Hassle-free returns and customer support</li>
        <li>✔ Safe and secure checkout</li>
      </ul>
      <p>
        Join thousands of happy customers who trust us for their daily shopping needs. We're not just a store — we're your shopping companion.
      </p>
      <p><strong>Shop smart. Shop with confidence. Shop ShopEase.</strong></p>
    </div>
  </section>
        <Footer/>
        </>
    );
  }