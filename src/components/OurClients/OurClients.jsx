import image11 from "../../assets/SVGS/image11.svg";
import image12 from "../../assets/SVGS/image12.svg";
import image13 from "../../assets/SVGS/image13.svg";
import image14 from "../../assets/SVGS/image14.svg";
import image15 from "../../assets/SVGS/image15.svg";

const OurClients = () => {
    return (
        <div className="container mx-auto my-5">
            <p className="text-center primary-color font-bold">Meet Out Clients</p>
            <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                <span className="ourclient-desc my-5">This guys are using our service and they&apos;re more than happier ever.</span>
            </div>
            <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between md:justify-around lg:justify-around">
                <img src={image11} alt="ourclient" />
                <img src={image12} alt="ourclient" />
                <img src={image13} alt="ourclient" />
                <img src={image14} alt="ourclient" />
                <img src={image15} alt="ourclient" />

            </div>
        </div>
    )
}

export default OurClients
