import React, { useState, useEffect } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import img1 from '../../assets/carousel/img6.jpeg';
// import img2 from '../../assets/carousel/img2.jpeg';
import img3 from '../../assets/carousel/img11.jpeg';
import img4 from '../../assets/carousel/img12.jpeg';
import img9 from '../../assets/carousel/img9.jpeg';
import img7 from '../../assets/carousel/img7.jpeg';
import img10 from '../../assets/carousel/img10.jpeg';

const Services = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
       img1, img3, img4, img9, img7, img10
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []); // Run only once on component mount

    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 text-onSurface">
            <div className="flex justify-center items-center flex-col px-4 md:px-6 xl:px-20 py-9 md:py-12 xl:py-10 mb-4">
                <section>
                    <h1 className="leading-5 md:leading-6 xl:leading-9 text-gray-800 text-xl md:text-2xl xl:text-4xl font-semibold text-center uppercase">
                        Services
                    </h1>
                </section>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-8/12 overflow-hidden">
                    <img
                        className="w-full h-full transition duration-500 ease-in-out transform hover:scale-110"
                        src={images[currentImageIndex]}
                        alt="Security Services"
                    />
                </div>
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
                        What we do
                    </h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">
                        At Themchest, we offer a range of comprehensive services to meet your security and technological needs. Our services include:
                        <ul className="list-disc pl-5">
                            <li>CCTV Installation</li>
                            <li>Electric Fence Installation</li>
                            <li>PC Repair</li>
                            <li>Alarm System Installation</li>
                        </ul>
                        Whether you need to enhance the security of your property or repair your PC, we've got you covered with our expert solutions.
                    </p>
                    <section className="flex mt-8">
                        <button
                            className="px-6 h-11 text-gray-800 text-base font-medium flex items-center border border-gray-600 hover:bg-gray-200">
                            <Link to="/services" className="flex flex-row flex-nowrap items-center">
                                Explore <BsArrowRight className="ml-2" />
                            </Link>
                        </button>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Services;
