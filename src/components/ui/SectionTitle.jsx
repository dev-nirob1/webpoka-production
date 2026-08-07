import { Heading } from ".";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="">
      <Heading as={5} className="text-primary">
        {subTitle}
      </Heading>
      <span className="relative inline-block ml-5 h-1.25 w-2.5 bg-primary before:absolute before:top-px before:-left-4.5 before:h-0.5 before:w-2.5 before:bg-accent before:content-[''] after:absolute after:top-px after:-right-4.5 after:h-0.5 after:w-2.5 after:bg-accent after:content-['']" />
      <Heading as={3}>{title}</Heading>
    </div>
  );
};

export default SectionTitle;
