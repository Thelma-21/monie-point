import React from 'react';
import { CgArrowUp } from 'react-icons/cg';
import FireNumber from '../fire-number/FireNumber';

import './Profile.css';

const Profile = ({ image, name, country, number }) => {
  return (
    <div className='card'>
      <div className="profile">
        <div className="image-box">
            <img src={image} alt="" />
        </div>
        <div className="text-box">
            <h3>{name}</h3>
            <p>{country}</p>
        </div>
      </div>
      <div className="right-icons">
        <div className="up-arrow">
            <CgArrowUp />
        </div>
        <FireNumber number={number} />
      </div>
    </div>
  )
}

export default Profile;