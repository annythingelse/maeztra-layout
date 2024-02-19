import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { useMediaQuery } from "react-responsive";

import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <>
      <Swiper
        spaceBetween={10}
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true,
        }}
        navigation
        className="mySwiper"
      >
        <SwiperSlide>
          {isMobile ? (
            <img
              src={require("../assets/mobile/slider_main-mobile.png")}
              alt=""
              className="slider-main-image"
            />
          ) : (
            <img
              src={require("../assets/desktop/slider_main.png")}
              alt=""
              className="slider-main-image"
            />
          )}

          <div className="main-slider-descriptin">
            <h2>Promoções de Outono</h2>
            <p>
              Confiras os melhores looks para combinar com você nesse Outono
            </p>
            <button>Conferir</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {isMobile ? (
            <img
              src={require("../assets/mobile/slider_main-mobile.png")}
              alt=""
              className="slider-main-image"
            />
          ) : (
            <img
              src={require("../assets/desktop/slider_main.png")}
              alt=""
              className="slider-main-image"
            />
          )}

          <div className="main-slider-descriptin">
            <h2>Promoções de Outono</h2>
            <p>
              Confiras os melhores looks para combinar com você nesse Outono
            </p>
            <button>Conferir</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {isMobile ? (
            <img
              src={require("../assets/mobile/slider_main-mobile.png")}
              alt=""
              className="slider-main-image"
            />
          ) : (
            <img
              src={require("../assets/desktop/slider_main.png")}
              alt=""
              className="slider-main-image"
            />
          )}

          <div className="main-slider-descriptin">
            <h2>Promoções de Outono</h2>
            <p>
              Confiras os melhores looks para combinar com você nesse Outono
            </p>
            <button>Conferir</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {isMobile ? (
            <img
              src={require("../assets/mobile/slider_main-mobile.png")}
              alt=""
              className="slider-main-image"
            />
          ) : (
            <img
              src={require("../assets/desktop/slider_main.png")}
              alt=""
              className="slider-main-image"
            />
          )}

          <div className="main-slider-descriptin">
            <h2>Promoções de Outono</h2>
            <p>
              Confiras os melhores looks para combinar com você nesse Outono
            </p>
            <button>Conferir</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {isMobile ? (
            <img
              src={require("../assets/mobile/slider_main-mobile.png")}
              alt=""
              className="slider-main-image"
            />
          ) : (
            <img
              src={require("../assets/desktop/slider_main.png")}
              alt=""
              className="slider-main-image"
            />
          )}

          <div className="main-slider-descriptin">
            <h2>Promoções de Outono</h2>
            <p>
              Confiras os melhores looks para combinar com você nesse Outono
            </p>
            <button>Conferir</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
