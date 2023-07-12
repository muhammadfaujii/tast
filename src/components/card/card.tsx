import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import '../card/card.css'

const Card = () => {
    return (
        <div className='md:flex md:flex-wrap md:justify-evenly md:-mt-10'>
            <div className='w-[320px] h-80 rounded-lg shadow-lg bg-white'>
                <p className='w-24 py-2 mt-24 bg-white absolute ml-52 rounded-lg text-center'>
                    Rp 375.000
                </p>
                <img src='/images/dokter.webp' alt="/" />
                <h2 className='text-[#074288] font-[600]'>Pelatihan 1</h2>
                <p className='text-[#5B5B5B]'>
                    Berisi penjelasan dsini... Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <div className='bg-blue-800 text-center py-3 rounded-lg mt-4 w-72 mx-auto text-white font-bold'>
                    <a href=''>Lihat Detail</a>    
                </div>
            </div>
            <div className='w-[320px] h-80 rounded-lg shadow-lg bg-white md:mb-10'>
                <p className='w-24 py-2 mt-24 bg-white absolute ml-52 rounded-lg text-center'>
                    Rp 375.000
                </p>
                <img src='/images/dokter.webp' alt="/" />
                <h2 className='text-[#074288] font-[600]'>Pelatihan 2</h2>
                <p className='text-[#5B5B5B]'>
                    Berisi penjelasan dsini... Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <div className='bg-blue-800 text-center py-3 rounded-lg mt-4 w-72 mx-auto text-white font-bold'>
                    <a href=''>Lihat Detail</a>    
                </div>
            </div>
            <div className='w-[320px] h-80 rounded-lg shadow-lg bg-white'>
                <p className='w-24 py-2 mt-24 bg-white absolute ml-52 rounded-lg text-center'>
                    Rp 375.000
                </p>
                <img src='/images/dokter.webp' alt="/" />
                <h2 className='text-[#074288] font-[600]'>Pelatihan 3</h2>
                <p className='text-[#5B5B5B]'>
                    Berisi penjelasan dsini... Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <div className='bg-blue-800 text-center py-3 rounded-lg mt-4 w-72 mx-auto text-white font-bold'>
                    <a href=''>Lihat Detail</a>    
                </div>
            </div>
            <div className='w-[320px] h-80 rounded-lg shadow-lg bg-white'>
                <p className='w-24 py-2 mt-24 bg-white absolute ml-52 rounded-lg text-center'>
                    Rp 375.000
                </p>
                <img src='/images/dokter.webp' alt="/" />
                <h2 className='text-[#074288] font-[600]'>Pelatihan 4</h2>
                <p className='text-[#5B5B5B]'>
                    Berisi penjelasan dsini... Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
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
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
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
        <div className="container-slider " style={{ padding: '20px' }}>
            <Slider {...settings}>
                <div className="card-container">
                    <div className="image-container">
                        <div className="heading">Rp 375.000</div>
                        <img src='/images/dokter.webp' alt="/" />
                    </div>
                    <div className="card-title">
                        <h3 className='text'>Pelatihan 1</h3>
                    </div>
                    <div className="card-body">
                        <p className='text'>
                            <a href="/">Berisi penjelasan disini... </a>
                            lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor</p>
                    </div>
                    <div className="btn">
                        <button className="button"><Link to="/payment">Pesan Sekarang</Link></button>
                    </div>
                </div>
                <div className="card-container">
                    <div className="image-container">
                        <div className="heading">Rp 375.000</div>
                        <img src='/images/dokter.webp' alt="/" />
                    </div>
                    <div className="card-title">
                        <h3 className='text'>Pelatihan 2</h3>
                    </div>
                    <div className="card-body">
                        <p className='text'>
                            <a href="/">Berisi penjelasan disini... </a>
                            lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor</p>
                    </div>
                    <div className="btn">
                        <button className="button"><Link to="/payment">Pesan Sekarang</Link></button>
                    </div>
                </div>
                <div className="card-container">
                    <div className="image-container">
                        <div className="heading">Rp 375.000</div>
                        <img src='/images/dokter.webp' alt="/" />
                    </div>
                    <div className="card-title">
                        <h3 className='text'>Pelatihan 3</h3>
                    </div>
                    <div className="card-body">
                        <p className='text'>
                            <a href="/">Berisi penjelasan disini... </a>
                            lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor</p>
                    </div>
                    <div className="btn">
                        <button className="button"><Link to="/payment">Pesan Sekarang</Link></button>
                    </div>
                </div>
                <div className="card-container">
                    <div className="image-container">
                        <div className="heading">Rp 375.000</div>
                        <img src='/images/dokter.webp' alt="/" />
                    </div>
                    <div className="card-title">
                        <h3 className='text'>Pelatihan 4</h3>
                    </div>
                    <div className="card-body">
                        <p className='text'>
                            <a href="/">Berisi penjelasan disini... </a>
                            lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor</p>
                    </div>
                    <div className="btn">
                        <button className="button"><Link to="/payment">Pesan Sekarang</Link></button>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Founding;