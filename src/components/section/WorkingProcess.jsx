import Image from "next/image";
import { cn, Container, Heading, Paragraph, Section } from "../ui";
import SectionTitle from "../ui/SectionTitle";

const process = [
  {
    id: 1,
    bg: "/images/background/process-bg-1.png",
    icon: "/images/foreground/process-1.png",
    title: "Data Integration",
    number: "01",
  },
  {
    id: 2,
    bg: "/images/background/process-bg-2.png",
    icon: "/images/foreground/process-2.png",
    title: "Content Management",
    number: "02",
  },
  {
    id: 3,
    bg: "/images/background/process-bg-3.png",
    icon: "/images/foreground/process-3.png",
    title: "Workflow Automation",
    number: "03",
  },
  {
    id: 4,
    bg: "/images/background/process-bg-4.png",
    icon: "/images/foreground/process-4.png",
    title: "Digital Transformation",
    number: "04",
  },
];

const WorkingProcess = () => {
  return (
    <Section className="overflow-hidden">
      <Container>
        <SectionTitle
          className="text-center items-center mb-10"
          subTitle="Our Process"
          title="Our Process to Success"
        />

        <div className="grid items-center gap-8 md:grid-cols-2 lg:grid-cols-4">
          {process.map((item, i) => {
            const isReversed = i === 1 || i === 3;

            return (
              <div
                key={item.id}
                className={cn(
                  "flex flex-col items-center gap-4",
                  isReversed && "flex-col-reverse",
                )}
              >
                <div className="icon relative">
                  <Image
                    src={item.bg}
                    alt="image"
                    width={260}
                    height={260}
                    className="absolute inset-0 -z-10 animate-spin-slower bg-top bg-no-repeat"
                  />
                  <Image
                    src={item.icon}
                    alt="image"
                    width={260}
                    height={260}
                    className="max-w-[240px] lg:max-w-[200px] xl:max-w-[260px]"
                  />
                </div>

                <Heading as={5}>{item.title}</Heading>

                <Paragraph
                  className={cn(
                    "relative mt-[70px] h-10 w-10 rounded-full bg-light/10 text-center text-xl leading-10 before:absolute before:left-1/2 before:h-[65px] before:w-px before:bg-primary before:content-['']",
                    isReversed
                      ? "mb-[70px] before:top-10"
                      : "before:-top-[65px]",
                  )}
                >
                  {item.number}
                </Paragraph>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default WorkingProcess;
