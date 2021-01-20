import React from "react";
import { Link } from "react-router-dom";

//import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// Slider properties
//import Slider from "react-slick";
//import "slick-carousel/slick/slick.css";

//import {
//  FaChevronLeft,
//  FaChevronRight,
//} from "react-icons/fa";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
//import { FaLongArrowAltRight } from "react-icons/fa";

//import ImgPrinc from "../../assets/image-princ.png";
import ImgEvo from "../../new-assets/img-pates-quem-somo.png";

import IconInc from "../../new-assets/excelencia-icon.png";
import IconAdm from "../../new-assets/excelencia-icon.png";
import IconRef from "../../new-assets/alvo-icon.png";
//import Icon3P from "../../assets/icon-3-pontos.svg";


/*
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaChevronRight size={16} color="black" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaChevronLeft size={16} color="black" />
    </div>
  );
}
*/

export default class AMofarrej extends React.Component {


  render() {

    return (
      <>
        <section className="first-section">
          <Header />
          <div className="breadcrumb-full container-fluid">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="breadcrumb">
                    <Link to="/">Início</Link> <span className="breadcrumb-sep">/</span> <span className="breadcrumb-item">Saiba mais</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="texto-e-titulo a-mofarrej-box container">
          <div className="content-texto a-mofarrej col-md-8 col-sm-12">
            <h1 className="title">A Estilo Caseiro</h1>
            <p>
              Somos uma empresa familiar que somou a experiência de mercado de um dos irmãos com as receitas de família e hoje atuamos na fabricação de torradas, antepastos, patês e bolos caseiros. Todos os produtos são artesanais, com qualidade, sabor e preço acessível.          
            </p>
            <h2> Nossa missão.. </h2>
            <p>
              Criar, Desenvolver e fornecer produtos alimentícios com qualidade, sabor diferenciado e único.
            </p>
            <h2> Nossa visão.. </h2>
            <p>
              Ser excelência e referência em produtos artesanais de panicação e confeitaria, buscando a satisfação de nossos clientes.
            </p>
            
          </div>
          <div className="content-texto col-md-4 col-sm-12">
            <img src={ImgEvo} alt="Logo Estilo Caseiro" />
          </div>
        </section>
        <section className="content-icon container-fluid">
          <div className="container">
            <div className="row">
              <div className="offset-md-1 col-md-10">
                <div className="row slide-mobile-cont">
                  <div className="block-icon col-md-4 col-sm-12">
                    <div className="block-icon-img"><img src={IconInc} alt="Incorporação Imobiliária" /></div>
                    <h3 className="block-icon-title">Excelência</h3>
                    <p className="block-icon-text">Excelência no trabalho, e prezando sempre na melhor experiencia do cliente, com produtos totalmente naturais, e com gostinho de caseiro</p>
                  </div>
                  <div className="block-icon col-md-4 col-sm-12">
                    <div className="block-icon-img"><img src={IconAdm} alt="Administração de Imóveis" /></div>
                    <h3 className="block-icon-title">Administração</h3>
                    <p className="block-icon-text">Excelência no trabalho, e prezando sempre na melhor experiencia do cliente, com produtos totalmente naturais, e com gostinho de caseiro</p>
                  </div>
                  <div className="block-icon col-md-4 col-sm-12">
                    <div className="block-icon-img"><img src={IconRef} alt="Reflorestamento" /></div>
                    <h3 className="block-icon-title">Paixão</h3>
                    <p className="block-icon-text">Excelência no trabalho, e prezando sempre na melhor experiencia do cliente, com produtos totalmente naturais, e com gostinho de caseiro</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="texto-e-titulo detalhes-projetos container">
          <div className="content-titulo col-md-4 col-sm-12">
            <h2 className="title">Diferencial</h2>
          </div>
          <div className="content-list col-md-3 col-sm-12">
            <ul className="list-detalhes-projeto">
              <li>Produtos 100% naturais</li>
              <li>Feitos com carinho</li>
              <li>Linha de produção rigoroza</li>
              <li>Testes de sabor</li>
              <li>Excelência</li>
            </ul>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}
