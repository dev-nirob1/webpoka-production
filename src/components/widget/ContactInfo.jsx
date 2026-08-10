import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";

const contactInfo = [
  { id: 1, icon: "fa-solid fa-envelope", title: "Email", value: "support@webpoka.com" },
  { id: 2, icon: "fa-solid fa-phone", title: "Call Us", value: "09611-648163" },
  { id: 3, icon: "fa-solid fa-clock", title: "Availability", value: "Saturday - Thursday: 9:00 AM - 6:00 PM (BST)" },
  { id: 4, icon: "fa-solid fa-location-dot", title: "Office", value: "House 60, Road 27, Mirpur 12, Dhaka, Bangladesh" },
];

const ContactInfo = () => {
  return (
    <div className="md:p-4">
      <Heading as={3} className="mb-5">
        Let&apos;s Connect
      </Heading>
      <Paragraph>
        Have a question or project in mind? Reach out to us today — our team is here to assist you
        with custom software solutions, collaborations, or any general inquiries.
      </Paragraph>

      <ul className="mt-6 space-y-4">
        {contactInfo.map((item) => (
          <li key={item.id} className="flex items-start gap-4 rounded-lg bg-white p-4 shadow">
            <div className="flex items-center justify-center rounded-lg bg-primary p-2 text-2xl text-white">
              <i className={item.icon} />
            </div>
            <div>
              <Heading as={5}>{item.title}</Heading>
              <Paragraph className="pt-1">{item.value}</Paragraph>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactInfo;