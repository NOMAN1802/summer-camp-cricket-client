/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Pages/providers/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
import useStudent from '../../hooks/useStudent';


const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [isStudent] = useStudent();

    const [theme, setTheme] = useState(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
  
   
    const handleToggle = (e) => {
      if (e.target.checked) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };
  
    
    useEffect(() => {
      localStorage.setItem("theme", theme);
      const localTheme = localStorage.getItem("theme");
      document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }

  const navOptions = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/instructors'>Instructors</NavLink></li>
    <li><NavLink to='/classes'> Classes</NavLink></li>

    {user &&
          
       
            isAdmin ?
    
            (<li><NavLink to="/dashboard/adminPanel">Dashboard</NavLink></li>) :
    
            isInstructor ? (
              <li><NavLink to="/dashboard/instructorPanel">Dashboard</NavLink></li>
            ) :
               ''
          
        }
    
    {
      user && 
       isStudent ? (
        <li><NavLink to="/dashboard/myPortal">Dashboard</NavLink></li>
      ) : ''
    }

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
        <li><NavLink to="/login">Login</NavLink></li>
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
        <label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox"  
    onChange={handleToggle}

    checked={theme === "light" ? false : true}
  
  
  />
  
  {/* sun icon */}
  <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
        </div>
      </div>
    </div>
  );
};

export default Header;