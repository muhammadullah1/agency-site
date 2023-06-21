import { Navbar } from "flowbite-react"
import { useState } from "react";
import Logo from './../../assets/SVGS/Logo.svg';

const Footer = () => {
    const [activePage, setActivePage] = useState('home');

    const handlePageClick = (page) => {
        setActivePage(page);
    };
    return (
        <div className="footer-div p-12">
            <div className="container mx-auto mt-10 p-12">
                <h1 className="footer-heading text-center my-3">Subscribe to get notified about update</h1>
                <p className="footer-desc my-3 text-center">By subscribing with your mail, you will accept our privacy policy</p>

                <section className="">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="mx-auto max-w-screen-md sm:text-center">
                            <form action="#">
                                <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                    <div className="relative w-full mx-3">
                                        <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                        </div>
                                        <input
                                            className="block p-5 pl-10 w-full text-sm text-gray-900 rounded-lg bg-transparent"
                                            placeholder="Enter your email"
                                            type="email"
                                            id="email"
                                            required=""
                                        />

                                    </div>
                                    <button className="flex-shrink-0 inline-flex items-center justify-center text-white bg-indigo-500 border-0 px-4 py-4 focus:outline-none hover:bg-indigo-600 rounded text-lg sm:px-6 sm:text-xl lg:float-right">
                                        Subscribe us
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </section>

            </div>
            <div className="container mx-auto my-2">
                <Navbar fluid rounded className="bg-gray-900">
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
                            className={'text-sm font-semibold'}
                            onClick={() => handlePageClick('testimonial')}
                        >
                            Testimonial
                        </Navbar.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}

export default Footer
