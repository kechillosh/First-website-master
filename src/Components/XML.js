 import React from 'react'
 import { Link, Router } from "react-router-dom";

 
 function XML() {
   return (
     <div> 
        <Link to='/sub500'>
        <button className='button_xml'>masini sub 500 lei</button>
        </Link>
        
        <Link to='/peste500'>
        <button className='button_xml'>masini peste 500 lei</button>
        </Link>

        <Link to='/peste30'>
        <button className='button_xml'>masini peste 30000 km</button>
        </Link>

        <Link to='/sub30'>
        <button className='button_xml'>masini sub 30000 km</button>
        </Link>

        <Link to='/SortAlb'>
        <button className='button_xml'>masini albe</button>
        </Link>

        <Link to='/SortNegru'>
        <button className='button_xml'>masini negre</button>
        </Link>

        <Link to='TipC'>
        <button className='button_xml'>Tip Carburant Benzina</button>
        </Link>

        <Link to='/Media'>
        <button className='button_xml'>Media de km a masinilor</button>
        </Link>

        <Link to='/Lux'>
        <button className='button_xml'>masini lux</button>
        </Link>

        <Link to='/sport'>
        <button className='button_xml'>masini sport</button>
        </Link>

     </div>
   )
 }
 
 export default XML