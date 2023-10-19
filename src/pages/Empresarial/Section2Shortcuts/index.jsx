import { Content, Section2Container, Section2Content, Shorcut } from "./styles";

import { motion } from "framer-motion";

import iconeBoletoImg from "../../../assets/icone-boleto.svg";
import iconePlanosImg from "../../../assets/icone-planos.svg";
import iconeVelocidadeImg from "../../../assets/icone-velocidade.svg";
import iconeAtendimentoImg from "../../../assets/icone-atendimento.svg";
import box2Img from "../../../assets/box2-empresas.png";
import { Button } from "@chakra-ui/button";
import { FiArrowRight } from "react-icons/fi";

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemA = {
  hidden: { scale: 0, top: 100, opacity: 1 },
  show: { scale: 1, top: 0, opacity: 1, transition: { duration: 0.75 } },
};

export default function Section2() {
  return (
    <Section2Container>
      <Section2Content>
        <Shorcut variants={container} initial="hidden" animate="show">
          <motion.a
            variants={itemA}
            href="https://erp.nossanettelecom.net.br/sac/login/?sys=SAC"
            target="blank"
          >
            <div className="boxes">
              <img src={iconeBoletoImg} alt="Boleto" />
              2ª via do boleto
            </div>
          </motion.a>
          <motion.a variants={itemA} href="#planos">
            <div className="boxes">
              <img src={iconePlanosImg} alt="Planos" />
              Nossos planos
            </div>
          </motion.a>
          <motion.a
            variants={itemA}
            href="https://www.speedtest.net/"
            target="blank"
          >
            <div className="boxes">
              <img src={iconeVelocidadeImg} alt="Velocidade" />
              Teste de velocidade
            </div>
          </motion.a>
          <motion.a variants={itemA} href="#faleconosco">
            <div className="boxes">
              <img src={iconeAtendimentoImg} alt="Atendimento" />
              Atendimento ao cliente
            </div>
          </motion.a>
        </Shorcut>

        <Content>
          <div className="box1">
            <ul>
              <li>TRABALHA MAIS RÁPIDO</li>
              <li>SEM INTERRUPÇÕES</li>
            </ul>
            <h1>Plano empresarial superfibra.</h1>
            <a href="#planos">
              <Button
                bg="#fff"
                color="#081150"
                w={295}
                h={54}
                rightIcon={<FiArrowRight size={20} />}
              >
                Contrate agora
              </Button>
            </a>
          </div>
          <div className="box2">
            <img src={box2Img} alt="NossaNet" />
          </div>
        </Content>
      </Section2Content>
    </Section2Container>
  );
}
