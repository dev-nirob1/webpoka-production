import { cn, Heading, Paragraph } from "../ui";

const ServiceCard = ({ service }) => {
  return (
    <div className="group relative z-1 overflow-hidden rounded-2xl bg-white px-8 py-12 shadow-sm before:absolute before:left-0 before:top-1/2 before:-z-10 before:h-full before:w-full before:bg-primary before:opacity-0 before:transition-all before:duration-500 before:ease-in-out hover:before:top-0 hover:before:opacity-100 after:absolute after:-bottom-[110%] after:-right-[110%] after:-z-10 after:h-[280px] after:w-[280px] after:rounded-full after:bg-highlight after:transition-all after:duration-700 after:ease-in-out hover:after:-bottom-[40%] hover:after:-right-[35%]">
      <div>
        <i
          className={cn(
            service.icon,
            "text-[64px] text-highlight transition-all duration-500 ease-in-out group-hover:text-white",
          )}
        />
      </div>
      <div className="mt-8">
        <Heading as={5} className="text-2xl group-hover:text-white">
          {service.title}
        </Heading>
        <Paragraph className="my-4 group-hover:text-white">
          {service.description}
        </Paragraph>
      </div>
    </div>
  );
};

export default ServiceCard;
