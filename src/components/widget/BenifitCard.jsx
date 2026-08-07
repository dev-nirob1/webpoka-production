import { cn, Heading, Paragraph } from "../ui";

const iconColors = ["bg-alternative", "bg-secondary", "bg-accent"];

const BenefitCard = ({ benefit, index = 0, className }) => {
  return (
    <div
      className={cn(
        "relative max-w-[380px] w-full rounded-2xl bg-white p-6 pb-0 shadow last:mb-0 md:max-w-[380px] lg:p-10 lg:pb-0 xl:max-w-[470px]",
        index === 1 && "md:ml-20",
        className,
      )}
    >
      <div className="relative py-0 pb-8 pl-22">
        <div
          className={cn(
            "absolute inset-0 h-full w-16 rounded-t-[50px] pt-6 text-center text-white",
            iconColors[index % iconColors.length],
          )}
        >
          <i className={cn(benefit.icon, "text-[32px]")} />
        </div>
        <div>
          <Heading as={5}>{benefit.title}</Heading>
          <Paragraph className="mb-0 mt-3 text-sm leading-relaxed text-light">
            {benefit.description}
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
