import Home from "../components/Home";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Portfolio from "../components/Portfolio";

function App() {
  return (
    <>
      <header className="flex justify-center items-center h-28 w-full xl:max-w-screen-xl fixed py-4 px-24">
        <Navbar />
      </header>
      <main>
        <Home />
        <About />
        <Portfolio />
      </main>
    </>
  );
}

export default App;
