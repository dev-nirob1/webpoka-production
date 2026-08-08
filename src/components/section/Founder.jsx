import Image from "next/image";
import { Section, Container } from "../ui";
import SectionTitle from "../ui/SectionTitle";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";

const Founder = () => {
  return (
    <Section className="relative z-0 before:absolute before:inset-x-0 before:-top-50 before:-bottom-25 before:-z-10 before:bg-[url('/images/background/bg-8.png')] before:bg-left before:bg-cover before:bg-no-repeat">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative z-0 mx-auto aspect-1/1 object-cover w-[90%] before:absolute before:-left-4 before:-top-4 before:-z-10 before:h-45 before:w-45 before:bg-gradient-to-t before:from-primary before:to-highlight after:absolute after:-bottom-4 after:-right-4 after:-z-10 after:h-45 after:w-45 after:bg-gradient-to-b after:from-primary after:to-highlight md:mx-0 md:before:h-75 md:before:w-75 md:after:h-75 md:after:w-75">
            <Image
              src="/images/founder.jpeg"
              alt="Afroz Al Azad"
              fill
              className="object-cover"
            />
          </div>

          {/* content */}
          <div>
            <SectionTitle
              className="mb-4"
              title="Behind Webpoka Vision"
              subTitle="Our Founder"
            />

            <Paragraph className="pt-1">
              <strong>Afroz Al Azad</strong> is a technical consultant and
              software architecture specialist. He excels in designing scalable
              systems, with Python and PHP as his core languages. His expertise
              drives Webpoka's commitment to building high-quality, modern web
              solutions.
            </Paragraph>

            <Heading as={5} className="mt-4">
              Vision
            </Heading>
            <Paragraph className="pt-1">
              The aim is to make Webpoka a platform that empowers businesses and
              individuals with modern, high-quality web solutions. The focus is
              on clean design, robust architecture, and seamless user
              experience.
            </Paragraph>

            <Heading as={5} className="mt-4">
              Fun Fact
            </Heading>
            <Paragraph className="pt-1">
              In free time, hobbies include exploring new technologies,
              contributing to open-source projects, and staying updated with
              emerging web trends.
            </Paragraph>

            <ul className="flex items-center gap-4 text-2xl mt-4">
              <li className="grid h-10 w-10 place-content-center rounded border border-border">
                <a
                  href="https://www.facebook.com/afrojazad"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook" />
                </a>
              </li>
              <li className="grid h-10 w-10 place-content-center rounded border border-border">
                <a href="" target="_blank" aria-label="LinkedIn">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li className="grid h-10 w-10 place-content-center rounded border border-border">
                <a
                  href="https://github.com/afrojazad"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github" />
                </a>
              </li>
              <li className="grid h-10 w-10 place-content-center rounded border border-border">
                <a href="" target="_blank" aria-label="Twitter">
                  <i className="fab fa-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Founder;
