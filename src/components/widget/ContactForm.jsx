"use client";

import {Button, Heading, Input, Textarea } from "../ui";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message received successfully! Our team will contact you soon.");
  };

  return (
    <div className="md:p-4 ">
      <Heading as={3} className="mb-5">Send Us a Message</Heading>
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input type="text" placeholder="Enter Your Name" required />
        <Input type="email" placeholder="Enter Your Email" required />

      <Input type="text" placeholder="Enter Subject" required />

      <Input type="number" placeholder="Enter Your Number" required />

      <Textarea rows={3} placeholder="Enter Message..." required />

      <Button variant="secondary" type="submit" className="rounded-lg">
        Send Message
      </Button>
    </form>
    </div>
  );
};

export default ContactForm;