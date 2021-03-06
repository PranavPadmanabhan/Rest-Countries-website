import React, { useContext } from 'react';
import { ThemeContext } from '../../constants/ThemeContext';
import './Country.css'
import { Link } from 'react-router-dom'

function Country({name,population,region,capital,url,onClick}) {
    const { preferredTheme } = useContext(ThemeContext)
    return (
        <div onClick={onClick}  className='country' style={{backgroundColor:preferredTheme.headerColor}}>
           <img src={url} alt="" className="flag" />
           <div className="details" >
               <span className="country-name" style={{color:preferredTheme.textColor}}>{name}</span>
               <span className="population" style={{color:preferredTheme.textColor,fontWeight:"bold"}}>Population  :  &nbsp; {(<span style={{color:preferredTheme.textColor,fontWeight:"400"}} >{population}</span>)}</span>
               <span className="Region" style={{color:preferredTheme.textColor,fontWeight:"bold"}}>Region : &nbsp; {(<span style={{color:preferredTheme.textColor,fontWeight:"400"}} >  {region}</span>)}</span>
               <span className="capital" style={{color:preferredTheme.textColor,fontWeight:"bold"}}>Capital :  &nbsp; {(<span style={{color:preferredTheme.textColor,fontWeight:"400"}} >{capital}</span>)}</span>
           </div>
        </div>
    );
}

export default Country;
