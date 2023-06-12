/* eslint-disable no-unused-vars */
import React from 'react';
import Marquee from 'react-fast-marquee';
const InstructorPanel = () => {
    return (
        <div>
            <h2 className='text-stone-500 text-center text-4xl text-bold'>Instructor Panel</h2>
            <Marquee speed={100}> <p className='text-center font-sm text-stone-300'>Explore the  class With me</p></Marquee>
            <p className='text-4xl text-stone-500 text-center font-semibold my-2'>Shakib <br />
                <span className='text-blue-400'> Cricket Academy</span></p>
            <div className='grid sm:grid-cols-1 md:grid-cols-2'>


                <div>
                    <p className='text-stone-400 mt-4' data-aos="flip-up">Country’s first World Class Training Infrastructure to train the
                        Future Cricketers under the professionally-renowned mentors
                        through professionally-designed training curriculum.</p>

                    <p className='text-3xl text-stone-500 font-semibold text-center mt-8'>Who We Are
                    </p>
                    <p className='text-stone-400 mt-4' data-aos="flip-up">Sakib Al Hasan, Managing Director of SH75 Academy and a national cricket player, dreamt of a cricket academy that could provide the country’s young talented cricketers with training facilities of global standard. With his dream, SH75 Cricket Academy emerges. He kept with him an architect to make the dream come true.</p>
                </div>

                <div>
                    <p className='text-stone-400 mt-4' data-aos="flip-up">SH75 Academy is the first international-standard cricket academy in the country, which emerged responding to the importance of training needs for the country’s young talented cricketers. This academy has got equipped with many world-class facilities solely to provide the aspiring talented cricketers with quality international-standard training-solutions to help them groom as the future leaders of the cricket field to rule the cricket with their outstanding performance.

                    </p>
                </div>
            </div>




        </div>
    );
};

export default InstructorPanel;