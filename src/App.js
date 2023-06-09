//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Homescreen from './Screens/Homescreen';
import Bookingscreen from './Screens/Bookingscreen';
import Registerscreen from './Screens/Registerscreen';
import Loginscreen from './Screens/Loginscreen';
import Profilescreen from './Screens/Profilescreen';


function App() {
  return (
    <div className="App">
       <Navbar/>
       <BrowserRouter>
         <Routes>
           
           <Route path = "/home" element = {<Homescreen/>}/>
           <Route path = "/book/:roomid/:fromdate/:todate" element = {<Bookingscreen/>}/>
           <Route path = "/register" element = {<Registerscreen/>}/>
           <Route path = "/login" element = {<Loginscreen/>}/>
           <Route path = "/profile" element = {<Profilescreen/>}/>

         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
