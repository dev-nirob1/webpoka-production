import { Heading, Paragraph } from "../ui";

const DashboardPageTitle = ({ title, description }) => {
  return (
    <div>
      <Heading as={4}>{title}</Heading>
      {description && <Paragraph className="mt-1 text-light">{description}</Paragraph>}
    </div>
  );
};

export default DashboardPageTitle;
