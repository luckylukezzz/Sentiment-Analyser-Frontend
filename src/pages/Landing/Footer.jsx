import React from 'react';
import Button from './Button';
import SectionTitle from './SectionTitle';

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-start pl-8 md:pl-0 gap-32 container mx-auto py-12'>
                <div>
                    <img src="/images/footer-logo.png" className='w-[200px]' alt="Your Company Logo" />
                    <p className='text-[#ffffff75] leading-8 py-6'>
                        Enhance Amazon products with sentiment analysis! Leverage customer feedback to drive improvements and elevate user experience.
                    </p>
                    <h2 className='text-2xl pb-2'>feedback@luckylukezzz.com</h2>
                    <h2 className='text-2xl'>+1-800-123-4567</h2>
                </div>
                <div>
                    <h2 className='font-bold text-xl'>Explore</h2>
                    <ul className='text-[#ffffff75] leading-10 mt-4'>
                        <li>Product Insights</li>
                        <li>Customer Feedback</li>
                        <li>Data Analysis</li>
                        <li>Improvement Strategies</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold text-xl'>Resources</h2>
                    <ul className='text-[#ffffff75] leading-10 mt-4'>
                        <li>Blog</li>
                        <li>Case Studies</li>
                        <li>Whitepapers</li>
                        <li>Industry Trends</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold text-xl'>Connect</h2>
                    <ul className='text-[#ffffff75] leading-10 mt-4'>
                        <li>Community</li>
                        <li>Partnerships</li>
                        <li>Events</li>
                    </ul>
                </div>
            </div>
            <div className='border-t border-[#221F35] flex justify-center items-center py-12'>
                <div className="flex justify-center items-center">
                    <h2>Copyright © {new Date().getFullYear()} Luckyluke. All rights reserved.</h2>
                </div>
            </div>
        </div>
    );
};

export default Footer;
