export default function Profile({ data }) {
  return (
    <section id="profile">
      <h2>{data.title}</h2>
      <div className="container flex flex-col md:flex-row gap-8">
        {/* Sol: Profil Bilgileri */}
        <div className="flex-1">
          <h3>{data.title}</h3>
          <ul>
            <li><strong>{data.labels.birth}:</strong> {data.profile.birth}</li>
            <li><strong>{data.labels.city}:</strong> {data.profile.city}</li>
            <li><strong>{data.labels.education}:</strong> {data.profile.education}</li>
            <li><strong>{data.labels.role}:</strong> {data.profile.role}</li>
          </ul>
        </div>
        {/* Sağ: Hakkımda */}
        <div className="flex-1">
          <h3>{data.aboutMe.title}</h3>
          <p>{data.aboutMe.desc}</p>
        </div>
      </div>
    </section>
  );
}