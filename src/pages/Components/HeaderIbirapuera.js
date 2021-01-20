import React from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/Logo-Mofarrej.png";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";

import MenuMobile from "../../assets/menu-mobile-image.png";

export default class HeaderIbirapuera extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSwitchOn: false,
    };
  }
  render() {
    const isOn = this.state.isSwitchOn;

    return (
      <>
        <div className="header-general container header-desktop">
          <header className="header-ibira">
            <div className="image-logo">
              <Link to="/">
                <img src={logoImg} alt="Mofarrej" />
              </Link>
            </div>
            <div className="itens-menu">
              <div className="entre-em-contato">Entre em contato conosco</div>
              <ul className="menu">
                <li>
                  <a
                    href="tel:1130551900"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="icon icon-phone">
                      <FiPhone size={25} />
                    </div>
                    <div className="content-atendimento">
                      <div className="item-atendimento">Atendimento</div>
                      <div className="item-por">Por Telefone</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="mailto:mofarrej@mofarrej.com.br" rel="noopener noreferrer" target="_blank">
                    <div className="icon icon-phone">
                      <FiMail size={25} />
                    </div>
                    <div className="content-atendimento">
                      <div className="item-atendimento">Atendimento</div>
                      <div className="item-por">Por E-mail</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="tel:" rel="noopener noreferrer" target="_blank">
                    <div className="icon icon-phone">
                      <FaWhatsapp size={25} />
                    </div>
                    <div className="content-atendimento">
                      <div className="item-atendimento">Atendimento</div>
                      <div className="item-por">Whatsapp</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </header>
        </div>

        <div className="header-general container header-mobile">
          <header className="header-ibira">
            <div className="image-logo">
              <Link to="/">
                <img src={logoImg} alt="Mofarrej" />
              </Link>

              <div
                className={isOn ? "menu-icon open" : "menu-icon close"}
                onClick={() =>
                  this.setState({ isSwitchOn: !this.state.isSwitchOn })
                }
              >
                <img src={MenuMobile} alt="Menu" />
                <div className="itens-menu">
                <div className="close-icon">
                    <FaTimes color="#ffffff" size={25}/>
                  </div>

                  <ul className="menu">
                    <li>
                      <a href="tel:1130551900" rel="noopener noreferrer" target="_blank">
                        <div className="icon icon-phone">
                          <FiPhone size={25} />
                        </div>
                        <div className="content-atendimento">
                          <div className="item-atendimento">Atendimento</div>
                          <div className="item-por">Por Telefone</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:mofarrej@mofarrej.com.br" rel="noopener noreferrer" target="_blank">
                        <div className="icon icon-phone">
                          <FiMail size={25} />
                        </div>
                        <div className="content-atendimento">
                          <div className="item-atendimento">Atendimento</div>
                          <div className="item-por">Por E-mail</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="tel:" rel="noopener noreferrer" target="_blank">
                        <div className="icon icon-phone">
                          <FaWhatsapp size={25} />
                        </div>
                        <div className="content-atendimento">
                          <div className="item-atendimento">Atendimento</div>
                          <div className="item-por">Whatsapp</div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
        </div>
      </>
    );
  }
}
