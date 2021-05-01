import { Section2Container, Section2Content, Shorcut } from "./styles";
import iconeQualificaImg from "../../../assets/icone-qualifica.png";
import iconeBoletoImg from "../../../assets/icone-boleto.svg";
import iconePlanosImg from "../../../assets/icone-planos.svg";
import iconeVelocidadeImg from "../../../assets/icone-velocidade.svg";
import iconeAtendimentoImg from "../../../assets/icone-atendimento.svg";

export default function Section2() {
  return (
    <Section2Container>
      <Section2Content>
        <Shorcut>
          <a href="https://qualifica.com/" target="blank" >
            <div className="boxes">
              <img src={iconeQualificaImg} alt="Qualifica" />
              Acesse o Qualifica
            </div>
          </a>
          <a href="https://central.nossanettelecom.net.br/BoletosListar" target="blank" >
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
          <a href="https://www.speedtest.net/" target="blank" >
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
        </Shorcut>
      </Section2Content>
    </Section2Container>
  );
}
