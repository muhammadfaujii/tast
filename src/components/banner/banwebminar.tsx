import React from 'react';

const banner = () => {
    return (
        <div className='w-full h-screen md:mt-24 lg:mt-0'>
            <img className='top-0 left-0 w-full h-[600px] object-cover' src="http://localhost:3000/images/banwebminar.webp" alt="" />
            <div className='absolute top-[-50px] left-0 w-full h-screen '>
                <div className='absolute top-3 w-full h-full flex flex-col justify-center text-[#5B5B5B]'>
                    <div className='md:left-[10%] max-w-[800px] m-auto absolute mt-[200px]'>
                        <h1 className='font-bold lg:text-4xl text-[20px] ml-5 sm:text-left 
                        md:text-6xl z-10 text-[#002157] md:-mt-36'>Webinar</h1>
                        <p className='max-w-[600px] ml-4 sm:text-left drop-shadow-2xl py-10 lg:text-3xl z-10 md:text-[30px]'>
                            apa itu webminar dan untuk siapa <br />
                            title bebas</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default banner;