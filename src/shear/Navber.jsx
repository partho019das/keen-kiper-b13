import React from 'react';
import { Link, NavLink } from 'react-router';
import "./Navber.css"
const Navber = () => {
    return (
        <div>
          <div className='flex flex-col md:flex-row md:justify-between md:items-center justify-between gap-3 p-3'>
      
      <img src="/assets/logo.png" alt="" className="w-28 md:w-32" />

           <div className='flex flex-col sm:flex-row pr-3 gap-3 md:gap-6 text-[#64748B] nav-links'>
          
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Timeline">Timeline</NavLink>
          <NavLink to="/Stats">Stats</NavLink>
          
           </div>
          </div>
        </div>
    );
};

export default Navber;