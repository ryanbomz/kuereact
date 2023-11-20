import "./style.css";
// import "./style.css.map"
// import "./style.scss"

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-5">
            <div className="col-md-10">
              <a href="#" className="footer-brand">
                <img src="assets/img/logo.svg" className="me-3" alt="brand" />
                <span className="text-dark">Kue Manis</span>
                <p className="text-secondary mt-3">
                  Kue Manis adalah toko jajanan kue yang berdiri sejak 2019
                  dengan resep keluarga dengan memberikan citarasa dari hati
                </p>
              </a>
            </div>
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-3">
                <div className="footer-content">
                  <span>Services</span>
                  <ul className="footer-link mt-3 list-unstyled">
                    <li>
                      <a href="#" className="py-1 d-block">
                        pengiriman
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        Harga
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        ready kirim/offline order
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-content">
                  <span>Info</span>
                  <ul className="footer-link mt-3 list-unstyled">
                    <li>
                      <a href="#" className="py-1 d-block">
                        Promo
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        Event
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="footer-content">
                  <span>Contact</span>
                  <ul className="footer-link mt-3 list-unstyled">
                    <li>
                      <a href="#" className="py-1 d-block">
                        Antapani - Bandung
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://wa.me/+62891234567"
                        className="py-1 d-block"
                      >
                        +62891234567
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-1 d-block">
                        kuemanis@kue.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <p className="copyright text-secondary text-center">
            Copyright &copy; 2023 All rights reserved | By
            <a className="text-primary" href="https://github.com/ryanbomz">
              Riyan Hidayatulloh
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
