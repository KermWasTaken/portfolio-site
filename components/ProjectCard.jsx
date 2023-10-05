import PropTypes from "prop-types";

ProjectCard.propTypes = {
  source: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
  icons: PropTypes.arrayOf(PropTypes.object),
};

export default function ProjectCard({
  source,
  name,
  desc,
  github,
  demo,
  icons,
}) {
  return (
    <div className="flex h-full max-w-md flex-col overflow-auto rounded-xl border border-none shadow-md shadow-black duration-200 hover:scale-105">
      <div>
        <img src={source} className="h-64 w-full object-cover" />
      </div>
      <div className="flex-grow bg-white p-4">
        <div className="flex flex-wrap items-center justify-between">
          <h3 className="mb-4 text-3xl font-semibold text-black">{name}</h3>
          <div className="mb-4 flex">
            {icons.map((reactIcon) => {
              return reactIcon;
            })}
          </div>
        </div>
        <p className="text-xl font-medium">{desc}</p>
      </div>
      <div className="bg-gray flex text-xl font-medium text-black">
        {demo === "" ? (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex flex-grow items-center justify-center border-t-2 border-black py-4 hover:cursor-pointer hover:bg-gray-200"
          >
            Code
          </a>
        ) : (
          <>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="flex flex-grow items-center justify-center border-r-2 border-t-2 border-black py-4 hover:cursor-pointer hover:bg-gray-200"
            >
              Code
            </a>
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="flex flex-grow items-center justify-center border-t-2 border-black py-4 hover:cursor-pointer hover:bg-gray-200"
            >
              Demo
            </a>
          </>
        )}
      </div>
    </div>
  );
}
