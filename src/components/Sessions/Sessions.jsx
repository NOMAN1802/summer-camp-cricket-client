/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import { motion } from "framer-motion"
import { FaHandPointDown } from 'react-icons/fa';
import Aos from 'aos';

const Sessions = () => {

    useEffect(() => {
        Aos.init();
      }, [])
   
    return (
        <div className='my-12'>
         <Marquee speed={100}> <h2 className='text-3xl text-stone-500 font-semibold text-center '>Our Class time periods </h2></Marquee>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 my-8'>


                <div className="card w-64 bg-base-100 shadow-xl" data-aos="zoom-in">
                    <div className="card-body">
                        <div className="card-actions justify-center">
                            <button className="btn btn-square btn-sm">
                               <FaHandPointDown></FaHandPointDown>
                            </button>
                        </div>
                        <p className='text-center text-stone-400 text-medium'>Morning Session</p>
                        <p className='text-center text-stone-400 text-xs'>9 AM - 12 PM</p>
                    </div>
                </div>
                <div className="card w-64 bg-base-100 shadow-xl" data-aos="zoom-in">
                    <div className="card-body">
                        <div className="card-actions justify-center">
                            <button className="btn btn-square btn-sm">
                            <FaHandPointDown></FaHandPointDown>
                            </button>
                        </div>
                        <p className='text-center text-stone-400 text-medium'>Day Session</p>
                        <p className='text-center text-stone-400 text-xs'>12 PM - 4 PM</p>
                    </div>
                </div>
                <div className="card w-64 bg-base-100 shadow-xl">
                    <div className="card-body" data-aos="zoom-in">
                        <div className="card-actions justify-center">
                            <button className="btn btn-square btn-sm">
                            <FaHandPointDown></FaHandPointDown>
                            </button>
                        </div>
                        <p className='text-center text-stone-400 text-medium'>Evening Session</p>
                        <p className='text-center text-stone-400 text-xs'>4 PM - 8 PM</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Sessions;