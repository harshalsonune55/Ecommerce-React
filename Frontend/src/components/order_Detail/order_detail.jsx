import"./order_detail.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from '../../features/store/storeSlice';
export default function Detail({product}){
    if(!product) return null;


    const dispatch = useDispatch();

    function cart(item) {
      dispatch(addToCart(item));
      alert(`${item.title} added to cart!`);
    }


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
    <button class="add-to-cart-btn buy " onClick={(e) => {
                e.stopPropagation();
                cart(product);
              }}>Add to Cart</button>
    <button class="buyp buy">buy now</button>
    </div>

  </div>
</div>

    </>);
}