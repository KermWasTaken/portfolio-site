import Navbar from "../components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="about" className="pt-20 min-h-screen px-16">
          <h1 className="text-5xl text-emerald-500">Zak Kermitz</h1>
          <h2 className="text-2xl text-slate-500 mb-5">Software Engineer</h2>
          <p className="text-center max-w-lg text-gray-500">
            I recently graduated first in class from Stevens Institute of
            Technology with a Computer Engineering major as well as Computer
            Science minor. I&apos;m currently pursuing opportunities in Software
            Engineering. 🖥️
          </p>
        </section>
        <section
          id="portfolio"
          className="pt-20 min-h-screen flex justify-center items-center"
        >
          <p>Test2</p>
        </section>
      </main>
    </>
  );
}

export default App;
