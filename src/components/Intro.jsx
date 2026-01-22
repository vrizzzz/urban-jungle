import Header from "./Header";
import "./intro.css";
import Button from "./Button";

const Intro = () => {
  return (
    <div className="main-sec position-relative">
      <Header />

      <div className="hero-content position-absolute top-50 start-50 translate-middle text-center text-light px-3 ">
        <div className="intro-bun">
          <p className="text-center mb-3 text-uppercase small">
            Welcome to Urban Jungle Co.
          </p>
              
          <h3 className="text-center intro-text fw-bold mt-5">
            Discover the Beauty of <br className="d-none d-md-block" />
            Nature at Your Fingertips
          </h3>
        </div>

        <Button classes="btn mt-4 shop-btn common" text="Shop Now" />
      </div>
    </div>
  );
};

export default Intro;

