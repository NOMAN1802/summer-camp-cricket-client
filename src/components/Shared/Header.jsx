/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Pages/providers/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }

    const navOptions = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/instructors'>Instructors</NavLink></li>
    <li><NavLink to='/classes'> Classes</NavLink></li>

    <li><Link to="/dashboard">Dashboard</Link></li>
    

    {
      user ? <>
        <span className='m-auto mt-2'>{user?.displayName}</span>
        <div className="avatar online w-12 mx-2 m-auto">
          <div className="w-24 rounded-full">
            <img src={user.photoURL} />
          </div>
        </div>
        <button onClick={handleLogOut} className="btn btn-ghost m-auto">LogOut</button>
      </> : <>
        <li><Link to="/login">Login</Link></li>
      </>
    }
    
  </>
   

   

    return (
        <div>
        <div className="navbar bg-opacity-40 bg-black text-white ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
                {navOptions}
              </ul>
            </div>
            <img className='rounded-xl mr-4' src="https://i.ibb.co/w7tSfv2/1000-F-499625910-gh-BBx-V9-Rs-HAWLQVPJd-Tp-F49io-BP9ak1-Z.jpg" alt="" height={50} width={60} />
            <Link className=" normal-case text-lg"><p className='font-bold text-stone-200'>SH75 <span className='text-blue-300'>Academy</span></p></Link>
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

export default Header;