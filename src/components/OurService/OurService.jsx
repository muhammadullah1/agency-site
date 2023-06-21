import art1 from "../../assets/SVGS/art1.svg";
import art2 from "../../assets/SVGS/art2.svg";
import art3 from "../../assets/SVGS/art3.svg";
import art4 from "../../assets/SVGS/art4.svg";

const OurService = () => {
    return (
        <div className="container mx-auto my-3">
            <p className="text-center primary-color font-extrabold">our service</p>

            <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36 my-6">
                <h1 className="mb-4 mx-auto text-2xl font-extrabold tracking-tight leading-none text-gray md:text-2xl lg:text-3xl">Determine the service you need</h1>
            </div>
            <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between md:justify-around lg:justify-around py-5">

                <div className="text-center lg:w-48">
                    <img src={art1} alt="ourservice" className="service-1 p-7 rounded-xl mx-auto" />
                    <h5 className="my-3 text-xl font-extrabold text-gray-900 dark:text-white">
                        Development
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400 mx-auto">
                        Create a platform with the best and coolest quality from us.
                    </span>
                </div>


                <div className="text-center lg:w-48">
                    <img src={art3} alt="ourservice" className="service-3 px-7 py-9 rounded-xl mx-auto" />
                    <h5 className="my-3 text-xl font-extrabold text-gray-900 dark:text-white">
                        UI/UX Designer
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400 mx-auto">
                        We provide UI/UX Design services, and of course with the best quality
                    </span>
                </div>

                <div className="text-center lg:w-48">
                    <img src={art2} alt="ourservice" className="service-2 p-7 rounded-xl mx-auto" />
                    <h5 className="my-3 text-xl font-extrabold text-gray-900 dark:text-white">
                        Motion Graphik
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400 mx-auto">
                        Create a platform with the best and coolest quality from us.
                    </span>
                </div>

                <div className="text-center lg:w-48">
                    <img src={art4} alt="ourservice" className="service-4 p-7 rounded-xl mx-auto" />
                    <h5 className="my-3 text-xl font-extrabold text-gray-900 dark:text-white">
                        Best Award history
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400 mx-auto">
                        we have placed various awards for our performance
                    </span>
                </div>

            </div>

        </div>
    )
}

export default OurService
