import React, { useState } from 'react';
import '../Styling/Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      alert(`Welcome ${matchedUser.name}! Login Successful 🎉`);
      localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));
    } else {
      alert('Invalid email or password!');
    }
  };

  return (
    <div className="login-form">
      <h1>TimeVerse - Login</h1>
      <input
        type="email"
        placeholder="Enter Email"
        className="login-input"
        onChange={(e) => setEmail(e.target.value)}
      /><br/>
      <input
        type="password"
        placeholder="Enter Password"
        className="login-input"
        onChange={(e) => setPassword(e.target.value)}
      /><br/>
      <button className="login-btn" onClick={handleLogin}>Login</button>
    </div>
  );
}
