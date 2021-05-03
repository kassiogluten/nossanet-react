import { Section4Container, Section4Content } from "./styles";

import efeitoCirculosImg from "../../../assets/efeito-circulos.svg";
import { Button } from "@chakra-ui/button";
import {FiArrowRight} from 'react-icons/fi'

export default function Section4() {
  return (
    <Section4Container>

      <div className="circulos">
        <img src={efeitoCirculosImg} alt="Circulos" />
      </div>

      <Section4Content>
        {/* <img src={efeitoCirculosImg} alt="Circulos" /> */}
        <div className="box1">
          <p>O MELHOR PLANO PARA VOCÊ</p>
          <h1>Ajudamos você a escolher o melhor plano.</h1>
          <Button
              bg="#fff"
              color="#081150"
              w={295}
              h={54}
              rightIcon={<FiArrowRight size={20} />}
            >
              Comece agora
            </Button>
        </div>
      </Section4Content>

      <Section4Content>
        <div className="box2"></div>
      </Section4Content>
    </Section4Container>
  );
}
