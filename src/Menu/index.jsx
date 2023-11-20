import "./style.css";
// import "./style.css.map"
// import "./style.scss"

const Menu = () => {
  return (
    <div className="menu" id="menu">
      <div className="container">
        <span className="text-primary">menu</span>
        <h2 className="fw-bold text-dark mt-3">Menu favorit</h2>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div
              className="card-menu bg-white mt-3"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="item">
                <img src="assets/img/menu-1.svg" alt="" />
                <h5 className="menu-title text-dark mt-3">cheese brownies</h5>
                <p className="text-secondary mt-2">
                  Cake dengan coklat dibalut keju berkualitas di atasnya
                </p>
                <h4 className="text-primary fw-bold mt-4">Rp. 75.000</h4>
                <button
                  className="btn btn-cart shadow-none text-white bg-primary"
                  id="addToCartButton"
                >
                  <i className="bx bx-cart fs-5"></i> bungkus
                </button>
              </div>

              {/* <!-- Bootstrap Toast (hidden by default) for the card item --> */}
              <div
                className="toast"
                id="cartToast"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div className="toast-header">
                  <strong className="me-auto">Sukses!</strong>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="toast-body">Item telah masuk keranjang!</div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div
              className="card-menu bg-white mt-3"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="item">
                <img src="assets/img/menu-2.svg" alt="" />
                <h5 className="menu-title text-dark mt-3">cheese brownies</h5>
                <p className="text-secondary mt-2">
                  Cake dengan coklat dibalut keju berkualitas di atasnya
                </p>
                <h4 className="text-primary fw-bold mt-4">Rp. 75.000</h4>
                <button
                  className="btn btn-cart shadow-none text-white bg-primary"
                  id="addToCartButton2"
                >
                  <i className="bx bx-cart fs-5"></i> bungkus
                </button>
              </div>

              {/* <!-- Bootstrap Toast (hidden by default) for the card item --> */}
              <div
                className="toast"
                id="cartToast2"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div className="toast-header">
                  <strong className="me-auto">Sukses!</strong>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="toast-body">Item telah masuk keranjang!</div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div
              className="card-menu bg-white mt-3"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="item">
                <img src="assets/img/menu-3.svg" alt="" />
                <h5 className="menu-title text-dark mt-3">cheese brownies</h5>
                <p className="text-secondary mt-2">
                  Cake dengan coklat dibalut keju berkualitas di atasnya
                </p>
                <h4 className="text-primary fw-bold mt-4">Rp. 75.000</h4>
                <button
                  className="btn btn-cart shadow-none text-white bg-primary"
                  id="addToCartButton3"
                >
                  <i className="bx bx-cart fs-5"></i> bungkus
                </button>
              </div>

              {/* <!-- Bootstrap Toast (hidden by default) for the card item --> */}
              <div
                className="toast"
                id="cartToast3"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div className="toast-header">
                  <strong className="me-auto">Sukses!</strong>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="toast-body">Item telah masuk keranjang!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
