/* eslint-disable no-unused-vars */
import React from 'react';
import Container from './Container';

import { FaFacebook, FaGooglePlusG, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <Container>
            <div className='footer bg-opacity-40 bg-black text-white'>

                <div>
                    <div className="grid  lg:grid-cols-3 justify-around">
                        <div className='ps-8 mt-4'>
                            <div>
                                <img className='rounded-xl mr-4' src="https://i.ibb.co/w7tSfv2/1000-F-499625910-gh-BBx-V9-Rs-HAWLQVPJd-Tp-F49io-BP9ak1-Z.jpg" alt="" height={50} width={60} />
                                <p className=' text-stone-200 font-semibold'>SH75 <span className='text-blue-300'>Academy</span></p>
                            </div>
                            <small >Action figures can be found in toy stores, hobby shops, and online marketplaces. There are also specialized conventions and events dedicated to action figures and collectibles, where enthusiasts can buy, trade, and connect with fellow fans.</small>
                        </div>
                        <div className='ps-8 mt-4'>
                            <p className='font-semibold'>Site Links</p>
                            <p><small>Instructors</small></p>
                            <p><small>Classes</small></p>
                            <p><small>About</small></p>
                        </div>
                        <div className='ps-8 mt-4'>
                            <p className='font-bold'>Social media</p>
                            <p><FaFacebook></FaFacebook></p>
                            <p><FaGooglePlusG></FaGooglePlusG></p>
                            <p> <FaYoutube></FaYoutube></p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by SH75 Academy</p>
                </div>
            </div>
        </Container>
    );
};

export default Footer;