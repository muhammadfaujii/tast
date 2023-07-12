import React from 'react';

const banner = () => {
    return (
        <div className='w-full h-screen'>
            <img className='top-0 left-0 w-full h-[600px] object-cover' src="http://localhost:3000/images/banner.webp" alt="" />
            <div className='absolute top-3 left-0 w-full h-screen'>
                <div className='absolute top-3 w-full h-full flex flex-col justify-center text-white'>
                    <div className='md:left-[10%] max-w-[800px] m-auto absolute mt-[280px] px-6 md:-mt-36 md:-ml-10'>
                        <h1 className='font-[700] mb-6 md:text-[50px] text-[16px]'>Layanan konseling individu<br/>pasangan & keluarga</h1>
                        <p className='md:text-[30px] text-[14px]'>apa itud Layanan Konseling individu pasangan & keluarga dan untuk siapa. title bebas</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default banner;
