import { Section8Container, Section8Content } from "./styles";

import efeitoPatternImg from "../../../assets/efeito-pattern.svg";
import dividerImg from "../../../assets/divisor-circular.svg";
import { FaWhatsapp} from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin, FiMessageSquare} from "react-icons/fi";
import { Button } from "@chakra-ui/button";
import FormHome from './FormHome'

export default function Section8() {
  return (
    <Section8Container>
      <div className="efeito">
        <img src={efeitoPatternImg} alt="Efeito" />
      </div>
      <img className="divider" src={dividerImg} alt="Divisor" />

      <Section8Content>
        <div className="box1">
          <h1><FiMessageSquare size={30} color="var(--acessibilidade)" /> Se preferir, envie pelo formulário</h1>
          <FormHome/>
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
          <li><FiMail size={20} /> contato@nossanettelecom.net.br</li>
          <li><FiPhone size={20} />(31) 3320-1995</li>
          <li><FiMapPin size={20} />Av. José Rodrigues de Almeida, 190, Ipaba - MG, 35198-000</li>
        </div>
      </Section8Content>
    </Section8Container>
  );
}