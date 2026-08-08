import Image from "next/image";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";

const MemberCard = ({ memberData }) => {
  return (
    <div className="relative cursor-pointer overflow-hidden rounded-lg">
      <div className="image relative h-[350px] w-full overflow-hidden">
        <Image
          src={memberData.image}
          alt={memberData.name}
          fill
          className="rounded-lg object-cover"
        />
      </div>

      <div className="member-info absolute inset-x-4 bottom-4 rounded-lg bg-white px-4 py-2">
        <Heading as={5}>{memberData.name}</Heading>
        <Paragraph className="m-0 pt-1">{memberData.role}</Paragraph>
      </div>
    </div>
  );
};

export default MemberCard;