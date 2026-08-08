import Link from "next/link";
import { Button, Container, Heading, Paragraph, Section } from "../ui";

const CTA = () => {
    return (
        <Section className="bg-primary text-white py-24">
            <Container className="text-center">
                <Heading as={2} className="text-white">Need a Custom Solution?</Heading>
                <Paragraph className="py-6 text-lg">We tailor our services to meet your specific business requirements.</Paragraph>
                <Button variant="secondary" className="mt-4 bg-white text-primary hover:text-white hover:bg-highlight">
                    <Link href="/contact">Contact Us Today</Link>
                </Button>
            </Container>
        </Section>
    );
};

export default CTA;