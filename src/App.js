import React from "react";
import "./App.css";
import { useMediaQuery } from "react-responsive";
import Sidebar from "./menu/Sidebar.js";
import Slider from "./slider/slide.js";
import VitrineDesktop from "./vitrine/desktop/slide.js";
import VitrineMobile from "./vitrine/mobile/slide.js";
import Modal from "./modal/modal.js";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className="home">
      <Modal />
      <header className="header">
        <div className="notification-bar">
          <p>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</p>
        </div>
        <div>
          {isMobile ? (
            <div className="sticky-header-mobile">
              <div className="menu-mobile-container">
                <Sidebar
                  pageWrapId={"page-wrap"}
                  outerContainerId={"outer-container"}
                />
                <div className="logo">
                  <img
                    src={require("./assets/mobile/logo-mobile.png")}
                    alt=""
                    className="logo-mobile"
                  />
                </div>
              </div>
              <div className="sticky-header-links-mobile">
                <a href="/" className="sticky-header-link-searchbar">
                  <img
                    src={require("./assets/mobile/search-icon.png")}
                    alt=""
                    className="sticky-header-icon-mobile"
                  />
                </a>
                <a href="/" className="sticky-header-link-minicart">
                  <img
                    src={require("./assets/mobile/minicart-mobile.png")}
                    alt=""
                    className="sticky-header-icon-mobile"
                  />
                </a>
              </div>
            </div>
          ) : (
            <>
              <div className="sticky-header-container">
                <div className="sticky-header">
                  <div className="logo">
                    <img
                      src={require("./assets/desktop/logo-desktop.png")}
                      alt=""
                      className="logo-desktop"
                    />
                  </div>
                  <div className="search-bar">
                    <input placeholder="O Que Você Busca?" name="search-bar" />
                    <button>Buscar</button>
                  </div>
                  <div className="sticky-header-links">
                    <div className="my-account">
                      <img
                        src={require("./assets/icon-user.png")}
                        alt=""
                        className="sticky-header-icon"
                      />
                      <a href="/" className="sticky-header-link">
                        Minha conta
                      </a>
                    </div>
                    <div className="favicon">
                      <img
                        src={require("./assets/icon-heart.png")}
                        alt=""
                        className="sticky-header-icon"
                      />
                      <a href="/" className="sticky-header-link">
                        Meus favoritos
                      </a>
                    </div>
                    <div className="minicart">
                      <img
                        src={require("./assets/icon-minicart.png")}
                        alt=""
                        className="sticky-header-icon"
                      />
                      <a href="/" className="sticky-header-link">
                        Meu Carrinho
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-desktop">
                <div className="menu-novidades">
                  <img
                    src={require("./assets/icon-dress.png")}
                    alt=""
                    className="menu-icon"
                  />
                  <a href="/" className="menu-item">
                    Novidades
                  </a>
                </div>
                <a href="/" className="menu-item">
                  Vestidos
                </a>
                <a href="/" className="menu-item">
                  Roupas
                </a>
                <a href="/" className="menu-item">
                  Sapatos
                </a>
                <a href="/" className="menu-item">
                  Lingerie
                </a>
                <a href="/" className="menu-item">
                  Acessórios
                </a>
                <a href="/" className="menu-item">
                  OUTLET
                </a>
              </div>
            </>
          )}
        </div>
      </header>
      <div>
        <Slider />
      </div>
      <main>
        <div className="deals-container">
          <h4>Por que comprar na Maeztra?</h4>
          <div className="deals">
            <img
              src={require("./assets/desktop/deals-01.png")}
              alt=""
              className="deals-item"
            />
            <img
              src={require("./assets/desktop/deals-02.png")}
              alt=""
              className="deals-item"
            />
            <img
              src={require("./assets/desktop/deals-03.png")}
              alt=""
              className="deals-item"
            />
            <img
              src={require("./assets/desktop/deals-04.png")}
              alt=""
              className="deals-item"
            />
            <img
              src={require("./assets/desktop/deals-05.png")}
              alt=""
              className="deals-item"
            />
          </div>
        </div>
        <div className="brands-container">
          <h2>Marcas Parceiras</h2>
          <div className="brands">
            <img
              src={require("./assets/desktop/brands-01.png")}
              alt=""
              className="brands-item"
            />
            <img
              src={require("./assets/desktop/brands-02.png")}
              alt=""
              className="brands-item"
            />
            <img
              src={require("./assets/desktop/brands-03.png")}
              alt=""
              className="brands-item"
            />
            <img
              src={require("./assets/desktop/brands-04.png")}
              alt=""
              className="brands-item"
            />
            <img
              src={require("./assets/desktop/brands-05.png")}
              alt=""
              className="brands-item"
            />
          </div>
        </div>
        <div className="vitrine-container">
          <h2>As Mais Pedidas</h2>
          {isMobile ? <VitrineMobile /> : <VitrineDesktop />}
        </div>
        <div className="infocard-container">
          <div className="infocard-description">
            <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
              mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim
              dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut
              mauris integer. Nibh sagittis in lobortis sed cursus condimentum
              velit pharetra. Amet luctus ut vulputate scelerisque placerat
              consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec
              tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut
              ornare augue eget convallis volutpat aliquet. Sed sed pellentesque
              porttitor phasellus donec condimentum sit sapien.
            </p>
          </div>

          <img
            src={require("./assets/infocard-img.png")}
            alt=""
            className="infocard"
          />
        </div>
      </main>
      <footer>
        <div className="newsletter">
          <p>Recebe Nossa Newsletter</p>
          <div className="newsletter-input-container">
            <input placeholder="Digite seu e-mail" name="newsletter" />
            <button>Enviar</button>
          </div>
        </div>
        <div className="creditos-container">
          <div className="creditos-content">
            <div className="social-media">
              <img
                src={require("./assets/facebook.png")}
                alt=""
                className="facebook"
              />
              <img
                src={require("./assets/linkedin.png")}
                alt=""
                className="linkedin"
              />
              <img
                src={require("./assets/instagram.png")}
                alt=""
                className="instagram"
              />
              <img
                src={require("./assets/youtube.png")}
                alt=""
                className="youtube"
              />
            </div>
            <div className="cards">
              <img src={require("./assets/visa.png")} alt="" className="visa" />
              <img
                src={require("./assets/mastercard.png")}
                alt=""
                className="mastercard"
              />
              <img src={require("./assets/visa.png")} alt="" className="visa" />
              <img
                src={require("./assets/mastercard.png")}
                alt=""
                className="mastercard"
              />
            </div>
            <div className="creditos">
              <img src={require("./assets/vtex.png")} alt="" className="vtex" />
              <img
                src={require("./assets/maeztra.png")}
                alt=""
                className="maeztra"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
