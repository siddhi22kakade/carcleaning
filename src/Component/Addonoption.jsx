import { Data } from './Data';
import React from 'react';
import { useNavigate } from 'react-router-dom';
function Addonoption() {
  const navigate = useNavigate();
  const handlePrevClick = () => {
    navigate('/bookingcar');
  };
  const handleNextClick = () => {
    navigate('/register');
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="h-64 flex justify-center mt-10">
        <img src="car.png" className="h-64 w-70 mt-10" />
      </div>
      <ul className="flex items-center mr-80">
        <li>
          <div className="bg-pink-500 w-40 h-40  mt-20 rounded-full flex items-center justify-center">
            <span className="text-white text-3xl">
              <span className="text-3xl">3</span>/5
            </span>
          </div>
        </li>
        <li className="flex flex-col ml-5 mt-20">
          <h1 className="ont-semibold text-5xl">Add on-options</h1>
          <p className="mt-5 text-2xl font-thin">Add services to your package.</p>
        </li>
      </ul>
      <div className="w-[1200px]  mx-auto border-1 h-[500px] mt-20 overflow-y-auto">
        <div className="grid grid-cols-1 border border-gray-300">
          {Data.map((Data, index) => (
            <div
              key={index}
              className="border-b border-gray-300 p-4 text-gray-400 text-3xl flex justify-between items-center"
            >
              <span>{Data.name}</span>
              <button className="bg-pink-500 text-white  py-2 px-4 transition duration-200 hover:bg-pink-600">
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-19 p-5"> {/* Reduced margin from mt-10 to mt-5 */}
        <button
          onClick={handlePrevClick}
          className="bg-pink-500 text-white text-4xl py-2 px-4 mx-4 lg:py-3 lg:px-6"
        >
          Prev
        </button>
        <button
          onClick={handleNextClick}
          className="bg-pink-500 text-white text-4xl py-2 px-4 mx-4 lg:py-3 lg:px-6"
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default Addonoption;