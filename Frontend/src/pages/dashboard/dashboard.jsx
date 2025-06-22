import Navber from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useSelector, useDispatch } from "react-redux";
import "./dasnboard.css";
export default function Dashboard(){
    
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const orders = [
        { id: 101, item: "Wireless Mouse", date: "2024-06-12", amount: "₹499", status: "Delivered" },
        { id: 102, item: "Keyboard", date: "2024-06-15", amount: "₹999", status: "Shipped" },
        { id: 103, item: "Monitor", date: "2024-06-20", amount: "₹7999", status: "Pending" },
      ];

    return (
        <>
        <Navber/>
        <div className="dashboard-container">
           <div className="dashboard-logo">
    <       i className="fa-regular fa-user"></i>
        </div>
      <h1>Welcome, {user?.username || "User"}!</h1>

      <section className="user-details">
        <h2>Your Profile</h2>
        <p><strong>Email:</strong> {user?.email || "Not available"}</p>
        <p><strong>Joined:</strong> June 25</p>
      </section>

      <section className="order-history">
        <h2>Your Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Item</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>#{order.id}</td>
                <td>{order.item}</td>
                <td>{order.date}</td>
                <td>{order.amount}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
        <Footer/>
        </>);
}