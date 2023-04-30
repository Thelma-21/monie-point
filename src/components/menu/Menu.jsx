import React from 'react';
import { RiHome5Line, RiSettings4Line } from 'react-icons/ri';
import { BsBarChartLine } from 'react-icons/bs';
import { TbUsers } from 'react-icons/tb';

import './Menu.css';

const Menu = () => {
  return (
    <div className='menu-container'>
      <div><RiHome5Line /></div>
      <div><BsBarChartLine /></div>
      <div><TbUsers /></div>
      <div><RiSettings4Line /></div>
    </div>
  )
}

export default Menu;