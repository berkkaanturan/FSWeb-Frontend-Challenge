import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero({ data }) {
  return (
    <section className="hero flex flex-col md:flex-row py-20 max-w-7xl md:mx-auto max-md:mx-8 justify-between max-md:pt-10">
      <div className="hero-left max-w-2xl ">
        <div className="flex items-center gap-3 mb-10 max-md:mb-5">
          <div className="h-px w-36 bg-indigo-700 max-md:w-20 dark:bg-purple-300"></div>
          <span className="text-xl font-inter font-medium leading-7 text-indigo-700 dark:text-purple-300 ">
            Berk Kaan Turan
          </span>
        </div>
        <h2 className="text-7xl leading-none font-bold mb-9 max-md:mb-5 text-gray-800 dark:text-[#AEBCCF] font-inter max-md:text-5xl">
          {data.title}
        </h2>
        <p className="mb-10 max-md:mb-5 leading-7 text-lg text-gray-500 dark:text-white font-inter max-w-xl">
          {data.description}
        </p>
        <div className="hero-buttons flex gap-2.5 mb-7 max-md:justify-evenly">
          <button className="bg-indigo-800 dark:bg-[#E1E1FF] text-white dark:text-gray-950 text-lg leading-7 font-medium px-6 py-2.5 rounded-md hover:bg-indigo-950  max-md:text-base max-md:hidden">
            {data.hireMe}
          </button>
          <a
            href="https://github.com/berkkaanturan"
            target="_blank"
            className="group flex items-center gap-2 text-indigo-800 dark:text-[#E1E1FF] text-lg leading-7 font-medium px-6 py-2.5 rounded-md border-indigo-800 border dark:border-[#E1E1FF] dark:hover:text-[#141414]  hover:bg-indigo-100 max-md:text-base "
          >
            <FaGithub className="w-6 h-6 dark:text-[#E1E1FF]  dark:group-hover:text-[#141414] " />
            {data.github}
          </a>
          <a
            href="https://www.linkedin.com/in/berkkaanturan/"
            target="_blank"
            className="group flex items-center gap-2 text-indigo-800 dark:text-[#E1E1FF] text-lg leading-7 font-medium px-6 py-2.5 rounded-md border-indigo-800 border dark:border-[#E1E1FF] hover:bg-indigo-100 dark:hover:text-[#141414] max-md:text-base "
          >
            <FaLinkedin className="w-6 h- dark:text-[#E1E1FF]  dark:group-hover:text-[#141414]" />
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
