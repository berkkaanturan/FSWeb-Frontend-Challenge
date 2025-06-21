export default function Footer({data}) {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div>
          <p>{data.cta}</p>
          </div>
          <div>
          <p>{data.email}</p>
          <div>
            <p>{data.blog}</p>
            <p>{data.github}</p>
            <p>{data.linkedin}</p>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}