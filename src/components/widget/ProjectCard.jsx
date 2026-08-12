import { Button } from "../ui";
import Heading from "../ui/Heading";

const ProjectCard = ({ app }) => {
  return (
    <div className="cursor-pointer rounded-lg bg-white shadow-box">
      <div
        style={{ backgroundImage: `url(${app.image})` }}
        className="h-[260px] w-full rounded-t-lg bg-cover bg-top bg-no-repeat transition-all duration-1500 ease-in-out hover:bg-bottom"
      />
      <div className="p-4 pb-6">
        <Heading as={5} className="mt-2">
          {app.title}
        </Heading>
        <div>
          <Button variant="secondary" className="mt-4 rounded-lg">
            <a href={app.liveLink} target="_blank" rel="noreferrer">
              Watch Live
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
