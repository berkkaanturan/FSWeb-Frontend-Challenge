export default function Projects({ data }) {
  return (
    <section id="projects">
      <div className="container">
        <div className="projects-content">
          <h2 className="text-5xl leading-none font-semibold font-inter mb-10">
            {data.title}
          </h2>
          <div className="flex flex-col md:flex-row justify-between">
            {data.list.map((project, i) => (
              <div key={i} className="max-w-[300px]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-[300px] h-[180px] object-cover"
                />
                <h3 className="font-inter text-indigo-700 text-3xl font-[500] mt-5 leading-7">
                  {project.name}
                </h3>
                <p className="font-inter leading-tight font-normal text-sm text-gray-500 mt-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-indigo-800 font-inter font-medium text-sm px-4 py-1 rounded border-indigo-800 border rounded-s mt-3"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between underline">
                  <a
                    href="#"
                    className="text-indigo-800 font-inter font-medium leading-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.github}
                  </a>
                  <a
                    href="#"
                    className="text-indigo-800 font-inter font-medium leading-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.view}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
