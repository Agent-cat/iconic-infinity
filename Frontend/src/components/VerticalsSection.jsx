import staymore from "../assets/staymore.png";
import ojas from "../assets/ojas.webp";
import righthomes from "../assets/wellness.jpeg";
import Verticalcards from "./Verticalcards";
import { Link } from "react-router-dom";
const Verticals = [
  {
    title: "Stay More",
    tagline: "Add Life",
    description:
      "Welcome to Stay More, a movement born from the belief that menstrual wellness is not a luxury—it's a right. Designed, developed, and made with love in India, our sanitary pads are chemical-free, ultra-soft, and responsibly manufactured, keeping your comfort, health, and dignity at the core ",
    imageUrl: staymore,
    link: "/services#staymore",
    
  },
  {
    title: "OJAS",
    tagline: "Quality you can trust",
    description:
      "OJAS delivers premium ready-made concrete solutions with uncompromising quality for construction projects of all scales, ensuring durability and reliability in every pour.",
    imageUrl: ojas,
    link: "/services#ojas",
  },
  {
    title: "Right Homes",
    tagline: "You name it, we make it",
    description:
      "Right Homes turns your dream home into reality with customized construction solutions that prioritize quality craftsmanship, innovative design, and sustainable building practices.",
    imageUrl: righthomes,
  },
];

const VerticalsSection = () => {
  return (
    <section className="py-16 md:py-24 z-50 bg-black ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16  transition-all duration-700 ease-out">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Featured <span className="text-[#0047AB]">Verticals</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Discover our diverse portfolio of businesses, each delivering
            excellence in their respective domains while maintaining our core
            values of quality, innovation, and customer-centricity.
          </p>
        </div>

        <div className="space-y-10">
          {Verticals.map((vertical, index) => (
            <Verticalcards key={index} {...vertical} index={index} />
          ))}
        </div>

        <div className="text-center mt-12  transition-all duration-700 ease-out">
          <button className="border-[#0047AB] border-2 rounded-md px-3 py-3  text-yellow-500 hover:bg-[#0047AB]/10">
            <Link to="/services">View All Verticals</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VerticalsSection;
