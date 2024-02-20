import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";

export default function VitrineDesktop() {
  return (
    <>
      <Swiper
        spaceBetween={20}
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
              src={require("../../assets/vitrine-01.png")}
              alt=""
              className="slider-main-image"
            />
            <div className="product-description-container">
              <div className="select-colors">
                <button>
                  <img
                    src={require("../../assets/color-01.png")}
                    alt=""
                    className="slider-main-image"
                  />
                </button>
                <button>
                  <img
                    src={require("../../assets/color-02.png")}
                    alt=""
                    className="slider-main-image"
                  />
                </button>
                <button>
                  <img
                    src={require("../../assets/color-03.png")}
                    alt=""
                    className="slider-main-image"
                  />
                </button>
                <button>
                  <img
                    src={require("../../assets/color-04.png")}
                    alt=""
                    className="slider-main-image"
                  />
                </button>
              </div>
              <p className="product-price">R$ 500,00</p>
              <p className="product-name">Faux Suede Mini Skirt</p>
              <p className="product-description">
                A faux suede mini skirt featuring exposed button-front closures
                and panel seam construction.
              </p>
              <button className="product-button">Adicionar</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-container">
            <img
              src={require("../../assets/vitrine-02.png")}
              alt=""
              className="slider-main-image"
            />
            <div className="product-description-container">
              <div className="select-colors">
                <button>
                  <img
                    src={require("../../assets/color-01.png")}
                    alt=""
                    className="slider-main-image"
                  />
                </button>
                <button>
                  <img
                    src={require("../../assets/color-02.png")}
                    alt=""
                    className="slider-main-image"
                  />
                </button>
                <button>
                  <img
                    src={require("../../assets/color-03.png")}
                    alt=""
                    className="slider-main-image"
                  />
                </button>
                <button>
                  <img
                    src={require("../../assets/color-04.png")}
                    alt=""
                    className="slider-main-image"
                  />
                </button>
              </div>
              <p className="product-price">R$ 500,00</p>
              <p className="product-name">Faux Suede Mini Skirt</p>
              <p className="product-description">
                A faux suede mini skirt featuring exposed button-front closures
                and panel seam construction.
              </p>
              <button className="product-button">Adicionar</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-container">
            <img
              src={require("../../assets/vitrine-01.png")}
              alt=""
              className="slider-main-image"
            />
            <div className="product-description-container">
              <div className="select-colors">
                <button>
                  <img
                    src={require("../../assets/color-01.png")}
                    alt=""
                    className="slider-main-image"
                  />
                </button>
                <button>
                  <img
                    src={require("../../assets/color-02.png")}
                    alt=""
                    className="slider-main-image"
                  />
                </button>
                <button>
                  <img
                    src={require("../../assets/color-03.png")}
                    alt=""
                    className="slider-main-image"
                  />
                </button>
                <button>
                  <img
                    src={require("../../assets/color-04.png")}
                    alt=""
                    className="slider-main-image"
                  />
                </button>
              </div>
              <p className="product-price">R$ 500,00</p>
              <p className="product-name">Faux Suede Mini Skirt</p>
              <p className="product-description">
                A faux suede mini skirt featuring exposed button-front closures
                and panel seam construction.
              </p>
              <button className="product-button">Adicionar</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-container">
            <img
              src={require("../../assets/vitrine-02.png")}
              alt=""
              className="slider-main-image"
            />
            <div className="product-description-container">
              <div className="select-colors">
                <button>
                  <img
                    src={require("../../assets/color-01.png")}
                    alt=""
                    className="slider-main-image"
                  />
                </button>
                <button>
                  <img
                    src={require("../../assets/color-02.png")}
                    alt=""
                    className="slider-main-image"
                  />
                </button>
                <button>
                  <img
                    src={require("../../assets/color-03.png")}
                    alt=""
                    className="slider-main-image"
                  />
                </button>
                <button>
                  <img
                    src={require("../../assets/color-04.png")}
                    alt=""
                    className="slider-main-image"
                  />
                </button>
              </div>
              <p className="product-price">R$ 500,00</p>
              <p className="product-name">Faux Suede Mini Skirt</p>
              <p className="product-description">
                A faux suede mini skirt featuring exposed button-front closures
                and panel seam construction.
              </p>
              <button className="product-button">Adicionar</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-container">
            <img
              src={require("../../assets/vitrine-01.png")}
              alt=""
              className="slider-main-image"
            />
            <div className="product-description-container">
              <div className="select-colors">
                <button>
                  <img
                    src={require("../../assets/color-01.png")}
                    alt=""
                    className="slider-main-image"
                  />
                </button>
                <button>
                  <img
                    src={require("../../assets/color-02.png")}
                    alt=""
                    className="slider-main-image"
                  />
                </button>
                <button>
                  <img
                    src={require("../../assets/color-03.png")}
                    alt=""
                    className="slider-main-image"
                  />
                </button>
                <button>
                  <img
                    src={require("../../assets/color-04.png")}
                    alt=""
                    className="slider-main-image"
                  />
                </button>
              </div>
              <p className="product-price">R$ 500,00</p>
              <p className="product-name">Faux Suede Mini Skirt</p>
              <p className="product-description">
                A faux suede mini skirt featuring exposed button-front closures
                and panel seam construction.
              </p>
              <button className="product-button">Adicionar</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-container">
            <img
              src={require("../../assets/vitrine-02.png")}
              alt=""
              className="slider-main-image"
            />
            <div className="product-description-container">
              <div className="select-colors">
                <button>
                  <img
                    src={require("../../assets/color-01.png")}
                    alt=""
                    className="slider-main-image"
                  />
                </button>
                <button>
                  <img
                    src={require("../../assets/color-02.png")}
                    alt=""
                    className="slider-main-image"
                  />
                </button>
                <button>
                  <img
                    src={require("../../assets/color-03.png")}
                    alt=""
                    className="slider-main-image"
                  />
                </button>
                <button>
                  <img
                    src={require("../../assets/color-04.png")}
                    alt=""
                    className="slider-main-image"
                  />
                </button>
              </div>
              <p className="product-price">R$ 500,00</p>
              <p className="product-name">Faux Suede Mini Skirt</p>
              <p className="product-description">
                A faux suede mini skirt featuring exposed button-front closures
                and panel seam construction.
              </p>
              <button className="product-button">Adicionar</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
