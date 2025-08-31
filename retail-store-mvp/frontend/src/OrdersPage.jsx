import { useEffect, useState } from "react";
import api from "../utils/api";
export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    api.get("/orders").then(res => setOrders(res.data));
  }, []);
  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map(o=> (
          <li key={o._id}>
            Order #{o._id} – {o.status} – {o.total}$
          </li>
        ))}
      </ul>
    </div>
  );
}