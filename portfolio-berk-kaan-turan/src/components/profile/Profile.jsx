export default function Profile({ data }) {
  return (
    <section id="profile">
      <h2 className="text-5xl leading-none font-semibold font-inter mb-10">
        {data.title}
      </h2>
      <div className="container flex flex-col gap-20 md:flex-row mb-10">
        {/* Sol: Profil Bilgileri */}
        <div>
          <h3 className="font-inter text-indigo-700 text-3xl font-[500] mb-5 leading-7">
            {data.title}
          </h3>
          <div className="flex gap-12">
            <ul className="text-gray-950 font-inter font-[600] text-lg leading-loose">
              <li>{data.labels.birth}</li>
              <li>{data.labels.city}</li>
              <li>{data.labels.education}</li>
              <li>{data.labels.role}</li>
            </ul>
            <ul className="text-gray-950 font-inter font-normal text-lg leading-loose">
              <li>{data.profile.birth}</li>
              <li>{data.profile.city}</li>
              <li>{data.profile.education}</li>
              <li>{data.profile.role}</li>
            </ul>
          </div>
        </div>
        {/* Sağ: Hakkımda */}
        <div className="max-w-lg">
          <h3 className="font-inter text-indigo-700 text-3xl font-[500] mb-5 leading-7">
            {data.aboutMe.title}
          </h3>
          <p className="text-gray-500 font-inter font-normal leading-normal text-lg">
            {data.aboutMe.desc}
          </p>
        </div>
      </div>
      <hr className="border-1 border-indigo-800 border-opacity-30 mb-10" />
    </section>
  );
}
