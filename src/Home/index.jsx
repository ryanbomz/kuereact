import "./style.css";
// import "./style.css.map"
// import "./style.scss"

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div
              className="home-content"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p className="badge fs-6 fw-normal bg-primary-light text-primary">
                Kamu Harus Coba 😋
              </p>
              <h1 className="text-home-bold fw-bold text-dark mt-1">
                Sensasi manis dalam setiap gigitan!
                <span className="text-primary">Kue Manis</span> terbaik di kota!
              </h1>
              <h4 className="text-home-reguler fw-normal text-secondary">
                Treat Yourself to Happiness: Elevating Cake-Making for
                Exquisite Delights!
              </h4>
              <div className="home-btn mt-5">
                <a href="#" className="btn btn-primary shadow-none">
                  Order now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div
              className="home-img"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img src="assets/img/home-img.svg" className="w-100" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
