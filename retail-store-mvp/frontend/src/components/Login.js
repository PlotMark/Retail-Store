import React, {useState} from 'react';
import api from '../api';

export default function Login({onToken}){
  const [email,setEmail]=useState('admin@example.com');
  const [password,setPassword]=useState('password123');

  const submit = async e => {
    e.preventDefault();
    try{
      const res = await api.post('/auth/login', { email, password });
      onToken(res.token);
    }catch(err){
      alert(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <form onSubmit={submit}>
      <h3>Login</h3>
      <div><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="email" /></div>
      <div><input value={password} type="password" onChange={e=>setPassword(e.target.value)} placeholder="password" /></div>
      <button type="submit">Login</button>
    </form>
  );
}
