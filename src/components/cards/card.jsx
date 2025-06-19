import './card.css';
import { fetchData } from '../../features/store/storeSlice';
import { useSelector,useDispatch } from "react-redux";
import { useState,useEffect } from 'react';
import { addToCart } from '../../features/store/storeSlice';
import Modal from '../model';
import Payment from '../payment/payment';


export default function Cards() {

const dispatch=useDispatch();
const { data, isLoading, isError } = useSelector((state) => state.data);
const [isOpen, setIsOpen] = useState(false);
function cart(item){
    dispatch(addToCart(item));
    alert(`${item.title} added to cart!`);
}

useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="card-container">
      {data?.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt={item.title} />
          <div className="card-content">
            <h3 id='cardTitle'>{item.title}</h3>
            <p className='cardDescription'>{item.description}</p>
            <p className='price'>₹{Math.floor(item.price*86.75)}</p>
            <div className="buttons">
              <button className="buy" onClick={() => setIsOpen(true)}>Buy now</button>
              <button className="cart" onClick={()=>cart(item)}>Add to cart</button>
            </div>
          </div>
        </div>
      ))}
                      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <Payment/>
                </Modal>
    </div>

  );
}
