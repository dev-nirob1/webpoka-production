import React from 'react';
import { Container, Section } from '../ui';
import ContactInfo from '../widget/ContactInfo';
import ContactForm from '../widget/ContactForm';

const Contact = () => {
    return (
        <Section>
            <Container>
                <div className="grid md:grid-cols-2 gap-8">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </Container>
        </Section>
    );
};

export default Contact;