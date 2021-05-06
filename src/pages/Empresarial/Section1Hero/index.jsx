import { Section1HeroContainer, Section1HeroContent } from "./styles";
import { Button } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const MotionButton = motion(Button);
const MotionSection1HeroContainer = motion(Section1HeroContainer);

const variantsItems = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function Section1Hero() {
  return (
    <MotionSection1HeroContainer initial="hidden" animate="show">
      <Section1HeroContent>
        <motion.h1 variants={variantsItems}>
        Conexão ideial para o{" "}
crescimento da sua{" "}

          <motion.span variants={variantsItems}>empresa</motion.span>.
        </motion.h1>
        <a href="#planos">
          <MotionButton
            bg="var(--acessibilidade)"
            _hover={{ bg: "#51A84E" }}
            _active={{ bg: "#51A84E" }}
            w={295}
            h={54}
            rightIcon={<FiArrowRight size={20} />}
            variants={variantsItems}
          >
            Contrate agora
          </MotionButton>
        </a>
      </Section1HeroContent>
    </MotionSection1HeroContainer>
  );
}
