import { Link } from "react-router-dom";
import { Container, Content } from "./styles";
import { FcLike } from "react-icons/fc";
import { IconButton } from "@chakra-ui/button";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import logoImg from "../../assets/logo-nossanet-branca.svg";
import efeitoCirculosImg from "../../assets/efeito-circulos-rodape.svg";

export default function Footer() {
  return (
    <Container>
      <div className="circulos">
        <img src={efeitoCirculosImg} alt="Circulos" />
      </div>
      <Content>
        <div className="logo">
          <img width="243px" src={logoImg} alt="Logo Nossanet" />
        </div>
        <div className="links">
          <div className="col1">
            <h3>NossaNet</h3>
            <div className="line"></div>
            <Link to="/">
              <p>Início</p>
            </Link>
            <Link to="/sobre-nos">
              <p>Sobre nós</p>
            </Link>
            <Link to="/contato">Fale conosco</Link>
            <Link to="/vagas">Trabalhe conosco</Link>
          </div>
          <div className="col2">
            <h3>Para você</h3>
            <div className="line"></div>
            <a target="blank" href="https://central.nossanettelecom.net.br/">
              Central do cliente <FiArrowUpRight size="20px" />
            </a>
            <a href="#planos">Nossos planos</a>
            <a target="blank" href="https://central.nossanettelecom.net.br/">
              2ª via de faturas <FiArrowUpRight size="20px" />
            </a>
            <a href="#faleconosco">Atendimento ao cliente</a>
            <a href="#faq">Dúvidas frequentes</a>
          </div>
          <div className="col3">
            <h3>Atendimento</h3>
            <div className="line"></div>
            <h2>(31) 3320-1995</h2>
            <div className="tel">
              <p>Seg - Sex: 8h às 18h</p>
              <p>Sábados: 8h às 12h</p>
            </div>
            <a href="https://www.instagram.com/nossanettelecom/" target="blank">
              <IconButton
                aria-label="Nossanet Instagram"
                icon={<FaInstagram />}
              />
            </a>
            <a href="https://www.instagram.com/nossanettelecom/" target="blank">
              <IconButton aria-label="Nossanet Facebook" icon={<FaFacebookF />} />
            </a>
          </div>
          <div className="col4">
            <span>© 2021 NossaNet - Todos direitos reservados</span>
            <a href="#a">
              Feito com <FcLike /> por Suricato Agência
            </a>
          </div>
        </div>
      </Content>
    </Container>
  );
}
