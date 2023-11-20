import "./style.css";
// import "./style.css.map"
// import "./style.scss"

const News = () => {
  return (
    <div className="newslatter" id="newslatter">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="newslatter-content bg-primary text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h2 className="title-newslatter fw-bold text-white">
                cepat pesan sekarang
              </h2>
              <p className="text-white mt-3">
                waktu terbatas untuk mendapatkan promo 20%
              </p>
              <div className="form-newslatter mt-5">
                <input
                  type="email"
                  className="form-control w-50 shadow-none"
                  placeholder="mamang@gmail.com"
                />
                <a
                  href="https://wa.me/+62891234567"
                  className="btn btn-primary-light shadow-none"
                >
                  pesan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
