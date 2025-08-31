import { useEffect, useState } from "react";
import api from "../utils/api";
export default function CustomersPage() {
  const [customers, setCustomers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });
  useEffect(() => {
    api.get("/customers").then(res => setCustomers(res.data));
  }, []);
  const addCustomer = async () => {
    const res = await api.post("/customers", form);
    setCustomers([...customers, res.data]);
    setForm({ name: "", email: "" });
  };
  return (
    <div>
      <h2>Customers</h2>
      <input placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
      <button onClick={addCustomer}>Add</button>
      <ul>
        {customers.map(c=> <li key={c._id}>{c.name} ({c.email})</li>)}
      </ul>
    </div>
  );
}