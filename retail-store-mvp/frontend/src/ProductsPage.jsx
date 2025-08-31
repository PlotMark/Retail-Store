import { useEffect, useState } from "react";
import api from "../utils/api";
export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: 0 });
  useEffect(() => {
    api.get("/products").then(res => setProducts(res.data));
  }, []);
  const addProduct = async () => {
    const res = await api.post("/products", form);
    setProducts([...products, res.data]);
    setForm({ name: "", price: 0 });
  };
  return (
    <div>
      <h2>Products</h2>
      <input placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
      <input type="number" placeholder="Price" value={form.price} onChange={e=>setForm({...form,price:e.target.value})}/>
      <button onClick={addProduct}>Add</button>
      <ul>
        {products.map(p=> <li key={p._id}>{p.name} – ${p.price}</li>)}
      </ul>
    </div>
  );
}