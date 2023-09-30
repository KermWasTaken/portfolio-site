import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  const projects = [
    {
      source: "../src/assets/costcodle.png",
      name: "COSTCODLE",
      desc: "A wordle-esque daily guessing game for Costco food products!",
      github: "https://github.com/KermWasTaken/costcodle",
      demo: "https://costcodle.com",
      isVideo: false,
    },
    {
      source: "../src/assets/pokekerm.png",
      name: "PokeKerm",
      desc: "Continuted from a mock React interview on youtube. They ran out of time so I took up the challenge of finishing the project to a working end result.",
      github: "https://github.com/KermWasTaken/poke-kerm",
      demo: "https://costcodle.com",
      isVideo: false,
    },
    {
      source: "../src/assets/bubbl.png",
      name: "BUBBL Senior Design Project",
      desc: "Continuted from a mock React interview on youtube. They ran out of time so I took up the challenge of finishing the project to a working end result.",
      github: "https://github.com/rhyslee211/BubblAndroid",
      demo: "https://sites.google.com/stevens.edu/bubbl/home",
      isVideo: false,
    },
    {
      source: "../src/assets/ambience.png",
      name: "Ambience",
      desc: "Mix your spotify playlists with ambient noises to create diverse soundscapes for any occasion",
      github: "https://github.com/KermWasTaken/ambient-spotify",
      demo: "https://sites.google.com/stevens.edu/bubbl/home",
      isVideo: false,
    },
  ];

  return (
    <section
      id="portfolio"
      className="bg-gradient-to-b from-black to-outer-space pt-20 min-h-screen flex justify-center"
    >
      <div className="w-full max-w-screen-xl py-4 px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project, index) => {
            return (
              <div key={index + 1} className="flex justify-center items-center">
                <ProjectCard
                  source={project.source}
                  name={project.name}
                  desc={project.desc}
                  github={project.github}
                  demo={project.demo}
                  isVideo={project.isVideo}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
