import HeroImage from "../src/assets/HeroImage.jpg";

export default function Home() {
  return (
    <section
      id="home"
      className="bg-outer-space pt-24 min-h-screen w-full flex justify-center"
    >
      <div className="h-full xl:max-w-screen-xl flex justify-between">
        <div>
          <h1 className="text-9xl font-bold text-moonstone">Zak Kermitz</h1>
          <h2 className="mt-8 text-5xl text-white mb-5">Software Engineer</h2>
          <p className="mt-8 max-w-lg text-white text-xl">
            I recently graduated first in class from{" "}
            <span className="text-cardinal font-medium">
              Stevens Institute of Technology
            </span>{" "}
            with a Computer Engineering major as well as Computer Science minor.
            I&apos;m currently pursuing opportunities in Software Engineering.
            🖥️
          </p>
        </div>
        <div>
          <img src={HeroImage} alt="my profile" className="rounded-2xl h-96" />
        </div>
      </div>
    </section>
  );
}
