import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <>
            <header className="__stickedHeader ">
                <div className="__mainContainer flex items-center justify-between py-3">
                    <img src="/assets/img/logo.png"
                        alt="website logo"
                        width={143}
                        height={56}
                    // priority
                    />

                    <div>
                        <ul className="flex">
                            <li className="px-2"><Link href="/" className="__navLinks  text-[#62a403]" >Home</Link></li>
                            <li className="px-2"><Link href="#" className="__navLinks " >Shop</Link></li>
                            <li className="px-2"><Link href="#" className="__navLinks " >Blog</Link></li>
                            <li className="px-2"><Link href="#" className="__navLinks " >Portfolio</Link></li>
                            <li className="px-2"><Link href="#" className="__navLinks " >Pages</Link></li>
                            <li className="px-2"><Link href="#" className="__navLinks " >Contacts</Link></li>
                        </ul>
                    </div>

                    <div>
                        <button className='main_search_btn'><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header