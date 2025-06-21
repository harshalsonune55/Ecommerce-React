import Navber from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import "./contact.css";
export default function Contact() {
    return (
        <>
        <Navber/>
        <section class="contact-section">
    <div class="contact-container">
      <h2>Contact Us</h2>
      <p>Have questions or feedback? We're just a message away!</p>

      <div class="contact-grid">
        <div class="contact-info">
          <h3>Get in Touch</h3>
          <p><strong>Email:</strong> support@Mart.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> 123 Market Lane, Mumbai, India</p>
          <p><strong>GitHub:</strong> <a href="https://github.com/harshalsonune55" target="_blank">github.com/harshalsonune55</a></p>
        </div>

        <form class="contact-form" action="#" method="post">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />

          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="your@email.com" required />

          <label for="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Write your message..." required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </section>
        <Footer/>
        </>
    );
  }