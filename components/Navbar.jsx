import { useEffect, useState } from "react";
import { FaBars, FaRectangleXmark } from "react-icons/fa6";

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
    {
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "Contact",
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
    <nav className="bg-transparent flex items-center justify-between max-w-screen-xl h-full w-full px-8 opacity-90">
      <div>
        <h2 className="text-5xl font-bold text-cardinal">KERM</h2>
      </div>
      <ul className="hidden lg:flex">
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className={`${
                id === active ? `text-cardinal scale-105` : `text-white`
              } ml-12 text-lg font-medium hover:scale-105 hover:text-cardinal duration-200`}
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
        className="cursor-pointer pr-4 z-10 text-white lg:hidden"
      >
        {nav ? <FaRectangleXmark size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-20 left-0 w-full bg-gradient-to-b from-moonstone to-black text-white rounded-bl-3xl rounded-br-3xl">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className={`${
                  id === active ? `text-cardinal scale-105` : `text-white`
                } px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 hover:text-cardinal duration-200`}
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
