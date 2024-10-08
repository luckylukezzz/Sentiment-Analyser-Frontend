import React from 'react';
import Section from './SectionTitle';
import TabServices from './TabServices';

const Services = ({ className }) => {
    return (
        <div className={`bg-black text-white h-auto flex justify-center items-center my-12 py-12  ${className}`}>
            <div className='flex flex-col md:flex-row items-start container mx-auto'>
                <Section
                    title="Our Services"
                    color="text-white"
                    style="font-[400] text-2xl"
                />
                <TabServices />
            </div>
        </div>
    );
};

export default Services;

