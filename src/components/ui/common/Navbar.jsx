"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaXmark } from "react-icons/fa6";
import Container from "../Container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact-us", label: "Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolling(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-999 text-white transition-all duration-300 py-4 lg:pt-12 ${
        isScrolling ? "bg-primary py-3!" : ""
      }`}
    >
      <Container>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image
              height={70}
              width={270}
              src="/images/logo-white.png"
              alt="logo"
            />
          </Link>

          {/* Navigation Links */}
          <ul
            className={`fixed lg:static top-0 h-screen lg:h-auto w-4/5 lg:w-auto flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 bg-primary lg:bg-transparent p-6 lg:p-0 transition-[left] duration-300 font-semibold lg:font-normal text-base flex ${
              isMenuOpen ? "left-0" : "-left-full lg:left-auto"
            }`}
          >
            <li className="lg:hidden">
              <Image
                src="/images/logo-white.png"
                height={60}
                width={240}
                alt="logo"
                className="h-15 w-auto"
              />
            </li>

            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`relative inline-block py-2 font-medium transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 ${
                      isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}

            <li>
              <a
                className="flex items-end gap-2"
                href="https://www.fiverr.com/webpoka"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                <Image
                  height={30}
                  width={30}
                  src="/images/fiverr.png"
                  alt="fiverr"
                />
                Fiverr
              </a>
            </li>
          </ul>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden h-8 w-8 text-2xl text-white flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </Container>
    </header>
  );
};
export default Navbar;
