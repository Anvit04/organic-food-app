import Image from "next/image";
import Link from "next/link";
import React from 'react'

const Home = () => {
    return (
        <>
            <header className="bg-white">
                <div className="flex items-center justify-between max-w-[1320px] w-full px-4 py-2 mx-auto">
                    <Image
                        className="dark:invert"
                        src="/assets/img/logo.png"
                        alt="Next.js logo"
                        width={143}
                        height={56}
                        priority
                    />

                    <div>
                        <ul className="flex">
                            <li className="px-2"><Link href="/" className="px-2 py-3.5" >Home</Link></li>
                            <li className="px-2"><Link href="#" className="px-2 py-3.5" >Shop</Link></li>
                            <li className="px-2"><Link href="#" className="px-2 py-3.5" >Blog</Link></li>
                            <li className="px-2"><Link href="#" className="px-2 py-3.5" >Portfolio</Link></li>
                            <li className="px-2"><Link href="#" className="px-2 py-3.5" >Pages</Link></li>
                            <li className="px-2"><Link href="#" className="px-2 py-3.5" >Contacts</Link></li>
                        </ul>
                    </div>

                    <div>
                        <button><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Home