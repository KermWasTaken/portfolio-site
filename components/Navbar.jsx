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
    <nav className="flex h-full w-full max-w-screen-xl items-center justify-between bg-black px-8">
      <div>
        <h2 className="text-5xl font-bold text-cardinal">KERM</h2>
      </div>
      <ul className="hidden lg:flex">
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className={`${
                id === active ? `scale-105 text-cardinal` : `text-white`
              } ml-12 text-lg font-medium duration-200 hover:scale-105 hover:text-cardinal`}
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
        className="z-10 cursor-pointer pr-4 text-white lg:hidden"
      >
        {nav ? <FaRectangleXmark size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="absolute left-0 top-20 flex w-full flex-col items-center justify-center rounded-bl-3xl rounded-br-3xl bg-black text-white">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className={`${
                  id === active ? `scale-105 text-cardinal` : `text-white`
                } cursor-pointer px-4 py-6 text-4xl capitalize duration-200 hover:scale-105 hover:text-cardinal`}
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
