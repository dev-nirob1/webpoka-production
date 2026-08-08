import Image from "next/image";
import { Heading, Paragraph } from "../ui";


const TestimonialCard = ({ review }) => {
  return (
    <div className="relative h-full rounded-2xl border border-border bg-white p-4 px-8 lg:p-12 lg:pb-8">
      <i className="fa-solid fa-quote-right fa-6x absolute bottom-0 right-4 text-primary opacity-10" />

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Image
            src={review.image}
            alt={review.userName}
            width={56}
            height={56}
            className="h-14 w-14 rounded-lg object-cover"
          />
          <div>
            <Heading as={5} className="text-xl text-primary">
              {review.userName}
            </Heading>
            <span>
              {review.country}{" "}
              <span className="rounded-full bg-[#59C65D] px-3 py-0.5 text-white">
                Fiverr
              </span>
            </span>
          </div>
        </div>

        <div className="stars">
          {Array.from({ length: review.rating }).map((_, i) => (
            <i key={i} className="fa-solid fa-star text-accent" />
          ))}
        </div>
      </div>

      <Paragraph className="relative z-[1] mt-4 text-[1.15rem]">
        {review.review}
      </Paragraph>
    </div>
  );
};

export default TestimonialCard;