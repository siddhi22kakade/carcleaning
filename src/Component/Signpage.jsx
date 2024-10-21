import React, { useState } from 'react';

const Signpage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); 
  const [phone, setPhone] = useState(false); 
  const handleSignpage = (e) => {
    e.preventDefault();

    const emailRegex = /\d/;
    if (!emailRegex.test(email)) {
      alert('Email must contain at least one number!');
      return;
    }

  
    if (password.length < 6) {
      alert('Password must be at least 6 characters long!');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords not match!');
      return;
    }

    
    setMessage('Signup successful!');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="w-full max-w-md p-8 bg-white border border-gray-300 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-6">Signup page</h1>
        {message && <p className="text-green-500 text-center mb-4">{message}</p>}
        <form onSubmit={handleSignpage} className="space-y-4">
          <div className='hidden'>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative hidden">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'} 
              id="password"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 px-3 py-2 text-gray-500 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
          
            </button>
          </div>

          <div className="relative hidden">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirm-password"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 px-3 py-2 text-gray-500 focus:outline-none"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              
            </button>
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
             Phone 
            </label>
            <input
              type="number"
              id="phone"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 px-4 rounded-md focus:outline-none"
          >
          Get OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signpage;
