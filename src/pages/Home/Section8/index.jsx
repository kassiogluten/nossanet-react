import { Section8Container, Section8Content } from "./styles";

import efeitoPatternImg from "../../../assets/efeito-pattern.svg";
import dividerImg from "../../../assets/divisor-circular.svg";
import { Button } from "@chakra-ui/button";
import { FaWhatsapp } from "react-icons/fa";

export default function Section8() {
  return (
    <Section8Container>
      <div className="efeito">
        <img src={efeitoPatternImg} alt="Efeito" />
      </div>
      <img className="divider" src={dividerImg} alt="Divisor" />

      <Section8Content>
        <div className="box1">
          <p>O MELHOR PLANO PARA VOCÊ</p>
          <h1>Ajudamos você a escolher o melhor plano.</h1>
        </div>

        <div className="box2">
          <div className="box2A">
            <p>ATENDIMENTO</p>
            <h1>Possui alguma dúvida? Fale com a gente.</h1>
            <Button
              bg="#fff"
              color="#081150"
              w="80%"
              h={54}
              leftIcon={<FaWhatsapp size={20} />}
            >
              Converse pelo WhatsApp
            </Button>
          </div>
          <li>contato@nossanettelecom.net.br</li>
          <li>(31) 3320-1995</li>
          <li>Av. José Rodrigues de Almeida, 190, Ipaba - MG, 35198-000</li>
        </div>
      </Section8Content>
    </Section8Container>
  );
}
