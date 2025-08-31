import React, {useState, useEffect} from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './Dashboard';
import api from './api';
function App(){
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(null);
  useEffect(()=>{
    if(token){
      api.get('/auth/me')
        .then(res => {
          setUser(res.data.user);
        })
        .catch(()=> {
          setToken(null);
          localStorage.removeItem('token');
        });
    }
  }, [token]);
  if(!token) return (
    <div style={{padding:20}}>
      <h2>Retail Store MVP</h2>
      <Register onToken={t=>{setToken(t); localStorage.setItem('token', t)}} />
      <hr />
      <Login onToken={t=>{setToken(t); localStorage.setItem('token', t)}} />
    </div>
  );
  return (
    <Dashboard
      token={token}
      user={user}
      onLogout={()=>{
        setToken(null);
        localStorage.removeItem('token');
      }}
    />
  );
}
export default App;