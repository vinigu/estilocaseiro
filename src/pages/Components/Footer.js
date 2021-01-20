import React from "react";
import { Link } from "react-router-dom";

import FooterImg from "../../new-assets/logo-footer.png";
import ImgVini from "../../new-assets/logo-vini.jpg";

/*
<li class="iten-content">
  <a href="/site-novo/">Contato</a>
</li>
*/
export default function Footer() {
  return (
    <footer className="mofarrej-footer container-fluid">
      <div className="container">
        <div className="content-footer">
          <div className="fi-column">
            <div className="first-content column-footer">
              <div className="image-footer">
                <img src={FooterImg} alt="Mofarrej" />
              </div>
              <div className="social-itens">
                <span>Redes Socias:</span>
                <div className="icon-social icon-facebook">
                  <a href="https://www.facebook.com/estilocaseirobolos/" target="_blank" rel="noopener noreferrer">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 5 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.0612 12.0011C1.0612 10.0108 1.0612 8.02039 1.0612 6.0135C0.700888 6.0135 0.35538 6.0135 0 6.0135C0 5.29774 0 4.60401 0 3.89375C0.350444 3.89375 0.693485 3.89375 1.04886 3.89375C1.05133 3.83594 1.05627 3.79189 1.05627 3.7506C1.0612 3.24957 1.04393 2.74853 1.07601 2.25025C1.15005 1.072 1.77937 0.127749 2.97631 0.0341493C3.6229 -0.0154033 4.27443 0.0148789 4.92349 0.00662008C4.93583 0.00662008 4.94571 0.0121259 4.96298 0.0176318C4.96298 0.694851 4.96298 1.37207 4.96298 2.06581C4.7927 2.06581 4.62488 2.06581 4.45953 2.06581C4.23741 2.06581 4.0153 2.06306 3.79319 2.06581C3.50197 2.06856 3.31688 2.22272 3.30207 2.53931C3.27986 2.98253 3.29714 3.42575 3.29714 3.88274C3.86229 3.88274 4.42004 3.88274 5 3.88274C4.93337 4.59575 4.87167 5.29499 4.80503 6.00525C4.30158 6.00525 3.80553 6.00525 3.29714 6.00525C3.29714 8.00937 3.29714 9.99699 3.29714 11.9984C2.54936 12.0011 1.81145 12.0011 1.0612 12.0011Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
                <div className="icon-social icon-instagram" >
                  <a href="https://www.instagram.com/p/CB8WPwYhMeH/" target="_blank" rel="noopener noreferrer">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          d="M0 5.98491C0.0131377 5.17002 0.0210204 4.35512 0.0446683 3.54022C0.0656886 2.84099 0.194438 2.16542 0.572805 1.56082C1.06153 0.774835 1.78148 0.317442 2.6801 0.130804C3.224 0.0177705 3.77578 0.00725576 4.32494 0.00199836C5.51522 -0.00588773 6.70812 -0.00851642 7.8984 0.00725576C8.53164 0.0151418 9.16488 0.0388001 9.77447 0.249096C10.8807 0.635514 11.5559 1.41098 11.8397 2.53606C11.9842 3.11437 11.9921 3.70846 11.9947 4.29729C12.0026 5.49334 12.0053 6.6894 11.9895 7.88546C11.9816 8.51372 11.9606 9.14723 11.753 9.75183C11.3694 10.8638 10.5943 11.5472 9.46179 11.8311C8.88373 11.9757 8.29253 11.9836 7.70134 11.9862C6.50055 11.9967 5.30239 11.9967 4.1016 11.981C3.47362 11.9731 2.843 11.9494 2.23867 11.7391C1.13247 11.3527 0.457193 10.5772 0.173418 9.44953C0.028903 8.86859 0.028903 8.26925 0.0157653 7.67516C0.00525509 7.10999 0.0131377 6.54482 0.0131377 5.97965C0.0105102 5.98491 0.00525509 5.98491 0 5.98491ZM6.28772 10.9374C6.96562 10.9111 7.9273 10.9111 8.8811 10.8296C9.86643 10.7455 10.5627 10.1698 10.7913 9.16563C10.9148 8.62412 10.9069 8.06947 10.9148 7.52007C10.928 6.50802 10.9306 5.49597 10.9148 4.48393C10.9069 3.97396 10.8807 3.45873 10.8097 2.95402C10.6836 2.04187 10.0635 1.41098 9.16751 1.2112C8.6236 1.09028 8.07182 1.09816 7.52266 1.08765C6.51106 1.07188 5.49945 1.07188 4.48785 1.08765C3.9781 1.09554 3.4631 1.12182 2.95862 1.1928C2.05737 1.31898 1.4215 1.93935 1.22181 2.82522C1.10357 3.3641 1.10357 3.9135 1.10094 4.45764C1.09306 5.64844 1.10094 6.84187 1.11933 8.03267C1.12459 8.4112 1.15349 8.79499 1.22969 9.16563C1.38734 9.94636 1.85505 10.4879 2.62492 10.7192C2.92709 10.8086 3.25027 10.8585 3.56558 10.8717C4.38012 10.9085 5.19466 10.9137 6.28772 10.9374Z"
                          fill="white"
                        />
                        <path
                          d="M6.01171 9.07954C4.33271 9.08479 2.95325 7.7205 2.92435 6.07756C2.89282 4.32159 4.30381 2.94415 5.94865 2.91524C7.66969 2.88632 9.04915 4.27428 9.08857 5.91984C9.12798 7.67581 7.6986 9.09531 6.01171 9.07954ZM8.00339 5.99344C8.00076 4.89991 7.09689 3.99826 6.00383 4.00089C4.90814 4.00352 4.00952 4.90516 4.00952 5.9987C4.00952 7.10013 4.91865 8.0044 6.01697 7.99914C7.11002 7.99388 8.00602 7.08961 8.00339 5.99344Z"
                          fill="white"
                        />
                        <path
                          d="M9.2097 2.07922C9.6196 2.07922 9.92702 2.39204 9.9244 2.80212C9.92177 3.19905 9.60384 3.52238 9.2097 3.52238C8.81557 3.52501 8.47925 3.19116 8.47925 2.79686C8.48188 2.39992 8.80506 2.07922 9.2097 2.07922Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="sec-column">
            <div className="second-content column-footer">
              <h4>Menu</h4>
              <ul>
                <li>
                  <Link to="/ibirapuera-boulevard">Produtos</Link>
                </li>
                <li>
                  <Link to="/">Onde encontrar</Link>
                </li>
                <li>
                  <Link to="/">Quem somos</Link>
                </li>
                <li>
                  <Link to="/">Contato</Link>
                </li>
              </ul>
            </div>
            <div className="third-content column-footer">
              <h4>Endereço</h4>
              <p>
              Estilo Caseiro Comércio de Alimentos Ltda.
              <br />
              Rua João Robalo, 1116 - 05881-000<br />
              São Paulo, SP - Brasil
              </p>
            </div>
            <div className="fourth-content column-footer">
              <h4>Telefone</h4>
              <a href="tel:115874-1742" target="_blank"  rel="noopener noreferrer">
                +55 11 5874-1742
              </a>
            </div>
            <div className="fiveth-content column-footer">
              <h4>e-mail</h4>
              <a href="mailto:contato@estilocaseiro.com.br" target="_blank"  rel="noopener noreferrer">
              contato@estilocaseiro.com.br
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pos-footer container-fluid">
        <div className="container">
          <div className="content-pos-footer">
            <div className="copyrigth">
              © Estilo Caseiro. 2021.Todos os direitos reservados.
            </div>
            <div className="image7ways">
              <a href="https://www.linkedin.com/in/vinicius-gustavo-29490b150/"  target="_blank" rel="noopener noreferrer">
                <img src={ImgVini} alt="Vinicius Gustavo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
