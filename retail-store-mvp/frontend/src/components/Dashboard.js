import React from 'react';
export default function Dashboard({user, onLogout}){
  return (
    <div style={{padding:20}}>
      <h2>Dashboard</h2>
      <p>Welcome, {user?.name || 'User'}!</p>
      <p>I have included user registration and login to this MVP</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
