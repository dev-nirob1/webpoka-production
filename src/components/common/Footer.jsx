import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa6";
import Container from "../ui/Container";
import Heading from "../ui/Heading";

const supportLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact-us", label: "Contact" },
];

const galleryImages = [
  {
    id: 1,
    image: "/images/footerGallery/events.avif",
  },
  {
    id: 2,
    image: "/images/footerGallery/renovation.avif",
  },
  {
    id: 3,
    image: "/images/footerGallery/cryptocoin.avif",
  },
  {
    id: 4,
    image: "/images/footerGallery/vesco.avif",
  },
  {
    id: 5,
    image: "/images/footerGallery/xocondos.avif",
  },
  {
    id: 6,
    image: "/images/footerGallery/chainese.avif",
  },
];

const socialLinks = [
  { href: "https://www.facebook.com/webpoka.bd", icon: FaFacebookF },
  { href: "https://www.youtube.com/@webpoka", icon: FaYoutube },
  { href: "https://wa.me/01941-861014", icon: FaWhatsapp },
];

const Footer = () => {
  return (
    <footer className="relative pt-12 text-light after:content-[''] after:absolute after:-top-100 after:left-0 after:right-0 after:bottom-0 after:-z-10 after:bg-[url('/images/background/footer.jpg')] after:bg-right after:bg-no-repeat">
      <Container className="grid gap-8 py-8 md:grid-cols-2 lg:grid-cols-4 md:py-12">
        {/* Logo, description, contact info */}
        <div className="md:col-span-2">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              height={80}
              width={380}
              className="h-20 w-auto"
            />
          </Link>

          <p className="mt-4 ">
            We are a Bangladeshi software development company delivering
            innovative web, mobile, and enterprise solutions to businesses
            worldwide.
          </p>

          <ul className="mt-4 flex flex-col gap-2 text-base">
            <li>
              <span className="text-highlight">Location: </span>
              Home 60, Road 27, Mirpur 12, Dhaka
            </li>
            <li>
              <span className="text-highlight">Email: </span>
              support@webpoka.com
            </li>
            <li>
              <span className="text-highlight">Phone: </span>
              01941-861014, 09611-648163
            </li>
          </ul>
        </div>

        {/* Quick navigation links */}
        <div>
          <Heading
            as={5}
            className="mb-6 relative pb-3 text-dark after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-8 after:h-px after:bg-dark"
          >
            Support
          </Heading>
          <ul className="flex flex-col gap-4">
            {supportLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 before:content-['>'] before:font-mono"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Image gallery */}
        <div>
          <Heading
            as={5}
            className="mb-6 relative pb-3 text-dark after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-8 after:h-px after:bg-dark"
          >
            Gallery
          </Heading>
          <div className="grid grid-cols-3 gap-4">
            {galleryImages.map((img) => (
              <div key={img.id} className="cursor-pointer hover:opacity-70">
                <Image
                  src={img.image}
                  alt="gallery image"
                  height={300}
                  width={300}
                  className="h-17.5 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Footer bottom copyright */}
      <div className="py-6 font-semibold">
        <Container className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <p>
            {new Date().getFullYear()} &copy; All rights reserved by Webpoka,
            Bangladesh
          </p>

          <div className="flex gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-8 w-8 place-content-center rounded border border-border text-dark text-lg"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
