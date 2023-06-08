/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';
import { Helmet } from 'react-helmet';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../Pages/providers/AuthProvider';
import { FaHome, FaWallet } from 'react-icons/fa';
import { CgMenu } from 'react-icons/cg';
import { AiOutlineTeam } from 'react-icons/ai';
import useClass from '../hooks/useClass';

const DashboardLayOut = () => {

    const { user } = useContext(AuthContext);
    const [classes, refetch] = useClass();
    
    return (
        <div>
            <Helmet>
                <title>SH75 Academy | Dashboard</title>
            </Helmet>
            <Header></Header>
            <div className='my-20'>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        <Outlet></Outlet>
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full bg-black opacity-60 text-white ">
                            {/* Sidebar content here */}
                            <div className='mt-8 text-center'>
                                
                               
                                <div className="avatar online w-12 mx-2 m-auto">
                                    <div className="w-24 rounded-full">
                                        <img src={user?.photoURL} />
                                        
                                        
                                    </div>
                                </div>
                                
                                <div className='mt-2 text-center text-stone-500 font-semibold'>{user?.displayName}</div>
                                <div className='mt-2 text-center text-stone-500 font-semibold'>
                                  {user?.email}
                                </div>
                                
                            </div>
                            <li><NavLink className='my-2' to='myPortal'><FaHome></FaHome>My Portal  <small>{classes?.length}</small></NavLink></li>
                            <li><NavLink className='my-2' to='/classes'><CgMenu></CgMenu> ALL Classes</NavLink></li>
                            <li><NavLink className='my-2' to='/'><FaWallet></FaWallet> Payment History</NavLink></li>
                            
                            <li><NavLink className='my-2 mt-4' to='/'><FaHome></FaHome> Home</NavLink></li>
                            <li><NavLink className='my-2' to='/instructors'><AiOutlineTeam></AiOutlineTeam> My Instructors</NavLink></li>
                         
                        </ul>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayOut;