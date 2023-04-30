import React from 'react';
import { BsDot } from 'react-icons/bs';

import './Lesson.css';
import speechBubble from '../../assests/speechBubble2.jpeg';

const Lesson = () => {
  return (
    <div className='lesson-container'>
      <div className='image-card'>
        <img src={speechBubble} alt="" />
      </div>
      <div></div>
      <div className='lesson-text'>
        <h3>Speaking 101</h3>
        <p>30 days <BsDot /> daily</p>
      </div>
    </div>
  )
}

export default Lesson;