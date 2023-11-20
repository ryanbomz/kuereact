import "./style.css";
// import "./style.css.map"
// import "./style.scss"

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top bg-white">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="assets/img/logo.svg" className="me-3" alt="brand" />
            <span className="text-dark">Kue Manis</span>
          </a>
          <button
            className="navbar-toggler shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bx bx-menu"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="index.html#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="index.html#about">
                  Tentang
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="index.html#menu">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="index.html#newslatter">
                  Pemesanan
                </a>
              </li>
            </ul>
            <a
              href="https://wa.me/+62891234567"
              className="btn btn-primary shadow-none"
            >
              Kontak
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
