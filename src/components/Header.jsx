import Socialmedia from "./Socialmedia";

const Header = () => {
    const icons = [
        { sname: "facebook" },
        { sname: "instagram" },
        { sname: "linkedin" },
        { sname: "x-twitter" },
    ];

    return (
        <header className="h-section bg-transparent py-3">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-12 col-lg-4 mb-3 mb-lg-0">
                        <img
                            src="https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/header-logo.svg"
                            alt="logo"
                            className=""
                        />
                    </div>

                    <div className="col-12 col-lg-4 mb-3 mb-lg-0 d-none d-lg-block">
                        <ul className="nav justify-content-center gap-3">
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-12 col-lg-4">
                        <div className="d-flex justify-content-end align-items-center gap-3">
                            {icons.map((data, index) => (
                                <Socialmedia
                                    key={index}
                                    sname={data.sname}
                                    style={{ color: "#ffffff" }}
                                />
                            ))}
                            <i className="fa-solid fa-cart-shopping fs-4 text-white " />
                            <i className="fa-solid fa-bars fs-4 d-lg-none" style={{color: "#ffffff"}}></i>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;
