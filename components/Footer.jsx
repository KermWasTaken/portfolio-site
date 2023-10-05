import logo from "../src/assets/Kerm-Logo.png";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="flex h-full w-full max-w-screen-xl flex-col items-start justify-between bg-white sm:flex-row sm:items-center">
      <div className="my-4 flex items-center px-4">
        <a
          href="#home"
          className="group flex-shrink-0 transition duration-300 hover:cursor-pointer"
        >
          <img src={logo} alt="Portfolio logo" className="h-14 rounded-lg" />
          <span className="mt-0.5 block h-1 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full"></span>
        </a>
        <div>
          <p className="ml-4 text-xl">
            Thank you for taking the time to explore my portfolio site.
          </p>
        </div>
      </div>
      <div className="my-4 px-4">
        <div className="flex flex-col justify-center sm:items-end sm:justify-end">
          <div className="flex items-center sm:justify-end">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.github.com/KermWasTaken"
              className="duration-200 hover:scale-105 hover:cursor-pointer hover:opacity-50"
            >
              <AiFillGithub size={40} className="text-black" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/zacharykermitz/"
              className="duration-200 hover:scale-105 hover:cursor-pointer hover:opacity-50"
            >
              <AiOutlineLinkedin size={40} className="text-black" />
            </a>
          </div>
          <p className="whitespace-nowrap">
            &copy; 2023 Zachary Kermitz (Kerm).
          </p>
          <p className="whitespace-nowrap">
            Built with React and Tailwind CSS.
          </p>
          <p className="whitespace-nowrap">Deployed by Netlify.</p>
        </div>
      </div>
    </div>
  );
}
