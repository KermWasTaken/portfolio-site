import Home from "../components/Home";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Portfolio from "../components/Portfolio";

function App() {
  return (
    <>
      <header
        id="navbar"
        className="flex justify-center items-center h-20 w-full fixed top-0 left-0"
      >
        <Navbar />
      </header>
      <main>
        <Home />
        <About />
        <Home />
      </main>
    </>
  );
}

export default App;
