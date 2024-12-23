import React, { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const TabServices = () => {
    const [servicesData, setServicesData] = useState([
        {
            title: "Review Analytics",
            desc: "Track how reviews change over time with our comprehensive analytics. Understand trends and patterns in customer feedback to make informed decisions.",
            imgSrc: "/images/portfolio1.png",
            open: false,
        }, {
            title: "Product Rating",
            desc: "Get accurate product ratings based on in-depth analysis of customer reviews. Our model evaluates multiple factors to provide reliable ratings.",
            imgSrc: "/images/portfolio2.png",
            open: false,
        }, {
            title: "Model Explanation",
            desc: "Learn how our AI model works to analyze sentiment and generate ratings. We provide transparent explanations to help you understand the results.",
            imgSrc: "/images/portfolio3.png",
            open: false,
        }, {
            title: "Improvement Suggestions",
            desc: "Receive actionable recommendations to improve your products based on customer feedback. Enhance your offerings and boost customer satisfaction.",
            imgSrc: "/images/portfolio4.png",
            open: false,
        },
    ]);

    const toggleOpen = (index) => {
        const updatedServicesData = [...servicesData];

        updatedServicesData.forEach((item, idx) => {
            if (idx !== index) {
                item.open = false;
            }
        });

        updatedServicesData[index].open = !updatedServicesData[index].open;
        setServicesData(updatedServicesData);
    };

    return (
        <div className="w-full">
            {servicesData.map((item, index) => (
                <div key={index}>
                    <div className="flex items-center justify-between gap-4 cursor-pointer border-b p-4 border-white" onClick={() => toggleOpen(index)}>
                        <h2 className="text-2xl">{item.title}</h2>
                        {item.open ? <IoIosArrowUp size="30px" /> : <IoIosArrowDown size="30px" />}
                    </div>
                    <div className={`${item.open ? "max-h-screen opacity-100 transition-all duration-500 ease-in font-[400] text-[#ffffff91] p-2 text-md" : "max-h-0 opacity-0 transition-all duration-500 ease-out overflow-hidden text-md"}`}>
                        <p>{item.desc}</p>
                        {item.open && <img src={item.imgSrc} alt={item.title} className="mt-4 w-full h-auto max-w-md mx-auto" />}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TabServices;

