import About from "@/components/section/About";
import Hero from "@/components/section/Hero";
import Pricing from "@/components/section/Pricing";
import Services from "@/components/section/Services";
import Testimonials from "@/components/section/Testimonials";
import Video from "@/components/section/Video";
import WhyChooseUs from "@/components/section/WhyChooseUs";
import WorkingProcess from "@/components/section/WorkingProcess";


export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Video />
      <WorkingProcess />
      <Pricing />
      <About />
      <Testimonials />
    </div>
  );
}
