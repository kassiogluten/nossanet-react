import { Section8Container, Section8Content } from "./styles";

import efeitoPatternImg from "../../../assets/efeito-pattern.svg";
import dividerImg from "../../../assets/divisor-circular.svg";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin, FiMessageSquare } from "react-icons/fi";
import { Button } from "@chakra-ui/button";
import FormHome from "./FormHome";

export default function Section8() {
  return (
    <Section8Container id="faleconosco">
      <div className="efeito">
        <img src={efeitoPatternImg} alt="Efeito" />
      </div>
      <img className="divider" src={dividerImg} alt="Divisor" />

      <Section8Content>
        <div className="box1">
          <h1>
            <FiMessageSquare size={30} color="var(--acessibilidade)" /> Se
            preferir, envie pelo formulário
          </h1>
          <FormHome />
        </div>

        <div className="box2">
          <div className="box2A">
            <p>ATENDIMENTO</p>
            <h1>Possui alguma dúvida? Fale com a gente.</h1>
            <a target="blank" href="https://bit.ly/33991090453">
              <Button
                bg="#fff"
                color="#081150"
                w="80%"
                h={54}
                leftIcon={<FaWhatsapp size={20} />}
              >
                Converse pelo WhatsApp
              </Button>
            </a>
          </div>
          <a href="mailto:contato@nossanettelecom.net.br">
            <li>
              <FiMail size={20} /> contato@nossanettelecom.net.br
            </li>
          </a>
          <a href="tel:0800 795 1585">
            <li>
              <FiPhone size={20} />
              0800 795 1585
            </li>
          </a>
          <a href="tel:(31) 2109-8560">
            <li>
              <FiPhone size={20} />
              (31) 2109-8560
            </li>
          </a>
          <a target="blank" href="https://www.google.com/maps/place/Av.+Jos%C3%A9+Rodrigues+de+Almeida,+190,+Ipaba+-+MG,+35198-000/@-19.412558,-42.422127,17z/data=!3m1!4b1!4m5!3m4!1s0xb00509a3895a91:0xa79c49ecc8a3713f!8m2!3d-19.4125631!4d-42.4199383">
            <li>
              <FiMapPin size={20} />
              Av. José Rodrigues de Almeida, 190, Ipaba - MG, 35198-000
            </li>
          </a>
        </div>
      </Section8Content>
    </Section8Container>
  );
}
