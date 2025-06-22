import './card.css';
import { fetchData } from '../../features/store/storeSlice';
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { addToCart } from '../../features/store/storeSlice';
import Modal from '../model';
import Payment from '../payment/payment';
import Detail from '../order_Detail/order_detail';
import { useNavigate } from "react-router-dom"; 
import { toast } from "react-toastify";




export default function Cards() {


  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const { data, isloading, isError } = useSelector((state) => state.data);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate(); 
  const [isOpen, setIsOpen] = useState({ payment: false, order_D: false });
  function cart(item) {
    dispatch(addToCart(item));
    toast.success(`${item.title} added to cart!`);

  }

  function cardClick(item) {
      setSelectedProduct(item);  
  }


  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="card-container" >
      {data?.map((item) => (
        <div className="card" key={item.id} onClick={() => { setIsOpen((prev) => ({ ...prev, order_D: true })), cardClick(item) }}>
          <img src={item.images?.[1] || item.images?.[0] || 'fallback.jpg'} alt={item.title} />
          <div className="card-content">
            <h3 id='cardTitle'>{item.title}</h3>
            <p className='cardDescription'>{item.description}</p>
            <p className='price'>₹{Math.floor(item.price * 86.75)}</p>
            <div className="buttons">
              <button className="buy" onClick={(e) => {
                e.stopPropagation();
                if (!user) {
                  toast.error("Please login to add items to cart.");
                  navigate("/login");
                  return;
                }
                setIsOpen((prev) => ({ ...prev, payment: true }));
              }}>Buy now</button>

              <button className="cart" onClick={(e) => {
                e.stopPropagation();
                cart(item);
              }}>Add to cart</button>
            </div>
          </div>
        </div>
      ))}
      <Modal isOpen={isOpen.payment} onClose={() => setIsOpen((prev) => ({ ...prev, payment: false }))}>

        <Payment />
      </Modal>
      <Modal isOpen={isOpen.order_D} onClose={() => setIsOpen((prev) => ({ ...prev, order_D: false }))}>
      {selectedProduct && <Detail product={selectedProduct} />}
      </Modal>
    </div>

  );
}
