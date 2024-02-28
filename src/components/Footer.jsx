import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer' >      
    <div className='btn' > 
     <BsFillTelephoneFill className='icon' />  <p> Toll Free 1800 200 1234 </p>   
    </div>
    <div className='btn' > 
     <FaFacebookF className='icon' />  <a href="https://www.facebook.com/cripumps" target="_blank" rel="noopener noreferrer" className='url' >www.facebook.com/cripumps</a>  
    </div>
    <div className='btn' > 
     <FaGlobe id='fb' />  
     <a href="https://www.cripumps.com" target="_blank" rel="noopener noreferrer" className='url' >www.cripumps.com</a> 
    </div>

</div>
  )
}

export default Footer
