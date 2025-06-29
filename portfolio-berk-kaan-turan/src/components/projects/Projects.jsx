export default function Projects({ data }) {
  return (
    <section id="projects">
      <div className="container">
        <div className="projects-content max-md:mx-8">
          <h2 className="text-5xl leading-none font-semibold font-inter mb-10 dark:text-[#AEBCCF]">
            {data.title}
          </h2>
          <div className="flex flex-col md:flex-row max-md:items-center justify-between">
            {data.list.map((project, i) => (
              <div key={i} className="max-w-[300px] max-md:mb-14">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-[300px] h-[180px] object-cover"
                />
                <h3 className="font-inter text-indigo-700 dark:text-[#CFCBFF] text-3xl font-[500] mt-5 leading-7">
                  {project.name}
                </h3>
                <p className="font-inter leading-tight font-normal text-sm text-gray-500 dark:text-white mt-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-indigo-800 dark:text-[#8F88FF] font-inter font-medium text-sm px-4 py-1 rounded border-indigo-800 dark:border-[#8F88FF] dark:bg-[#383838] border rounded-s mt-3"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between underline">
                  <a
                    href="#"
                    className="text-indigo-800 dark:text-[#E1E1FF] font-inter font-medium leading-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.github}
                  </a>
                  <a
                    href="#"
                    className="text-indigo-800 dark:text-[#E1E1FF]  font-inter font-medium leading-4"
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
