import './App.css';
import Car from './Component/Car.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingCar from './Component/BookingCar.jsx';
import Registerpage from './Component/Registerpage.jsx';
import Addonoption from './Component/Addonoption.jsx';
import Signpage from './Component/Signpage.jsx';
function App(){
  return(

    <Router>
      <Routes>
      <Route path="/car" element={<Car />} /> 
        <Route path="/bookingcar" element={<BookingCar />} /> 
        <Route path="/register" element={<Registerpage />} />
        <Route path="/addonoption" element={<Addonoption />} />
        <Route path="/signup"  element={<Signpage />}/>
       
      </Routes>
    </Router>
  );
}
export default App;