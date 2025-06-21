export default function Skills({data}) {
  return (
    <section id="skills">
      <div className="container">
        <div className="skills-content">
          <h2>{data.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {data.list.map((skill, i) => (
              <div key={i} className="p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800">
                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
