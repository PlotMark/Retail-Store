import React, {useState} from 'react';
import api from '../api';
export default function Register({onToken}){
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const submit = async e => {
    e.preventDefault();
    try{
      const res = await api.post('/auth/register', { name, email, password });
      onToken(res.token);
    }catch(err){
      alert(err.response?.data?.msg || 'Registration failed');
    }
  };
  return (
    <form onSubmit={submit}>
      <h3>Register</h3>
      <div><input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" /></div>
      <div><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" /></div>
      <div><input value={password} type="Password" onChange={e=>setPassword(e.target.value)} placeholder="Password" /></div>
      <button type="Submit">Register</button>
    </form>
  );
}