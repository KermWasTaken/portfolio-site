import { useEffect, useState } from "react";
import { FaBars, FaRectangleXmark } from "react-icons/fa6";
import logo from "../src/assets/Kerm-Logo.png";

let timeoutId;

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState(1);
  const [isScrolling, setIsScrolling] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
  ];

  const handleScroll = () => {
    if (!isScrolling) {
      links.forEach((section) => {
        const elemId = section.link.toLowerCase();
        const sectionElem = document.getElementById(elemId);
        if (sectionElem) {
          const top = sectionElem.getBoundingClientRect().top;
          if (top <= 0) {
            setActive(section.id);
          }
        }
      });
    }
  };

  const handleActiveClick = (id) => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsScrolling(true);
    setActive(id);
    timeoutId = setTimeout(() => setIsScrolling(false), 1000);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav className="flex h-full w-full max-w-screen-xl items-center justify-between bg-white px-8">
      <div>
        <a
          href="#home"
          className="group hidden text-5xl font-bold text-cardinal transition duration-300 hover:cursor-pointer lg:block"
        >
          KERM
          <span className="block h-1 max-w-0 bg-cardinal transition-all duration-500 group-hover:max-w-full"></span>
        </a>
        <a
          href="#home"
          className="group transition duration-300 hover:cursor-pointer"
        >
          <img
            src={logo}
            alt="Portfolio logo"
            className="h-14 rounded-lg lg:hidden"
          />
          <span className="mt-0.5 block h-1 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full"></span>
        </a>
      </div>
      <div className="flex flex-grow items-center justify-end lg:flex-grow-0">
        <a
          target="_blank"
          rel="noreferrer"
          className="rounded-md border-2 border-cardinal px-8 py-2 font-medium duration-200 hover:bg-cardinal hover:text-white"
          href="src/assests/resume.pdf"
        >
          Resume
        </a>

        <ul className="hidden items-center lg:flex">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className={`${
                  id === active ? `scale-105 text-cardinal` : `text-black`
                } ml-12 text-lg font-bold duration-200 hover:scale-105 hover:text-cardinal`}
              >
                <a
                  onClick={() => handleActiveClick(id)}
                  href={`#${link.toLowerCase()}`}
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="z-10 ml-12 cursor-pointer pr-4 text-black lg:hidden"
        >
          {nav ? <FaRectangleXmark size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {nav && (
        <ul className="absolute left-0 top-20 flex w-full flex-col items-center justify-center rounded-bl-3xl rounded-br-3xl bg-white text-black">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className={`${
                  id === active ? `scale-105 text-cardinal` : `text-black`
                } cursor-pointer px-4 py-6 text-4xl font-semibold capitalize duration-200 hover:scale-105 hover:text-cardinal`}
              >
                <a
                  onClick={() => {
                    handleActiveClick(id);
                    setNav(!nav);
                  }}
                  href={`#${link.toLowerCase()}`}
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
