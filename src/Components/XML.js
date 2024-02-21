 import React from 'react'
 import { Link, Router } from "react-router-dom";
 import '../styles/XML.css'

 
 function XML() {
   return (
    <div className='parent'>
     <div className='XmlDiv'> 
        <Link to='/sub500'>
        <button className='button_xml'>Masini Sub 500 lei</button>
        </Link>
        
        <Link to='/peste500'>
        <button className='button_xml'>Masini Peste 500 lei</button>
        </Link>

        <Link to='/peste30'>
        <button className='button_xml'>Masini Peste 30000 km</button>
        </Link>

        <Link to='/sub30'>
        <button className='button_xml'>Masini Sub 30000 km</button>
        </Link>

        <Link to='/SortAlb'>
        <button className='button_xml'>Masini Albe</button>
        </Link>

        <Link to='/SortNegru'>
        <button className='button_xml'>Masini Negre</button>
        </Link>

        </div>

     </div>
   )
 }
 
 export default XML