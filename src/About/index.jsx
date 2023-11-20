import "./style.css";
import "./style.css.map"
import "./style.scss"

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="row">
              <div className="col-md-11">
                <div
                  className="gallery-img mt-3"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img src="assets/img/about-img.svg" className="w-100" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div
              className="about-content"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <span className="text-primary">Tentang</span>
              <h2 className="fw-bold text-dark mt-3">Kue dalam menu kami</h2>
              <p className="text-secondary mt-3">
                Kue manis adalah tempat dimana kreativitas bertemu dengan rasa.
                Kami berkomitmen untuk menyajikan kue-kue berkualitas terbaik
                dengan bahan-bahan segar dan rasa yang mengagumkan.
                <br />Berawal dari cinta akan seni memasak dan keinginan untuk
                menyebarkan kebahagiaan melalui kue, Kue Manis memulai
                perjalanan ini. Hari ini, kami bangga dapat berbagi
                kreasi-kreasi istimewa kami dengan Anda.
              </p>
              <a href="#" className="btn btn-primary shadow-none mt-5">Load more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
