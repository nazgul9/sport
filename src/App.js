import React from 'react';
import _Navbar from './components/_Navbar';
import {Routes,Route} from "react-router-dom"
import FoodHall from './components/FoodHall';
import Barba from './components/Barba'
import BaleiBool from "./components/BaleiBool"
import Fitnes from "./components/Fitnes"
import Aikido from "./components/Aikido"
import Home from './components/Home';
import Footer from "./components/Footer"
import Address from './components/Address';
import Contacts from './components/Contacts'

function App(props) {
  return (
    <div>
      <_Navbar/>
      <Routes>
        <Route path="/FoodHall" element={<FoodHall />} />
        <Route path="/Barba" element={<Barba />} />
        <Route path="/Aikido" element={<Aikido />} />
        <Route path="/Fitnes" element={<Fitnes />} />
        <Route path="/BaleiBool" element={<BaleiBool />} />
        <Route path="/Address" element={<Address/>}/>
        <Route path="/Contacts" element={<Contacts/>}/>

        <Route path="/" element={<Home />} />
       
    </Routes>
    
    <Footer/>
    </div>
  );
}

export default App;