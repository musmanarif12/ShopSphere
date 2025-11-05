import React, { useState } from 'react';
import '../Styling/SignUp.css';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSignUp = () => {
    if (!name || !email || !password || !confirm) {
      alert("Please fill all fields!");
      return;
    }

    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }

    const newUser = { name, email, password };

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = existingUsers.find(user => user.email === email);
    if (userExists) {
      alert("User already exists with this email!");
      return;
    }

    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    alert("Sign up successful!");
  };

  return (
    <div className="signup-form">
      <h1>TimeVerse - Sign Up</h1>
      <input type="text" placeholder="Enter Name" className="signup-input" onChange={(e) => setName(e.target.value)} /><br/>
      <input type="email" placeholder="Enter Email" className="signup-input" onChange={(e) => setEmail(e.target.value)} /><br/>
      <input type="password" placeholder="Enter Password" className="signup-input" onChange={(e) => setPassword(e.target.value)} /><br/>
      <input type="password" placeholder="Confirm Password" className="signup-input" onChange={(e) => setConfirm(e.target.value)} /><br/>
      <button className="signup-btn" onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}
