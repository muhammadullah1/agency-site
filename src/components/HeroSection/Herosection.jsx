import Button from "../common/Button";
import heroimg from "../../assets/SVGS/heroimg.svg";

const Herosection = () => {
    return (
        <div className="container mx-auto">
            <section className="bg-white dark:bg-gray-900">
                <div className="grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-6">
                        <p className="mb-4 tracking-tight text-gray-900 dark:text-white hero-heading">
                            Great software is built <span className="text-pink-500">with amazing developers</span>
                        </p>
                        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400 hero-desc w-96">
                            We help build and manage a team of world-class developers to bring your vision to life
                        </p>
                        <Button text={"Get Started"} className={"px-7 py-4 bg-purple-600 text-white rounded font-bold"} />
                    </div>
                    <div className="lg:mt-0 lg:col-span-6 order-first lg:order-last">
                        <img src={heroimg} alt="heroimg" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Herosection;
