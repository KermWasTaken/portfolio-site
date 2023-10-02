export default function ProjectCard({
  source,
  name,
  desc,
  github,
  demo,
  isVideo,
}) {
  return (
    <div className="flex h-full max-w-md flex-col overflow-auto rounded-xl border">
      <div>
        {isVideo ? (
          <video src={source} controls className="h-64 w-full object-cover" />
        ) : (
          <img src={source} className="h-64 w-full object-cover" />
        )}
      </div>
      <div className="flex-grow bg-gray-400 p-4">
        <h3 className="mb-4 text-3xl font-semibold text-white">{name}</h3>
        <p>{desc}</p>
      </div>
      <div className="flex bg-slate-800 text-white">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="flex flex-grow items-center justify-center py-4 hover:cursor-pointer hover:bg-slate-400"
        >
          Code
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          className="flex flex-grow items-center justify-center py-4 hover:cursor-pointer hover:bg-slate-400"
        >
          Demo
        </a>
      </div>
    </div>
  );
}
