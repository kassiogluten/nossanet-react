import { Section1HeroContainer, Section1HeroContent } from "./styles";
import { motion } from "framer-motion";

const MotionSection1HeroContainer = motion(Section1HeroContainer);

const variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 1,
    },
  },
};
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
    <MotionSection1HeroContainer
      variants={variants}
      initial="hidden"
      animate="show"
    >
      <Section1HeroContent>
        <motion.h1 variants={variantsItems}>
          Nossa história traz a tragetória e molda o nosso
          <motion.span variants={variantsItems}> futuro</motion.span>.
        </motion.h1>
      </Section1HeroContent>
    </MotionSection1HeroContainer>
  );
}
