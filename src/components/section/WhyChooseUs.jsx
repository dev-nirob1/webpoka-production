import Link from "next/link";
import Image from "next/image";
import {
  Heading,
  Paragraph,
  Section,
  Container,
  ListItem,
  Button,
} from "../ui";
import SectionTitle from "../ui/SectionTitle";
import BenefitCard from "../widget/BenifitCard";
// import SectionTitle from "../widget/SectionTitle";
// import BenefitCard from "../widget/BenefitCard";

const benefits = [
  {
    title: "Affordable Solutions",
    description:
      "We deliver high-quality software services at competitive rates to maximize your ROI.",
    icon: "fa-solid fa-dollar-sign",
  },
  {
    title: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any challenges.",
    icon: "fa-solid fa-headset",
  },
  {
    title: "Fast Delivery",
    description:
      "We ensure quick and efficient access to our services without compromising quality.",
    icon: "fa-solid fa-paper-plane",
  },
];

const WhyChooseUs = () => {
  return (
    <Section className="relative after:absolute after:-z-20 after:inset-x-0 after:-top-[50px] after:-bottom-[150px] after:bg-[url('/images/background/bg-5.png')] after:bg-right-top after:bg-no-repeat">
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* content */}
          <div className="content">
            <SectionTitle
              className="mb-4"
              title="Proven Benefits That Boost Your Growth"
              subTitle="Why Choose Us"
            />

            <Heading as={5} className="my-6 text-highlight">
              A Satisfied Customer is Our Greatest Achievement
            </Heading>
            <Paragraph className="text-xl font-bold">
              We help businesses thrive with innovative software solutions and
              expert guidance.
            </Paragraph>

            <ul className="my-6 space-y-2 text-light font-bold">
              <ListItem>How can software accelerate business growth?</ListItem>
              <ListItem>Why choose a dedicated development team?</ListItem>
              <ListItem>What makes our solutions stand out globally?</ListItem>
            </ul>

            <Button variant={"secondary"}>
              <Link href="/contact">Get Consultation</Link>
            </Button>
          </div>

          {/* cards */}
          <div className="flex flex-col gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={benefit.title}
                index={index}
                benefit={benefit}
              />
            ))}
          </div>
        </div>

        {/* animated icons */}
        <Image
          src="/images/icons/icon-3.png"
          alt="icon"
          width={45}
          height={45}
          className="absolute bottom-20 right-12 -z-10 animate-spin-slow"
        />
        <Image
          src="/images/icons/icon-6.png"
          alt="icon"
          width={45}
          height={45}
          className="absolute right-4 top-20 -z-10 animate-spin-slow"
        />
      </Container>
    </Section>
  );
};

export default WhyChooseUs;
