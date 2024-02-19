import React from "react";
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";

import "swiper/css";
import "swiper/css/navigation";

export default function Vitrine() {
  return (
    <>
      <Swiper
        spaceBetween={10}
        modules={[Navigation]}
        slidesPerView={5}
        pagination={{
          clickable: true,
        }}
        navigation
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="product-container">
            <img
              src={require("../assets/vitrine-01.png")}
              alt=""
              className="slider-main-image"
            />
            <div className="select-colors">
              <button>
                <img
                  src={require("../assets/color-01.png")}
                  alt=""
                  className="slider-main-image"
                />
              </button>
              <button>
                <img
                  src={require("../assets/color-02.png")}
                  alt=""
                  className="slider-main-image"
                />
              </button>
              <button>
                <img
                  src={require("../assets/color-03.png")}
                  alt=""
                  className="slider-main-image"
                />
              </button>
              <button>
                <img
                  src={require("../assets/color-04.png")}
                  alt=""
                  className="slider-main-image"
                />
              </button>
            </div>
            <p>R$ 500,00</p>
            <p>Faux Suede Mini Skirt</p>
            <p>
              A faux suede mini skirt featuring exposed button-front closures
              and panel seam construction.
            </p>
            <button>Adicionar</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-container">
            <img
              src={require("../assets/vitrine-02.png")}
              alt=""
              className="slider-main-image"
            />
            <div className="select-colors">
              <button>
                <img
                  src={require("../assets/color-01.png")}
                  alt=""
                  className="slider-main-image"
                />
              </button>
              <button>
                <img
                  src={require("../assets/color-02.png")}
                  alt=""
                  className="slider-main-image"
                />
              </button>
              <button>
                <img
                  src={require("../assets/color-03.png")}
                  alt=""
                  className="slider-main-image"
                />
              </button>
              <button>
                <img
                  src={require("../assets/color-04.png")}
                  alt=""
                  className="slider-main-image"
                />
              </button>
            </div>
            <p>R$ 500,00</p>
            <p>Faux Suede Mini Skirt</p>
            <p>
              A faux suede mini skirt featuring exposed button-front closures
              and panel seam construction.
            </p>
            <button>Adicionar</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-container">
            <img
              src={require("../assets/vitrine-01.png")}
              alt=""
              className="slider-main-image"
            />
            <div className="select-colors">
              <button>
                <img
                  src={require("../assets/color-01.png")}
                  alt=""
                  className="slider-main-image"
                />
              </button>
              <button>
                <img
                  src={require("../assets/color-02.png")}
                  alt=""
                  className="slider-main-image"
                />
              </button>
              <button>
                <img
                  src={require("../assets/color-03.png")}
                  alt=""
                  className="slider-main-image"
                />
              </button>
              <button>
                <img
                  src={require("../assets/color-04.png")}
                  alt=""
                  className="slider-main-image"
                />
              </button>
            </div>
            <p>R$ 500,00</p>
            <p>Faux Suede Mini Skirt</p>
            <p>
              A faux suede mini skirt featuring exposed button-front closures
              and panel seam construction.
            </p>
            <button>Adicionar</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-container">
            <img
              src={require("../assets/vitrine-02.png")}
              alt=""
              className="slider-main-image"
            />
            <div className="select-colors">
              <button>
                <img
                  src={require("../assets/color-01.png")}
                  alt=""
                  className="slider-main-image"
                />
              </button>
              <button>
                <img
                  src={require("../assets/color-02.png")}
                  alt=""
                  className="slider-main-image"
                />
              </button>
              <button>
                <img
                  src={require("../assets/color-03.png")}
                  alt=""
                  className="slider-main-image"
                />
              </button>
              <button>
                <img
                  src={require("../assets/color-04.png")}
                  alt=""
                  className="slider-main-image"
                />
              </button>
            </div>
            <p>R$ 500,00</p>
            <p>Faux Suede Mini Skirt</p>
            <p>
              A faux suede mini skirt featuring exposed button-front closures
              and panel seam construction.
            </p>
            <button>Adicionar</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-container">
            <img
              src={require("../assets/vitrine-01.png")}
              alt=""
              className="slider-main-image"
            />
            <div className="select-colors">
              <button>
                <img
                  src={require("../assets/color-01.png")}
                  alt=""
                  className="slider-main-image"
                />
              </button>
              <button>
                <img
                  src={require("../assets/color-02.png")}
                  alt=""
                  className="slider-main-image"
                />
              </button>
              <button>
                <img
                  src={require("../assets/color-03.png")}
                  alt=""
                  className="slider-main-image"
                />
              </button>
              <button>
                <img
                  src={require("../assets/color-04.png")}
                  alt=""
                  className="slider-main-image"
                />
              </button>
            </div>
            <p>R$ 500,00</p>
            <p>Faux Suede Mini Skirt</p>
            <p>
              A faux suede mini skirt featuring exposed button-front closures
              and panel seam construction.
            </p>
            <button>Adicionar</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-container">
            <img
              src={require("../assets/vitrine-02.png")}
              alt=""
              className="slider-main-image"
            />
            <div className="select-colors">
              <button>
                <img
                  src={require("../assets/color-01.png")}
                  alt=""
                  className="slider-main-image"
                />
              </button>
              <button>
                <img
                  src={require("../assets/color-02.png")}
                  alt=""
                  className="slider-main-image"
                />
              </button>
              <button>
                <img
                  src={require("../assets/color-03.png")}
                  alt=""
                  className="slider-main-image"
                />
              </button>
              <button>
                <img
                  src={require("../assets/color-04.png")}
                  alt=""
                  className="slider-main-image"
                />
              </button>
            </div>
            <p>R$ 500,00</p>
            <p>Faux Suede Mini Skirt</p>
            <p>
              A faux suede mini skirt featuring exposed button-front closures
              and panel seam construction.
            </p>
            <button>Adicionar</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
