import engineerImage from "../src/assets/elementaryPic.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-outer-space to-black pt-20 min-h-screen flex justify-center"
    >
      <div className="w-full max-w-screen-xl py-4 px-8">
        <h2 className="text-5xl mb-12 font-medium text-moonstone">About me</h2>
        <p className="text-white text-lg mb-4 text-center">
          I recently graduated first in class from{" "}
          <span className="text-cardinal font-medium">
            Stevens Institute of Technology
          </span>{" "}
          with a Computer Engineering major as well as Computer Science minor.
        </p>
        <p className="text-white text-lg">
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
