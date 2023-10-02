import engineerImage from "../src/assets/elementaryPic.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-screen justify-center bg-gradient-to-b from-outer-space to-black pt-20"
    >
      <div className="w-full max-w-screen-xl px-8 py-4">
        <h2 className="mb-12 text-5xl font-medium text-moonstone">About me</h2>
        <p className="mb-4 text-center text-lg text-white">
          I recently graduated first in class from{" "}
          <span className="font-medium text-cardinal">
            Stevens Institute of Technology
          </span>{" "}
          with a Computer Engineering major as well as Computer Science minor.
        </p>
        <p className="text-lg text-white">
          My passion for developing goes all the way back to sixth grade when I
          joined ... I love the word tinkerer because I find that I love to
          explore things I come across in life and find out the mechanisms that
          make them work. The experience of learning more about the universe we
          are immersed in drives my passion for creativity and knowledge.
        </p>
        <div id="hero-container">
          <img
            src={engineerImage}
            alt="my profile"
            className="h-64 rounded-3xl shadow-md shadow-black"
          />
        </div>
      </div>
    </section>
  );
}
