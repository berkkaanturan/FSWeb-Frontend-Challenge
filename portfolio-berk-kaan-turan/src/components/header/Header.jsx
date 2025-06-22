export default function Header({ data }) {
  return (
    <header>
      <div className="flex flex-row items-center justify-center md:justify-between max-w-7xl mx-auto max-md:mx-8 gap-4 md:gap-0">
        <span className="bg-indigo-500 rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-bold font-inter">
          B
        </span>
        <nav className="flex justify-center w-auto">
          <ul className="flex gap-4 md:gap-16 text-lg font-medium items-center">
            <li>
              <a
                href="#skills"
                className="text-lg font-inter font-medium text-gray-500 leading-7"
              >
                {data.nav[0]}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-lg font-inter font-medium text-gray-500 leading-7"
              >
                {data.nav[1]}
              </a>
            </li>
            <li>
              <a
                href="#hireMe"
                className="rounded-md py-3 px-6 text-lg font-inter font-medium text-indigo-800 leading-7 border border-indigo-800"
              >
                {data.nav[2]}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
