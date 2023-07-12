import React from 'react';

const banner = () => {
    return (
        <div className='w-full h-screen'>
            <img className='top-0 left-0 lg:w-full md:w-full md:h-[400px] lg:h-[500px] h-48 w-full object-cover' src="http://localhost:3000/images/banpelatihan.webp" alt="" />
            <div className='absolute -mt-56 text-2xl font-[600] text-white text-["Montserrat"] ml-56 md:ml-[35rem] text-[30px]'>
                <h2 className='mb-10 md:mb-4 lg:ml-[20rem] ml-0 mt-16 md:mt-0 text-[24px] lg:-mt-28'>Pelatihan</h2>
                <p className='text-[13px] md:text-[20px] leading-4 px-3 md:px-0 md:leading-none md:mt-0 md:text-xl lg:px-0 font-[400] text-["Montserrat"] lg:ml-[20rem] -mt-5 lg:mt-0'>apa itur pelatihan dan untuk siapa. <br/>title bebas</p>
            </div>
        </div>
    );
}

export default banner;
