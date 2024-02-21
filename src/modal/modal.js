import React from "react";
import ReactModal from "react-modal";
import { useState } from "react";
import "./styles.css";

export default function Modal() {
  const [modalisOpen, setmodalisOpen] = useState(true);

  return (
    <>
      <ReactModal isOpen={modalisOpen}>
        <div className="modal_container">
          <button onClick={() => setmodalisOpen(false)}>Fechar</button>
          <div className="modal-content">
            <div className="modal-imagem-container">
              <img
                src={require("../assets/modal/image.png")}
                alt=""
                className="modal-imagem"
              />
            </div>
            <div className="modal-description">
              <img
                src={require("../assets/modal/email-icon.png")}
                alt=""
                className="icon"
              />
              <p>Bem Vindo à MAEZTRA</p>
              <h3>
                Receba em Primeira mão <br />
                <strong> desconto e ofertas exclusivas </strong>
              </h3>
              <input placeholder="Digite seu e-mail" name="modal" />
              <button>
                Enviar
                <img
                  src={require("../assets/modal/icon.png")}
                  alt=""
                  className="icon-button"
                />
              </button>
            </div>
          </div>
        </div>
      </ReactModal>
    </>
  );
}
