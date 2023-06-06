/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const navOptions = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/instructors'>Instructors</NavLink></li>
    <li><NavLink to='/classes'> Classes</NavLink></li>
    
  </>
   

   

    return (
        <div>
        <div className="navbar bg-opacity-30 bg-black text-white ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
                {navOptions}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-lg">Shakib Cricket Academy</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navOptions}
            </ul>
          </div>
          <div className="navbar-end">
            
          </div>
        </div>
      </div>
    );
};
// https://i.ibb.co/w7tSfv2/1000-F-499625910-gh-BBx-V9-Rs-HAWLQVPJd-Tp-F49io-BP9ak1-Z.jpg
export default Header;