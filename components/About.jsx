import engineerImage from "../src/assets/elementaryPic.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-screen justify-center bg-white pt-20"
    >
      <div className="flex w-full max-w-screen-xl flex-col px-8 py-4 lg:justify-center">
        <h2 className="mb-12 text-center text-5xl font-bold text-black">
          About Me
        </h2>
        <div className="flex flex-col items-center justify-evenly lg:flex-row">
          <div className="flex max-w-lg flex-col items-center font-semibold">
            <p className="mb-4 text-center text-lg text-black lg:text-left">
              I recently graduated first in class from{" "}
              <span className="font-bold text-cardinal">
                Stevens Institute of Technology
              </span>{" "}
              with a Computer Engineering major as well as a Computer Science
              minor.
            </p>
            <p className="mb-4 text-center text-lg text-black lg:text-left">
              I&apos;ve harbored a lifelong passion for engineering. To
              illustrate, consider my fifth-grade yearbook photo, where I
              declared my future ambition: &quot;Become an engineer.&quot; And
              this was a time when being a nerd wasn&apos;t exactly trendy.
            </p>
            <p className="mb-4 text-center text-lg text-black lg:text-left">
              The word{" "}
              <span className="font-bold text-cardinal">architect</span> holds a
              special place in my heart as it encapsulates my continuous quest
              to enhance my understanding of the universe through hands-on
              exploration. I believe we are all architects of our own passions
              and experiences.
            </p>
          </div>
          <div id="hero-container">
            <img
              src={engineerImage}
              alt="my profile"
              className="h-64 rounded-3xl shadow-md shadow-black sm:h-80 md:h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
