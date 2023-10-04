export default function ProjectCard({
  source,
  name,
  desc,
  github,
  demo,
  isVideo,
}) {
  return (
    <div className="flex h-full max-w-md flex-col overflow-auto rounded-xl border border-none shadow-md shadow-black duration-200 hover:scale-105">
      <div>
        {isVideo ? (
          <video src={source} controls className="h-64 w-full object-cover" />
        ) : (
          <img src={source} className="h-64 w-full object-cover" />
        )}
      </div>
      <div className="flex-grow bg-white p-4">
        <h3 className="mb-4 text-3xl font-semibold text-black">{name}</h3>
        <p>{desc}</p>
      </div>
      <div className="bg-gray flex text-black">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="flex flex-grow items-center justify-center border-r-2 border-t-2 border-black py-4 hover:cursor-pointer hover:bg-slate-400"
        >
          Code
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          className="flex flex-grow items-center justify-center border-t-2 border-black py-4 hover:cursor-pointer hover:bg-slate-400"
        >
          Demo
        </a>
      </div>
    </div>
  );
}
