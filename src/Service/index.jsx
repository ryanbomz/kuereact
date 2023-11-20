import "./style.css";
// import "./style.css.map"
// import "./style.scss"

const Service = () => {
  return (
    <div className="services text-center">
      <div className="container">
        <span className="text-primary">Pelayanan</span>
        <h2 className="fw-bold text-dark mt-3">Pelayanan terbaik kita</h2>
        <div className="row">
          <div
            className="col-lg-4 col-md-6 content mt-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src="assets/img/services-1.svg" alt="" />
            <h5 className="services-title text-dark mt-4">Pengiriman cepat</h5>
            <p className="text-secondary mt-3">
              kita menyediakan layanan pengiriman secara online bisa lewat
              aplikasi grab, dan gojek
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 content mt-5"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <img src="assets/img/services-2.svg" alt="" />
            <h5 className="services-title text-dark mt-4">harga yang bersahabat</h5>
            <p className="text-secondary mt-3">
              kue kue yang kami jual sangat ramah dikantong jika datang online
              bisa mencicipi secara gratis.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 content mt-5"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img src="assets/img/services-3.svg" alt="" />
            <h5 className="services-title text-dark mt-4">nikmat dan higienis</h5>
            <p className="text-secondary mt-3">
              di setiap menu, kita sajikan dengan resep keluarga menjadikan
              rasanya khas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
