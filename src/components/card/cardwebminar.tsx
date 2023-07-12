import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import '../card/cardwebminar.css';

const Card = () => {
    return (
       <div className='flex justify-around md:flex flex-wrap'>
            <div className='w-[320px] h-96 rounded-lg shadow-lg bg-white'>
                <div className='ml-2'>
                    <h2 className='text-[#4B465C] bg-white font-[400] w-12 rounded-lg text-sm text-center       absolute mt-36'>2 Day
                    </h2>
                    <h2 className='text-[#4B465C] bg-white font-[400] ml-14 w-12 rounded-lg text-sm text-center absolute mt-36'>02 Min
                    </h2>
                    <h2 className='text-[#4B465C] bg-white font-[400] ml-28 w-12 rounded-lg text-sm text-center absolute mt-36'>59 Sec
                    </h2>
                </div>
                <img src='/images/webcard.webp' alt="/"/>
                <h1 className='text-xl font-bold text-blue-800 mt-2 px-4'>Webinar Belajar Life Planning untuk Gen Z</h1>
                <p className='text-gray-600 px-5 mt-3 font-[600]'>Rp 375.000</p>
                <div className='bg-blue-800 text-center py-3 rounded-lg mt-4 w-72 mx-auto text-white font-bold'>
                    <a href=''>Lihat Detail</a>    
                </div>
            </div>
            <div className='w-[320px] h-96 rounded-lg shadow-lg bg-white md:mb-6'>
                <div className='ml-2'>
                    <h2 className='text-[#4B465C] bg-white font-[400] w-12 rounded-lg text-sm text-center       absolute mt-36'>2 Day
                    </h2>
                    <h2 className='text-[#4B465C] bg-white font-[400] ml-14 w-12 rounded-lg text-sm text-center absolute mt-36'>02 Min
                    </h2>
                    <h2 className='text-[#4B465C] bg-white font-[400] ml-28 w-12 rounded-lg text-sm text-center absolute mt-36'>59 Sec
                    </h2>
                </div>
                <img src='/images/webcard.webp' alt="/"/>
                <h1 className='text-xl font-bold text-blue-800 mt-2 px-4'>Webinar Belajar Life Planning untuk Gen Z</h1>
                <p className='text-gray-600 px-5 mt-3 font-[600]'>Rp 375.000</p>
                <div className='bg-blue-800 text-center py-3 rounded-lg mt-4 w-72 mx-auto text-white font-bold'>
                    <a href=''>Lihat Detail</a>    
                </div>
            </div>
            <div className='w-[320px] h-96 rounded-lg shadow-lg bg-white md:mb-6'>
                <div className='ml-2'>
                    <h2 className='text-[#4B465C] bg-white font-[400] w-12 rounded-lg text-sm text-center       absolute mt-36'>2 Day
                    </h2>
                    <h2 className='text-[#4B465C] bg-white font-[400] ml-14 w-12 rounded-lg text-sm text-center absolute mt-36'>02 Min
                    </h2>
                    <h2 className='text-[#4B465C] bg-white font-[400] ml-28 w-12 rounded-lg text-sm text-center absolute mt-36'>59 Sec
                    </h2>
                </div>
                <img src='/images/webcard.webp' alt="/"/>
                <h1 className='text-xl font-bold text-blue-800 mt-2 px-4'>Webinar Belajar Life Planning untuk Gen Z</h1>
                <p className='text-gray-600 px-5 mt-3 font-[600]'>Rp 375.000</p>
                <div className='bg-blue-800 text-center py-3 rounded-lg mt-4 w-72 mx-auto text-white font-bold'>
                    <a href=''>Lihat Detail</a>    
                </div>
            </div>
            <div className='w-[320px] h-96 rounded-lg shadow-lg bg-white'>
                <div className='ml-2'>
                    <h2 className='text-[#4B465C] bg-white font-[400] w-12 rounded-lg text-sm text-center       absolute mt-36'>2 Day
                    </h2>
                    <h2 className='text-[#4B465C] bg-white font-[400] ml-14 w-12 rounded-lg text-sm text-center absolute mt-36'>02 Min
                    </h2>
                    <h2 className='text-[#4B465C] bg-white font-[400] ml-28 w-12 rounded-lg text-sm text-center absolute mt-36'>59 Sec
                    </h2>
                </div>
                <img src='/images/webcard.webp' alt="/"/>
                <h1 className='text-xl font-bold text-blue-800 mt-2 px-4'>Webinar Belajar Life Planning untuk Gen Z</h1>
                <p className='text-gray-600 px-5 mt-3 font-[600]'>Rp 375.000</p>
                <div className='bg-blue-800 text-center py-3 rounded-lg mt-4 w-72 mx-auto text-white font-bold'>
                    <a href=''>Lihat Detail</a>    
                </div>
            </div>
            <div className='w-[320px] h-96 rounded-lg shadow-lg bg-white'>
                <div className='ml-2'>
                    <h2 className='text-[#4B465C] bg-white font-[400] w-12 rounded-lg text-sm text-center       absolute mt-36'>2 Day
                    </h2>
                    <h2 className='text-[#4B465C] bg-white font-[400] ml-14 w-12 rounded-lg text-sm text-center absolute mt-36'>02 Min
                    </h2>
                    <h2 className='text-[#4B465C] bg-white font-[400] ml-28 w-12 rounded-lg text-sm text-center absolute mt-36'>59 Sec
                    </h2>
                </div>
                <img src='/images/webcard.webp' alt="/"/>
                <h1 className='text-xl font-bold text-blue-800 mt-2 px-4'>Webinar Belajar Life Planning untuk Gen Z</h1>
                <p className='text-gray-600 px-5 mt-3 font-[600]'>Rp 375.000</p>
                <div className='bg-blue-800 text-center py-3 rounded-lg mt-4 w-72 mx-auto text-white font-bold'>
                    <a href=''>Lihat Detail</a>    
                </div>
            </div>
            <div className='w-[320px] h-96 rounded-lg shadow-lg bg-white md:mb-6'>
                <div className='ml-2'>
                    <h2 className='text-[#4B465C] bg-white font-[400] w-12 rounded-lg text-sm text-center       absolute mt-36'>2 Day
                    </h2>
                    <h2 className='text-[#4B465C] bg-white font-[400] ml-14 w-12 rounded-lg text-sm text-center absolute mt-36'>02 Min
                    </h2>
                    <h2 className='text-[#4B465C] bg-white font-[400] ml-28 w-12 rounded-lg text-sm text-center absolute mt-36'>59 Sec
                    </h2>
                </div>
                <img src='/images/webcard.webp' alt="/"/>
                <h1 className='text-xl font-bold text-blue-800 mt-2 px-4'>Webinar Belajar Life Planning untuk Gen Z</h1>
                <p className='text-gray-600 px-5 mt-3 font-[600]'>Rp 375.000</p>
                <div className='bg-blue-800 text-center py-3 rounded-lg mt-4 w-72 mx-auto text-white font-bold'>
                    <a href=''>Lihat Detail</a>    
                </div>
            </div>
            <div className='w-[320px] h-96 rounded-lg shadow-lg bg-white'>
                <div className='ml-2'>
                    <h2 className='text-[#4B465C] bg-white font-[400] w-12 rounded-lg text-sm text-center       absolute mt-36'>2 Day
                    </h2>
                    <h2 className='text-[#4B465C] bg-white font-[400] ml-14 w-12 rounded-lg text-sm text-center absolute mt-36'>02 Min
                    </h2>
                    <h2 className='text-[#4B465C] bg-white font-[400] ml-28 w-12 rounded-lg text-sm text-center absolute mt-36'>59 Sec
                    </h2>
                </div>
                <img src='/images/webcard.webp' alt="/"/>
                <h1 className='text-xl font-bold text-blue-800 mt-2 px-4'>Webinar Belajar Life Planning untuk Gen Z</h1>
                <p className='text-gray-600 px-5 mt-3 font-[600]'>Rp 375.000</p>
                <div className='bg-blue-800 text-center py-3 rounded-lg mt-4 w-72 mx-auto text-white font-bold'>
                    <a href=''>Lihat Detail</a>    
                </div>
            </div>
            <div className='w-[320px] h-96 rounded-lg shadow-lg bg-white'>
                <div className='ml-2'>
                    <h2 className='text-[#4B465C] bg-white font-[400] w-12 rounded-lg text-sm text-center       absolute mt-36'>2 Day
                    </h2>
                    <h2 className='text-[#4B465C] bg-white font-[400] ml-14 w-12 rounded-lg text-sm text-center absolute mt-36'>02 Min
                    </h2>
                    <h2 className='text-[#4B465C] bg-white font-[400] ml-28 w-12 rounded-lg text-sm text-center absolute mt-36'>59 Sec
                    </h2>
                </div>
                <img src='/images/webcard.webp' alt="/"/>
                <h1 className='text-xl font-bold text-blue-800 mt-2 px-4'>Webinar Belajar Life Planning untuk Gen Z</h1>
                <p className='text-gray-600 px-5 mt-3 font-[600]'>Rp 375.000</p>
                <div className='bg-blue-800 text-center py-3 rounded-lg mt-4 w-72 mx-auto text-white font-bold'>
                    <a href=''>Lihat Detail</a>    
                </div>
            </div>
       </div>

    );
};

