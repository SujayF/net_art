/* eslint-disable react/no-unescaped-entities */
import './App.css'
import logo from './assets/logo.png';
import equips from './assets/3.png'
import Pipe from './components/Pipe';
import Body from './components/Body'
import Footer from './components/Footer';


function App() {

  return (
    <>
     <div className='header' >
      <img src={logo} alt="logo" id='logo' />
     </div>
       
     <Body/>

      <div className='end' >
        <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p> 
        <img src={equips} alt='equips' id='equips'/>
        <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
        <hr style={{ color: 'red', width: '96%' }} />
        <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
      </div>
     
      

      <div className='line' >
      <p>CHEMICALS & PROCESS <Pipe/> POWER <Pipe/> WATER & WASTE WATER <Pipe/> OILS & GAS <Pipe/> PHARMA SUGARS & DISTILLERIES <Pipe/> PAPER & PULP MARINE  <Pipe/> DEFENCE METAL  <Pipe/> MINING  <Pipe/> FOOD  & BEVERAGE  <Pipe/> PETROCHEMICAL & REFINERIES  <Pipe/> SOLAR  <Pipe/>  BUILDING  <Pipe/> HVAC  <Pipe/> FIRE FIGHTING  <Pipe/> AGRICULTURE & RESIDENTIAL </p>
      </div>
     
     <Footer/>
 

    </>
  )
}

export default App
