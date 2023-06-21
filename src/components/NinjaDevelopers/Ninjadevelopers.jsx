import ninjadevelopers from "../../assets/SVGS/ninjadevelopers.svg";

const Ninjadevelopers = () => {
    return (
        <div className="container mx-auto my-5">
            <section className="bg-white dark:bg-gray-900">
                <div className="grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="lg:mt-0 lg:col-span-6">
                        <img src={ninjadevelopers} alt="heroimg" />
                    </div>
                    <div className="mr-auto place-self-center lg:col-span-6">
                        <p className="mb-4 tracking-tight text-gray-900 dark:text-white hero-heading">
                            Boost your agencies by choosing <span className="secondary-color"> Ninja Developers</span>
                        </p>
                        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400 ninja-desc w-96">
                            Create custom landing pages with Shades that convert more visitors than any website, no coding required.
                        </p>
                        <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                            <li className="flex items-center">
                                <svg className="w-6 h-6 mr-1.5 secondary-color dark:secondary-color flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                Unlimited design possibility
                            </li>
                            <li className="flex items-center">
                                <svg className="w-6 h-6 mr-1.5 secondary-color dark:secondary-color flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                Completely responsive features
                            </li>
                            <li className="flex items-center">
                                <svg className="w-6 h-6 mr-1.5 secondary-color dark:secondary-color flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                Easy to customize plugins
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Ninjadevelopers


