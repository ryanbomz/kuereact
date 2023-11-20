import "./style.css";
// import "./style.css.map"
// import "./style.scss"

const Testi = () => {
  return (
    <div className="testimonials text-center">
      <div className="container">
        <span className="text-primary">Testimoni</span>
        <h2 className="fw-bold text-dark mt-3">apa yang mereka katakan</h2>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="close"
                  data-dismiss="alert"
                  aria-current="true"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  className="rounded-circle bg-primary"
                  aria-label="Slide 2"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div
                    className="content-testimonials mt-5"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <img
                      className="rounded-circle"
                      src="assets/img/img-testimonials-1.svg"
                      style="width: 80px"
                    />
                    <h5 className="name-testimonials text-dark mt-3">
                      doe jenny
                    </h5>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star-half"></i>
                    <p className="text-secondary mt-3">
                      Saya suka makanan di sini. Suasananya nyaman dan setiap
                      saya kesini selalu ramai dikunjungi orang.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div
                    className="content-testimonials mt-5"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <img
                      className="rounded-circle"
                      src="assets/img/img-testimonials-2.svg"
                      style="width: 80px"
                    />
                    <h5 className="name-testimonials text-dark mt-3">
                      jenny doe
                    </h5>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <p className="text-secondary mt-3">
                      Saya sangat suka makanan di sini, enak dan sangat
                      terjangkau. Saya sering datang ke sini bersama teman-teman
                      di akhir pekan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testi;
