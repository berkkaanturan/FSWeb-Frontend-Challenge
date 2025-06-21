export default function Projects({data}) {
  return (
    <section id="projects">
      <div className="container">
        <div className="projects-content">
          <h2>{data.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {data.list.map((project, i) => (
              <div key={i} className="p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800 flex flex-col justify-between">
                {project.image && (
                  <img src={project.image} alt={project.name} className="w-full object-contain mb-3 bg-white" />
                )}
                <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-2 mt-auto">
                  <a href="#" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">{project.github}</a>
                  <a href="#" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">{project.view}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
