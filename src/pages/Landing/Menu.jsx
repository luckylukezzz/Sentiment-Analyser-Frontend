import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button';

import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Menu = () => {
    const [mobileMenuToggle, setMobileMenuToggle] = useState(false);

    const menuContent = [
        {
            text: "Dashboard",
            url: "/dashboard",
        }, {
            text: "About",
            url: "/",
        }, {
            text: "Services",
            url: "/",
        }, {
            text: "Pricing",
            url: "/",
        },
    ]

    const mobileToggleClick = () => {
        setMobileMenuToggle(!mobileMenuToggle)
    }

    const handleLinkClick = () => {
        setMobileMenuToggle(false);
    };


    return (
        <div>
            <div className={`fixed top-0 ${mobileMenuToggle ? "left-0" : "-left-[75%]"} bg-[#000000ce]  flex flex-col justify-center items-center text-4xl font-semibold h-full w-[75%] z-50 md:hidden duration-700`}>
                <ul>
                    {
                        menuContent.map((item, index) => {
                            return (
                                <NavLink to={item.url} key={index} onClick={handleLinkClick}><li className='flex items-center py-4 duration-200 text-white'>{item.text}</li></NavLink>
                            )
                        })
                    }
                    <Button
                    className=" text-white px-12 py-3 rounded-xl text-2xl"
                    title="Login/Signup" />
                </ul>
            </div>
            <nav className='hidden md:flex'>
                <ul className='flex items-center gap-12 text-[#6B72809] font-[400] text-[18px]'>
                    {
                        menuContent.map((item, index) => {
                            return (
                                <NavLink to={item.url} key={index}><li style={{ fontWeight: 'bold' }}>{item.text}</li>
                                </NavLink>
                            )
                        })
                    }

                    <Button
                    className=" text-white px-12 py-3 rounded-xl text-2xl"
                    title="Login/Signup" />
                </ul>
            </nav>
            <div className='md:hidden flex fixed top-12 right-6 cursor-pointer z-50'>
                <span className='text-black' onClick={mobileToggleClick}>{mobileMenuToggle ? <IoClose size={"26px"} /> : <RxHamburgerMenu size={"26px"} />}</span>
            </div>
        </div>
    )
}

export default Menu