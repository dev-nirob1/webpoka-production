import { Container, Section } from "../ui";
import SectionTitle from "../ui/SectionTitle";
import ServiceDetailsCard from "../widget/ServiceDetailsCard";

const ServiceDetails = () => {
  const serviceDetails = [
    {
      id: 1,
      icon: "fa-solid fa-code",
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies for optimal performance and scalability.",
      features: [
        "Responsive Design",
        "Custom CMS Solutions",
        "E-commerce Platforms",
        "Progressive Web Apps",
      ],
      link: "https://webpoka.com/contact",
    },
    {
      id: 2,
      icon: "fa-solid fa-code",
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications that deliver seamless user experiences.",
      features: [
        "iOS & Android",
        "React Native / Flutter",
        "App Store Optimization",
        "Push Notifications",
      ],
      link: "https://webpoka.com/contact",
    },
    {
      id: 3,
      icon: "fa-solid fa-code",
      title: "UI/UX Design",
      description:
        "User-centered design that combines aesthetics with functionality for maximum engagement.",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Brand Identity",
        "Usability Testing",
      ],
      link: "https://webpoka.com/contact",
    },
    {
      id: 4,
      icon: "fa-solid fa-code",
      title: "SEO Optimization",
      description:
        "Data-driven SEO strategies to improve your visibility and drive organic traffic.",
      features: [
        "Technical SEO",
        "Content Strategy",
        "Analytics & Reporting",
        "Link Building",
      ],
      link: "https://webpoka.com/contact",
    },
    {
      id: 5,
      icon: "fa-solid fa-code",
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and DevOps solutions for reliable application deployment.",
      features: [
        "AWS / Azure / GCP",
        "CI/CD Pipelines",
        "Monitoring & Security",
        "Auto Scaling",
      ],
      link: "https://webpoka.com/contact",
    },
    {
      id: 6,
      icon: "fa-solid fa-code",
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing campaigns that convert visitors into customers.",
      features: [
        "PPC Campaigns",
        "Social Media Marketing",
        "Email Marketing",
        "Conversion Optimization",
      ],
      link: "https://webpoka.com/contact",
    },
  ];
  return (
    <Section>
      <Container>
        <SectionTitle
          className="mb-12 items-center text-center"
          title="Comprehensive Digital Solutions"
          subTitle="What We Offer"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceDetails.map((service) => (
            <ServiceDetailsCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ServiceDetails;
