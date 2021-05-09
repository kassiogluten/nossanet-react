import { NavLink } from "react-router-dom";

import { HeaderContainer, HeaderContent, MobileMenu } from "./styles";

import { Button } from "@chakra-ui/react";

import { FiMenu, FiUser, FiX } from "react-icons/fi";

import logoNossanetBrancaImg from "../../assets/logo-nossanet-branca.svg";

import iconeQualificaImg from "../../assets/icone-qualifica.png";
import iconeBoletoImg from "../../assets/icone-boleto.svg";
import iconePlanosImg from "../../assets/icone-planos.svg";
import iconeVelocidadeImg from "../../assets/icone-velocidade.svg";
import iconeAtendimentoImg from "../../assets/icone-atendimento.svg";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuMobileOpen, setMenuMobileOpen] = useState(false);
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/">
          <img src={logoNossanetBrancaImg} alt="Logo NossaNet" />
        </NavLink>
        <div>
          <ul>
            <NavLink
              exact={true}
              activeStyle={{
                borderBottomWidth: "3px",
                borderBottomColor: "var(--acessibilidade)",
              }}
              to="/"
            >
              <li>Para você</li>
            </NavLink>
            <NavLink
              activeStyle={{
                borderBottomWidth: "3px",
                borderBottomColor: "var(--acessibilidade)",
              }}
              to="/empresarial"
            >
              <li>Para empresas</li>
            </NavLink>

            <FiMenu size={30} onClick={() => setMenuMobileOpen(true)} />
          </ul>

          <a href="https://central.nossanettelecom.net.br/">
            <Button leftIcon={<FiUser size={20} />}>Minha conta</Button>
          </a>
        </div>
      </HeaderContent>
      <AnimatePresence>
        {menuMobileOpen && (
          <MobileMenu
          exit={{ opacity: 0, left: "100%" }}
          initial={{ opacity: .5, left: "100%" }}
          animate={{ opacity: 1, left: 0 }}
          onClick={() => setMenuMobileOpen(false)}
          >
            <header>
              <NavLink to="/">
                <img src={logoNossanetBrancaImg} alt="Logo NossaNet" />
              </NavLink>
              <FiX size={30} onClick={() => setMenuMobileOpen(false)} />
            </header>

            <div>
              <ul>
                <NavLink
                  exact={true}
                  activeStyle={{
                    borderBottomWidth: "3px",
                    borderBottomColor: "var(--acessibilidade)",
                  }}
                  to="/"
                >
                  <li>Para você</li>
                </NavLink>
                <NavLink
                  activeStyle={{
                    borderBottomWidth: "3px",
                    borderBottomColor: "var(--acessibilidade)",
                  }}
                  to="/empresarial"
                >
                  <li>Para empresas</li>
                </NavLink>
              </ul>
              <a href="https://central.nossanettelecom.net.br/">
                <Button leftIcon={<FiUser size={20} />}>Minha conta</Button>
              </a>
            </div>

            <div className="atalhos">
              <a href="https://qualifica.com/" target="blank">
                <div className="boxes">
                  <img width="31px" src={iconeQualificaImg} alt="Qualifica" />
                  Acesse o Qualifica
                </div>
              </a>
              <a
                href="https://central.nossanettelecom.net.br/BoletosListar"
                target="blank"
              >
                <div className="boxes">
                  <img src={iconeBoletoImg} alt="Boleto" />
                  2ª via do boleto
                </div>
              </a>
              <a href="#planos">
                <div className="boxes">
                  <img src={iconePlanosImg} alt="Planos" />
                  Nossos planos
                </div>
              </a>
              <a href="https://www.speedtest.net/" target="blank">
                <div className="boxes">
                  <img src={iconeVelocidadeImg} alt="Velocidade" />
                  Teste de velocidade
                </div>
              </a>
              <a href="#faleconosco">
                <div className="boxes">
                  <img src={iconeAtendimentoImg} alt="Atendimento" />
                  Atendimento ao cliente
                </div>
              </a>
            </div>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
}
