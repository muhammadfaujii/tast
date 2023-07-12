import React, { useState } from 'react';
import { CgArrowTopRightO, CgChevronLeft, CgChevronRight } from "react-icons/cg";

const Profile: React.FC = () => {
    const pages = ['webinar', 'pelatihan', 'layanan', 'konsultasi'];
    const [activePage, setActivePage] = useState(0);

    const handleNavbarClick = (index: number) => {
        setActivePage(index);
    };

    const handleNext = () => {
        setActivePage((prevPage) => (prevPage + 1) % pages.length);
    };

    const handlePrev = () => {
        setActivePage((prevPage) => (prevPage - 1 + pages.length) % pages.length);
    };

    return (
        <>
            <div id="list-example" className="list-group">
                <div className="mt-20 lg:mt-[100px] text-[#4B465C] p-2 text-center relative">
                    <div className="w-full font-medium text-xs lg:text-lg flex justify-center md:gap-10">
                        <div
                            className={`bg-[#002157] h-10 flex items-center p-3 lg:px-5 lg:h-10 lg:mt-2 text-slate-100 rounded-md ${activeSection === 0 ? "active" : ""
                                }`}
                        >
                            <a className="list-group-item list-group-item-action" href="#section1">
                                Webminar
                            </a>
            <div>
                <div>
                    <div className="w-[80rem] mx-auto mt-[200px] py-5">
                        <ul className="flex items-center justify-center">
                            {pages.map((page, index) => (
                                <li
                                    key={index}
                                    className={`ml-5 text-[24px] p-5 ${activePage === index ? 'text-[#ffffff] bg-[#002157]' : 'text-[#002157]'
                                        } rounded-md cursor-pointer duration-500`}
                                    onClick={() => handleNavbarClick(index)}
                                >
                                    <a href={`#${page}`}>{page.charAt(0).toUpperCase() + page.slice(1)}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex items-center justify-center p-10'>
                        <div className='h-[560px] w-[80rem] mx-auto '>
                            <div className='mt-[100px]'>
                                {pages.map((page, index) => (
                                    <div key={index} id={page}>
                                        {activePage === index && (
                                            <div className='flex'>
                                                <img src={`./images/homeSlider${index + 1}.webp`} alt="image" className="w-1/2" />
                                                <div className='ml-10'>
                                                    <h1 className='lg:text-[32px] font-bold text-[#002157]'>{page.charAt(0).toUpperCase() + page.slice(1)}</h1>
                                                    <br />
                                                    <p className='lg:text-[24px] '>It has survived not only five centuries, but also the <br /> leap into electronic typesetting, remaining <br /> essentially unchanged. </p>
                                                    <br />
                                                    <div className="text-sm md:text-lg lg:text-xl font-bold text-[#002157]  mt-[2px] flex items-center">
                                                        <a href="#">Lihat selengkapnya</a>
                                                        <CgArrowTopRightO className="ml-[5px]" />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='relative bottom-[410px]'>
                            <div className='relative right-[720px]'>
                                <button
                                    className="mt-10 ml-5 text-[24px] p-5 text-[#002157] rounded-md cursor-pointer duration-500"
                                    onClick={handlePrev}
                                >
                                    <CgChevronLeft />
                                </button>
                            </div>
                            <div className='relative left-[720px] bottom-[70px]'>
                                <button
                                    className="ml-5 text-[24px] p-5 text-[#002157] rounded-md cursor-pointer duration-500"
                                    onClick={handleNext}
                                >
                                    <CgChevronRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <>
                <div>
                    <div className="relative left-0 p-10">
                        <Carousel
                            showArrows={true}
                        // autoPlay={true}
                        // interval={2000}
                        // infiniteLoop={true}
                        >
                            <div id="section1">
                                <div className="flex gap-3 md:gap-4 lg:ml-40 lg:gap-10 lg:mb-20 mb-20">
                                    <div className=" w-36 object-cover md:w-96">
                                        <img src="./images/Carousel.webp" alt="" className="h-36"/>
                                    </div>
                                    <div className="text-[#002157] text-[20px] font-[700] text-['Montserrat'] text-start -mt-2 w-32 h-10 md:w-96">
                                        <h1>Webminar</h1>
                                        <p className="text-[#5B5B5B] font-[400] text-['Montserrat'] text-[12px] md:mt-5 md:text-[14px]">
                                            It has survived not only five 
                                            centuries, but also the leap into electronic typesetting,remaining essentially unchanged.
                                        </p>
                                        <div className="text-[12px] mt-2">
                                            <a href="#">Lihat selengkapnya</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="section2">
                                <div className="flex gap-3 md:gap-4 lg:ml-40 lg:gap-10 lg:mb-20 mb-20">
                                    <div className=" w-36 object-cover md:w-96">
                                        <img src="./images/Carousel.webp" alt="" className="h-36"/>
                                    </div>
                                    <div className="text-[#002157] text-[20px] font-[700] text-['Montserrat'] text-start -mt-2 w-32 h-10 md:w-96">
                                        <h1>Webminar</h1>
                                        <p className="text-[#5B5B5B] font-[400] text-['Montserrat'] text-[12px] md:mt-5 md:text-[14px]">
                                            It has survived not only five 
                                            centuries, but also the leap into electronic typesetting,remaining essentially unchanged.
                                        </p>
                                        <div className="text-[12px] mt-2">
                                            <a href="#">Lihat selengkapnya</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="section3">
                                <div className="flex gap-3 md:gap-4 lg:ml-40 lg:gap-10 lg:mb-20 mb-20">
                                    <div className=" w-36 object-cover md:w-96">
                                        <img src="./images/Carousel.webp" alt="" className="h-36"/>
                                    </div>
                                    <div className="text-[#002157] text-[20px] font-[700] text-['Montserrat'] text-start -mt-2 w-32 h-10 md:w-96">
                                        <h1>Webminar</h1>
                                        <p className="text-[#5B5B5B] font-[400] text-['Montserrat'] text-[12px] md:mt-5 md:text-[14px]">
                                            It has survived not only five 
                                            centuries, but also the leap into electronic typesetting,remaining essentially unchanged.
                                        </p>
                                        <div className="text-[12px] mt-2">
                                            <a href="#">Lihat selengkapnya</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="section4">
                                <div className="flex gap-3 md:gap-4 lg:ml-40 lg:gap-10 lg:mb-20 mb-20">
                                    <div className=" w-36 object-cover md:w-96">
                                        <img src="./images/Carousel.webp" alt="" className="h-36"/>
                                    </div>
                                    <div className="text-[#002157] text-[20px] font-[700] text-['Montserrat'] text-start -mt-2 w-32 h-10 md:w-96">
                                        <h1>Webminar</h1>
                                        <p className="text-[#5B5B5B] font-[400] text-['Montserrat'] text-[12px] md:mt-5 md:text-[14px]">
                                            It has survived not only five 
                                            centuries, but also the leap into electronic typesetting,remaining essentially unchanged.
                                        </p>
                                        <div className="text-[12px] mt-2">
                                            <a href="#">Lihat selengkapnya</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </>
        </>
    );
};



export default Profile;
