export default function Switches({ data }) {
  const { setDark, setLang, dark, lang } = data;

  return (
    <div className="flex justify-end items-center gap-4 p-4">
      <button
        onClick={() => setDark((prev) => !prev)}
        className="text-grey-700 font-semibold  py-2 px-4"
      >
        {dark ? 'Light Mode' : 'Dark Mode'}
      </button>
      <button
        onClick={() => setLang((prev) => (prev === 'en' ? 'tr' : 'en'))}
        className="text-blue-700 font-semibold  py-2 px-4"
      >
        {lang === 'en' ? 'Türkçe' : 'English'}
      </button>
    </div>
  );
}