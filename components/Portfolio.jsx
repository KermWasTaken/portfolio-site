import ProjectCard from "./ProjectCard";
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoBootstrap,
  BiLogoJava,
  BiLogoTailwindCss,
  BiLogoAndroid,
} from "react-icons/bi";

import { TbBrandNextjs } from "react-icons/tb";

export default function Portfolio() {
  const projects = [
    {
      source: "../src/assets/costcodle.png",
      name: "COSTCODLE",
      desc: "A wordle-esque daily guessing game for Costco food products!",
      github: "https://github.com/KermWasTaken/costcodle",
      demo: "https://costcodle.com",
      isVideo: false,
      icons: [
        <BiLogoHtml5 key={1} size={50} className="text-html" />,
        <BiLogoCss3 key={2} size={50} className="text-css" />,
        <BiLogoJavascript key={3} size={50} className="text-javascript" />,
      ],
    },
    {
      source: "../src/assets/pokekerm.png",
      name: "PokeKerm",
      desc: "Continuted from a mock React interview on youtube. They ran out of time so I took up the challenge of finishing the project to a working end result.",
      github: "https://github.com/KermWasTaken/poke-kerm",
      demo: "https://costcodle.com",
      isVideo: false,
      icons: [
        <BiLogoReact key={1} size={50} className="text-react" />,
        <BiLogoBootstrap key={2} size={50} className="text-bootstrap" />,
      ],
    },
    {
      source: "../src/assets/bubbl.png",
      name: "BUBBL Senior Project",
      desc: "Continuted from a mock React interview on youtube. They ran out of time so I took up the challenge of finishing the project to a working end result.",
      github: "https://github.com/rhyslee211/BubblAndroid",
      demo: "https://sites.google.com/stevens.edu/bubbl/home",
      isVideo: false,
      icons: [
        <BiLogoJava key={1} size={50} className="text-java" />,
        <BiLogoAndroid key={1} size={50} className="text-android" />,
      ],
    },

    {
      source: "../src/assets/portfolioSite.png",
      name: "Portfolio Site",
      desc: "The site you are currently looking at",
      github: "https://github.com/KermWasTaken/portfolio-site",
      demo: "https://sites.google.com/stevens.edu/bubbl/home",
      isVideo: false,
      icons: [
        <BiLogoReact key={1} size={50} className="text-react" />,
        <BiLogoTailwindCss key={2} size={50} className="text-tailwind" />,
      ],
    },

    {
      source: "../src/assets/checkers.png",
      name: "Java Checkers",
      desc: "Final project for my Java programming graduate-level course. My focus was on creating the movement algorithm including showing all possible moves when selecting a piece",
      github: "https://github.com/KermWasTaken/JavaCheckers",
      demo: "",
      isVideo: false,
      icons: [<BiLogoJava key={1} size={50} className="text-java" />],
    },
    {
      source: "../src/assets/ambience.png",
      name: "Ambience - In Progress",
      desc: "Mix your spotify playlists with ambient noises to create diverse soundscapes for any occasion",
      github: "https://github.com/KermWasTaken/ambient-spotify",
      demo: "",
      isVideo: false,
      icons: [<TbBrandNextjs key={1} size={50} className="text-black" />],
    },
  ];

  return (
    <section
      id="portfolio"
      className="flex min-h-screen justify-center bg-white pt-20"
    >
      <div className="w-full max-w-screen-xl px-8 py-4">
        <h2 className="mb-12 text-center text-7xl font-bold text-black [text-shadow:_2px_2px_0_rgb(0_0_0_/20%)]">
          Portfolio
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project, index) => {
            return (
              <div key={index + 1} className="flex items-center justify-center">
                <ProjectCard
                  source={project.source}
                  name={project.name}
                  desc={project.desc}
                  github={project.github}
                  demo={project.demo}
                  isVideo={project.isVideo}
                  icons={project.icons}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
