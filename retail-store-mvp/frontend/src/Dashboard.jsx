import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CustomersPage from "./pages/CustomersPage";
import ProductsPage from "./pages/ProductsPage";
import OrdersPage from "./pages/OrdersPage";
export default function Dashboard({ token, user, onLogout }) {
  return (
    <Router>
      <div>
        <nav style={{ padding: "10px", background: "#eee" }}>
          <span style={{ marginRight: 20 }}>
            Welcome {user?.email || "User"}
          </span>
          <Link to="/customers" style={{ marginRight: 10 }}>Customers</Link>
          <Link to="/products" style={{ marginRight: 10 }}>Products</Link>
          <Link to="/orders" style={{ marginRight: 10 }}>Orders</Link>
          <button onClick={onLogout} style={{ marginLeft: 20 }}>Logout</button>
        </nav>
        <Routes>
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="*" element={<h2 style={{ padding: 20 }}>Select a page from the menu</h2>} />
        </Routes>
      </div>
    </Router>
  );
}