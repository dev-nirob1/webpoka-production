"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

const PageHero = ({ routeName, title, image }) => {
  const params = useParams();
  const slug = params?.slug;

  return (
    <section className="relative z-0 flex h-[45vh] items-end justify-center overflow-hidden pb-20 text-white md:h-[60vh]">
      <Image
        src={image}
        alt="breadcrumb background"
       fill 
       sizes="100vw"
        className="z-0 h-full w-screen object-cover"
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-secondary/15 to-secondary/25" />

      <div className="relative z-[2] container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="mb-2 text-center text-4xl font-bold">{title}</h1>
        <ul className="flex items-center justify-center gap-4 text-base md:text-xl [&_li:not(:last-child)]:after:pl-4 [&_li:not(:last-child)]:after:font-mono [&_li:not(:last-child)]:after:content-['>']">
          <li>
            <Link href="/" className="transition-all duration-300 ease-in-out hover:text-secondary">
              Home
            </Link>
          </li>
          <li>{routeName}</li>
          {slug && <li className="hidden md:inline">{slug}</li>}
        </ul>
      </div>
    </section>
  );
};

export default PageHero;