import { useState } from "react";
import { User } from "../User";
import Car from "./Car";

function BookingCar() {
  const [prev,setPrev]=useState(false);
  const onPrev=()=>{
    setPrev(true);
  }

  if(prev){
    return(
      <Car/>
    )
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="h-64 flex justify-center mt-10">
        <img src="car.png" className="h-64 w-70 mt-10" />
      </div>
      <div className="flex items-center justify-center mt-40">
        <div className="w-48 h-48 bg-pink-500 rounded-full flex items-center justify-center text-white text-2xl">
          <ul className="flex items-center">
            <li className="text-8xl">2</li>
            <li className="text-4xl relative top-1">/5</li>
          </ul>
        </div>
        <div style={{ height: "150px", width: "75%" }} className="ml-8 flex flex-col items-center">
          <div className="flex flex-col items-center"> {/* Added this div to align text */}
            <h1 className="text-6xl leading-tight">Wash Packages</h1>
            <h1 className="text-3xl mt-1 leading-tight">Which wash is better for your vehicle?</h1>
          </div>
        </div>

      </div>
      <div className=" mx-auto">
        <ul className="flex flex-wrap justify-start p-5 sm:gap-12 ml-44 mt-8">
          {User.map((use, index) => (
            <li key={index}
              className="relative p-6 border border-gray-300 flex flex-col items-center w-60 h-auto min-h-[300px] sm:min-h-[450px] mb-20"
            >
              <h1 className="text-lg font-bold text-black">{use.title}</h1>
              <p className="text-xl mt-2">{use.price}</p>
              <hr className="w-full my-2 border-t border-pink-700" />
              <h4>{use.duration}</h4>
              <hr className="w-full my-2 border-t border-pink-700" />
              <p className="text-center text-sm">{use.info}</p>
              <button className="bg-pink-500 text-white px-4 py-2 rounded absolute bottom-6">Book Now</button>
            </li>
          ))}
        </ul>
        <div>
          <ul class="mt-8 flex space-x-4">
            <li class="flex-1 flex flex-col items-center">
              <div class="flex space-x-10">
                 {/* <form>
                  <input type="submit" value="prev" class="bg-pink-500 text-white text-3xl py-6 px-12 rounded cursor-pointer hover:bg-pink-600" />
                </form>  */}
                <div className="bg-pink-500 text-white text-3xl py-6 px-12 rounded cursor-pointer hover:bg-pink-600">
                  <button onClick={onPrev}>Prev</button>
                </div>
                {/* //here third page will be render on next click */}
                <div className="bg-pink-500 text-white text-3xl py-6 px-12 rounded cursor-pointer hover:bg-pink-600">
                  <button>Next</button>
                </div>

                {/* <form>
                  <input type="submit" value="Next" class="bg-pink-500 text-white text-3xl py-6 px-12 rounded cursor-pointer hover:bg-pink-600" />
                </form> */}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BookingCar;