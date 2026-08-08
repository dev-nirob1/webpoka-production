import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import { Button, cn } from "../ui";
import Link from "next/link";

const ServiceDetailsCard = ({ service }) => {
  return (
    <div className="group relative z-[1] rounded-xl shadow overflow-hidden bg-white px-8 py-12 shadow-box before:absolute before:left-0 before:top-1/2 before:-z-10 before:h-full before:w-full before:bg-primary before:opacity-0 before:transition-all before:duration-500 before:ease-in-out hover:before:top-0 hover:before:opacity-100 after:absolute after:-bottom-[110%] after:-right-[110%] after:-z-10 after:h-[350px] after:w-[350px] after:rounded-full after:bg-highlight after:transition-all after:duration-700 after:ease-in-out hover:after:-bottom-[40%] hover:after:-right-[35%]">
      <div className="relative z-[1] mb-4 flex h-18 w-18 items-center justify-center rounded-xl bg-primary text-white transition-all duration-500 ease-in-out group-hover:bg-white group-hover:text-primary">
        <i className={cn(service.icon, "text-4xl")} />
      </div>

      <Heading as={5} className="text-2xl my-4 relative z-[1] group-hover:text-white">
        {service.title}
      </Heading>

      <Paragraph className="relative z-[1] mt-2 group-hover:text-white">
        {service.description}
      </Paragraph>

      <ul className="relative z-[1] my-6 space-y-2 group-hover:text-white">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <i className="fa-solid fa-check text-xs" />
            {feature}
          </li>
        ))}
      </ul>

      <Button
        variant="secondary"
        className="bg-primary group-hover:bg-white group-hover:text-primary"
      >
      <Link href="contact">Learn More</Link>
      </Button>

    </div>
  );
};

export default ServiceDetailsCard;
