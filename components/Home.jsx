import HeroImage from "../src/assets/HeroImagev2.jpeg";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";

export default function Home() {
  return (
    <section
      id="home"
      className="flex min-h-screen justify-center bg-white pt-20"
    >
      <div className="w-full max-w-screen-xl px-8 py-4">
        <div className="flex h-full flex-col items-center justify-evenly lg:flex-row">
          <div id="hero-container" className="lg:order-3">
            <img
              src={HeroImage}
              alt="my profile"
              className="h-64 rounded-full shadow-md shadow-black lg:h-96"
            />
          </div>
          <div>
            <div className="flex flex-col items-center justify-start text-center lg:order-1 lg:mb-10">
              <h1 className="mb-2 text-5xl font-bold text-black lg:text-7xl">
                Zak Kermitz
              </h1>
              <h2 className="mb-4 text-3xl font-bold text-cardinal lg:text-5xl">
                Software Engineer
              </h2>
            </div>
            <div className="flex items-center justify-evenly lg:order-2">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.github.com/KermWasTaken"
                className="duration-200 hover:scale-105 hover:cursor-pointer hover:opacity-50"
              >
                <AiFillGithub size={70} className="text-black" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/zacharykermitz/"
                className="duration-200 hover:scale-105 hover:cursor-pointer hover:opacity-50"
              >
                <AiOutlineLinkedin size={70} className="text-black" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