const Founding = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowWidth <= 440 ? <ImageSlider /> : <Card />;
};


const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        Array,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    };

    return (
        <div className="container-slider" style={{ padding: '20px' }}>
            <Slider {...settings}>
                <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
                    <div className="w-340 rounded-lg overflow-hidden shadow-md">
                        <div className="flex justify-center">
                            <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>2 Day</p>
                            </div>
                            <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>02 Min</p>
                            </div>
                            <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>59 Sec</p>
                            </div>
                            <img className='overflow-hidden h-200' src='/images/webcard.webp' alt="/" />
                        </div>
                        <div className="card-title-webminar">
                            <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Webinar Belajar Life Planning <br /> untuk Gen Z</h3>
                        </div>
                        <div className="card-body-webminar">
                            <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-webminar">
                            <a href="/webinar2"><button className="bg-blue-800 text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
                        </div>
                    </div>
                </div>
                <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
                    <div className="w-340 rounded-lg overflow-hidden shadow-md">
                        <div className="flex justify-center">
                            <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>2 Day</p>
                            </div>
                            <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>02 Min</p>
                            </div>
                            <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>59 Sec</p>
                            </div>
                            <img className='overflow-hidden h-200' src='/images/webcard2.webp' alt="/" />
                        </div>
                        <div className="card-title-webminar">
                            <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Webinar Belajar Life Planning <br /> untuk Gen Z</h3>
                        </div>
                        <div className="card-body-webminar">
                            <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-webminar">
                            <a href="/webinar2"><button className="bg-blue-800 text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
                        </div>
                    </div>
                </div>
                <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
                    <div className="w-340 rounded-lg overflow-hidden shadow-md">
                        <div className="flex justify-center">
                            <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>2 Day</p>
                            </div>
                            <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>02 Min</p>
                            </div>
                            <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>59 Sec</p>
                            </div>
                            <img className='overflow-hidden h-200' src='/images/webcard3.webp' alt="/" />
                        </div>
                        <div className="card-title-webminar">
                            <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Webinar Belajar Life Planning <br /> untuk Gen Z</h3>
                        </div>
                        <div className="card-body-webminar">
                            <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-webminar">
                            <a href="/webinar2"><button className="bg-blue-800 text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
                        </div>
                    </div>
                </div>
                <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
                    <div className="w-340 rounded-lg overflow-hidden shadow-md">
                        <div className="flex justify-center">
                            <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>2 Day</p>
                            </div>
                            <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>02 Min</p>
                            </div>
                            <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>59 Sec</p>
                            </div>
                            <img className='overflow-hidden h-200' src='/images/webcard4.webp' alt="/" />
                        </div>
                        <div className="card-title-webminar">
                            <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Webinar Belajar Life Planning <br /> untuk Gen Z</h3>
                        </div>
                        <div className="card-body-webminar">
                            <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-webminar">
                            <a href="/webinar2"><button className="bg-blue-800 text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
                        </div>
                    </div>
                </div>
                <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
                    <div className="w-340 rounded-lg overflow-hidden shadow-md">
                        <div className="flex justify-center">
                            <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>2 Day</p>
                            </div>
                            <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>02 Min</p>
                            </div>
                            <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>59 Sec</p>
                            </div>
                            <img className='overflow-hidden h-200' src='/images/webcard5.webp' alt="/" />
                        </div>
                        <div className="card-title-webminar">
                            <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Webinar Belajar Life Planning <br /> untuk Gen Z</h3>
                        </div>
                        <div className="card-body-webminar">
                            <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-webminar">
                            <a href="/webinar3"><button className="bg-blue-800 text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
                        </div>
                    </div>
                </div>
                <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
                    <div className="w-340 rounded-lg overflow-hidden shadow-md">
                        <div className="flex justify-center">
                            <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>2 Day</p>
                            </div>
                            <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>02 Min</p>
                            </div>
                            <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>59 Sec</p>
                            </div>
                            <img className='overflow-hidden h-200' src='/images/webcard6.webp' alt="/" />
                        </div>
                        <div className="card-title-webminar">
                            <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Webinar Belajar Life Planning <br /> untuk Gen Z</h3>
                        </div>
                        <div className="card-body-webminar">
                            <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-webminar">
                            <a href="/webinar3"><button className="bg-blue-800 text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
                        </div>
                    </div>
                </div>
                <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
                    <div className="w-340 rounded-lg overflow-hidden shadow-md">
                        <div className="flex justify-center">
                            <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>2 Day</p>
                            </div>
                            <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>02 Min</p>
                            </div>
                            <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>59 Sec</p>
                            </div>
                            <img className='overflow-hidden h-200' src='/images/webcard7.webp' alt="/" />
                        </div>
                        <div className="card-title-webminar">
                            <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Webinar Belajar Life Planning <br /> untuk Gen Z</h3>
                        </div>
                        <div className="card-body-webminar">
                            <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-webminar">
                            <a href="/webinar3"><button className="bg-blue-800 text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
                        </div>
                    </div>
                </div>
                <div className='w-1400 p-10 ml-50 grid grid-cols-4 gap-4 relative top-100'>
                    <div className="w-340 rounded-lg overflow-hidden shadow-md">
                        <div className="flex justify-center">
                            <div className="absolute top-[170px] left-[50px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>2 Day</p>
                            </div>
                            <div className="absolute top-[170px] left-[120px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>02 Min</p>
                            </div>
                            <div className="absolute top-[170px] left-[200px] bg-white rounded-2xl px-2 font-bold text-blue-800">
                                <p>59 Sec</p>
                            </div>
                            <img className='overflow-hidden h-200' src='/images/webcard8.webp' alt="/" />
                        </div>
                        <div className="card-title-webminar">
                            <h3 className='text-webminar px-20 text-2xl font-bold text-blue-800'>Webinar Belajar Life Planning <br /> untuk Gen Z</h3>
                        </div>
                        <div className="card-body-webminar">
                            <p className='relative left-[21px] bottom-3 text-gray-600 font-boldtext-webminar'>
                                Rp 375.000
                            </p>
                        </div>
                        <div className="btn-webminar">
                            <a href="/webinar3"><button className="bg-blue-800 text-white font-bold px-10 py-2 rounded-lg">Lihat Detail</button></a>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Founding;
