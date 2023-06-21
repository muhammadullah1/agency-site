import "tailwindcss/tailwind.css";
import Navbar from "./components/Navbar/Navbar";
import Herosection from "./components/HeroSection/Herosection";
import OurClients from "./components/OurClients/OurClients";
import Ninjadevelopers from "./components/NinjaDevelopers/Ninjadevelopers";
import OurService from "./components/OurService/OurService";
import HireDeveloper from "./components/HireDeveloper/HireDeveloper";
import OurPrice from "./components/OurPrice/OurPrice";
import ContactUs from "./components/ConttactUs/ContactUs";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer  from "./components/Footer/Footer";

function App() {

  return (
    <div className="w-full mx-auto">
      <Navbar />
      <Herosection />
      <OurClients/>
      <Ninjadevelopers/>
      <OurService/>
      <HireDeveloper/>
      <OurPrice/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default App
