/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';
import { Helmet } from 'react-helmet';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../Pages/providers/AuthProvider';
import { FaHome, FaUser, FaUsers, FaWallet } from 'react-icons/fa';
import { CgMenu } from 'react-icons/cg';
import { AiOutlineTeam } from 'react-icons/ai';
import useClass from '../hooks/useClass';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';

const DashboardLayOut = () => {

    const { user } = useContext(AuthContext);
    const [classes, refetch] = useClass();
    // TODO
    const [isAdmin] = useAdmin();
    // const isAdmin = true;
    const [isInstructor] = useInstructor();
    // const isInstructor = false;
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
                        {/* Content  */}
                        <Outlet></Outlet>
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full bg-stone-500 opacity-60 text-white ">
                            {/* Sidebar content here */}
                            <div className='mt-8 text-center'>


                                <div className="avatar online w-12 mx-2 m-auto">
                                    <div className="w-24 rounded-full">
                                        <img src={user?.photoURL} />


                                    </div>
                                </div>

                                <p className='mt-2 text-center text-white font-semibold'>{user?.displayName}</p>
                                <p className='mt-2 text-center text-white font-semibold'>
                                    {user?.email}
                                </p>

                            </div>


                            {
                                isAdmin ?

                                    (<div><li><NavLink className='my-2' to='adminPanel'><FaUser></FaUser>Admin Home </NavLink></li>
                                        <li><NavLink className='my-2' to='/classes'><CgMenu></CgMenu> ALL Classes</NavLink></li>
                                        <li><NavLink className='my-2 mt-4' to='/'><FaHome></FaHome> Home</NavLink></li>
                                        <li><NavLink className='my-2' to='allUsers'><FaUsers></FaUsers> All Users</NavLink></li></div>) :

                                    isInstructor ? (
                                        <div>
                                            <li><NavLink className='my-2' to='instructorPanel'><FaHome></FaHome>Instructor Home</NavLink></li>
                                            <li><NavLink className='my-2' to='/classes'><CgMenu></CgMenu> ALL Classes</NavLink></li>
                                            <li><NavLink className='my-2 mt-4' to='/'><FaHome></FaHome> Home</NavLink></li>
                                            <li><NavLink className='my-2' to='/instructors'><AiOutlineTeam></AiOutlineTeam>My Added Class</NavLink></li>
                                        </div>
                                    ) :
                                        (

                                            <div>

                                                <li><NavLink className='my-2' to='myPortal'><FaHome></FaHome>My Portal </NavLink></li>
                                                <li><NavLink className='my-2' to='/classes'><CgMenu></CgMenu> ALL Classes</NavLink></li>
                                                <li><NavLink className='my-2' to='/'><FaWallet></FaWallet> Payment History</NavLink></li>
                                                <li><NavLink className='my-2 mt-4' to='/'><FaHome></FaHome> Home</NavLink></li>
                                                <li><NavLink className='my-2' to='/instructors'><AiOutlineTeam></AiOutlineTeam> My Instructors</NavLink></li>
                                            </div>

                                        )
                            }
                        </ul>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayOut;