import { useState } from "react";
import { FaBars, FaRectangleXmark } from "react-icons/fa6";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState(1);

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

  return (
    <nav className="bg-moonstone flex items-center justify-between h-full w-full px-8 shadow-black shadow rounded-full opacity-90">
      <div>
        <h2 className="text-5xl font-bold text-cardinal">KERM</h2>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className={`${
                id === active ? `text-cardinal` : `text-white`
              } ml-12 text-lg font-medium hover:scale-105 hover:text-cardinal duration-200`}
            >
              <a onClick={() => setActive(id)} href={`#${link.toLowerCase()}`}>
                {link}
              </a>
            </li>
          );
        })}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden"
      >
        {nav ? <FaRectangleXmark size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-20 left-0 w-full bg-gradient-to-b from-outer-space to-black text-white rounded-3xl transition-opacity duration-300 ease-in-out opacity-100 transform scale-100">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 hover:text-cardinal duration-200"
              >
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
