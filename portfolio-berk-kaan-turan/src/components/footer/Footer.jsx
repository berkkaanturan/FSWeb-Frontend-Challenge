export default function Footer({ data }) {
  return (
    <footer>
      <div className="bg-gray-50 mt-20 h-auto max-md:mt-10">
        <div className="footer-content max-w-7xl mx-auto flex flex-col max-md:mx-8  ">
          <div>
            <p className="font-inter max-md:text-center text-gray-950 font-semibold text-5xl mt-20 max-w-lg leading-tight">
              {data.cta}
            </p>
          </div>
          <div className="flex flex-row max-md:flex-col  justify-between mt-20 mb-24">
            <span className="flex max-md:justify-center">
              <p className="mr-2">👉</p>
              <p className="font-inter underline font-medium text-xl text-red-800">
                {data.email}
              </p>
            </span>
            <div className="flex flex-row gap-10 font-inter font-medium text-lg leading-normal max-md:justify-center max-md:mt-16">
              <a>{data.blog}</a>
              <a
                href="https://github.com/berkkaanturan"
                target="_blank"
                className="text-green-600"
              >
                {data.github}
              </a>
              <a
                href="https://www.linkedin.com/in/berkkaanturan/"
                target="_blank"
                className="text-blue-700"
              >
                {data.linkedin}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
