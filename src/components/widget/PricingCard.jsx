import Image from "next/image";
import { Heading } from "../ui";


const PricingCard = ( {price} ) => {
  return (
<div className="group relative overflow-hidden bg-white p-12 px-4 text-center shadow-box transition-colors duration-400 ease-in-out hover:text-white before:absolute before:top-0 before:-left-full before:z-0 before:h-full before:w-full before:bg-primary before:opacity-0 before:pointer-events-none before:transition-all before:duration-400 before:ease-in-out hover:before:left-0 hover:before:opacity-100">    
    <Heading as={5} className="relative z-[1] group-hover:text-white transition-all duration-400 ease-in-out">
        {price?.title}
      </Heading>

      <div className="icon relative z-[1] h-[120px] w-auto">
        <Image
          src={price.icon}
          alt="icon"
          width={500}
          height={500}
          className="mx-auto block h-full w-auto"
        />
      </div>

      <div className="relative z-[1] flex items-center justify-center">
        <sup>
          <i className="fa-solid fa-dollar fa-2x" />
        </sup>
        <Heading as={1} className="price text-primary transition-colors duration-400 ease-in-out group-hover:text-white ">
          {price.price}
        </Heading>
        <Heading as={5} className=" group-hover:text-white transition-all duration-400 ease-in-out ">/mon</Heading>
      </div>

      <ul className="relative z-[1] my-5">
        {price?.features?.map((feature) => (
          <li key={feature} className="my-2">
            {feature}
          </li>
        ))}
      </ul>

      <button className="btn relative z-[1] rounded-3xl bg-accent px-10 py-3 font-bold text-white shadow-box transition-all duration-400 ease-in-out group-hover:bg-white group-hover:text-accent">
        Buy Now
      </button>
    </div>
  );
};

export default PricingCard;