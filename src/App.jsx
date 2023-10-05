import Home from "../components/Home";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

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
      <footer
        id="navbar"
        className="flex w-full items-center justify-center border-t-2"
      >
        <Footer />
      </footer>
    </>
  );
}

export default App;
