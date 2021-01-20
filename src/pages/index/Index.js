import React from "react";
import { Link } from "react-router-dom";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
//import { FaLongArrowAltRight } from "react-icons/fa";

import ImgPrinc from "../../new-assets/img_initial_fb_tratada.jpg";

import ImgBolos from "../../new-assets/pates-final.png";

export default function Index() {
  return (
    <>
      <section className="first-section">
        <Header/>
        <div className="image-full container-fluid">
          <img src={ImgPrinc} alt="imagem principal" />
        </div>
      </section>
      <section className="projeto-destaque container">
        <div className="itens-projeto-destaque">
          <div className="content-destaque-lugar col-md-5 col-sm-12">
          <span className="posicao">@estilocaseirobolos</span>
            <div className="lugar">Estilo Caseiro</div>
          </div>
          <div className="suites item-espec col-md-2 col-sm-6">
            <span className="black-item">Torradas</span>
            <span className="gray-item">Muitos sabores</span>
          </div>
          <div className="vagas item-espec col-md-2 col-sm-6">
            <span className="black-item">Patês </span>
            <span className="gray-item">e Antepastos</span>
          </div>
          <div className="vagas item-espec col-md-3 col-sm-6">
            <span className="black-item">Grissinis Artesanais</span>
          </div>
        </div>
      </section>
      <section className="content-sobre-mofarre" name="sobre-a-mofarrej">
        <div className="sobre-home container">
          <div className="conteudo-text col-md-4 col-sm-12">
            <div className="content-title">
              <h2>A Estilo Caseiro</h2>
            </div>
            <div className="content-text">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet luctus est, id consequat odio. Sed bibendum ultrices justo, et pellentesque urna malesuada eu. Proin et molestie tellus. Donec non consequat lorem. Nunc sit amet enim ex. Donec fringilla luctus tristique.
              </p>
              <Link to="/a-estilo">
                <button className="btn-conheca">
                  Saiba mais
                  <svg
                    width="26"
                    height="8"
                    viewBox="0 0 26 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.3536 4.35355C25.5488 4.15829 25.5488 3.84171 25.3536 3.64645L22.1716 0.464466C21.9763 0.269204 21.6597 0.269204 21.4645 0.464466C21.2692 0.659728 21.2692 0.976311 21.4645 1.17157L24.2929 4L21.4645 6.82843C21.2692 7.02369 21.2692 7.34027 21.4645 7.53553C21.6597 7.7308 21.9763 7.7308 22.1716 7.53553L25.3536 4.35355ZM0 4.5H25V3.5H0V4.5Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          <div className="content-image col-md-8 col-sm-12">
            <img src={ImgBolos} alt="Bolos Estilo Caseiro" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
