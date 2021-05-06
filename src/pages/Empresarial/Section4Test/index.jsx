import { Section4Container, Section4Content } from "./styles";

import efeitoCirculosImg from "../../../assets/efeito-circulos.svg";
import dividerImg from "../../../assets/divisor-circular.svg";

export default function Section4() {
  return (
    <Section4Container>
      <div className="circulos">
        <img src={efeitoCirculosImg} alt="Circulos" />
      </div>
      <img className="divider" src={dividerImg} alt="Divisor" />

      <Section4Content>
        {/* <img src={efeitoCirculosImg} alt="Circulos" /> */}
        <div className="box1">
          <p>O MELHOR PLANO PARA SUA EMPRESA</p>
          <h1>Tenha mais vantagens para o seu negócio.</h1>
          
        </div>
      </Section4Content>

      <Section4Content>
        <div className="box2"></div>
      </Section4Content>
    </Section4Container>
  );
}
