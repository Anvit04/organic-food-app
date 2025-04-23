"use client";

import Link from 'next/link'
import React from 'react'
import { useMenu } from '../MenuProvider';

const Header = () => {
    const { isOpen, setIsOpen } = useMenu();

    return (
        <>
            <header className="__stickedHeader ">
                <div className="__mainContainer flex items-center justify-between  py-3 min-h-[65px]">
                    <span className='text-lg font-semibold'> Synergy Overseas </span>
                    {/* <img src="/assets/img/logo.png"
                        alt="website logo"
                        width={143}
                        height={56}
                    // priority
                    /> */}

                    <div className=' hidden md:block'>
                        <ul className="flex">
                            <li className="px-1 lg:px-2"><Link href="/" className="__navLinks  text-[#62a403]" >Home</Link></li>
                            <li className="px-1 lg:px-2"><Link href="#" className="__navLinks " >Shop</Link></li>
                            <li className="px-1 lg:px-2"><Link href="#" className="__navLinks " >Blog</Link></li>
                            <li className="px-1 lg:px-2"><Link href="#" className="__navLinks " >Portfolio</Link></li>
                            <li className="px-1 lg:px-2"><Link href="#" className="__navLinks " >Pages</Link></li>
                            <li className="px-1 lg:px-2"><Link href="#" className="__navLinks " >Contacts</Link></li>
                        </ul>
                    </div>

                    <div className=' hidden md:block'>
                        <button className='main_search_btn'><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>

                    <div className='block md:hidden'>
                        <div className="hamburger-icon " id="icon" onClick={() => setIsOpen(!isOpen)}>
                            <div className="icon-1" id="a"></div>
                            <div className="icon-2" id="b"></div>
                            <div className="icon-3" id="c"></div>
                            <div className="clear"></div>
                        </div>

                        <div className='__mainMenu'>
                            <ul className="_otrMenu_bx ">
                                <div className='absolute h-full flex  md:hidden'><div className='__menuBlur'></div></div>
                                <div className='md:hidden mb-5'>
                                    <span className='text-lg font-semibold'> Synergy Overseas </span>
                                    {/* <img src='/assets/img/my-sifarish_logo.svg' className='max-w-[120px] w-full' alt='Logo' /> */}
                                </div>
                                <li><Link href="/" className='text-[16px] font-normal text-[#62a403]'>Home</Link></li>
                                <li><Link href="#" className='text-[16px] font-normal'>Shop</Link></li>
                                <li><Link href="#" className='text-[16px] font-normal'>Blog</Link></li>
                                <li><Link href="#" className='text-[16px] font-normal'>Portfolio</Link></li>
                                <li><Link href="#" className='text-[16px] font-normal'>Pages</Link></li>
                                <li><Link href="#" className='text-[16px] font-normal'>Contacts</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header