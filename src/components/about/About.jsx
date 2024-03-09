import React, { useState, useEffect } from 'react';

const About = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        "https://i.ibb.co/FhgPJt8/Rectangle-116.png",
        "https://images.pexels.com/photos/13422379/pexels-photo-13422379.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3825582/pexels-photo-3825582.jpeg?auto=compress&cs=tinysrgb&w=600",
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
                        About Us
                    </h1>
                </section>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
                        Who we are
                    </h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">
                        At Themchest, we are a team of dedicated professionals passionate about providing cutting-edge security solutions and reliable PC repair services. Our technicians are highly skilled and trained to handle a wide range of security and technological challenges. We believe in putting our customers first, ensuring that their safety and satisfaction are our top priorities.
                    </p>
                </div>
                <div className="w-full lg:w-8/12">
                    <img
                        className="w-full h-full transition duration-500 ease-in-out"
                        src={images[currentImageIndex]}
                        alt="A group of People"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
