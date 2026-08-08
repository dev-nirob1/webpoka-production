import { Section, Container } from "../ui";
import SectionTitle from "../ui/SectionTitle";
import MemberCard from "../widget/MemberCard";

const members = [
  {
    id: 1,
    name: "Rafiqur Rahman",
    role: "Python Developer",
    image: "/images/team/rafiq-rahman.jpg",
  },
  {
    id: 2,
    name: "Al Hasan Nirob",
    role: "Frontend Engineer",
    image: "/images/team/al-hasan-nirob.jpg",
  },
  {
    id: 3,
    name: "Kohinoor Akter",
    role: "UI/UX Designer",
    image: "/images/team/kohinoor.png",
  },
  {
    id: 4,
    name: "Mahmuda Akter",
    role: "Product Manager",
    image: "/images/team/mahmuda-akter.png",
  },
  {
    id: 5,
    name: "Tariq Mahmud",
    role: "DevOps Engineer",
    image: "/images/team/tariq-mahmud.png",
  },
  {
    id: 6,
    name: "Nazma Begum",
    role: "Backend Developer",
    image: "/images/team/nazma.png",
  },
];
const OurTeam = () => {
  return (
    <Section>
      <Container>
        <SectionTitle className="mb-12 items-center text-center" title="Meet Our Skilled Team" subTitle="Core Members" />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <MemberCard key={member.id} memberData={member} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default OurTeam;