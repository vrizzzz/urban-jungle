import Socialmedia from "./Socialmedia";
import "./services.css";

const Footer = () => {
  const icons = [
    { sname: "facebook" },
    { sname: "instagram" },
    { sname: "linkedin" },
    { sname: "x-twitter" },
  ];

  return (
    <footer className="footer pt-5 pb-3">
      <div className="container">
        <div className="row align-items-center text-center text-lg-start">

          <div className="col-12 col-lg-4 mb-4 mb-lg-0">
            <div className="logo">
              <img
                src="https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/normal-header.svg"
                alt="logo"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="col-12 col-lg-4 mb-4 mb-lg-0">
            <ul className="nav justify-content-center gap-3">
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-lg-4">
            <div className="d-flex justify-content-center justify-content-lg-end gap-2">
              {icons.map((data, index) => (
                <Socialmedia key={index} sname={data.sname} />
              ))}
            </div>
          </div>

        </div>

        <hr className="my-4" />

        <p className="text-center mb-0 fs-6">
          © 2026 Vraj Rana. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
