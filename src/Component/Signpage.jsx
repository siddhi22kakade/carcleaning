import React, { useState } from 'react';

const Signpage = () => {
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [iserror, setisError] = useState(false);

  const handleSignpage = (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(phone)) {
      setisError(true);
      setErrorMessage('Phone number must be exactly 10 digits!');
      setPhone("");
      console.log('Phone number not saved successfully:', phone);
      return;

    }
    else{
      setisError(false);
      setErrorMessage('OTP send Sucessfully!!');
      setPhone("");
    console.log('Phone number saved successfully:', phone);}

  }


  return (
    <div className="flex justify-center items-center mt-20">
      <div className="w-full max-w-md p-8 bg-white border border-gray-300 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-6">Signup page</h1>
        {errorMessage && (
          <p className={`${iserror ? 'text-red-500' : 'text-green-500'} text-center mb-4`}>
            {errorMessage}
          </p>
        )}
        <form onSubmit={handleSignpage} className="space-y-4">
          <div className="relative">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
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
