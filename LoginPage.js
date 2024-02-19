// src/components/Login.js
import React, { useState } from 'react';
import img1 from './Assets/img/img1.jpg';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Password validation
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/;

    if (!passwordRegex.test(password)) {
      alert('Password must be at least 10 characters long and include both letters and numbers.');
      return;
    }


  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background image */}
      <div
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '58%',
          height: '50vh', // Adjust the height as needed
        }}
      ></div>

      {/* Login form */}
      <div style={{ backgroundColor: 'pink', padding: '20px', borderRadius: '10px', width: '60%' }}>
          {/* Login form */}
          <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#000000' }}>Fill The Details</h2>
          <form style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ marginBottom: '10px', color: '#000000' }}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: '10px', marginBottom: '20px', borderRadius: '5px', color: '#000000' }}
            />
            <label style={{ marginBottom: '10px', color: '#000000' }}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: '10px', marginBottom: '20px', borderRadius: '5px', color: '#000000' }}
            />
            <Link to="/Ring">
            <button 
              type="button" 
              onClick={handleLogin} 
              style={{ 
                padding: '10px', 
                borderRadius: '5px', 
                backgroundColor: '#4285f4', 
                color: '#ffffff', 
                cursor: 'pointer',
                transition: 'background-color 0.3s',
                width:'853px'
              }}
              // Hover effect
              onMouseOver={(e) => e.target.style.backgroundColor = '#2c5db2'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#4285f4'}
            >
              Login
            </button></Link>
          </form>
        </div>
    </div>
  );
};

export default Login;
