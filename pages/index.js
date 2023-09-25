import { Inter } from "next/font/google";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>My site</title>
      </Head>

      <body className="bg-cyan-950 relative">
        <header className="fixed top-0 left-0 right-0">
          <nav className="bg-teal-800 flex items-center justify-between h-20 px-8">
            <h2>Kerm</h2>
            <ul className="flex justify-center">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section
            id="about"
            className="pt-20 min-h-screen flex flex-col justify-center items-center"
          >
            <h1 className="text-5xl text-emerald-500">Zak Kermitz</h1>
            <h2 className="text-2xl text-slate-500 mb-5">Software Engineer</h2>
            <p className="text-center max-w-lg text-gray-500">
              I recently graduated first in class from Stevens Institute of
              Technology with a Computer Engineering major as well as Computer
              Science minor. I'm currently pursuing opportunities in Software
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
      </body>
    </>
  );
}
