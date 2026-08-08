import About from "@/components/section/About";
import Hero from "@/components/section/Hero";
import Pricing from "@/components/section/Pricing";
import Services from "@/components/section/Services";
import Video from "@/components/section/Video";
import WhyChooseUs from "@/components/section/WhyChooseUs";
import WorkingProcess from "@/components/section/WorkingProcess";
import {
  Button,
  Container,
  Heading,
  Input,
  Label,
  Paragraph,
  Section,
  Select,
  Textarea,
} from "@/components/ui";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Video />
      <WorkingProcess />
      <Pricing />
      <About />
      <Paragraph>
        this is paragraph writing a website of software company
      </Paragraph>
      <Label>Message</Label>
      <Textarea placeholder="Write message here"></Textarea>
      <Button shape="default" className="px-5 py-2">
        Play Now
      </Button>
      <Section className="bg-light">
        this is section heading
        <Container>
          <Input type="password" />

          <Heading as={1}>heading-1</Heading>
          <Heading as={2}>heading-2</Heading>
          <Heading as={3}>heading-3</Heading>
          <Heading as={4}>heading-4</Heading>
          <Heading as={5}>heading-5</Heading>
          <Heading as={6}>heading-6</Heading>

          <Select
            label="country"
            options={[
              { value: "pakistan", label: "Pakistan" },
              { value: "india", label: "India" },
              { value: "uk", label: "UK" },
            ]}
            placeholder="Select country"
          ></Select>
        </Container>
      </Section>
    </div>
  );
}
