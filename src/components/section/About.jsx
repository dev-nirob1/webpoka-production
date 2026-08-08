"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { Accordion, Button, Container, Paragraph, Section } from "../ui";
import SectionTitle from "../ui/SectionTitle";

const faqs = [
  {
    id: 2,
    question: "Do you build software for startups and enterprises?",
    answer:
      "Yes! We cater to startups, SMEs, and large enterprises. Whether you need a simple MVP to test your idea or a complex enterprise system, we provide scalable solutions that meet your unique requirements.",
  },
  {
    id: 3,
    question: "Can I integrate your software with existing systems?",
    answer:
      "Absolutely. Our team specializes in integrating new solutions with your current systems, whether it's CRM, ERP, payment gateways, or cloud services, ensuring seamless data flow and consistent user experience.",
  },
  {
    id: 4,
    question: "What makes your development process different?",
    answer:
      "We follow an agile, transparent, and client-focused approach. From requirement analysis to deployment, we maintain open communication, iterative delivery, and continuous feedback, ensuring the final product exceeds expectations.",
  },
  {
    id: 5,
    question: "Do you offer ongoing support and updates?",
    answer:
      "Yes, we provide post-launch support, software updates, and maintenance plans. Our goal is to keep your applications secure, up-to-date, and optimized for performance as your business evolves.",
  },
];

const About = () => {
  const [currentOpenItem, setCurrentOpenItem] = useState(null);
  const pathname = usePathname();

  const toggleAccordion = (id) => {
    setCurrentOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <Section>
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="image h-auto w-full">
            <Image
              src="/images/foreground/about.png"
              alt="image"
              width={900}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="content">
            <SectionTitle title="Always Here to Assist You" subTitle="About Us" />
            <Paragraph className="my-4">
              At Tecno, we specialize in building custom software solutions that drive business growth. Our team
              ensures quality, security, and timely delivery on every project.
            </Paragraph>

            {faqs.map((item) => (
              <Accordion
                key={item.id}
                currentOpenItem={currentOpenItem}
                accordionData={item}
                toggleAccordion={toggleAccordion}
              />
            ))}

            {pathname === "/" && (
              <Button className="mt-4" variant="secondary">
                <Link href="/about-us" >
                  About More
                </Link>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;