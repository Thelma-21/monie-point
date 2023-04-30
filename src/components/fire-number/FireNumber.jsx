import React from 'react';
import { IoIosFlame } from 'react-icons/io';

import './FireNumber.css';

const FireNumber = ({number}) => {
  return (
    <div className='container'>
      <div className='flame-div'>
        <IoIosFlame />
      </div>
      <div className='number-div'>
        {number}
      </div>
    </div>
  )
}

export default FireNumber;