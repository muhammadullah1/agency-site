import { useState } from 'react';
import { Navbar } from 'flowbite-react';
import Logo from './../../assets/SVGS/Logo.svg';
import Button from '../common/Button';

export default function NavbarWithDropdown() {
    const [activePage, setActivePage] = useState('home');

    const handlePageClick = (page) => {
        setActivePage(page);
    };

    return (
        <div className="container mx-auto my-2">
            <Navbar fluid rounded className="">
                <Navbar.Brand href="/">
                    <img
                        alt="Flowbite React Logo"
                        className="mr-3 h-8 sm:h-12"
                        src={Logo}
                    />
                    <span className="self-center whitespace-nowrap text-xl font-extrabold dark:text-white">
                        Eset Up
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button
                        text={"Contact"}
                        className={'border-pink-500 border rounded px-8 py-2 text-pink-500 font-semibold'}
                    />
                    <div className="ml-3">
                        <Navbar.Toggle />
                    </div>
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        href="#"
                        className={activePage === 'home' ? 'text-pink-500 text-sm font-semibold' : 'text-sm font-semibold'}
                        onClick={() => handlePageClick('home')}
                    >
                        <p>Home</p>
                    </Navbar.Link>
                    <Navbar.Link
                        href="#"
                        className={activePage === 'about' ? 'text-pink-500 text-sm font-semibold' : 'text-sm font-semibold'}
                        onClick={() => handlePageClick('about')}
                    >
                        About
                    </Navbar.Link>
                    <Navbar.Link
                        href="#"
                        className={activePage === 'services' ? 'text-pink-500 text-sm font-semibold' : 'text-sm font-semibold'}
                        onClick={() => handlePageClick('services')}
                    >
                        Services
                    </Navbar.Link>
                    <Navbar.Link
                        href="#"
                        className={activePage === 'pricing' ? 'text-pink-500 text-sm font-semibold' : 'text-sm font-semibold'}
                        onClick={() => handlePageClick('pricing')}
                    >
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link
                        href="#"
                        className={activePage === 'testimonial' ? 'text-pink-500 text-sm font-semibold' : 'text-sm font-semibold'}
                        onClick={() => handlePageClick('testimonial')}
                    >
                        Testimonial
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

