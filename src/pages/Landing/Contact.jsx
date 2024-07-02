import React from 'react';
import Section from './SectionTitle';
import Button from './Button';

const Contact = ({ className }) => {
    return (
        <div className={`bg-black text-white h-[600px] flex justify-center items-center mt-16 px-4 ${className}`}>
            <div className='flex flex-col md:flex-row items-start container mx-auto'>
                <Section
                    title="Product Feedback Analysis"
                    color="text-white"
                    style="font-[400] text-2xl"
                />

                <div className='flex md:items-start justify-center items-center flex-col'>
                    <h2 className='text-xl md:text-4xl mb-16 text-center md:text-start'>
                        Analyzing customer feedback for Amazon products? <br /> Let's enhance your data insights and improve products <br /> with sentiment analysis!
                    </h2>
                    <Button
                        className="uppercase font-source-sans bg-[#ffffff] text-[#1f1f39] px-12 py-3 rounded-md font-bold text-lg"
                        title="GET INSIGHTS"
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;
