// import Socialmedia from "./Socialmedia";
// import "./services.css"

// const Header = () => {
//     const icons = [
//         { sname: "facebook" },
//         { sname: "instagram" },
//         { sname: "linkedin" },
//         { sname: "x-twitter" },
//     ];

//     return (
//         <header className="h-section bg-transparent py-3">
//             <div className="container">
//                 <div className="row align-items-center">

//                     <div className="col-12 col-lg-4 mb-3 mb-lg-0">
//                         <img
//                             src="https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/header-logo.svg"
//                             alt="logo"
//                             className=""
//                         />
//                     </div>

//                     <div className="col-12 col-lg-4 mb-3 mb-lg-0 d-none d-lg-block">
//                         <ul className="nav justify-content-center gap-3">
//                             <li className="nav-item">
//                                 <a className="nav-link text-light namee" href="#">Home</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link text-light namee" href="#">Shop</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link text-light namee" href="#">About</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link text-light namee" href="#">Contact</a>
//                             </li>
//                         </ul>
//                     </div>

//                     <div className="col-12 col-lg-4">
//                         <div className="d-flex justify-content-end align-items-center gap-3">
//                             {icons.map((data, index) => (
//                                 <Socialmedia
//                                     key={index}
//                                     sname={data.sname}
//                                     style={{ color: "#ffffff" }}
//                                 />
//                             ))}
//                             <i className="fa-solid fa-cart-shopping fs-4 text-white " />
//                             <i className="fa-solid fa-bars fs-4 d-lg-none" style={{color: "#ffffff"}}></i>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;
import Socialmedia from "./Socialmedia";
import "./services.css";

const Header = () => {
  const icons = [
    { sname: "facebook" },
    { sname: "instagram" },
    { sname: "linkedin" },
    { sname: "x-twitter" },
  ];

  return (
    <>
      <header className="h-section bg-transparent py-3 position-relative">
        <div className="container">
          <div className="row align-items-center">

            {/* LOGO */}
            <div className="col-6 col-lg-4">
              <img
                src="https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/header-logo.svg"
                alt="logo"
              />
            </div>

            {/* DESKTOP MENU */}
            <div className="col-lg-4 d-none d-lg-block">
              <ul className="nav justify-content-center gap-3">
                <li className="nav-item"><a className="nav-link text-light namee" href="#">Home</a></li>
                <li className="nav-item"><a className="nav-link text-light namee" href="#">Shop</a></li>
                <li className="nav-item"><a className="nav-link text-light namee" href="#">About</a></li>
                <li className="nav-item"><a className="nav-link text-light namee" href="#">Contact</a></li>
              </ul>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-6 col-lg-4">
              <div className="d-flex justify-content-end align-items-center gap-3">

                {icons.map((data, index) => (
                  <Socialmedia
                    key={index}
                    sname={data.sname}
                    style={{ color: "#ffffff" }}
                  />
                ))}

                <i className="fa-solid fa-cart-shopping fs-4 text-white" />

                {/* MOBILE MENU BUTTON */}
                <button
                  className="btn d-lg-none p-0 border-0"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#mobileMenu"
                >
                  <i className="fa-solid fa-bars fs-4 text-white"></i>
                </button>

              </div>
            </div>

          </div>
        </div>
      </header>

      {/* OFFCANVAS MENU */}
      <div
        className="offcanvas offcanvas-end"
        style={{ backgroundColor: "#ECF4D3" }}
        tabIndex="-1"
        id="mobileMenu"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>

        <div className="offcanvas-body">
          <ul className="nav flex-column gap-3">
            <li><a className="nav-link text-dark" href="#">Home</a></li>
            <li><a className="nav-link text-dark" href="#">Shop</a></li>
            <li><a className="nav-link text-dark" href="#">About</a></li>
            <li><a className="nav-link text-dark" href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;