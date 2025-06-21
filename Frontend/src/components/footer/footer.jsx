import "./footer.css"
export default function Footer(){
    return (<>
      <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h2>Mart</h2>
        <p>Your Cart, Your Rules.</p>
      </div>

      <div class="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Follow Us</h3>
        <div class="social-icons">
          <a href="https://www.linkedin.com/in/harshalsonune/"><i class="fa-brands fa-linkedin"></i></a>
          <a href="https://www.instagram.com/harshal_sonune_01/"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://github.com/harshalsonune55"><i class="fa-brands fa-github"></i></a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2025 Mart. All rights reserved.</p>
    </div>
  </footer>
    </>);
}