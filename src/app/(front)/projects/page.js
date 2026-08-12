"use client";

import { useState, useMemo } from "react";
import { Container, Section, Tabs } from "@/components/ui";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/widget/ProjectCard";
import PageHero from "@/components/widget/PageHero";

const projects = [
  // FRONT-END
  {
    id: 11,
    title: "Event Management Website",
    category: "front-end",
    liveLink: "https://the-venue-event-management.netlify.app/",
    image: "/images/projectImage/event-management.webp",
  },
  {
    id: 12,
    title: "Healthcare Website",
    category: "front-end",
    liveLink: "https://luxemed-healthcare.netlify.app/",
    image: "/images/projectImage/luxemed-healthcare.webp",
  },
  {
    id: 13,
    title: "E-commerce Website",
    category: "front-end",
    liveLink: "https://nebula-store-e-commerce.netlify.app/",
    image: "/images/projectImage/nebul-ecommerce.webp",
  },

  // LANDING PAGES
  {
    id: 1,
    title: "Real Estate Landing Page",
    category: "landing-page",
    liveLink: "https://cityview-landing-page.netlify.app/",
    image: "/images/projectImage/cityview.png",
  },
  {
    id: 2,
    title: "Bag Selling Landing Page",
    category: "landing-page",
    liveLink: "https://bagpoint.netlify.app/",
    image: "/images/projectImage/bagpoint.png",
  },
  {
    id: 3,
    title: "Pizza Slice Landing Page",
    category: "landing-page",
    liveLink: "https://slicepoint.netlify.app/",
    image: "/images/projectImage/slicepoint.png",
  },

  // FULL STACK
  {
    id: 10,
    title: "Real Estate Website",
    category: "full-stack",
    liveLink: "https://scionassetbd.com/",
    image: "/images/projectImage/scion-asset.png",
  },
];

const tabs = [
  { label: "Front-End", value: "front-end" },
  { label: "Landing Pages", value: "landing-page" },
  { label: "Full Stack", value: "full-stack" },
];

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState("front-end");

  const filteredProjects = useMemo(
    () => projects.filter((project) => project.category === activeTab),
    [activeTab]
  );

  return (
    <div>
      <PageHero title="Our Portfolio" routeName="Projects" image="/images/background/project-breadcrumb.png" />

      <Section>
        <Container>
          <SectionTitle className="mb-10 items-center text-center" title="Our Work in Action" subTitle="Projects" />

          <Tabs options={tabs} value={activeTab} onChange={setActiveTab} />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((app) => (
              <ProjectCard key={app.id} app={app} />
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default ProjectsPage;