import React from 'react';
import Button from './Button';

const Hero = () => {
    return (
        <div className='container mx-auto flex flex-col lg:flex-row items-start justify-center gap-8 py-28 px-4 md:px-0'>
            <div className='flex items-start justify-start bg-[#1F1F39] mt-8 rounded-xl'>
                <span className='w-[94px] h-1' > </span>
            </div>
            <div>
                <h2 className='text-5xl md:text-7xl font-extrabold mb-12'>Enhance Your <br /> Amazon Products <br /> with AI Insights!</h2>
                <p className='mb-16'>Leverage cutting-edge sentiment analysis to understand customer feedback and improve your Amazon product offerings. Turn insights into actionable improvements with our AI-powered solutions.</p>
                <Button
                    className=" bg-[#00796B] text-white px-12 py-3 rounded-xl text-2xl"
                    title="Discover" />
            </div>
            <div className='w-full flex justify-center'>
                <img src="/images/hero.png" className='w-full md:w-[800px]  object-contain' alt="Sentiment Analysis" />
            </div>
        </div>
    )
}

export default Hero;
