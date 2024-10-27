import { useState } from 'react';
import { register, regbuton } from "../User";
import Addonoption from './Addonoption';
import { useNavigate } from 'react-router-dom'; 

function Registerpage() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [errors, setErrors] = useState({});
  const [prev, setPrev] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const onPrev = () => {
    setPrev(true);
  };

  if (prev) {
    return <Addonoption />;
  }

  const validateForm = () => {
    const newErrors = {};

    if (!firstName) {
      newErrors.firstName = 'First name is required';
    } else if (firstName[0] !== firstName[0].toUpperCase()) {
      newErrors.firstName = 'First letter must be capitalized';
    }

    if (!lastName) {
      newErrors.lastName = 'Last name is required';
    } else if (lastName[0] !== lastName[0].toUpperCase()) {
      newErrors.lastName = 'First letter must be capitalized';
    }

    const emailPattern = /\d/;
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!emailPattern.test(email)) {
      newErrors.email = 'Email must contain at least one number';
    }

    const phonePattern = /^[0-9]+$/;
    if (!phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!phonePattern.test(phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must contain only numbers';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted successfully', { firstName, lastName, email, phoneNumber, city, street });
      alert('Form submitted successfully!');
      navigate('/signup');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumber('');
      setCity('');
      setStreet('');
    }
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div style={{ display: "flex", flexDirection: "column", alignContent: "center" }}>
          <div className="h-64 flex justify-center mt-10">
            <img src="car.png" className="h-64 w-70 mt-10 ml-10" alt="Car" />
          </div>
          <div className="m-[100px] mt-[20px] w-full flex flex-col ml-90 items-start mt-60 justify-center">
            <div className="flex items-center mt-20 ml-20">
              <div className="w-48 h-48 bg-pink-500 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl">
                <ul className="flex items-center">
                  <li className="text-8xl">5</li>
                  <li className="text-6xl relative top-4">/5</li>
                </ul>
              </div>
              <div style={{ height: "150px", width: "50%" }} className="ml-8">
                <ul>
                  <h1 className="text-7xl">Booking summary</h1>
                </ul>
                <h1 className="text-5xl mt-8 whitespace-nowrap">Please provide us with your contact information.</h1>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center mt-5">
              <h2
                className="underline text-blue-400 hover:text-black text-3xl cursor-pointer mr-4"
                onClick={() => setShowInput(true)}
              >
                Do you have a coupon code?
              </h2>

              {showInput && (
                <input
                  type="text"
                  placeholder=""
                  className="p-4 border rounded-full border-gray-400 text-3xl focus:outline-none"
                />
              )}
            </div>
            <form className="space-y-4 p-1 mb-8 justify-center w-full max-w-7xl" onSubmit={handleSubmit}>
              <div className="border-8 border-gray-300 p-2 mt-8 w-full">
                <div className="flex space-x-4 mb-4 w-full">
                  <div className="flex-1 mr-4 w-full">
                    <label htmlFor="firstName" className="text-2xl text-gray-700">First name*</label>
                    <input
                      type="text"
                      name="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className={`mt-1 p-2 block w-full border rounded-full text-3xl border-gray-400  focus:ring-blue-500 focus:outline-none ${errors.firstName ? 'border-red-500' : ''}`}
                    />
                    {errors.firstName && <p className="text-red-500 text-3xl">{errors.firstName}</p>}
                  </div>

                  <div className="flex-1 ml-4">
                    <label htmlFor="lastName" className=" text-4xl text-gray-700">Last name*</label>
                    <input
                      type="text"
                      name="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className={`mt-1 p-2  w-full border rounded-full  text-3xl  border-gray-400 focus:ring-blue-500 focus:outline-none ${errors.lastName ? 'border-red-500' : ''}`}
                    />
                    {errors.lastName && <p className="text-red-500 text-3xl">{errors.lastName}</p>}
                  </div>
                </div>

                <label htmlFor="city" className="text-2xl text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="mt-1 p-4  w-full border rounded-full text-3xl border-gray-400 text-2xl focus:outline-none"
                />

                <label htmlFor="street" className="text-2xl text-gray-700" >Street</label>
                <input
                  type="text"
                  name="street"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="mt-1 p-4  w-full border border-gray-400 text-3xl rounded-full focus:ring-blue-500 focus:outline-none"
                />

                <div className="flex space-x-4 mb-4">
                  <div className="flex-1">
                    <label htmlFor="email" className="text-2xl text-gray-700">Your E-mail *</label>
                    <input
                      type="text"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`mt-1 p-4 text-2xl w-full border border-gray-400 text-3xl rounded-full focus:ring-blue-500 focus:outline-none ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-red-500 text-3xl">{errors.email}</p>}
                  </div>
                  <div className="flex-1">
                    <label htmlFor="phoneNumber" className="text-2xl text-gray-700">Phone number *</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className={`mt-1 p-4  text-2xl block w-full border border-gray-400  text-3xl rounded-full focus:ring-blue-500 focus:outline-none ${errors.phoneNumber ? 'border-red-500' : ''}`}
                    />
                    {errors.phoneNumber && <p className="text-red-500 text-3xl">{errors.phoneNumber}</p>}
                  </div>
                </div>
              </div>

              <div className='text-2xl'>
                We will confirm your appointment with you by phone or e-mail within 30 minutes of receiving your request.
              </div>

              <div className="flex flex-col items-center justify-center">
                <ul className="space-y-4">
                  <div className="bg-pink-500 text-white text-xl h-45 w-64 py-6 px-12 cursor-pointer hover:bg-pink-600 rounded-full focus:outline-none">
                    <button type="submit " onClick={handleSubmit}>Confirm Booking</button>
                  </div>
                  <div className="bg-pink-500 text-white text-xl h-45 w-64 py-6 px-12 cursor-pointer hover:bg-pink-600 rounded-full focus:outline-none">
                    <button type="button" onClick={onPrev}>Prev</button>
                  </div>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registerpage;