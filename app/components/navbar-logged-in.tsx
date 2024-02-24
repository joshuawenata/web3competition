import React from "react";
import { useRouter } from "next/navigation";

const NavbarLoggedin = () => {
    const router = useRouter();
    
    const handleLogoClick = () => {
        router.push('/')
    }

    const handleRegisterHaki = () => {
        router.push('/register-haki')
    }

    const handleYourHaki = () => {
        router.push('/your-haki')
    }


    return (
        <div>
            <nav className="flex items-center">
            
            <button onClick={handleLogoClick} className="p-10">
                <svg width="156" height="60" viewBox="0 0 260 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M48.75 24.5264C48.75 37.9883 48.75 58.1097 24.375 33.7347C0 58.1097 0 37.9883 0 24.5264C0 11.0644 2.75506e-06 -12.307 24.375 12.068C48.75 -12.307 48.75 11.0644 48.75 24.5264Z" fill="#170072"/>
                    <path d="M39.7222 79.0834C39.7222 92.5453 53.1842 100.389 39.7222 100.389C26.2603 100.389 3.25 100.389 3.25 76.0139C3.25 51.6389 26.2603 51.6389 39.7222 51.6389C53.1842 51.6389 39.7222 65.6214 39.7222 79.0834Z" fill="#4663AC"/>
                    <path d="M106.167 24.375C106.167 72.2222 95.2536 22.5694 81.7916 22.5694C68.3297 22.5694 57.4166 73.3056 57.4166 22.5694C57.4166 9.1075 68.3297 0 81.7916 0C95.2536 0 106.167 10.9131 106.167 24.375Z" fill="#9BB1D0"/>
                    <path d="M93.2205 76.0139C93.2205 89.4759 95.488 100.389 82.0261 100.389C68.5641 100.389 70.1094 89.4759 70.1094 76.0139C70.1094 62.552 68.5641 51.6389 82.0261 51.6389C95.488 51.6389 93.2205 62.552 93.2205 76.0139Z" fill="white"/>
                    <path d="M121.677 32.2227H127.869V40.1914H146.853V32.2227H153.064V62.75H146.853V45.4844H127.869V62.75H121.677V32.2227ZM172.146 32.2227H178.709L193.474 62.75H186.97L184.529 57.6133H166.697L164.334 62.75H157.81L172.146 32.2227ZM182.088 52.5156L175.486 38.6484L169.06 52.5156H182.088ZM198.22 32.2227H204.412V48.0234L220.525 32.2227H228.455L213.416 46.793L228.455 62.75H220.213L208.963 51.1094L204.412 55.5039V62.75H198.22V32.2227ZM230.72 32.2227H236.951V62.75H230.72V32.2227Z" fill="#170072"/>
                </svg>
            </button>
            
            <button className="pl-80 text-xl font-krona-one text-blues">
            Home
            </button>
            
            <button onClick={handleRegisterHaki} className="pl-20 text-xl font-krona-one text-blues">
            Register HAKI
            </button>
            
            
            <button onClick={handleYourHaki} className="pl-20 text-xl font-krona-one text-blues">
            Your HAKI
            </button>
            
            </nav>
        </div>
    )
}

export default NavbarLoggedin;
