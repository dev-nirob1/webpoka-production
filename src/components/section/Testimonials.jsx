"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import TestimonialCard from "../widget/TestimonialCard";
import { cn, Container, Section } from "../ui";

const reviews = [
  {
    id: 1,
    review: "Awesome job every single time I work with him. We have been working together for over a year now. Great experience every single time.",
    userName: "kenyaparks",
    country: "United States",
    image: "https://ui-avatars.com/api/?name=Ken&background=0D8ABC&color=fff",
    rating: 5,
  },
  {
    id: 2,
    review: "Very friendly and professional contact. I am exited how the website will look like. I let you know.",
    userName: "andreoehsen",
    country: "Germany",
    image: "https://ui-avatars.com/api/?name=andre&background=0D8ABC&color=fff",
    rating: 5,
  },
  {
    id: 3,
    review: "The seller communicates and takes direction well. He his good and has good knowledgeable. Good value for money. I will work with him again. Happiness 😀",
    userName: "omshreembrzee",
    country: "United Kingdom",
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/43922613/original/_MG_8549_1.jpg",
    rating: 5,
  },
  {
    id: 15,
    review: "I am pleased again. This seller keeps solving a lot of riddles within the world of webwork for me. And I am happy to come back again and again, while we have finished many different projects. Thumbs up for him, and: Thaank you :-)",
    userName: "barbara2",
    country: "Germany",
    image: "https://ui-avatars.com/api/?name=barbara2&background=0D8ABC&color=fff",
    rating: 5,
  },
  {
    id: 4,
    review: "we have no idea how to make html page for one industrial product, but seller give us some great ideas and make template for us very fast. thank you very much, will order again!",
    userName: "avelettta",
    country: "Estonia",
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/394fe8799b64583ca19823baa2812d81-1622209337617/2eb081d6-f082-4ad9-882a-5696a0db387a.jpg",
    rating: 5,
  },
  {
    id: 5,
    review: "This is is the best. Attention to detail. No complaints, does as instructed and unlimited revisions. Very responsive landing page as well",
    userName: "franklawson488",
    country: "Ghana",
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/bcf0476bce84db971de13ea639c52bdc-1519481126797/355eff90-e307-4556-aac0-2463996a3883.jpg",
    rating: 5,
  },
  {
    id: 6,
    review: "Seller exceeded my expectations. He was very cooperative and patient--even when I took a while to reply. Fiverr should have an option to add bonuses when sellers go above and beyond... I will definitely choose this seller for my next project. A+",
    userName: "user72803480",
    country: "United States",
    image: "https://ui-avatars.com/api/?name=user&background=0D8ABC&color=fff",
    rating: 5,
  },
  {
    id: 7,
    review: "Webpoka has real talent !!! He is really good making landing pages i have used his service 4 times so far ! I am happy every time!!!!!! and will continue to work with him. Thank you so much BEST GIG ON FIVVER",
    userName: "zackjay",
    country: "Canada",
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/bcf0476bce84db971de13ea639c52bdc-1519481126797/355eff90-e307-4556-aac0-2463996a3883.jpg",
    rating: 5,
  },
  {
    id: 8,
    review: "Fantastic work and very easy to work with. The seller is a great communicator and delivers exactly what you want. Will use again in the future.",
    userName: "docdigit",
    country: "United States",
    image: "https://ui-avatars.com/api/?name=docdigit&background=0D8ABC&color=fff",
    rating: 5,
  },
  {
    id: 9,
    review: "Was a very pleasant experience working with Webpoka. He was always willing to work with me to ensure that I got the result I wanted. He was extremely cooperative, which I truly appreciated.",
    userName: "thejourneyer",
    country: "Barbados",
    image: "https://ui-avatars.com/api/?name=thejourneyer&background=0D8ABC&color=fff",
    rating: 4,
  },
  {
    id: 10,
    review: "I received a creative landing page just as requested and this seller was very easy to talk to. I would recommend him to anyone.",
    userName: "jessicarushing",
    country: "United States",
    image: "https://ui-avatars.com/api/?name=jessicarushing&background=0D8ABC&color=fff",
    rating: 5,
  },
  {
    id: 11,
    review: "Very Satisfied with the seller, extremely patient and a breeze to work with. Will certainly avail Afroj's services again. Keep up the good work",
    userName: "clearmind28",
    country: "India",
    image: "https://ui-avatars.com/api/?name=clearmind28&background=0D8ABC&color=fff",
    rating: 5,
  },
  {
    id: 12,
    review: "Absolutely brilliant job and exactly what I expected. Seller went above and beyond to deal with my very specific revisions. Will definitely use this service again.",
    userName: "tchapwise",
    country: "United Kingdom",
    image: "https://ui-avatars.com/api/?name=tchapwise&background=0D8ABC&color=fff",
    rating: 5,
  },
  {
    id: 13,
    review: "Hes Great, Experienced, and highly qualified person who knows how to solve the problems.. Great Work",
    userName: "deepakkew",
    country: "United Arab Emirates",
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/47827403/original/home-style-logo.jpg",
    rating: 5,
  },
  {
    id: 14,
    review: "Due to not having wordpress not sure was worth doing however help to set up existing landing page. Seller was good communicator and patient with my many questions",
    userName: "skurrie",
    country: "Australia",
    image: "https://ui-avatars.com/api/?name=skurrie&background=0D8ABC&color=fff",
    rating: 4,
  },
];


