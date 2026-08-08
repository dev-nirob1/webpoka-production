import { Heading } from ".";
import { cn } from "./cn";

const SectionTitle = ({ title, subTitle, className }) => {
  return (
    <div className={cn("flex flex-col items-start", className)}>
      <Heading as={5} className="text-primary">
        {subTitle}
      </Heading>
      <div className="flex items-center gap-2 my-3">
        <span className="h-0.5 w-2.5 bg-accent" />
        <span className="h-1.25 w-2.5 bg-primary" />
        <span className="h-0.5 w-2.5 bg-accent" />
      </div>
      <Heading as={3}>{title}</Heading>
    </div>
  );
};

export default SectionTitle;