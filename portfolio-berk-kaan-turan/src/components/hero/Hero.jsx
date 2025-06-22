import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero({ data }) {
  return (
    <section className="hero flex flex-col md:flex-row py-20 w-full max-w-7xl mx-auto justify-between">
      <div className="hero-left max-w-2xl">
        <div className="flex items-center gap-3 mb-10">
          <div className="flex-auto h-px bg-indigo-700"></div>
          <span className="text-xl font-inter font-medium leading-7 text-indigo-700 pr-96">
            Berk Kaan Turan
          </span>
        </div>
        <h2 className="text-7xl leading-none font-bold mb-9 text-gray-800 font-inter">
          {data.title}
        </h2>
        <p className="mb-10 leading-7 text-lg text-gray-500 font-inter max-w-xl">
          {data.description}
        </p>
        <div className="hero-buttons flex gap-2.5 mb-7">
          <button className="bg-indigo-800 text-white text-lg leading-7 font-medium px-6 py-2.5 rounded-md hover:bg-indigo-950 ">
            {data.hireMe}
          </button>
          <a
            href="https://github.com/berkkaanturan"
            target="_blank"
            className="flex items-center gap-2 text-indigo-800 text-lg leading-7 font-medium px-6 py-2.5 rounded-md border-indigo-800 border hover:bg-indigo-100 "
          >
            <FaGithub className="w-6 h-6" />
            {data.github}
          </a>
          <a
            href="https://www.linkedin.com/in/berkkaanturan/"
            target="_blank"
            className="flex items-center gap-2 text-indigo-800 text-lg leading-7 font-medium px-6 py-2.5 rounded-md border-indigo-800 border hover:bg-indigo-100 "
          >
            <FaLinkedin className="w-6 h-6" />
            {data.linkedin}
          </a>
        </div>
      </div>
      <img
        src="/images/profilephoto.jpg"
        alt="profile"
        className="h-[28rem] w-[40rem] object-cover rounded-2xl shadow-2xl flex"
      />
    </section>
  );
}
