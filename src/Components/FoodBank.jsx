import React, { useEffect, useState } from 'react';
import DonarContainer from './DonarContainer';
import "./FoodBank.css";


const FoodBank = () => {
  const [showMap, setshowMap] = useState(0);

  const setVal = () =>{
    setshowMap(!showMap);
    console.log(showMap);
  }

  return(
    <div>
      
      

      <div className='foodb-top'>List of donors: </div>


      <DonarContainer/>


    </div>
  )
}


export default FoodBank;
