import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";
import ServiceCard from "../widget/ServiceCard";
import { cn, Container, Section } from "../ui";

const services = [
  {
    title: "Web Development",
    description:
      "We build fast, secure, and scalable websites and web applications tailored to your needs.",
    icon: "fa-solid fa-code",
  },
  {
    title: "Strategy & Planning",
    description:
      "Our experts craft result-driven strategies to help you innovate and achieve long-term success.",
    icon: "fa-solid fa-lightbulb",
  },
  {
    title: "Market Research",
    description:
      "We analyze industry trends and user behavior to give your brand a competitive edge.",
    icon: "fa-solid fa-chart-line",
  },
  {
    title: "Growth Analytics",
    description:
      "Monitor performance with data-driven insights and continuous optimization for measurable results.",
    icon: "fa-solid fa-chart-pie",
  },
  {
    title: "Enterprise Consulting",
    description:
      "We provide professional consulting to streamline operations and maximize business productivity.",
    icon: "fa-solid fa-briefcase",
  },
];

const Services = () => {
  return (
    <Section className="relative before:content-[''] before:absolute before:inset-x-0 before:top-0 before:bottom-[-250px] before:-z-20 before:bg-[url('/images/background/bg-4.png')] before:bg-left-top before:bg-no-repeat lg:mt-36 lg:mb-12">
      <Container className="relative">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <SectionTitle
              subTitle="Our Services"
              title="We Are Providing Digital Services"
            />
          </div>

          {services.map((service, i) => (
            <div
              key={service.title}
              className={cn(
                i === 1 && "xl:mt-20",
                i === 2 && "xl:-mt-44",
                i === 3 && "xl:-mt-20",
              )}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        {/* animated icons */}

        {/* icon-1, icon-2, icon-2 styles is in global.css */}
        <Image
          src="/images/icons/icon-1.png"
          alt="icon"
          width={35}
          height={35}
          className="absolute left-16 top-0 -z-10 animate-spin-slow lg:left-0 lg:top-48"
        />
        <Image
          src="/images/icons/icon-2.png"
          alt="icon"
          width={35}
          height={35}
          className="absolute -bottom-12 left-4 -z-10 animate-float-up-down lg:bottom-0 lg:-left-8"
        />
        <Image
          src="/images/icons/icon-4.png"
          alt="icon"
          width={35}
          height={35}
          className="absolute right-0 top-20 -z-10 animate-float-left-right lg:-right-16 lg:top-20"
        />
      </Container>
    </Section>
  );
};

export default Services;
