
import './App.css';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/home';
import Pie from './Component/Piechart';
import Details from './Component/details';
import Location from './Component/Location';
import Piec from './Component/Piechart';
import Sarathi from './Component/Sarathi';
import China from './map/china';
import Chennai from './map/chennai';
import Newyork from './map/newyork';
import Steve from './Employees/Steve';
import Tony from './Employees/Tony';
import Banner from './Employees/Banner';
import Natasha from './Employees/Narasha';
import Chris from './Employees/Chris';
import Brooklyn from './map/bruklyn';
import Singapore from './map/singapore';
import Mongolia from './map/mongolia';
import Duba from './map/dubai';
import Peter from './Employees/Peter';
import Logan from './Employees/logan';
import Olson from './Employees/olson';
import Mary from './Employees/mary';
import Bruce from './Employees/bruce';
import Clark from './Employees/clark';
import Newzealand from './map/newzealand';
import Malaysia from './map/malaysia.';
import Korea from './map/korea';
import Germany from './map/germany';
import Mumbai from './map/mumbai';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
        
    document.title = "Employee Details"
  }, [])
    
  return (
   <>
   
   <Navbar />
   <Routes>
    <Route path='/Home' element={<Home />} />
    <Route path='/Piechart' element={<Piec />} />
    <Route path='/details' element={<Details />} />
    <Route path='/location' element={<Location />} />
    <Route path='/Sarathi' element={<Sarathi />} />
    <Route path='/Steve' element={<Steve />} />
    <Route path='/Tony' element={<Tony />} />
    <Route path='/Banner' element={<Banner />} />
    <Route path='/Natasha' element={<Natasha />} />
    <Route path='/Chris' element={<Chris />} />
    <Route path='/Peter' element={<Peter />} />
    <Route path='/Logan' element={<Logan />} />
    <Route path='/Elisabeth' element={<Olson />}/>
    <Route path='/Mary' element={<Mary />}/>
    <Route path='/Bruce' element={<Bruce />}/>
    <Route path='/Clark' element={<Clark />}/>
    <Route path='/china' element={<China />} />
    <Route path='/Chennai' element={<Chennai />} />
    <Route path='/Newyork' element={<Newyork />} />
    <Route path='/Brooklyn' element={<Brooklyn />} />
    <Route path='/Singapore' element={<Singapore />} />
    <Route path='/Mongolia' element={<Mongolia />} />
    <Route path='/Dubai' element={<Duba />} />
    <Route path='/newzealand' element={<Newzealand />} />
    <Route path='/Malaysia' element={<Malaysia />} />
    <Route path='/Korea' element={<Korea />} />
    <Route path='/Germany' element={<Germany />} />
    <Route path='/Mumbai' element={<Mumbai />} />
   </Routes>
   </>
  );
}

export default App;
