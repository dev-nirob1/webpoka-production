"use client";

import { Button } from "../ui";

const Video = () => {
  return (
    <section className="relative py-15 before:absolute before:inset-x-0 before:top-22 before:bottom-0 before:-z-10 before:h-[70%] before:w-1/2 before:bg-[url('/images/background/bg-7.png')] before:bg-left before:bg-no-repeat">
      <div className="video-play mx-auto flex h-[50vh] w-full max-w-[90%] items-center justify-center rounded-2xl bg-[url('/images/background/bg-6.png'),linear-gradient(to_right,var(--color-highlight),var(--color-primary))] bg-center bg-no-repeat md:h-[60vh] md:max-w-[800px]  lg:h-[70vh] lg:max-w-[950px]">
        <Button variant="circle" icon="fa-solid fa-play fa-2x" />
      </div>
    </section>
  );
};

export default Video;
