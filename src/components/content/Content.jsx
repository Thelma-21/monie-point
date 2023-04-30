import React from 'react';
import { MdOutlineNavigateNext } from 'react-icons/md';

import './Content.css';

const Content = ({ title, children }) => {
  return (
    <section className="content">
        <div className="top">
            <h3 className="heading">{title}</h3>
            <div className="arrow">
                <MdOutlineNavigateNext />
            </div>
        </div>
        <div className="bottom">
            {children}
        </div>
    </section>
  )
}

export default Content;