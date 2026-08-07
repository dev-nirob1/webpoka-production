import Hero from "@/components/section/Hero";
import Services from "@/components/section/Services";
import Video from "@/components/section/Video";
import WhyChooseUs from "@/components/section/WhyChooseUs";
import {
  Accordion,
  Button,
  Container,
  Heading,
  Input,
  Label,
  Paragraph,
  Section,
  Select,
  Tabs,
  Textarea,
} from "@/components/ui";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Services/>
      <WhyChooseUs/>
      <Video/>
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
          <Accordion
            items={[
              {
                title: "What is webpoka?",
                content: "A reusable UI system for Next.js.",
              },
              { title: "Is it free?", content: "Yes, fully open source." },
              { title: "How to install?", content: "npm install @webpoka/ui" },
            ]}
          />
          <Heading as={1}>heading-1</Heading>
          <Heading as={2}>heading-2</Heading>
          <Heading as={3}>heading-3</Heading>
          <Heading as={4}>heading-4</Heading>
          <Heading as={5}>heading-5</Heading>
          <Heading as={6}>heading-6</Heading>
          <Tabs
            tabs={[
              {
                label: "Profile",
                content: (
                  <div>
                    <h3 className="font-bold text-dark">Profile Tab</h3>
                    <p className="text-light">
                      Manage your account information here.
                    </p>
                  </div>
                ),
              },
              {
                label: "Settings",
                content: (
                  <div>
                    <h3 className="font-bold text-dark">Settings Tab</h3>
                    <p className="text-light">
                      Adjust application preferences.
                    </p>
                  </div>
                ),
              },
              {
                label: "Activity",
                content: (
                  <div>
                    <h3 className="font-bold text-dark">Activity Tab</h3>
                    <p className="text-light">View your recent activity.</p>
                  </div>
                ),
              },
            ]}
          />
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
