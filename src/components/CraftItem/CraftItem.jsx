import React, { useState, useEffect } from 'react';
import img from "../../assets/banner3.png";
import 'animate.css';

const CraftItem = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );
        const element = document.querySelector(".craft-item");
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    return (
       <div className='w-[1200px] mx-auto mt-10 mb-10'>
        <h2 className='text-3xl text-center font-semibold mb-8 '>
          Explore <span className='text-[#f18148]'>Unique</span> & <span className='text-[#f18148]'>Handmade</span> Craft Items
        </h2>
         <div className=' grid grid-cols-3 gap-8'>         
            <div className={`craft-item border bg-[#f0f6fa] border-gray-200 w-full shadow-sm rounded-xl ${isVisible ? 'animate__animated animate__zoomInUp' : ''}`}>
                <div className='flex justify-center pt-5 pb-5'>
                    <img className='w-[300px] h-[200px] rounded-xl' src={img} alt="" />
                </div>
                <div className="card-body bg-[#b1f315]">
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary ">View Details</button>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default CraftItem;
