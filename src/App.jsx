import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom fixed-top">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#about">Sobre mí</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Habilidades</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Proyectos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Bienvenidos a mi portafolio -❤-</h1>
            <p>Me especializo en diseño de interfaces y desarrollo frontend.</p>
          </div>
          <div className="circle-img">
            <img src="/perfil.jpeg" alt="Foto perfil" width="200" height="200" />
          </div>
        </div>
      </header>

      <section id="about" className="py-5">
        <div className="container text-center">
          <h2>Sobre mí</h2>
          <p className="text-left">
            Soy desarrolladora Frontend con una pasión por el diseño UX/UI. Mi enfoque es crear interfaces intuitivas y atractivas que brinden una experiencia fluida a los usuarios.
          </p>

          <a
            href="/CV-Valentina-Araya.pdf"
            role="button"
            className="btn"
            download="Valentina_CV"
          >
            <i className="fas fa-arrow-down" aria-label="Descargar CV"></i> Descarga mi CV
          </a>
        </div>
      </section>

      <section id="skills" className="py-5 bg-light">
        <div className="container text-center">
          <h2>Habilidades</h2>
          <div className="skills-list">
            <div className="skill-item">
              <i className="fab fa-html5" aria-label="HTML"></i>
              <span>HTML</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-css3-alt" aria-label="CSS"></i>
              <span>CSS</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-bootstrap" aria-label="Bootstrap"></i>
              <span>Bootstrap</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-figma" aria-label="Figma"></i>
              <span>Figma</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-github" aria-label="GitHub"></i>
              <span>GitHub</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-language" aria-label="Inglés"></i>
              <span>Inglés</span>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-5">
        <div className="container text-center">
          <h2>Proyectos</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img src="/project1.png" className="card-img-top" alt="Proyecto 1" width="300" height="200" loading="lazy" />
                <div className="card-body">
                  <h3 className="card-title">Rediseño Digitala</h3>
                  <a href="https://pirovalen.github.io/Digitala/" className="btn">Ver proyecto</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img src="/project2.png" className="card-img-top" alt="Proyecto 2" width="300" height="200" loading="lazy" />
                <div className="card-body">
                  <h3 className="card-title">Examen UX/UI</h3>
                  <a href="https://www.figma.com/slides/h7QJGuiMT4NtPzXdlRP3ck/Proyecto-Final?t=vyVhPhcdk11KCcny-0" className="btn">Ver proyecto</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img src="/project3.png" className="card-img-top" alt="Proyecto 3" width="300" height="200" loading="lazy" />
                <div className="card-body">
                  <h3 className="card-title">Prototipo en Alta Somos Nativos</h3>
                  <a href="https://www.figma.com/proto/3CjIqQtK1pCePJs9ow8nC4/Landing-Page?node-id=333-863&node-type=canvas&t=cyRqaTsOMayOS8X4-0&scaling=scale-down&content-scaling=fixed&page-id=333%3A543&starting-point-node-id=333%3A863" className="btn">Ver proyecto</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="py-5">
        <div className="container text-center">
          <h2>Contáctame en:</h2>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/valentina-araya/" target="_blank" aria-label="LinkedIn de Valentina Araya">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/pirovalen" target="_blank" aria-label="GitHub de Valentina Araya">
              <i className="fab fa-github"></i>
            </a>
          </div>
          <p>&copy; Portafolio de Valentina 2024</p>
        </div>
      </footer>
    </>
  );
}

export default App;
