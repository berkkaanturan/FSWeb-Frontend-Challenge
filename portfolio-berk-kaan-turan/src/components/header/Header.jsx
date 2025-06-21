export default function Header({data}) {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <h1>{data.name}</h1>
          <nav>
            <ul>
              <li><a href="#skills">{data.nav[0]}</a></li>
              <li><a href="#profile">{data.nav[1]}</a></li>
              <li><a href="#projects">{data.nav[2]}</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}