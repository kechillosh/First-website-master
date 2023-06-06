 import React from 'react'
 import { Link, Router } from "react-router-dom";

 
 function XML() {
   return (
     <div> 
        <Link to=''>
        <button className='button_xml'>masini sub 500 lei</button>
        </Link>
        <Link to=''>
        <Link to=''>
        <button className='button_xml'>masini peste 500 lei</button>
        </Link>
        <Link to=''>
        <button className='button_xml'>masini peste 30000 km</button>
        </Link>
        <Link to=''>
        <button className='button_xml'>masini sub 30000 km</button>
        </Link>
        <Link to=''>
        <button className='button_xml'>masini albe</button>
        </Link>
        <Link to=''>
        <button className='button_xml'>masini negre</button>
        </Link>
        <Link to=''>
        <button className='button_xml'>Tip Carburant Benzina</button>
        </Link>
        <button className='button_xml'>Media de km a masinilor</button>
        </Link>
        <Link to='/Lux'>
        <button className='button_xml'>masini lux</button>
        </Link>
        <Link to=''>
        <button className='button_xml'>masini sport</button>
        </Link>

     </div>
   )
 }
 
 export default XML