import { useState } from "react";
import BookingCar from "./BookingCar";

function Car() {
  const [nextPage,setNextPage]=useState(false);
  const onNext=()=>{
    setNextPage(true);
  }

  if(nextPage){
    return(
      <BookingCar/>
    )
  }
  return (

    <>

      <div style={{ display: "flex", flexDirection: "column", alignContent: "center", verticalAlign: "" }}>
        <div class="h-64 flex justify-center mt-10">
          <img src="car.png" class="h-64 w-70 mt-10 ml-10" />
        </div>
        <div class="m-[100px] mt-[20px] w-full flex flex-col ml-90 items-start mt-60 justify-center">

          <div class="flex items-center mt-20 ml-20 ">
            <div class="w-48 h-48 bg-pink-500 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl">
              <ul class="flex items-center ">
                <li class="text-8xl">1</li>
                <li class="text-4xl relative top-1">/5</li>
              </ul>
            </div>
            <div style={{ height: "150px", width: "75%", }} class="ml-8">
              <ul>
                <h1 class="text-7xl">Vehicle Type</h1>
              </ul>

              <h1 class="text-5xl mt-8">Select vehicle type below.</h1>
            </div>
          </div>

        </div>
      </div>
      <div className="mt-10 mx-auto  flex flex-col items-center text-center mt-8 text-6xl">
        <ul className="flex space-x-16">
          <li className="group">
            <div className="border-2 border-transparent hover: group-hover:border-red-500 rounded-lg p-4 transition duration-300">
              <img src="carFirst.png" className="h-64 w-70 mb-2" alt="Car Image" />
              <h1>Hatchback</h1>
            </div>
          </li>
          <li className="group">
            <div className="border-2 border-transparent group-hover:border-red-500 rounded-lg p-4 transition duration-300">
              <img src="carSecond.png" className="h-64 w-70 mb-2" alt="Car Image" />
              <h1>Sedan</h1>
            </div>
          </li>
          <li className="group">
            <div className="border-2 border-transparent group-hover:border-red-500 rounded-lg p-4 transition duration-300">
              <img src="carThird.png" className="h-64 w-70 mb-2" alt="Car Image" />
              <h1>Compact SUV</h1>
            </div>
          </li>
          <li className="group">
            <div className="border-2 border-transparent group-hover:border-red-500 rounded-lg p-4 transition duration-300">
              <img src="carFour.png" className="h-64 w-70 mb-2" alt="Car Image" />
              <h1>SUV</h1>
            </div>
          </li>
        </ul>
      </div>
      <div className="mt-8 flex flex-col items-center space-y-2">
        <div className="bg-pink-500 text-white text-6xl py-6 px-12 rounded cursor-pointer hover:bg-pink-600">
          <button onClick={onNext}>Next</button>
        </div>
        {/* {<form class="flex flex-col items-center space-y-2">
          <input type="submit" value="Next" class="bg-pink-500 text-white text-6xl py-6 px-12 rounded cursor-pointer hover:bg-pink-600"></input>
        </form> */} 
      </div>
      <div className="fixed bottom-0 rights-0 w-full text-right p-4 text-gray-300">
        <div className="text-5xl">
          <p>All rights reserved.</p>
        </div>
      </div>
  
  <div>
    
  </div>



      <div>
      </div>


    </>
  )
}
export default Car;

