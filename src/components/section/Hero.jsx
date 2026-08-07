import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { Button, Container, Heading, Paragraph } from "../ui";

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen py-[150px] md:pt-[210px] md:pb-[150px] text-white before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[url('/images/background/bg-3.png')] before:bg-bottom before:bg-cover before:bg-no-repeat md:before:-bottom-[120px]">
      <Container>
        <div className="grid gap-5 items-center md:grid-cols-2 md:gap-2">
          {/* Hero content */}
          <div>
            <Heading as={1} className="text-white">
              A Software <br />
              Development Agency
            </Heading>
            <Paragraph className="md:text-[1.1rem] md:font-semibold mt-5 mb-6 text-white leading-8">
              We build modern web, mobile, and cloud applications for businesses
              and startups across the globe.
            </Paragraph>
            <Button
              variant="primary"
              icon="fas fa-arrow-right"
              className="my-2"
            >
              Watch Video
            </Button>
          </div>

          {/* Hero image */}
          <div className="w-auto h-full md:absolute md:top-8 md:right-0 md:bottom-0 md:flex md:w-1/2 md:h-full md:items-center md:justify-center">
            <Image
              src="/images/foreground/hero.png"
              alt="image"
              width={600}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
