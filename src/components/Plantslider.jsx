import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import plant7 from "../assets/images/plant-7.jpg";
import plant4 from "../assets/images/plant-4.jpg";
import plant5 from "../assets/images/plant-5.jpg";
import plant6 from "../assets/images/plant-6.jpg";
import "swiper/css";
import "swiper/css/navigation";
import Button from "./Button";

const plants = [
  {
    name: "Monstera Deliciosa",
    desc: "A bold tropical plant that elevates interiors.",
    img: plant7,
  },
  {
    name: "Snake Plant",
    desc: "Perfect low-maintenance indoor companion.",
    img: plant6,
  },
  {
    name: "Fiddle Leaf Fig",
    desc: "Statement plant for modern homes.",
    img: plant5,
  },
  {
    name: "Peace Lily",
    desc: "Elegant and calming air-purifying plant.",
    img: plant4,
  },
  {
    name: "Snake Plant",
    desc: "Perfect low-maintenance indoor companion.",
    img: plant5,
  },
  {
    name: "Fiddle Leaf Fig",
    desc: "Statement plant for modern homes.",
    img: plant6,
  },
];

const Plantslider = () => {
  return (
    <section className="py-1" style={{ background: "#ECF4D3" }}>
      <div className="container m-80">

        <h4 className="prod-head text-center mb-5">Sneak Peek</h4>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3500 }}
          spaceBetween={25}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {plants.map((plant, index) => (
            <SwiperSlide key={index}>
              <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden md-80">

                <div style={{ height: "355px", overflow: "hidden" }}>
                  <img
                    src={plant.img}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                    alt={plant.name}
                  />
                </div>

                <div className="card-body d-flex flex-column">
                  <h5 className="fw-semibold">{plant.name}</h5>
                  <p className="text-muted small">{plant.desc}</p>

                    <Button classes="btn mt-4 shop-btn common mt-auto rounded-pill" text="View Plant" />
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Plantslider;