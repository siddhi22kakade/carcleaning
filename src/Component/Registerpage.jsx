import { register ,regbuton} from "../User";

function Registerpage() {
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
                <li class="text-8xl">5</li>
                <li class="text-6xl relative top-4">/5</li>
              </ul>
            </div>
            <div style={{ height: "150px", width: "50%", }} class="ml-8">
              <ul>
                <h1 class="text-7xl">Booking summary</h1>
              </ul>

              <h1 class="text-5xl mt-8 whitespace-nowrap">Please provide us with your contact information.</h1>
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mb-8 mt-7 items-center justify-center">

            {register.map((regp, index) => (
              <div
                key={index}
                className={`w-full h-[150px] border-2 border-gray-300 rounded-md flex flex-col justify-center items-end ${regp.extraClass ? regp.extraClass : ''}`}
              >

                <p className="text-blue-700 text-right mr-4 text-2xl mb-1">{regp.title}</p>
                <p className="text-gray-700 text-right mr-4 text-xl">{regp.subtitle}</p>
              </div>
            ))}
          </div>
          <div>
          <div className="flex justify-center">
  <h2 className="underline text-blue-300 hover:text-black mb-6 mr-4">Do you have a coupon code?</h2>
</div>
            
              <form class="space-y-4 border-gray-100 p-1 mb-8 flex-col items-center justify-center">
 
              <div class="border-8 border-gray-100 p-1 mt-8">
                  <div class="flex space-x-4 mb-4">
                    <div class="flex-1 mr-4">
                      <label for="email" class="block text-sm font-medium text-gray-700">First name*</label>
                      <input type="First name*" class="mt-1 p-2 block w-full border  rounded-full focus:ring-blue-500 focus:outline-none" />
                  
                  </div>
                    <div class="flex-1 ml-4">
                      <label for="coupon" class="block text-sm font-medium text-gray-700">last name*</label>

                      <input type="last name*" class="mt-1 p-2 block w-full border  rounded-full focus:ring-blue-500 focus:outline-none" />
                    </div>
                    
                  </div>
                  <hr class="mt-8 border-t-5 border-gray-200 w-90x" />
                  <label>City</label>
                  <input type="city" class="mt-1 p-2 block w-full border  rounded-full focus:ring-blue-500 focus:outline-none" />
                  
                      <hr class="mt-8 border-t-5 border-gray-200 w-90x" />
                    
                      <label>Stress</label>
                  <input type="text"class="mt-1 p-2 block w-full border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500 focus:outline-none"/>
                 <hr class="mt-8 border-t-5 border-gray-200 w-90x" />
                  <div class="flex space-x-4 mb-4">
                    <div class="flex-1">
                      <label for="first-name" class="block text-sm font-medium text-gray-700">Your E-mail *</label>
                      <input type="text" class="mt-1 p-2 block w-full border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
                    </div>
                    <div class="flex-1">
                      <label for="last-name" class="block text-sm font-medium text-gray-700">phone number *</label>
                      <input type="text" class="mt-1 p-2 block w-full border border-gray-300 rounded-full focus:ring-blue-500 focus:outline-none " />
                    </div>
                  </div>
                  <hr class="mt-8 border-t-5 border-gray-200 w-90x" />

                  <label>Vehicle make  a model</label>
                  <input type="" class="mt-1 p-2 block w-full border border-gray-300 rounded-full focus:ring-blue-500 focus:outline-none" />
                  <hr class="mt-8 border-t-5 border-gray-200 w-90x" />

                  <label>Payment type</label>
                  <div className="mt-4">

                    <div className="mt-4 relative">
                      <select
                        id="payment"
                        name="payment"
                        className="mt-1 block w-full p-2 bg-white rounded-full shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm custom-select"
                      >
                        <option value="">Choose the Payment</option>
                        <option value="cash">Cash</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                We will confirm your appointment with you by phone or e-mail within 30 minuites of receiving your request.
              </div>
             
              <div className="flex flex-col items-center justify-center">
  <ul className="space-y-4">
    {regbuton.map((button, index) => (
      <li key={index}>
        <div className="bg-pink-500 text-white text-xl h-45 w-64 py-6 px-12 cursor-pointer hover:bg-pink-600 rounded-full focus:outline-none">
          <button className={`w-full h-full ${button.extraClass}`}>
            {button.text}
          </button>
        </div>
      </li>
    ))}
  </ul>
</div>
 </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default Registerpage;