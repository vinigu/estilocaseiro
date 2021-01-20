import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../new-assets/logo-header.png";
import MenuMobile from "../../assets/menu-mobile-image.png";
import { FaTimes } from "react-icons/fa";

export default class Header extends React.Component {
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
          <header>
            <div className="image-logo">
              <Link to="/">
                <img src={logoImg} alt="Estilo Caseiro logo" />
              </Link>
            </div>
            <div className="itens-menu">
              <ul className="menu">
                <li className="iten-content">
                  <Link to="/">Produtos</Link>
                </li>
                <li className="iten-content">
                  <Link to="/">Onde Encontrar</Link>
                </li>
                <li className="iten-content">
                <Link to="/a-estilo">
                    Quem somos
                </Link>
                </li>
                <li className="iten-content">
                  <Link to="/">Contato</Link>
                </li>
              </ul>
            </div>
          </header>
        </div>
        <div className="header-general header-mobile">
          <header>
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
                    <FaTimes color="#ffffff" size={25} />
                  </div>
                  <ul className="menu-mobile">
                    <li className="iten-content">
                      <Link to="/ibirapuera-boulevard">
                        IBIRAPUERA BOULEVARD
                      </Link>
                    </li>
                    <li className="iten-content">
                    <Link to="/a-estilo">
                        A mofarrej
                      </Link>
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
