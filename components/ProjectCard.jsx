export default function ProjectCard({
  source,
  name,
  desc,
  github,
  demo,
  isVideo,
}) {
  return (
    <div className="max-w-md border h-full rounded-xl overflow-auto flex flex-col">
      <div>
        {isVideo ? (
          <video src={source} controls className="object-cover w-full h-64" />
        ) : (
          <img src={source} className="object-cover w-full h-64" />
        )}
      </div>
      <div className="p-4 bg-gray-400 flex-grow">
        <h3 className="text-white font-semibold text-3xl mb-4">{name}</h3>
        <p>{desc}</p>
      </div>
      <div className="flex bg-slate-800 text-white">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="flex-grow flex justify-center items-center py-4 hover:cursor-pointer hover:bg-slate-400"
        >
          Code
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          className="flex-grow flex justify-center items-center py-4 hover:cursor-pointer hover:bg-slate-400"
        >
          Demo
        </a>
      </div>
    </div>
  );
}
