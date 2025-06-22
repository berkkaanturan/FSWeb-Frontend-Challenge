export default function Switches({ data, switches }) {
  const { setDark, setLang, dark, lang } = data;

  return (
    <div className="flex justify-end max-md:justify-center items-center gap-4 py-8 max-md:pt-8 max-md:py-8 max-w-7xl mx-auto">
      <label class="inline-flex items-center cursor-pointer">
        <input
          onClick={() => setDark((prev) => !prev)}
          type="checkbox"
          value=""
          class="sr-only peer"
        />
        <div class="relative w-11 h-6 bg-gray-200  rounded-full dark:bg-gray-950 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600  dark:peer-checked:bg-indigo-800"></div>
        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 ">
          {dark ? switches.lightMode : switches.darkMode}
        </span>
      </label>

      <span className="text-gray-500 font-semibold">|</span>
      <button
        onClick={() => setLang((prev) => (prev === "en" ? "tr" : "en"))}
        className="text-indigo-800 font-semibold"
      >
        {lang === "en" ? (
          <span>
            <span className="text-indigo-800 font-semibold">TÜRKÇE</span>
            <span className="text-gray-500 font-semibold">'YE GEÇ</span>
          </span>
        ) : (
          "English"
        )}
      </button>
    </div>
  );
}
