import Home from "../components/Home";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

function App() {
  return (
    <>
      <header
        id="navbar"
        className="fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-center"
      >
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
