export default function Skills({ data }) {
  return (
    <section id="skills" className="max-md:mx-8">
      <div className="container mb-10">
        <div className="skills-content">
          <h2 className="text-5xl leading-none font-semibold font-inter dark:text-[#AEBCCF]">
            {data.title}
          </h2>
          <div className="flex flex-col md:flex-row justify-between mt-10 max-md:mt-0 ">
            {data.list.map((skill, i) => (
              <div key={i} className="max-w-sm">
                <h3 className="font-inter text-indigo-700 dark:text-[#B7AAFF] text-3xl font-[500] mb-5 max-md:mb-3 max-md:mt-10">
                  {skill.name}
                </h3>
                <p className="text-gray-500 dark:text-white text-xs leading-5 font-normal font-inter">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="border-1 border-indigo-800 dark:border-[#BAB2E7] border-opacity-30 mb-10" />
    </section>
  );
}
