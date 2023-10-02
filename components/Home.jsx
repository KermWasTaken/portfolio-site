import HeroImage from "../src/assets/HeroImagev2.jpeg";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";

export default function Home() {
  return (
    <section
      id="home"
      className="flex min-h-screen justify-center bg-gradient-to-b from-black to-outer-space pt-20"
    >
      <div className="w-full max-w-screen-xl px-8 py-4">
        <div className="flex h-full flex-col items-center justify-evenly">
          <div id="hero-container">
            <img
              src={HeroImage}
              alt="my profile"
              className="h-64 rounded-full shadow-md shadow-black"
            />
          </div>
          <div className="flex flex-col items-center justify-start text-center">
            <h1 className="mb-2 text-5xl font-bold text-moonstone">
              Zak Kermitz
            </h1>
            <h2 className="mb-4 text-3xl text-white">Software Engineer</h2>
          </div>
          <div className="flex items-center justify-center">
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
