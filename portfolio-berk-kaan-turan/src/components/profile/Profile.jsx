export default function Profile({ data }) {
  return (
    <section id="profile" className="max-md:mx-8">
      <h2 className="text-5xl leading-none font-semibold font-inter mb-10 dark:text-[#AEBCCF]">
        {data.title}
      </h2>
      <div className="container flex flex-col gap-20 md:flex-row mb-10">
        {/* Sol: Profil Bilgileri */}
        <div>
          <h3 className="font-inter text-indigo-700 text-3xl font-[500] mb-5 leading-7 dark:text-[#B7AAFF]">
            {data.title}
          </h3>
          <div className="flex">
            <ul className="text-gray-950 dark:text-white flex flex-col font-inter font-[600] leading-loose ">
              <li className="w-40">{data.labels.birth}</li>
              <li>{data.labels.city}</li>
              <li>{data.labels.education}</li>
              <li>{data.labels.role}</li>
            </ul>
            <ul className="text-gray-950 dark:text-white flex flex-col font-inter font-normal a leading-loose">
              <li>{data.profile.birth}</li>
              <li>{data.profile.city}</li>
              <li>{data.profile.education}</li>
              <li>{data.profile.role}</li>
            </ul>
          </div>
        </div>
        {/* Sağ: Hakkımda */}
        <div className="max-w-lg">
          <h3 className="font-inter text-indigo-700 text-3xl font-[500] mb-5 leading-7 dark:text-[#B7AAFF]">
            {data.aboutMe.title}
          </h3>
          <p className="text-gray-500 dark:text-white font-inter font-normal leading-normal text-lg">
            {data.aboutMe.desc}
          </p>
        </div>
      </div>
      <hr className="border-1 border-indigo-800 dark:border-[#BAB2E7] border-opacity-30 mb-10" />
    </section>
  );
}