const Testimonials = () => {
  const [itemsPerView, setItemsPerView] = useState(1);
  const [index, setIndex] = useState(1);
  const [withTransition, setWithTransition] = useState(true);
  const total = reviews.length;

  // md breakpoint অনুযায়ী 1 বা 2 item per view
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const update = () => setItemsPerView(mql.matches ? 2 : 1);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  // itemsPerView বদলালে index রিসেট করো প্রথম real item এ
  useEffect(() => {
    setWithTransition(false);
    setIndex(itemsPerView);
  }, [itemsPerView]);

  // দুই পাশে clone বসিয়ে seamless infinite loop বানানো হচ্ছে
  const extended = useMemo(
    () => [
      ...reviews.slice(-itemsPerView),
      ...reviews,
      ...reviews.slice(0, itemsPerView),
    ],
    [itemsPerView]
  );

  const nextSlide = useCallback(() => {
    setWithTransition(true);
    setIndex((i) => i + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setWithTransition(true);
    setIndex((i) => i - 1);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(nextSlide, 4000);
    return () => window.clearInterval(timer);
  }, [nextSlide]);

  // clone-এর শেষ প্রান্তে পৌঁছালে transition ছাড়াই real position এ snap করা
  const handleTransitionEnd = () => {
    if (index >= total + itemsPerView) {
      setWithTransition(false);
      setIndex(index - total);
    } else if (index < itemsPerView) {
      setWithTransition(false);
      setIndex(index + total);
    }
  };

  return (
    <Section className="relative before:absolute before:inset-x-0 before:-top-50 before:bottom-0 before:-z-10 before:bg-[url('/images/background/bg-9.png')] before:bg-center before:bg-no-repeat lg:before:-left-25 lg:before:-top-12.5">
      <Container>
        <SectionTitle
          className="mb-8"
          title="What Clients Say About Our Services"
          subTitle="Testimonials"
        />

        <div className="relative">
          <div className="overflow-hidden rounded-[30px]">
            <div
              onTransitionEnd={handleTransitionEnd}
              className={cn(
                "flex",
                withTransition && "transition-transform duration-700 ease-in-out"
              )}
              style={{
                transform: `translateX(-${index * (100 / itemsPerView)}%)`,
              }}
            >
              {extended.map((review, i) => (
                <div
                  key={`${review.id}-${i}`}
                  className="min-h-60 flex-[0_0_100%] px-2 md:flex-[0_0_50%]"
                >
                  <TestimonialCard review={review} />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 z-10 -translate-x-4 -translate-y-1/2 rounded-full bg-white p-3 shadow-box transition hover:bg-primary hover:text-white"
          >
            <i className="fa-solid fa-chevron-left" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 z-10 translate-x-4 -translate-y-1/2 rounded-full bg-white p-3 shadow-box transition hover:bg-primary hover:text-white"
          >
            <i className="fa-solid fa-chevron-right" />
          </button>
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;