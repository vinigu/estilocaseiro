import React from "react";
import axios from "axios";
import $ from "jquery";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// Slider properties
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

import {
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

import HeaderIbira from "../Components/HeaderIbirapuera";
import Footer from "../Components/Footer";
import PreFooter from "../Components/PreFooterIbirapuera";

import ImgSliderFull1 from "../../assets/slider-full1.jpg";
import ImgSliderFull2 from "../../assets/slider-full2.jpg";
import ImgSliderFull3 from "../../assets/slider-full3.jpg";
import ImgSliderFull4 from "../../assets/slider-full4.jpg";

import ImgSliderExclusivo01 from "../../assets/exclusivo-pra-voce01.jpg";
import ImgSliderExclusivo02 from "../../assets/exclusivo-pra-voce02.jpg";
import ImgSliderExclusivo03 from "../../assets/exclusivo-pra-voce03.jpg";
import ImgSliderExclusivo04 from "../../assets/exclusivo-pra-voce04.jpg";
import ImgSliderExclusivo05 from "../../assets/exclusivo-pra-voce05.jpg";
import ImgSliderExclusivo06 from "../../assets/exclusivo-pra-voce06.jpg";
import ImgSliderExclusivo07 from "../../assets/exclusivo-pra-voce07.jpg";
import ImgSliderExclusivo08 from "../../assets/exclusivo-pra-voce08.jpg";
import ImgSliderExclusivo09 from "../../assets/exclusivo-pra-voce09.jpg";
import ImgSliderExclusivo10 from "../../assets/exclusivo-pra-voce10.jpg";
import ImgSliderExclusivo11 from "../../assets/exclusivo-pra-voce11.jpg";
import ImgSliderExclusivo12 from "../../assets/exclusivo-pra-voce12.jpg";
import ImgSliderExclusivo13 from "../../assets/exclusivo-pra-voce13.jpg";
import ImgSliderExclusivo14 from "../../assets/exclusivo-pra-voce14.jpg";
import ImgSliderExclusivo15 from "../../assets/exclusivo-pra-voce15.jpg";
import ImgSliderExclusivo16 from "../../assets/exclusivo-pra-voce16.jpg";
import ImgSliderExclusivo17 from "../../assets/exclusivo-pra-voce17.jpg";
import ImgSliderExclusivo18 from "../../assets/exclusivo-pra-voce18.jpg";
import ImgSliderExclusivo19 from "../../assets/exclusivo-pra-voce19.jpg";
import ImgSliderExclusivo20 from "../../assets/exclusivo-pra-voce20.jpg";
import ImgSliderExclusivo21 from "../../assets/exclusivo-pra-voce21.jpg";
import ImgSliderExclusivo22 from "../../assets/exclusivo-pra-voce22.jpg";
import ImgSliderExclusivo23 from "../../assets/exclusivo-pra-voce23.jpg";
import ImgSliderExclusivo24 from "../../assets/exclusivo-pra-voce24.jpg";
import ImgSliderExclusivo25 from "../../assets/exclusivo-pra-voce25.jpg";
import ImgSliderExclusivo26 from "../../assets/exclusivo-pra-voce26.jpg";
import ImgSliderExclusivo27 from "../../assets/exclusivo-pra-voce27.jpg";
import ImgSliderExclusivo28 from "../../assets/exclusivo-pra-voce28.jpg";
import ImgSliderExclusivo29 from "../../assets/exclusivo-pra-voce29.jpg";
import ImgSliderExclusivo30 from "../../assets/exclusivo-pra-voce30.jpg";
import ImgSliderExclusivo31 from "../../assets/exclusivo-pra-voce31.jpg";
import ImgSliderExclusivo32 from "../../assets/exclusivo-pra-voce32.jpg";

import ImgSliderExclusivo01B from "../../assets/exclusivo-pra-voce01-B.jpg";
import ImgSliderExclusivo02B from "../../assets/exclusivo-pra-voce02-B.jpg";
import ImgSliderExclusivo03B from "../../assets/exclusivo-pra-voce03-B.jpg";
import ImgSliderExclusivo04B from "../../assets/exclusivo-pra-voce04-B.jpg";
import ImgSliderExclusivo05B from "../../assets/exclusivo-pra-voce05-B.jpg";
import ImgSliderExclusivo06B from "../../assets/exclusivo-pra-voce06-B.jpg";
import ImgSliderExclusivo07B from "../../assets/exclusivo-pra-voce07-B.jpg";
import ImgSliderExclusivo08B from "../../assets/exclusivo-pra-voce08-B.jpg";
import ImgSliderExclusivo09B from "../../assets/exclusivo-pra-voce09-B.jpg";
import ImgSliderExclusivo10B from "../../assets/exclusivo-pra-voce10-B.jpg";
import ImgSliderExclusivo11B from "../../assets/exclusivo-pra-voce11-B.jpg";
import ImgSliderExclusivo12B from "../../assets/exclusivo-pra-voce12-B.jpg";
import ImgSliderExclusivo13B from "../../assets/exclusivo-pra-voce13-B.jpg";
import ImgSliderExclusivo14B from "../../assets/exclusivo-pra-voce14-B.jpg";
import ImgSliderExclusivo15B from "../../assets/exclusivo-pra-voce15-B.jpg";
import ImgSliderExclusivo16B from "../../assets/exclusivo-pra-voce16-B.jpg";
import ImgSliderExclusivo17B from "../../assets/exclusivo-pra-voce17-B.jpg";
import ImgSliderExclusivo18B from "../../assets/exclusivo-pra-voce18-B.jpg";
import ImgSliderExclusivo19B from "../../assets/exclusivo-pra-voce19-B.jpg";
import ImgSliderExclusivo20B from "../../assets/exclusivo-pra-voce20-B.jpg";
import ImgSliderExclusivo21B from "../../assets/exclusivo-pra-voce21-B.jpg";
import ImgSliderExclusivo22B from "../../assets/exclusivo-pra-voce22-B.jpg";
import ImgSliderExclusivo23B from "../../assets/exclusivo-pra-voce23-B.jpg";
import ImgSliderExclusivo24B from "../../assets/exclusivo-pra-voce24-B.jpg";
import ImgSliderExclusivo25B from "../../assets/exclusivo-pra-voce25-B.jpg";
import ImgSliderExclusivo26B from "../../assets/exclusivo-pra-voce26-B.jpg";
import ImgSliderExclusivo27B from "../../assets/exclusivo-pra-voce27-B.jpg";
import ImgSliderExclusivo28B from "../../assets/exclusivo-pra-voce28-B.jpg";
import ImgSliderExclusivo29B from "../../assets/exclusivo-pra-voce29-B.jpg";
import ImgSliderExclusivo30B from "../../assets/exclusivo-pra-voce30-B.jpg";
import ImgSliderExclusivo31B from "../../assets/exclusivo-pra-voce31-B.jpg";
import ImgSliderExclusivo32B from "../../assets/exclusivo-pra-voce32-B.jpg";


import SliderMoradia01 from "../../assets/amploparafamilia01.jpg";
import SliderMoradia02 from "../../assets/amploparafamilia02.jpg";
import SliderMoradia03 from "../../assets/amploparafamilia03.jpg";
import SliderMoradia04 from "../../assets/amploparafamilia04.jpg";
import SliderMoradia05 from "../../assets/amploparafamilia05.jpg";
import SliderMoradia06 from "../../assets/amploparafamilia06.jpg";
import SliderMoradia07 from "../../assets/amploparafamilia07.jpg";
import SliderMoradia08 from "../../assets/amploparafamilia08.jpg";
import SliderMoradia09 from "../../assets/amploparafamilia09.jpg";
import SliderMoradia10 from "../../assets/amploparafamilia10.jpg";
import SliderMoradia11 from "../../assets/amploparafamilia11.jpg";

import SliderMoradia01B from "../../assets/amploparafamilia01-B.jpg";
import SliderMoradia02B from "../../assets/amploparafamilia02-B.jpg";
import SliderMoradia03B from "../../assets/amploparafamilia03-B.jpg";
import SliderMoradia04B from "../../assets/amploparafamilia04-B.jpg";
import SliderMoradia05B from "../../assets/amploparafamilia05-B.jpg";
import SliderMoradia06B from "../../assets/amploparafamilia06-B.jpg";
import SliderMoradia07B from "../../assets/amploparafamilia07-B.jpg";
import SliderMoradia08B from "../../assets/amploparafamilia08-B.jpg";
import SliderMoradia09B from "../../assets/amploparafamilia09-B.jpg";
import SliderMoradia10B from "../../assets/amploparafamilia10-B.jpg";
import SliderMoradia11B from "../../assets/amploparafamilia11-B.jpg";

import ImgPlanta from "../../assets/apartamento-tipo-zoom.jpg";
import ImageDuplexInferior from "../../assets/apartamento-duplex-inferior.jpg";
import ImageDuplexSuperior from "../../assets/apartamento-duplex-superior.jpg";
import ImageTipoOpicional from "../../assets/apartamento-tipo-opcional.jpg";

import ImgLogoIbir from "../../assets/img-ibira-logo.png";
import ImgParque from "../../assets/parque-ibirapuera.png";
import ImgLocalizacao from "../../assets/imagem-como-chegar.png";

const API_PATH = "https://www.mofarrej.com.br/api/contact/index.php";

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

export default class Ibirapuera extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      mailSent: false,
      error: null,
    };
  }

  btnToggle(e, key) {
    if ($(e.currentTarget).hasClass("active")) {
    } else {
      $(e.currentTarget).parent().find(".active").removeClass("active");
      $(e.currentTarget).addClass("active");
    }
    this.slider.slickGoTo(key);
  }

   VoucherSourcetoPrint(source) {
		return "<html><head><script>function step1(){\n" +
				"setTimeout('step2()', 10);}\n" +
				"function step2(){window.print();window.close()}\n" +
				"</script></head><body onload='step1()'>\n" +
				"<img src='" + source + "' /></body></html>";
  }
  
  VoucherPrint(e, source) {
    e.preventDefault();
    let that = this; 
		var Pagelink = "about:blank";
		var pwa = window.open(Pagelink, "_new");
		pwa.document.open();
		pwa.document.write(that.VoucherSourcetoPrint(source));
		pwa.document.close();
	}

  handleFormSubmit(event) {
    event.preventDefault();
    if (
      this.state.name &&
      this.state.email &&
      this.state.phone &&
      this.state.message
    ) {
      axios({
        method: "post",
        url: `${API_PATH}`,
        headers: { "content-type": "application/json" },
        data: this.state,
      })
        .then((result) => {
          console.log(result);
          this.setState({
            mailSent: true,
          });
        })
        .catch((error) =>
          this.setState({ error: "Ocorreu erro, tente novamente por favor." })
        );
    } else {
      this.setState({
        error: "Todos os campos são obrigatórios",
      });
    }
  }


  state = {
    exSlider: undefined,
    exNavSlider: undefined,
  }
  componentDidMount() {
    this.setState({
      exSlider: this.exSlider,
      exNavSlider: this.exNavSlider,    
    })
  }


  render() {

    const settings = {
      dots: false,
      infinite: true,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,  
    };
    const settingsNew = {
      dots: false,
      infinite: true,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
      ref: (slider) => (this.exSlider = slider),
      asNavFor: this.state.exNavSlider
    };
    const settingsNewC = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      touchMove: false,
      ref: (slider) => (this.exNavSlider = slider),
    };  
    const settingsFirst = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: (dots) => (
        <div>
          <ul> {dots} </ul>
        </div>
      ),
      customPaging: (i) => <div>0 {i + 1}</div>,
    };

    const settingsPlanta = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <>
        <section className="first-section">
          <HeaderIbira />
          <div className="image-full container-fluid">
            <Slider {...settingsFirst}>
              <img src={ImgSliderFull1} alt="Principal" />
              <img src={ImgSliderFull2} alt="Jardim" />
              <img src={ImgSliderFull3} alt="Contrução" />
              <img src={ImgSliderFull4} alt="Piscina" />
            </Slider>
          </div>
        </section>
        <section className="destaque-ibira container-fluid">
          <div className="itens-projeto-destaque container">
            <div className="black-part col-md-3 col-sm-12">
              <img src={ImgLogoIbir} alt="Logo Ibirapuera Boulevard" />
              <div className="icon-arrow-down">
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
              </div>
              <div className="pronto-para-morar">Pronto para morar</div>
            </div>
            <div className="suites item-espec col-md-2 col-sm-6">
              <span className="black-item">4 suítes</span>
              <span className="gray-item">(246 m² privativos)</span>
            </div>
            <div className="vagas item-espec col-md-2 col-sm-6">
              <span className="black-item">4 vagas</span>
              <span className="gray-item">(depósito privativo)</span>
            </div>
          </div>
        </section>
        <section className="texto-e-titulo container">
          <div className="content-titulo col-md-6 col-sm-12">
            <h3 className="second-title">Sobre o empredimento</h3>
            <h2 className="title">O conceito</h2>
          </div>
          <div className="content-texto col-md-6 col-sm-12">
            <p>
              A vida passa depressa, com tantos compromissos e obrigações, que
              não nos damos conta muitas vezes que estamos repetindos mesmos
              caminhos em busca de coisas diferentes.{" "}
            </p>
            <p>Sempre é bom buscar outros rumos.</p>
            <p>
              E é melhor ainda quando um deles nos leva ao lugar da cidade onde
              natureza, cultura, esporte e artes estão reunidos.
            </p>
            <p>
              Um lugar onde podemos nos divertir com os amigos, fazer ginástica
              ao ar livre, levar o cachorro pra passear, deixar as crianças
              correrem. Uma simples caminhada de 15 minutos é o que separa IB do
              Parque Ibirapuera. Mude seus caminhos, o que você procura pode
              estar bem ao seu redor.
            </p>
          </div>
        </section>
        <section className="texto-e-titulo container">
          <div className="content-titulo col-md-6 col-sm-12">
            <h2 className="title">O Projeto</h2>
          </div>
          <div className="content-texto col-md-6 col-sm-12">
            <ul className="pessoas-projeto">
              <li>
                Projeto Arquitetônico: <strong>MCAA</strong>
              </li>
              <li>
                Projeto de Paisagismo: <strong>Marcelo Novaes </strong>
              </li>
              <li>
                Projeto Decoração: <strong>Fernanda Marques</strong>
              </li>
            </ul>
          </div>
        </section>
        <section className="slider-e-texto container">
          <div className="content-slider-e-texto">
            <div className="slider-img col-md-8 col-sm-12">
              <Slider {...settingsNew}>
               <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo01B} />
                      <img
                          src={ImgSliderExclusivo01}
                          alt="Perspectiva ilustrada das fachadas"
                        />
                    </picture>
                  </Zoom>
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo02B} />
                      <img
                        src={ImgSliderExclusivo02}
                        alt="Perspectiva ilustrada da portaria"
                      />
                    </picture>
                  </Zoom>
                
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo03B} />
                      <img
                        src={ImgSliderExclusivo03}
                        alt="Perspectiva ilustrada da praça de boas vindas"
                      />
                    </picture>
                  </Zoom>
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo04B} />
                      <img
                        src={ImgSliderExclusivo04}
                        alt="Perspectiva ilustrada da quadra de tênis"
                      />
                    </picture>
                  </Zoom>
                
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo05B} />
                      <img
                        src={ImgSliderExclusivo05}
                        alt="Perspectiva ilustrada do boulevard central"
                      />
                    </picture>
                  </Zoom>
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo06B} />
                      <img
                        src={ImgSliderExclusivo06}
                        alt="Piscina"
                      />
                    </picture>
                  </Zoom>          
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo07B} />
                      <img
                        src={ImgSliderExclusivo07}
                        alt="Piscina"
                      />
                    </picture>
                  </Zoom>                
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo08B} />
                      <img
                        src={ImgSliderExclusivo08}
                        alt="Área externa"
                      />
                    </picture>
                  </Zoom>                
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo09B} />
                      <img
                        src={ImgSliderExclusivo09}
                        alt="Playground"
                      />
                    </picture>
                  </Zoom>                
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo10B} />
                      <img
                        src={ImgSliderExclusivo10}
                        alt="Quadra de tênis"
                      />
                    </picture>
                  </Zoom>                
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo11B} />
                      <img
                        src={ImgSliderExclusivo11}
                        alt="Piscina coberta climatizada"
                      />
                    </picture>
                  </Zoom>                
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo12B} />
                      <img
                        src={ImgSliderExclusivo12}
                        alt="Piscina coberta com raia de 25m"
                      />
                    </picture>
                  </Zoom>                
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo13B} />
                      <img
                        src={ImgSliderExclusivo13}
                        alt="SPA"
                      />
                    </picture>
                  </Zoom>                
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo14B} />
                      <img
                        src={ImgSliderExclusivo14}
                        alt="Fitness"
                      />
                    </picture>
                  </Zoom>               
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo15B} />
                      <img
                        src={ImgSliderExclusivo15}
                        alt="Fitness"
                      />
                    </picture>
                  </Zoom>                
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo16B} />
                      <img
                        src={ImgSliderExclusivo16}
                        alt="Brinquedoteca"
                      />
                    </picture>
                  </Zoom>                
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo17B} />
                      <img
                        src={ImgSliderExclusivo17}
                        alt="Brinquedoteca"
                      />
                    </picture>
                  </Zoom>                
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo18B} />
                      <img
                        src={ImgSliderExclusivo18}
                        alt="Ateliê"
                      />
                    </picture>
                  </Zoom>                
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo19B} />
                      <img
                        src={ImgSliderExclusivo19}
                        alt="Ateliê"
                      />
                    </picture>
                  </Zoom>                
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo20B} />
                      <img
                        src={ImgSliderExclusivo20}
                        alt="Espaço jovem"
                      />
                    </picture>
                  </Zoom>                
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo21B} />
                      <img
                        src={ImgSliderExclusivo21}
                        alt="Lounge adulto"
                      />
                    </picture>
                  </Zoom>                
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo22B} />
                      <img
                        src={ImgSliderExclusivo22}
                        alt="Lounge adulto"
                      />
                    </picture>
                  </Zoom>                
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo23B} />
                      <img
                        src={ImgSliderExclusivo23}
                        alt="Espaço Gourmet"
                      />
                    </picture>
                  </Zoom>                
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo24B} />
                      <img
                        src={ImgSliderExclusivo24}
                        alt="Espaço Gourmet"
                      />
                    </picture>
                  </Zoom>                
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo25B} />
                      <img
                        src={ImgSliderExclusivo25}
                        alt="Espaço Gourmet"
                      />
                    </picture>
                  </Zoom>                
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo26B} />
                      <img
                        src={ImgSliderExclusivo26}
                        alt="Salão de festas adulto"
                      />   
                    </picture>
                  </Zoom>                
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo27B} />
                      <img
                        src={ImgSliderExclusivo27}
                        alt="Salão de festas adulto"
                      />  
                    </picture>
                  </Zoom>                
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo28B} />
                      <img
                        src={ImgSliderExclusivo28}
                        alt="Salão de festas adulto"
                      /> 
                    </picture>
                  </Zoom>                 
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo29B} />
                      <img
                        src={ImgSliderExclusivo29}
                        alt="Salão de festas adulto"
                      /> 
                    </picture>
                  </Zoom>                
                </div> 
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo30B} />
                      <img
                        src={ImgSliderExclusivo30}
                        alt="Salão de festas infantil"
                      /> 
                    </picture>
                  </Zoom>                
                </div> 
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo31B} />
                      <img
                        src={ImgSliderExclusivo31}
                        alt="Salão de festas infantil"
                      />  
                    </picture>
                  </Zoom>                
                </div> 
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgSliderExclusivo32B} />
                      <img
                        src={ImgSliderExclusivo32}
                        alt="Salão de festas infantil"
                      /> 
                    </picture>
                  </Zoom>                    
                  </div>            
              </Slider>
            </div>
            <div className="content-texto col-md-4 col-sm-12">
              <h2>
                Exclusivo.
                <br /> Para você viver bem
              </h2>
              <Slider {...settingsNewC}>
                <div className="slide-legenda">
                  <span className="sep"></span>
                  Perspectiva ilustrada das fachadas                
               </div>
                <div className="slide-legenda">
                  <span className="sep"></span>
                  Perspectiva ilustrada da portaria                 
               </div>
                <div className="slide-legenda">
                  <span className="sep"></span>
                  Perspectiva ilustrada da praça de boas vindas                 
               </div>
                <div className="slide-legenda">
                  <span className="sep"></span>
                  Perspectiva ilustrada da quadra de tênis                 
               </div>
                <div className="slide-legenda">
                  <span className="sep"></span>
                  Perspectiva ilustrada do boulevard central                 
               </div>
                <div className="slide-legenda">
                  <span className="sep"></span>
                  Piscina                 
               </div>
                <div className="slide-legenda">
                  <span className="sep"></span>
                  Piscina                 
               </div>
                <div className="slide-legenda">
                  <span className="sep"></span>
                  Área externa                 
               </div>
                <div className="slide-legenda">
                  <span className="sep"></span>
                  Playground                 
               </div>
                <div className="slide-legenda">
                  <span className="sep"></span>
                  Quadra de tênis                 
               </div>
                <div className="slide-legenda">
                  <span className="sep"></span>
                  Piscina coberta climatizada                 
               </div>
                <div className="slide-legenda">
                  <span className="sep"></span>
                  Piscina coberta com raia de 25m                 
               </div>
                <div className="slide-legenda">
                  <span className="sep"></span>
                  SPA                 
               </div>
                <div className="slide-legenda">
                  <span className="sep"></span>
                  Fitness                 
               </div>
                <div className="slide-legenda">
                  <span className="sep"></span>
                  Fitness                 
               </div>
                <div className="slide-legenda">
                  <span className="sep"></span>
                  Brinquedoteca                 
               </div>
                <div className="slide-legenda">
                  <span className="sep"></span>
                  Brinquedoteca                 
               </div>
                <div className="slide-legenda">
                  <span className="sep"></span>
                  Ateliê                 
               </div>
                <div className="slide-legenda">
                  <span className="sep"></span>
                  Ateliê                 
               </div>
                <div className="slide-legenda">
                  <span className="sep"></span>
                  Espaço jovem                 
               </div>
                <div className="slide-legenda">
                  <span className="sep"></span>
                  Lounge adulto                 
               </div>
                <div className="slide-legenda">
                  <span className="sep"></span>
                  Lounge adulto                 
               </div>
                <div className="slide-legenda">
                  <span className="sep"></span>
                  Espaço Gourmet                 
               </div>
                <div className="slide-legenda">
                  <span className="sep"></span>
                  Espaço Gourmet                 
               </div>
                <div className="slide-legenda">
                  <span className="sep"></span>
                  Espaço Gourmet                 
               </div>
                <div className="slide-legenda">
                  <span className="sep"></span>
                  Salão de festas adulto                 
               </div>   
                <div className="slide-legenda">
                  <span className="sep"></span>
                  Salão de festas adulto                 
               </div>  
                <div className="slide-legenda">
                  <span className="sep"></span>
                  Salão de festas adulto                 
               </div>  
                <div className="slide-legenda">
                  <span className="sep"></span>
                  Salão de festas adulto                 
               </div>  
                <div className="slide-legenda">
                  <span className="sep"></span>
                  Salão de festas infantil                 
               </div>  
                <div className="slide-legenda">
                  <span className="sep"></span>
                  Salão de festas infantil                 
               </div>  
                <div className="slide-legenda">
                  <span className="sep"></span>
                  Salão de festas infantil                 
               </div>   
              </Slider>
            </div>
          </div>
        </section>
        <section className="text-slider-amplo container-fluid">
          <div className="container content-itens">
            <div className="text-content col-md-4 col-sm-12">
              Amplo.
              <br />
              Para toda a família.             
            </div>
            <div className="slider-content col-md-8 col-sm-12">
              <Slider {...settings}>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={SliderMoradia01B} />
                      <img src={SliderMoradia01} alt="Living" />
                    </picture>
                  </Zoom>
                  <div className="slide-legenda">
                    Living                 
                  </div>
                </div>
                <div>
                 <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={SliderMoradia02B} />
                      <img src={SliderMoradia02} alt="Living" />
                    </picture>
                  </Zoom>
                  <div className="slide-legenda">
                    Living                
                  </div>
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={SliderMoradia03B} />
                      <img src={SliderMoradia03} alt="Terraço" />
                    </picture>
                  </Zoom>
                  <div className="slide-legenda">
                    Terraço                 
                  </div>
                </div>
                <div>
                 <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={SliderMoradia04B} />
                      <img src={SliderMoradia04} alt="Terraço" />
                    </picture>
                  </Zoom>
                  <div className="slide-legenda">
                    Terraço                
                  </div>
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={SliderMoradia05B} />
                      <img src={SliderMoradia05} alt="Cozinha" />
                    </picture>
                  </Zoom>
                  <div className="slide-legenda">
                    Cozinha               
                  </div>
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={SliderMoradia06B} />
                      <img src={SliderMoradia06} alt="Lavanderia" />
                    </picture>
                  </Zoom>
                  <div className="slide-legenda">
                    Lavanderia                
                  </div>
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={SliderMoradia07B} />
                      <img src={SliderMoradia07} alt="Suite master" />
                    </picture>
                  </Zoom>
                  <div className="slide-legenda">
                    Suite master                 
                  </div>
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={SliderMoradia08B} />
                      <img src={SliderMoradia08} alt="Suite master" />
                    </picture>
                  </Zoom>
                  <div className="slide-legenda">
                    Suite master                 
                  </div>
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={SliderMoradia09B} />
                      <img src={SliderMoradia09} alt="Banheiro suíte master" />
                    </picture>
                  </Zoom>
                  <div className="slide-legenda">
                    Banheiro suíte master                 
                  </div>
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={SliderMoradia10B} />
                      <img src={SliderMoradia10} alt="Suíte" />
                    </picture>
                  </Zoom>
                  <div className="slide-legenda">
                    Suíte                 
                  </div>
                </div>
                <div>
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={SliderMoradia11B} />
                      <img src={SliderMoradia11} alt="Suíte" />
                    </picture>
                  </Zoom>
                  <div className="slide-legenda">
                    Suíte                
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>
        <section className="espacos-e-medidas container">
          <div className="itens row">
            <div className="item-espacos col-md-6 col-sm-12">
              <div className="content-title">
                Espaços na medida do seu sonho.
              </div>
              <div className="itens-slider">
                <div
                  className="valor active"
                  onClick={(e) => {
                    this.btnToggle(e, 0);
                  }}
                >
                  Apartamento Tipo
                </div>
                <div
                  className="valor"
                  onClick={(e) => {
                    this.btnToggle(e, 1);
                  }}
                >
                  Apartamento Tipo opcional
                </div>
                <div
                  className="valor"
                  onClick={(e) => {
                    this.btnToggle(e, 2);
                  }}
                >
                  Apartamento duplex inferior
                </div>
                <div
                  className="valor"
                  onClick={(e) => {
                    this.btnToggle(e, 3);
                  }}
                >
                  Apartamento duplex superior
                </div>
              </div>
              <div className="navegue-pela-imagem">
                <div className="content">
                  <FaSearch color="#959595" size={14} />
                  <span>
                    Navegue pela imagem para visualizar de forma ampliada.
                  </span>
                </div>
              </div>
              <div className="recomendacoes">
                <p>
                  A planta apresentada é ilustrativa e possui sugestões de
                  decoração. Os móveis e utensílios são de dimensões comerciais
                  e não fazem parte do contrato de compra e venda do imóvel. Os
                  acabamentos serão entregues conforme o Memorial Descritivo.
                </p>
              </div>
            </div>
            <div className="item-espaco col-md-6 col-sm-12">
              <Slider ref={(c) => (this.slider = c)} {...settingsPlanta}>
                <div className="item-slider">
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgPlanta} />
                      <img alt="Planta Tipo" src={ImgPlanta} width={540} />
                    </picture>
                  </Zoom>
                  <a
                    href="teste"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      this.VoucherPrint(e, ImgPlanta);
                    }}
                  >
                    <button className="btn-imprimir">Imprimir</button>
                  </a>
                </div>
                <div className="item-slider">
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgPlanta} />
                      <img
                        alt="Planta Duplex inferior"
                        src={ImageDuplexInferior}
                        width={540}
                      />
                    </picture>
                  </Zoom>
                  <a
                    href="teste"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      this.VoucherPrint(e, ImageDuplexInferior);
                    }}
                  >
                    <button className="btn-imprimir">Imprimir</button>
                  </a>
                </div>
                <div className="item-slider">
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgPlanta} />
                      <img
                        alt="Planta Duplex Superior"
                        src={ImageDuplexSuperior}
                        width={540}
                      />
                    </picture>
                  </Zoom>
                  <a
                    href="teste"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      this.VoucherPrint(e, ImageDuplexSuperior);
                    }}
                  >
                    <button className="btn-imprimir">Imprimir</button>
                  </a>
                </div>
                <div className="item-slider">
                  <Zoom>
                    <picture>
                      <source media="(max-width: 800px)" srcSet={ImgPlanta} />
                      <img
                        alt="Planta Tipo OPicional"
                        src={ImageTipoOpicional}
                        width={540}
                      />
                    </picture>
                  </Zoom>
                  <a
                    href="teste"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      this.VoucherPrint(e, ImageTipoOpicional);
                    }}
                  >
                    <button className="btn-imprimir">Imprimir</button>
                  </a>
                </div>
              </Slider>
            </div>
          </div>
        </section>
        <section className="parque-ibirapuera container-fluid">
          <div className="itens-parque container">
            <div className="row">
              <div className="part-vazia col-md-3"></div>
              <div className="title-parque col-md-5">
                <h3>Parque do Ibirapuera, uma localização privilegiada.</h3>
              </div>
              <div className="texto-parque col-md-4">
                <p>
                  Em 1951 o arquiteto Oscar Niemeyer e o paisagista Roberto
                  Burle Marx receberam a missão de dar vida ao parque. No dia 21
                  de agosto de 1954 ele foi entregue à cidade como o marco das
                  comemorações do IV Centenário. A partir de agora, o Parque
                  Ibirapuera também pode fazer parte da sua história.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="image-content col-md-12">
                <img src={ImgParque} alt="Parque Ibirapuera" />
              </div>
            </div>
          </div>
        </section>
        <section className="como-chegar container">
          <div className="row itens-como-chegar">
            <div className="content-texto col-md-6">
              <h3>Visite o apartamento decorado, na Torre.</h3>
              <div className="localizacao">
                <FaMapMarkerAlt size={29} color="#000000" />
                <p>
                  Avenida Conselheiro Rodrigues Alves, Nº 534 <br />
                  (entre R. Humberto I e R. Hildebrando Tomás de Carvalho)
                </p>
              </div>
              <a
                href="https://www.google.com.br/maps/place/Av.+Conselheiro+Rodrigues+Alves,+534+-+Vila+Mariana,+S%C3%A3o+Paulo+-+SP,+04014-001/@-23.5838087,-46.6454557,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce598f2e255e81:0x8da5c1411d0c8759!8m2!3d-23.5838087!4d-46.643267"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bnt-como-chegar">Como Chegar?</button>
              </a>
            </div>
            <div className="como-chegar-img col-sm-6">
              <img src={ImgLocalizacao} alt="Como chegar" />
            </div>
          </div>
        </section>
        <section className="fale-conosco container-fluid">
          <div className="container">
            <div className="row content-form">
              <div className="item-form col-md-6">
                <h2>Entre em contato conosco.</h2>
                <form id="fale-conosco" action="#">
                  <input
                    type="text"
                    name="name"
                    onChange={(e) => this.setState({ name: e.target.value })}
                    value={this.state.name}
                    className="item-input nome"
                    placeholder="Insira seu nome"
                  />
                  <input
                    type="text"
                    name="email"
                    onChange={(e) => this.setState({ email: e.target.value })}
                    value={this.state.email}
                    className="item-input email"
                    placeholder="E-mail de contato"
                  />
                  <input
                    type="text"
                    name="phone"
                    onChange={(e) => this.setState({ phone: e.target.value })}
                    value={this.state.phone}
                    className="item-input telefone"
                    placeholder="Telefone de contato"
                  />
                  <textarea
                    rows="1"
                    type="text"
                    name="message"
                    onChange={(e) => this.setState({ message: e.target.value })}
                    value={this.state.message}
                    className="item-input mensagem"
                    placeholder="Deixe sua mensagem"
                  />
                  <input
                    type="submit"
                    className="btn-enviar"
                    value="Enviar Mensagem"
                    onClick={(e) => this.handleFormSubmit(e)}
                  />
                  {this.state.error ? (
                    <small class="text-danger ml-4">{this.state.error}</small>
                  ) : (
                    this.state.mailSent && (
                      <small class="text-secondary ml-4">
                        Enviado com sucesso.
                      </small>
                    )
                  )}
                </form>
              </div>
              <div className="item-contatos col-md-6">
                <div className="item-endereco contato">
                  <FaMapMarkerAlt size={29} color="#000000" />
                  <p>
                    Avenida Conselheiro Rodrigues Alves, Nº 534 <br />
                    (entre R. Humberto I e R. Hildebrando Tomás de Carvalho)
                  </p>
                </div>
                <div className="item-telefone contato">
                  <FiPhone size={29} color="#000000" />
                  <p>
                    Telefone para informações
                    <br />
                    <a href="tel:551130551900">+55 11 3055-1900</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PreFooter />
        <Footer />
      </>
    );
  }
}
