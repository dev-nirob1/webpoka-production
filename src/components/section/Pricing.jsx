"use client";

import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import { Container, Section, Tabs } from "../ui";
import PricingCard from "../widget/PricingCard";

const pricing = [
  {
    title: "Starter Plan",
    icon: "/images/foreground/price-icon-1.png",
    price: 99.9,
    features: [
      "Basic web development",
      "Responsive design included",
      "Email support",
      "Up to 5 pages or screens",
      "Initial performance optimization",
    ],
  },
  {
    title: "Professional Plan",
    icon: "/images/foreground/price-icon-2.png",
    price: 199.9,
    features: [
      "Advanced web & mobile development",
      "UI/UX design consultation",
      "Priority support 24/7",
      "Up to 15 pages or screens",
      "Performance & security optimization",
    ],
  },
  {
    title: "Enterprise Plan",
    icon: "/images/foreground/price-icon-3.png",
    price: 399.9,
    features: [
      "Custom software solutions",
      "Dedicated account manager",
      "Full-stack development & deployment",
      "Unlimited pages or screens",
      "Continuous monitoring & optimization",
    ],
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <Section className="relative after:absolute after:inset-x-0 after:-top-[100px] after:-bottom-[200px] after:-z-10 after:bg-[url('/images/background/bg-8.png')] after:bg-cover after:bg-left after:bg-no-repeat">
      <Container>
        <SectionTitle
          className="text-center items-center"
          subTitle="Flexible Plans"
          title="Our Pricing Options"
        />

        <Tabs
          options={[
            { label: "Monthly", value: "monthly" },
            { label: "Yearly", value: "yearly" },
          ]}
          value={billingCycle}
          onChange={setBillingCycle}
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricing.map((price) => (
            <PricingCard
              key={price.title}
              price={price}
              billingCycle={billingCycle}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Pricing;
