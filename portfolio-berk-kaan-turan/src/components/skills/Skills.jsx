export default function Skills({ data }) {
  return (
    <section id="skills">
      <div className="container mb-10">
        <div className="skills-content">
          <h2 className="text-5xl leading-none font-semibold font-inter">
            {data.title}
          </h2>
          <div className="flex flex-col md:flex-row justify-between mt-10 ">
            {data.list.map((skill, i) => (
              <div key={i} className="max-w-sm">
                <h3 className="font-inter text-indigo-700 text-3xl font-[500] mb-5">
                  {skill.name}
                </h3>
                <p className="text-gray-500 text-xs leading-5 font-normal font-inter">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="border-1 border-indigo-800 border-opacity-30 mb-10" />
    </section>
  );
}
