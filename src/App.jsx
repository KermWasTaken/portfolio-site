import Home from "../components/Home";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Portfolio from "../components/Portfolio";

function App() {
  return (
    <>
      <header
        id="navbar"
        className="fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-center border-b-2"
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
