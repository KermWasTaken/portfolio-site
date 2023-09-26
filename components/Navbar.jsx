export default function Navbar() {
  return (
    <nav className="bg-cyan-950 flex items-center justify-between h-20 w-full px-8 fixed">
      <div>
        <h2 className="text-5xl">Kerm</h2>
      </div>
      <ul className="flex justify-center">
        <li className="ml-12 text-slate-400">
          <a href="#about">About</a>
        </li>
        <li className="ml-12 text-slate-400">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="ml-12 text-slate-400">
          <a href="#about">About</a>
        </li>
        <li className="ml-12 text-slate-400">
          <a href="#portfolio">Portfolio</a>
        </li>
      </ul>
    </nav>
  );
}
