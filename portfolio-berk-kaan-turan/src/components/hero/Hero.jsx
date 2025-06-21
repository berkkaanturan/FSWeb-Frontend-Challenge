export default function Hero({ data }) {
  return (
    <section className="hero flex flex-col md:flex-row items-center justify-between py-14 md:py-24 px-24 md:px-0">
      <div className="hero-left max-w-2xl md:mr-8">
        <h1>Berk Kaan Turan</h1>
        <h2 className="text-7xl leading-none font-bold md:text-7xl mb-5 text-gray-800 font-inter">{data.title}</h2>
        <p className="mb-10 leading-7 text-lg text-gray-500 font-normal">{data.description}</p>
        <div className="hero-buttons flex gap-2.5 mb-7">
          <button className="bg-indigo-800 text-white px-6 py-2.5 rounded-lg shadow hover:bg-blue-800 transition font-semibold text-base">{data.hireMe}</button>
          <a href="https://github.com/berkkaanturan" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 border-2 rounded-lg text-blue-700 border-blue-700 hover:bg-blue-50 transition font-semibold text-base">{data.github}</a>
          <a href="https://www.linkedin.com/in/berkkaanturan/" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 border-2 rounded-lg text-blue-700 border-blue-700 hover:bg-blue-50 transition font-semibold text-base">{data.linkedin}</a>
        </div>
      </div>
      <div className="hero-right flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
        <div className="bg-white rounded-3xl shadow-2xl p-3 md:p-6 flex items-center justify-center">
          <img src="/images/profilephoto.jpg" alt="profile" className="w-56 h-56 md:w-80 md:h-80 object-cover rounded-xl" />
        </div>
      </div>
    </section>
  );
}