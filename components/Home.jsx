import HeroImage from "../src/assets/HeroImagev2.jpeg";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";

export default function Home() {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-black to-outer-space pt-20 min-h-screen flex justify-center"
    >
      <div className="w-full max-w-screen-xl py-4 px-8">
        <div className="flex flex-col h-full items-center justify-evenly">
          <div id="hero-container">
            <img
              src={HeroImage}
              alt="my profile"
              className="h-64 rounded-full shadow-md shadow-black"
            />
          </div>
          <div className="flex flex-col justify-start items-center text-center">
            <h1 className="text-5xl font-bold text-moonstone mb-2">
              Zak Kermitz
            </h1>
            <h2 className="text-3xl text-white mb-4">Software Engineer</h2>
            <p className="max-w-lg text-white text-lg">
              I recently graduated first in class from{" "}
              <span className="text-cardinal font-medium">
                Stevens Institute of Technology
              </span>{" "}
              with a Computer Engineering major as well as Computer Science
              minor. I&apos;m currently pursuing opportunities in Software
              Engineering. 🖥️
            </p>
          </div>
          <div className="flex justify-center items-center">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.github.com/KermWasTaken"
              className="hover:cursor-pointer"
            >
              <AiFillGithub size={70} className="text-moonstone" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/zachary-kermitz-6419271ab/"
              className="hover:cursor-pointer"
            >
              <AiOutlineLinkedin size={70} className="text-moonstone" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
