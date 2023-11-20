import "./style.css";
// import "./style.css.map"
// import "./style.scss"

const Galery = () => {
  return (
    <div className="gallery" id="gallery">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="row">
              <div className="col-md-11">
                <div
                  className="gallery-content"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <span className="text-primary">Gallery</span>
                  <h2 className="fw-bold text-dark mt-3">galeri menu</h2>
                  <p className="text-secondary mt-3">
                    galeri kue ini berisi kumpulan gambar yang kami ambil ketika
                    ada pemesanan kue, kami memiliki kue dengan banyak pilihan
                    dan minuman dengan berbagai varian dan harga bersahabat di
                    dompet anda
                  </p>
                  <a href="#" className="btn btn-primary shadow-none mt-5">
                    Load more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div
              className="gallery-img"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img src="assets/img/gallery-img.svg" className="w-100" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galery;
