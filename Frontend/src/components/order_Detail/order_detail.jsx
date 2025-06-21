import"./order_detail.css";
export default function Detail({product}){
    if(!product) return null;
    return(<>
<div className="item-detail">
  <div className="image-section">
    <img src={product.images?.[1] || product.images?.[0] || 'fallback.jpg'} alt={product.title}/>
  </div>
  <div className="info-section">
    <h2>{product.title}</h2>
    <p className="description">{product.description}</p>
    <p className="price">₹{Math.floor(product.price * 86.75)}</p>
    <div className="button">
    <button class="add-to-cart-btn buy ">Add to Cart</button>
    <button class="buyp buy">buy now</button>
    </div>

  </div>
</div>

    </>);
}